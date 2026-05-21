import { Shield, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest, transparent relationships with clients and candidates alike.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Rigorous sourcing and assessment to find the right fit, not just a fill.",
  },
  {
    icon: Heart,
    title: "Dedication",
    description: "Committed partners throughout the process — before, during, and after.",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-bg-subtle border-y border-border py-14">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-brand-dim shrink-0">
                <v.icon className="h-5 w-5 text-brand" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">{v.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
