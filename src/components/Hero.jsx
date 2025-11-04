import { ArrowRight, Shield, Users, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-cyan-100" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs text-emerald-700 mb-4">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Multi‑channel Messaging Automation
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Blast messages via WhatsApp and Gmail — all in one place.
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              Blastify lets you create, schedule, and send compliant bulk campaigns across your favorite channels. Segment audiences, personalize content, and track performance in real time.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
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
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <Stat icon={<Zap className="h-4 w-4 text-emerald-600" />} title="99.9%" subtitle="Uptime SLA" />
              <Stat icon={<Shield className="h-4 w-4 text-emerald-600" />} title="GDPR" subtitle="Compliant" />
              <Stat icon={<Users className="h-4 w-4 text-emerald-600" />} title="10k+" subtitle="Marketers" />
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-emerald-200 bg-white/70 p-4 shadow-lg">
              <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-cyan-50 p-6">
                <div className="grid gap-4">
                  <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <h3 className="font-semibold text-gray-800">WhatsApp Broadcast</h3>
                    <p className="text-sm text-gray-600">Upload contacts and schedule personalized messages with dynamic variables.</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <h3 className="font-semibold text-gray-800">Gmail Campaign</h3>
                    <p className="text-sm text-gray-600">Design templates, A/B test subject lines, and monitor open & click rates.</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <h3 className="font-semibold text-gray-800">Smart Segmentation</h3>
                    <p className="text-sm text-gray-600">Target by tags, engagement, geography, or custom fields in seconds.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-emerald-400/20 blur-2xl" />
            <div className="pointer-events-none absolute -top-8 -left-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl" />
          </div>
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
