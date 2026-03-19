import { motion } from "framer-motion";
import { Search, Monitor, Users, Target, Handshake, BarChart3, MessageSquare, Brain, Zap } from "lucide-react";
import { smoothEase } from "@/lib/animation";

const competencies = [
  { icon: Search, title: "Market Research & Intelligence", desc: "Deep-dive research into Nigerian fintech and e-commerce landscapes." },
  { icon: Monitor, title: "Microsoft Office (Advanced)", desc: "Expert-level data analysis, reporting, and presentation delivery." },
  { icon: BarChart3, title: "CRM Software", desc: "HubSpot, Zoho CRM, and Salesforce for pipeline and relationship management." },
  { icon: Target, title: "Lead Generation & Prospecting", desc: "Identifying and qualifying high-value leads for sustainable growth." },
  { icon: Handshake, title: "Sales & Negotiation", desc: "Deal structuring and closing with a focus on long-term value." },
  { icon: Brain, title: "Problem-Solving", desc: "Analytical decision-making to overcome business challenges." },
  { icon: MessageSquare, title: "Communication & Presentation", desc: "Clear, persuasive communication across all stakeholder levels." },
  { icon: Users, title: "Team Collaboration", desc: "Cross-functional leadership potential with collaborative mindset." },
  { icon: Zap, title: "Results-Driven Adaptability", desc: "Agile execution in fast-paced startup environments." },
];

const CompetenciesSection = () => (
  <section id="competencies" className="section-spacing bg-accent/50">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: smoothEase }}
        className="mb-16"
      >
        <p className="text-xs uppercase tracking-widest text-muted mb-4 font-body">Core Competencies</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills that drive growth.</h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {competencies.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5, ease: smoothEase }}
            className="card-elevated bg-card rounded-2xl p-6 cursor-default"
          >
            <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center mb-4">
              <c.icon size={20} className="text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2 font-display">{c.title}</h3>
            <p className="text-sm text-muted leading-relaxed font-body">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CompetenciesSection;
