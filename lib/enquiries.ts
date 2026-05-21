import { type WithId } from "mongodb";
import { getDatabase } from "@/lib/mongodb";
import type { ContactFormData } from "@/lib/validation";

export type EnquiryAudience = ContactFormData["audience"];
export type EnquiryStatus = "new";

export interface EnquiryRecord {
  name: string;
  email: string;
  company?: string;
  audience: EnquiryAudience;
  message: string;
  status: EnquiryStatus;
  createdAt: Date;
}

export type EnquiryDocument = WithId<EnquiryRecord>;

export interface EnquiryFilters {
  audience?: EnquiryAudience;
  search?: string;
}

let indexesPromise: Promise<void> | undefined;

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function getEnquiriesCollection() {
  const db = await getDatabase();
  const collection = db.collection<EnquiryRecord>("enquiries");

  if (!indexesPromise) {
    indexesPromise = collection
      .createIndexes([
        { key: { createdAt: -1 }, name: "createdAt_desc" },
        { key: { audience: 1, createdAt: -1 }, name: "audience_createdAt_desc" },
      ])
      .then(() => undefined);
  }

  await indexesPromise;
  return collection;
}

export async function createEnquiry(data: ContactFormData) {
  const collection = await getEnquiriesCollection();

  const document: EnquiryRecord = {
    name: data.name,
    email: data.email,
    company: data.company,
    audience: data.audience,
    message: data.message,
    status: "new",
    createdAt: new Date(),
  };

  const result = await collection.insertOne(document);
  return result.insertedId;
}

export async function listEnquiries(filters: EnquiryFilters = {}) {
  const collection = await getEnquiriesCollection();

  const query: Record<string, unknown> = {};

  if (filters.audience) {
    query.audience = filters.audience;
  }

  const normalizedSearch = filters.search?.trim();

  if (normalizedSearch) {
    const regex = new RegExp(escapeRegex(normalizedSearch), "i");
    query.$or = [
      { name: regex },
      { email: regex },
      { company: regex },
      { message: regex },
    ];
  }

  return collection.find(query).sort({ createdAt: -1 }).toArray();
}
