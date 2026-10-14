import { Award, Trophy, Users } from "lucide-react";
import { motion } from "motion/react";
import portfolioData from "../data/portfolioData";

function Highlights() {
  const { certifications, achievements, leadership } = portfolioData;

  return (
    <section id="highlights" className="section">
      <div className="section-container">
        <div className="section-heading">
          <p>CERTIFICATIONS & ACHIEVEMENTS</p>
        </div>

        <div className="highlights-grid">
          <div className="highlight-group">
            <h2><Award size={20} /> Certifications</h2>
            <div className="highlight-list">
              {certifications.map((item) => (
                <motion.article
                  className="highlight-card"
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.issuer}</p>
                  </div>
                  <span>{item.year}</span>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="highlight-group">
            <h2><Trophy size={20} /> Achievements</h2>
            <div className="highlight-list">
              {achievements.map((item) => (
                <motion.article
                  className="highlight-card"
                  key={item.event}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.event}</p>
                  </div>
                  <span>{item.year}</span>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className="leadership-group">
          <h2><Users size={20} /> Leadership & Extracurricular Activities</h2>
          {leadership.map((item) => (
            <motion.article
              className="leadership-card"
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>{item.role} <span>— {item.group}</span></h3>
              <ul>
                {item.description.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
