import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: "How long does it take to edit a video?",
    answer: "Delivery time varies by project complexity. Short-form reels usually take 24-48 hours, while cinematic wedding films or commercial projects can take 7-14 days."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes! Every package includes unlimited revisions to ensure the final product perfectly aligns with your vision."
  },
  {
    question: "What software do you use?",
    answer: "I primarily use Adobe Premiere Pro for cutting, After Effects for motion graphics, and DaVinci Resolve for professional color grading."
  },
  {
    question: "How do I send you my raw footage?",
    answer: "You can securely upload files via Google Drive, WeTransfer, or Dropbox. I also accept physical drives for large-scale projects."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] text-brand-accent font-bold mb-4">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Common <span className="text-brand-accent">Questions</span></h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="glass rounded-3xl overflow-hidden border-white/5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold">{faq.question}</span>
                {openIndex === i ? <Minus className="text-brand-accent" /> : <Plus />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-8 text-white/50 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
