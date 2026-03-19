import { motion } from "framer-motion";
import { smoothEase } from "@/lib/animation";

const services = [
  { title: "Market Research & Competitive Analysis", desc: "In-depth market intelligence to inform strategic decisions." },
  { title: "Lead Generation & Sales Prospecting", desc: "Targeted outreach to build qualified pipeline." },
  { title: "Strategic Partnership Planning", desc: "Identifying and structuring high-value partnerships." },
  { title: "Startup Growth Consulting", desc: "Revenue strategy and go-to-market execution for early-stage companies." },
  { title: "CRM Management & Reporting", desc: "Pipeline optimization and data-driven sales reporting." },
  { title: "Closing Deals & Driving Revenue", desc: "End-to-end deal management from negotiation to close." },
];

const ServicesSection = () => (
  <section id="services" className="section-spacing bg-accent/50">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: smoothEase }}
        className="mb-16"
      >
        <p className="text-xs uppercase tracking-widest text-muted mb-4 font-body">Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">What I can do for you.</h2>
      </motion.div>
      <div className="divide-y divide-border">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5, ease: smoothEase }}
            className="group py-6 px-4 -mx-4 rounded-lg hover:bg-secondary/50 transition-colors duration-300 cursor-default"
          >
            <h3 className="text-lg font-semibold text-foreground font-display mb-1">{s.title}</h3>
            <p className="text-sm text-muted font-body">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
