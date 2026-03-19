import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, CheckCircle} from "lucide-react";
import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-headshot.jpg";
import { smoothEase } from "@/lib/animation";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-spacing bg-accent/50">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <p className="text-xs uppercase tracking-widest text-muted mb-4 font-body">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's build something together.
            </h2>
            <p className="text-muted leading-relaxed font-body mb-8">
              Ready to discuss how I can contribute to your team's growth? Reach out through any of the channels below.
            </p>
            <div className="space-y-4">
              <a href="mailto:Oluchia904@gmail.com" className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors font-body">
                <Mail size={16} /> Oluchia904@gmail.com
              </a>
              <a href="https://linkedin.com/in/okafor-oluchi-esther" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors font-body">
                <Linkedin size={16} /> linkedin.com/in/okafor-oluchi-esther
              </a>
              <div className="flex items-center gap-3 text-sm text-muted font-body">
   
                <a href="tel:+2347070760292" className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors font-body">
                  <Phone size={16} /> +234 707 076 0292
                </a>
                <a href="https://wa.me/2349125542826" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors font-body">
                  <MessageCircle size={16} /> +234 912 554 2826
                </a>
              </div>
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: smoothEase }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src={heroImg} alt="Oluchi" className="w-full h-full object-cover" />
              </div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground font-display mb-2">Partnership confirmed.</h3>
                <p className="text-muted font-body">I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="input-minimal w-full font-body"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="input-minimal w-full font-body"
                />
                <textarea
                  placeholder="How can we work together?"
                  rows={3}
                  required
                  className="input-minimal w-full font-body resize-none"
                />
                <button type="submit" className="btn-primary-custom w-full">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
