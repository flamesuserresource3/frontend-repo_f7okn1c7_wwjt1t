import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />

        <section id="faq" className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold">Is Blastify WhatsApp approved?</h3>
                <p className="mt-2 text-gray-600">
                  Blastify integrates with official WhatsApp providers and follows their policies. We provide tools to manage opt-ins and templates to keep your account compliant.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Can I use my Gmail account safely?</h3>
                <p className="mt-2 text-gray-600">
                  Yes. We use OAuth for secure access and include throttling & warm-up best practices to protect deliverability.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Do you support segmentation and tags?</h3>
                <p className="mt-2 text-gray-600">
                  Absolutely. Create custom fields, tags, and dynamic segments based on behaviors or properties.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Is there an API?</h3>
                <p className="mt-2 text-gray-600">
                  Yes. Pro and Enterprise plans include API access for programmatic sending and webhooks.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Blastify. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
