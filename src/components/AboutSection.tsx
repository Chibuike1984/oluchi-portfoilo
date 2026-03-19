import { motion } from "framer-motion";
import aboutImg from "@/assets/about-photo.jpeg";
import { smoothEase } from "@/lib/animation";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: smoothEase } },
};

const AboutSection = () => (
  <section id="about" className="section-spacing">
    <div className="container-narrow">
      <div className="grid md:grid-cols-[3fr_2fr] gap-16 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-widest text-muted mb-4 font-body">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            From insight to impact.
          </h2>
          <div className="max-w-[65ch] space-y-4 text-muted text-base leading-relaxed font-body">
            <p>
              I am a motivated professional combining business development and sales expertise. I specialize in identifying growth opportunities, building strategic partnerships, and generating revenue through effective lead generation and deal closing.
            </p>
            <p>
              I bring strong analytical skills, market research capabilities, and a results-oriented mindset to every project.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { label: "Industries", value: "Fintech, E-commerce, SaaS, Logistics" },
              { label: "Tools", value: "HubSpot, Zoho CRM, Microsoft Office" },
              { label: "Strengths", value: "Negotiation, Communication, Analytics" },
              { label: "Mindset", value: "Results-driven, Adaptable, Strategic" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs uppercase tracking-widest text-muted mb-1 font-body">{item.label}</p>
                <p className="text-sm text-foreground font-medium font-body">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-accent p-8 rounded-2xl">
            <div className="w-64 h-64 rounded-full overflow-hidden">
              <img
                src={aboutImg}
                alt="Okafor Oluchi Esther"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
