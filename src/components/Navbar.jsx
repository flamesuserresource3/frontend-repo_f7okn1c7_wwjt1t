import { Rocket, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-8 w-8 grid place-items-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-md shadow-emerald-500/30"
            >
              <Rocket className="h-5 w-5" />
            </motion.div>
            <span className="font-semibold text-xl tracking-tight">Blastify</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {[
              { href: "#features", label: "Features" },
              { href: "#pricing", label: "Pricing" },
              { href: "#faq", label: "FAQ" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="relative text-gray-600 hover:text-gray-900 transition">
                {link.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Mail className="h-4 w-4" /> Start Free
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-black"
            >
              <MessageCircle className="h-4 w-4" /> Book a Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
