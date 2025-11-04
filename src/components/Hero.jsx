import { ArrowRight, Shield, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] } })
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50" aria-hidden />

      {/* Decorative gradients that won't block Spline interactions */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-tr from-purple-400/20 via-blue-400/20 to-emerald-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs text-emerald-700 mb-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Multi‑channel Messaging Automation
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Blast messages via WhatsApp and Gmail — all in one place.
            </motion.h1>

            <motion.p
              className="mt-5 text-lg text-gray-600 max-w-xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Blastify lets you create, schedule, and send compliant bulk campaigns across your favorite channels. Segment audiences, personalize content, and track performance in real time.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-3"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-3 font-medium shadow hover:bg-black"
              >
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 font-medium text-gray-800 hover:bg-gray-50"
              >
                See it in action
              </a>
            </motion.div>

            <motion.div
              className="mt-10 grid grid-cols-3 gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <Stat icon={<Zap className="h-4 w-4 text-emerald-600" />} title="99.9%" subtitle="Uptime SLA" />
              <Stat icon={<Shield className="h-4 w-4 text-emerald-600" />} title="GDPR" subtitle="Compliant" />
              <Stat icon={<Users className="h-4 w-4 text-emerald-600" />} title="10k+" subtitle="Marketers" />
            </motion.div>
          </div>

          {/* Right: 3D Spline Scene */}
          <motion.div
            className="relative h-[420px] sm:h-[520px] w-full"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.5}
          >
            <div className="absolute inset-0 rounded-2xl border border-emerald-200/60 bg-white/60 shadow-lg overflow-hidden">
              <Spline
                scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />

              {/* Soft radial glow overlays that don't block pointer events */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-purple-500/15 via-blue-500/10 to-transparent blur-3xl" />
              <div className="pointer-events-none absolute right-6 bottom-6 h-32 w-32 rounded-full bg-emerald-400/20 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, title, subtitle }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        {icon}
        <span>{subtitle}</span>
      </div>
      <div className="mt-1 text-2xl font-bold text-gray-900">{title}</div>
    </div>
  );
}
