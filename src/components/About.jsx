import portfolioData from "../data/portfolioData";

function About() {
  const { personal, education } = portfolioData;
  const currentEducation = education[0];

  return (
    <section id="about" className="section about-section">
      <div className="section-inner">

        <div className="section-label">
          ABOUT ME
        </div>

        <div className="about-grid">

          <div className="about-title">
            <h2>
              Building
              <br />
              <span>intelligent</span>
              solutions.
            </h2>
          </div>

          <div className="about-content">

            <p>{personal.about}</p>

            <div className="about-info-grid">

              <div className="info-box">
                <small>DEGREE</small>
                <strong>
                  {currentEducation.degree}
                </strong>
              </div>

              <div className="info-box">
                <small>COLLEGE</small>
                <strong>
                  {currentEducation.college}
                </strong>
              </div>

              <div className="info-box">
                <small>LOCATION</small>
                <strong>
                  {personal.location}
                </strong>
              </div>

              <div className="info-box">
                <small>STATUS</small>
                <strong>
                  {currentEducation.period} Student
                </strong>
              </div>

              <div className="info-box">
                <small>CGPA</small>
                <strong>{currentEducation.cgpa}</strong>
              </div>

              <div className="info-box">
                <small>EMAIL</small>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {personal.email}
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;