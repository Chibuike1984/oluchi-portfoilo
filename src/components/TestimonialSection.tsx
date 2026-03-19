import { motion } from "framer-motion";
import heroImg from "@/assets/hero-headshot.jpg";
import { smoothEase } from "@/lib/animation";

const TestimonialSection = () => (
  <section className="section-spacing">
    <div className="container-narrow max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: smoothEase }}
      >
        <p className="text-2xl md:text-3xl italic text-foreground leading-relaxed font-body mb-8">
          "Oluchi demonstrates strong analytical and communication skills. Her simulated business development and sales projects show she's ready to contribute to any growth team."
        </p>
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={heroImg} alt="Testimonial" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground font-display">Business Developer</p>
            <p className="text-xs text-muted font-body">Business Development & Sales Executive</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TestimonialSection;
