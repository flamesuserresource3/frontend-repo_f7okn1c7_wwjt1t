import { Check, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    highlight: false,
    features: [
      "1,000 messages / month",
      "1 WhatsApp sender",
      "Basic email templates",
      "Community support",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    highlight: true,
    features: [
      "20,000 messages / month",
      "3 WhatsApp senders",
      "Advanced templates & A/B",
      "Segmentation & tags",
      "Priority support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    highlight: false,
    features: [
      "Unlimited messaging",
      "Dedicated infrastructure",
      "SLA & onboarding",
      "Single Sign-On (SSO)",
    ],
    cta: "Talk to Sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-700 mb-3">
            <Rocket className="h-3.5 w-3.5" /> Transparent pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Pick a plan that grows with you
          </h2>
          <p className="mt-3 text-gray-600">
            Simple pricing with generous free tier. Upgrade anytime.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className={`relative rounded-2xl border ${
                tier.highlight ? "border-emerald-300 bg-white shadow-xl" : "border-gray-200 bg-white shadow-sm"
              } p-6 flex flex-col hover:shadow-2xl hover:-translate-y-0.5 transition-all`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 right-6 rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white shadow">
                  Most popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                <span className="text-gray-500">{tier.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-600" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="#"
                  className={`inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 font-medium ${
                    tier.highlight
                      ? "bg-gray-900 text-white hover:bg-black"
                      : "border border-gray-300 text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
