function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        <a href="/" className="navbar-logo">
          <span className="logo-box">T</span>
          <span>Thanzeed Ahamad</span>
        </a>

        <nav className="navbar-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="/resume.pdf" className="nav-resume">
          Resume
        </a>

      </div>
    </header>
  );
}

export default Navbar;