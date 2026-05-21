import { specialties } from "@/content/specialties";

export default function Specialties() {
  return (
    <section className="py-20 md:py-24 bg-bg-subtle">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-3">
          Our Focus Areas
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
          Specialties
        </h2>
        <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed mb-12">
          Deep expertise across the sectors that matter most to high-growth companies.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {specialties.map((specialty) => (
            <span
              key={specialty}
              className="px-5 py-2.5 rounded-2xl text-sm font-semibold"
              style={{
                backgroundColor: "rgba(48,165,51,0.10)",
                color: "#19661C",
              }}
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

