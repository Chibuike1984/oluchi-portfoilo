import { motion } from "framer-motion";
import heroImg from "@/assets/hero-headshot.jpg";
import { smoothEase } from "@/lib/animation";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: smoothEase },
  }),
};

const HeroSection = () => (
  <section className="section-spacing pt-32 md:pt-40">
    <div className="container-narrow">
      <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-xs uppercase tracking-widest text-muted mb-4 font-body"
          >
            Okafor Oluchi Esther
          </motion.p>
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6"
          >
            Driving revenue growth for Nigerian startups.
          </motion.h1>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg text-muted max-w-lg mb-8 font-body leading-relaxed"
          >
            Business Development & Sales Executive. I translate market research into revenue for SMEs.
          </motion.p>
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <a href="#competencies" className="btn-primary-custom">
              View Skills
            </a>
            <a href="#" className="btn-outline-custom">
              Download CV
            </a>
          </motion.div>
        </div>
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="aspect-[4/5] w-64 md:w-80 rounded-2xl overflow-hidden shadow-2xl outline outline-1 outline-foreground/10 -outline-offset-1">
            <img
              src={heroImg}
              alt="Okafor Oluchi Esther - Business Development Professional"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
