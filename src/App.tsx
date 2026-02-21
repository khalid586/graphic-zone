/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Printer,
  Layout,
  Image as ImageIcon,
  FileText,
  CheckCircle2,
  MessageSquare,
  Upload,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Star,
  Zap,
  ShieldCheck,
  Clock,
  ChevronRight,
  Send,
  Instagram,
  Twitter,
  Facebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants ---

const SERVICES = [
  { id: 'branding', title: 'Brand Identity', desc: 'Logo design, stationary, and brand guidelines that define your presence.', icon: <Layout /> },
  { id: 'printing', title: 'Digital Print', desc: 'High-quality business cards, flyers, and brochures with premium finishes.', icon: <Printer /> },
  { id: 'banners', title: 'Large Format', desc: 'Vinyl banners, X-stands, and shop signage that grabs attention.', icon: <ImageIcon /> },
  { id: 'magazines', title: 'Editorial', desc: 'Professional layout and printing for magazines and annual reports.', icon: <FileText /> },
];

const PORTFOLIO = [
  { id: 1, title: 'Eco Packaging', cat: 'Branding', img: 'https://picsum.photos/seed/p1/800/1000' },
  { id: 2, title: 'Tech Mag', cat: 'Editorial', img: 'https://picsum.photos/seed/p2/800/1000' },
  { id: 3, title: 'Event Banners', cat: 'Large Format', img: 'https://picsum.photos/seed/p3/800/1000' },
  { id: 4, title: 'Premium Cards', cat: 'Printing', img: 'https://picsum.photos/seed/p4/800/1000' },
  { id: 5, title: 'Restaurant Identity', cat: 'Branding', img: 'https://picsum.photos/seed/p5/800/1000' },
  { id: 6, title: 'Annual Report', cat: 'Editorial', img: 'https://picsum.photos/seed/p6/800/1000' },
];

const PROCESS = [
  { step: '01', title: 'Consultation', desc: 'We discuss your goals and choose the best materials.' },
  { step: '02', title: 'Design', desc: 'Our creative team crafts your vision into a digital proof.' },
  { step: '03', title: 'Production', desc: 'Precision printing using state-of-the-art machinery.' },
  { step: '04', title: 'Delivery', desc: 'Quality-checked prints delivered to your doorstep.' },
];

// --- Main Website Component ---

const GraphicZoneWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-white font-sans text-slate-900 scroll-smooth">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2.5 px-4 sm:px-8 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold flex justify-between items-center">
        <div className="flex gap-3 sm:gap-6">
          <span className="flex items-center gap-1 sm:gap-2"><ShieldCheck className="w-3 h-3 text-indigo-400" /> <span className="hidden min-[400px]:inline">ISO 9001 Certified</span><span className="min-[400px]:hidden">Certified</span></span>
          <span className="hidden sm:flex items-center gap-2"><Clock className="w-3 h-3 text-indigo-400" /> 24/7 Production</span>
        </div>
        <div className="flex gap-3 sm:gap-6">
          <a href="tel:+1800PRINT" className="hover:text-indigo-400 transition-colors">+1 800 GRAPHIC</a>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-8 py-3 md:py-4 flex justify-between items-center ${isScrolled ? 'bg-white shadow-lg' : 'bg-white border-b border-slate-100'}`}>
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-indigo-600 p-1.5 sm:p-2 rounded-lg">
            <Printer className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-900">
            Graphic<span className="text-indigo-600">Zone</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 text-xs font-bold text-slate-500 uppercase tracking-widest">
          <button onClick={() => scrollToSection('services')} className="hover:text-indigo-600 transition-colors">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="hover:text-indigo-600 transition-colors">Portfolio</button>
          <button onClick={() => scrollToSection('process')} className="hover:text-indigo-600 transition-colors">Process</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-600 transition-colors">Contact</button>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <button className="hidden md:block text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">Client Login</button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-indigo-600 text-white px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20"
          >
            <span className="hidden min-[380px]:inline">Request Quote</span>
            <span className="min-[380px]:hidden">Quote</span>
          </button>
          <button className="lg:hidden text-slate-900 p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-20 sm:pt-24 px-6 sm:px-8 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 sm:gap-8 text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide sm:tracking-widest">
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-indigo-600 transition-colors py-2">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left hover:text-indigo-600 transition-colors py-2">Portfolio</button>
              <button onClick={() => scrollToSection('process')} className="text-left hover:text-indigo-600 transition-colors py-2">Process</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-indigo-600 transition-colors py-2">Contact</button>
              <hr className="border-slate-100" />
              <button className="text-left text-slate-400 hover:text-indigo-600 transition-colors py-2">Client Login</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/5 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3" /> Enterprise Printing Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1]">
              Scale Your Brand with <br />
              <span className="text-indigo-600 text-6xl md:text-7xl">Graphic Zone.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl">
              Trusted by global corporations for high-volume, quality-assured printing, branding, and large-format solutions. We deliver excellence at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20"
              >
                Start Bulk Order <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white border-2 border-slate-200 text-slate-600 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-50 transition-all">
                Download Price List
              </button>
            </div>
            <div className="mt-12 flex items-center gap-8 border-t border-slate-200 pt-8">
              <div>
                <p className="text-2xl font-black text-slate-900">5k+</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Corporate Clients</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <p className="text-2xl font-black text-slate-900">12+</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white p-4 rounded-[2rem] shadow-2xl relative z-10">
              <img src="https://picsum.photos/seed/corp-print/800/600" className="w-full h-full object-cover rounded-[1.5rem]" alt="Printing Machinery" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-2xl shadow-xl z-20 hidden md:block">
              <ShieldCheck className="w-10 h-10 mb-4" />
              <p className="font-bold text-xl">100% Quality</p>
              <p className="text-indigo-100 text-xs">Manual Inspection Guaranteed</p>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Our Expertise</h2>
            <p className="text-4xl font-black text-slate-900">Corporate Service Suite</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-600/10 transition-all group">
                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {React.cloneElement(service.icon as React.ReactElement, { className: "w-7 h-7" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{service.desc}</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-indigo-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Case Studies</h2>
              <p className="text-4xl font-black text-slate-900">Proven Results.</p>
            </div>
            <button className="text-slate-400 font-bold text-xs uppercase tracking-widest border-b-2 border-slate-200 pb-1 hover:text-indigo-600 hover:border-indigo-600 transition-all">View All Work</button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO.map((item) => (
              <div key={item.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                </div>
                <div className="p-8">
                  <span className="text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-2 block">{item.cat}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="text-slate-400 hover:text-indigo-600 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {PROCESS.map((p, idx) => (
              <div key={p.step} className="relative">
                <div className="text-8xl font-black text-slate-100 absolute -top-10 -left-4 z-0">{p.step}</div>
                <div className="relative z-10 pt-4">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{p.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
                {idx < 3 && <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-slate-100" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-8 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-indigo-600/10 blur-[120px] rounded-full translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Contact Us</h2>
            <p className="text-5xl font-black mb-8 leading-tight">Let's Discuss Your <br /> Next Campaign.</p>
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400 border border-white/10"><Phone className="w-6 h-6" /></div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Direct Line</p>
                  <p className="text-xl font-bold">+1 (800) GRAPHIC</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400 border border-white/10"><Mail className="w-6 h-6" /></div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email Support</p>
                  <p className="text-xl font-bold">hello@graphiczone.com</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:bg-green-700 transition-all">
                <MessageSquare className="w-5 h-5" /> WhatsApp Support
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2.5rem] p-10 md:p-12 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Company Name</label>
                  <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all" placeholder="Acme Corp" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Work Email</label>
                  <input type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all" placeholder="john@acme.com" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Service Type</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all">
                  <option>Bulk Digital Printing</option>
                  <option>Large Format Signage</option>
                  <option>Corporate Branding</option>
                  <option>Editorial/Magazines</option>
                </select>
              </div>
              <div className="bg-indigo-50 border-2 border-dashed border-indigo-200 rounded-2xl p-8 text-center cursor-pointer hover:bg-indigo-100 transition-all group">
                <Upload className="w-8 h-8 text-indigo-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-bold text-indigo-600">Drop Design Files Here</p>
                <p className="text-[10px] text-indigo-400 mt-1 uppercase tracking-widest font-bold">PDF, AI, or High-Res JPG</p>
              </div>
              <button
                disabled={formStatus !== 'idle'}
                className="w-full bg-indigo-600 text-white py-5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 disabled:opacity-50"
              >
                {formStatus === 'idle' ? 'Submit Quote Request' : formStatus === 'sending' ? 'Processing...' : 'Request Received!'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-16 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Printer className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Graphic<span className="text-indigo-600">Zone</span>
              </span>
            </div>
            <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest">
              <button className="hover:text-white transition-colors">Privacy</button>
              <button className="hover:text-white transition-colors">Terms</button>
              <button className="hover:text-white transition-colors">Cookies</button>
              <button className="hover:text-white transition-colors">Sitemap</button>
            </div>
            <div className="flex gap-6">
              <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="text-center border-t border-white/5 pt-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em]">© 2024 Graphic Zone Corporation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-600 selection:text-white">
      <GraphicZoneWebsite />
    </div>
  );
}
