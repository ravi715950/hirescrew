import { Search, Users, CheckCircle, Handshake } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Understand",
    description:
      "We start by deeply understanding your business, culture, and the exact profile you need — not just a job description.",
  },
  {
    step: "02",
    icon: Users,
    title: "Source",
    description:
      "Using our specialist network and targeted outreach, we surface both active and passive candidates others can't reach.",
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "Match",
    description:
      "Every candidate is rigorously assessed against your criteria — skills, culture, ambition — before we make an introduction.",
  },
  {
    step: "04",
    icon: Handshake,
    title: "Deliver",
    description:
      "We manage the process through to offer and beyond — ensuring a smooth transition and lasting placement.",
  },
];

export default function Process() {
  return (
    <section className="py-20 md:py-24 bg-bg-base">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-3">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
            Our Hiring Process
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            A structured, transparent process that keeps you informed at every stage
            and delivers results you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.step} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[-calc(50%-2rem)] h-px bg-border-strong" />
              )}

              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-brand-dim flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-brand" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand text-brand-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-text-primary text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
