import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import portfolioData from "../data/portfolioData";

function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">

        <div className="section-heading">
          <p>FEATURED PROJECTS</p>
        </div>

        <div className="projects-header">
          <h2>
            Things I've
            <span> built.</span>
          </h2>

          <p>
            Selected projects that demonstrate my work in
            artificial intelligence and software development.
          </p>
        </div>

        <div className="projects-list">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-item"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >

              <div className="project-top">

                <span className="project-type">
                  {project.type}
                </span>

              </div>

              <div className="project-body">

                <div>

                  <h3>
                    {project.title}
                  </h3>

                  <span className="project-period">
                    {project.period}
                  </span>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tech">

                    {project.technologies.map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-arrow"
                    aria-label="View project on GitHub"
                  >
                    <ArrowUpRight size={25} />
                  </a>
                )}

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;