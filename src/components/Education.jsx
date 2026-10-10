import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import portfolioData from "../data/portfolioData";

function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="section-container">

        <div className="section-heading">
          <p>EDUCATION</p>
        </div>

        <div className="education-list">
          {education.map((item) => (
            <motion.article
              className="education-card"
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="education-icon">
                <GraduationCap size={30} />
              </div>

              <div className="education-content">
                <span>{item.period}</span>
                <h2>{item.college}</h2>
                <h3>{item.degree}</h3>
                <p>{item.location}</p>
                {item.cgpa && <p>CGPA: {item.cgpa}</p>}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;