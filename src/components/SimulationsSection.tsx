import { useState } from "react";
import { motion } from "framer-motion";
import { smoothEase } from "@/lib/animation";

const simulations = [
  {
    title: "Fintech Market Research Simulation",
    desc: "Drafted a comprehensive partnership plan for a fintech startup targeting underserved markets in Lagos and Abuja.",
    metric: "+20%",
    metricLabel: "Projected User Growth",
  },
  {
    title: "E-commerce Vendor Partnership",
    desc: "Identified 12 potential vendors and structured partnership agreements to scale product offerings across Nigeria.",
    metric: "₦5M",
    metricLabel: "Projected Revenue Increase",
  },
  {
    title: "Startup Lead Generation & Sales",
    desc: "Generated 50+ qualified leads through targeted outreach campaigns with projected revenue impact.",
    metric: "₦2M",
    metricLabel: "Projected Revenue Impact",
  },
];

const SimulationsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="simulations" className="section-spacing">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: smoothEase }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-muted mb-4 font-body">Simulations</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Proof of capability.</h2>
        </motion.div>
        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          <div className="space-y-2">
            {simulations.map((sim, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-body text-sm ${
                  active === i
                    ? "border-l-2 border-primary bg-accent/50 text-foreground font-medium"
                    : "border-l-2 border-transparent text-muted hover:text-foreground"
                }`}
              >
                {sim.title}
              </button>
            ))}
          </div>
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: smoothEase }}
            className="card-elevated bg-card rounded-2xl p-8 md:p-12"
          >
            <p className="text-6xl md:text-7xl font-bold text-primary font-display tabular-nums mb-2">
              {simulations[active].metric}
            </p>
            <p className="text-xs uppercase tracking-widest text-muted mb-6 font-body">
              {simulations[active].metricLabel}
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-3 font-display">
              {simulations[active].title}
            </h3>
            <p className="text-muted leading-relaxed font-body">
              {simulations[active].desc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SimulationsSection;
