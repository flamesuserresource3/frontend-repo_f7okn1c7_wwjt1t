import { MessageCircle, Mail, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "WhatsApp Broadcasts",
    description:
      "Send high‑deliverability WhatsApp campaigns with personalization, scheduling, and reply tracking.",
    icon: MessageCircle,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Gmail Campaigns",
    description:
      "Design beautiful emails, run A/B tests, and monitor performance with real‑time analytics.",
    icon: Mail,
    color: "from-rose-500 to-orange-500",
  },
  {
    title: "Audience Segmentation",
    description:
      "Group contacts by tags, location, behavior, or custom fields for laser‑targeted messaging.",
    icon: Users,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Security & Compliance",
    description:
      "GDPR‑ready with opt‑in tools, consent logs, and built‑in unsubscribe handling.",
    icon: Shield,
    color: "from-emerald-600 to-cyan-600",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Everything you need to scale messaging
          </h2>
          <p className="mt-3 text-gray-600">
            Create omnichannel campaigns, unify reporting, and automate follow‑ups without code.
          </p>
        </div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((f) => (
            <motion.article
              key={f.title}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className={`inline-grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br ${f.color} text-white shadow-md shadow-black/10`}>
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.description}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gray-100 group-hover:bg-emerald-50 transition-colors" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
