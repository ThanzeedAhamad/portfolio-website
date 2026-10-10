import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Mail,
} from "lucide-react";

import { motion } from "motion/react";
import portfolioData from "../data/portfolioData";
import AIOrb from "../components3D/AIOrb";

function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="top" className="hero">

      <div className="hero-grid">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="available-badge">
            <span></span>
            Open to opportunities
          </div>

          <p className="hero-intro">
            Hello, I'm
          </p>

          <h1>
            {personal.firstName}
            <br />
            <span>{personal.lastName}</span>
          </h1>

          <h2>
            {personal.title}
          </h2>

          <p className="hero-text">
            {personal.shortIntro}
          </p>

          <p className="hero-detail">
            {personal.location}
            <span aria-hidden="true">·</span>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {personal.email}
            </a>
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="hero-primary"
            >
              Explore My Work
              <ArrowRight size={18} />
            </a>

            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-secondary"
            >
              <Download size={17} />
              Resume
            </a>

          </div>

          <div className="hero-socials">

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 size={18} />
              GitHub
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BriefcaseBusiness size={18} />
              LinkedIn
            </a>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={18} />
              Email
            </a>

          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >

          <div className="hero-orb-container">
            <AIOrb />
          </div>

          <div className="profile-card">

            <div className="profile-image-wrapper">

              <img
                src={personal.profileImage}
                alt={personal.name}
                className="profile-image"
              />

            </div>

          </div>

        </motion.div>

      </div>

      <div className="hero-bottom">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}

export default Hero;