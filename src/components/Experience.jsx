import { motion } from "motion/react";
import portfolioData from "../data/portfolioData";

function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section">
      <div className="section-container">

        <div className="section-heading">
          <p>EXPERIENCE</p>
        </div>

        <h2 className="section-title">
          Where I've
          <span> worked.</span>
        </h2>

        <div className="experience-list">

          {experience.map((item, index) => (
            <motion.article
              key={item.company}
              className="experience-item"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >

              <div className="experience-date">
                {item.period}
              </div>

              <div className="experience-content">

                <h3>{item.role}</h3>

                <p className="company">
                  {item.company}
                </p>

                <p className="experience-description">
                  {item.description}
                </p>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;