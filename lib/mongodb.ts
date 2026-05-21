import { MongoClient } from "mongodb";

declare global {
  var __mongoClientPromise__: Promise<MongoClient> | undefined;
}

function createClientPromise() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  const client = new MongoClient(uri);
  return client.connect();
}

export const mongoClientPromise =
  global.__mongoClientPromise__ ?? (global.__mongoClientPromise__ = createClientPromise());

export async function getDatabase() {
  const mongoClient = await mongoClientPromise;
  return mongoClient.db();
}
