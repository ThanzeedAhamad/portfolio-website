import portfolioData from "../data/portfolioData";

function Skills() {
  const { Aiml, programming, frameworks, tools } = portfolioData.SKILLS;
  const skillGroups = [
    {
      title: "AI & Machine Learning",
      skills: Aiml,
    },
    {
      title: "Programming",
      skills: programming,
    },
    {
      title: "Frameworks & Libraries",
      skills: frameworks,
    },
    {
      title: "Tools",
      skills: tools,
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="section-inner">

        <div className="section-label">
          TECHNICAL SKILLS
        </div>

        <div className="section-heading-row">

          <h2>
            Skills I use to
            <br />
            <span>build and solve.</span>
          </h2>

          <p>
            A combination of artificial intelligence,
            software development and modern engineering
            technologies.
          </p>

        </div>

        <div className="skills-grid">

          {skillGroups.map((group) => (
            <div
              className="skill-card"
              key={group.title}
            >

              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;