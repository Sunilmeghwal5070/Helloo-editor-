import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Mail, Phone, Instagram, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass rounded-[3rem] p-8 md:p-16 border-white/5 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-[128px] -mr-48 -mt-48" />
          
          <div className="grid lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-brand-accent font-bold mb-6">Contact Me</h2>
              <h3 className="text-5xl font-bold mb-8">Let's Create <br /> <span className="text-brand-accent">Something</span> Bold.</h3>
              <p className="text-white/60 mb-12 max-w-sm">
                Ready to transform your vision into cinematic reality? Reach out for collaboration or inquiries.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
                    <Mail className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Email</div>
                    <div className="text-lg font-medium">hellooeditor@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
                    <Phone className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Phone</div>
                    <div className="text-lg font-medium">+91 90000 00000</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
                    <Instagram className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Instagram</div>
                    <div className="text-lg font-medium">@helloo_editor</div>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                <a 
                  href="https://wa.me/916367512667" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-8 py-4 bg-green-500/10 text-green-500 rounded-full flex items-center gap-3 font-bold text-sm border border-green-500/20 hover:bg-green-500 hover:text-white transition-all"
                >
                  <MessageSquare size={18} />
                  WhatsApp
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold px-2">Name</label>
                  <input
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold px-2">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold px-2">Phone</label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-all"
                  placeholder="Enter your phone"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold px-2">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-all resize-none"
                  placeholder="Tell me about your project"
                />
              </div>

              <button
                disabled={isSubmitting}
                className="w-full bg-white text-black py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-accent transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                ) : isSuccess ? (
                  <>Sent Successfully!</>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
