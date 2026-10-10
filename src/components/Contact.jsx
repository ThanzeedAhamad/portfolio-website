import {
  BriefcaseBusiness,
  Code2,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "motion/react";
import portfolioData from "../data/portfolioData";

function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">

        <div className="section-heading">
          <p>CONTACT</p>
        </div>

        <motion.div
          className="contact-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div>
            <span className="contact-label">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's create
              <span> something meaningful.</span>
            </h2>

            <p>
              I'm open to opportunities, collaborations and
              interesting projects in AI, Machine Learning
              and software development.
            </p>
          </div>

          <a
            href={`https://wa.me/${personal.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hi Thanzeed, I found your portfolio and would like to get in touch.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            Get In Touch
            <ArrowUpRight size={20} />
          </a>

        </motion.div>

        <div className="contact-links">

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={18} />
            {personal.email}
          </a>

          <a href={`tel:${personal.phone.replaceAll(" ", "")}`}>
            {personal.phone}
          </a>

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

        </div>

      </div>
    </section>
  );
}

export default Contact;