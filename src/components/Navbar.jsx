import { useState } from "react";
import { Volume2, X } from "lucide-react";

function Navbar() {
  const [musicOpen, setMusicOpen] = useState(false);

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

        <div className="navbar-actions">
          <div className="nav-music">
            <button
              type="button"
              className="nav-music-toggle"
              aria-label={musicOpen ? "Close music player" : "Open music player"}
              aria-expanded={musicOpen}
              aria-controls="nav-music-player"
              onClick={() => setMusicOpen((open) => !open)}
            >
              {musicOpen ? <X size={19} /> : <Volume2 size={19} />}
            </button>

            {musicOpen && (
              <div className="nav-music-popover" id="nav-music-player">
                <div className="nav-music-info">
                  <strong>Bring Me Back</strong>
                  <span>Jherwen</span>
                </div>
                <audio controls preload="metadata" aria-label="Play Bring Me Back by Jherwen">
                  <source src="/audio/bring-me-back.mp3" type="audio/mpeg" />
                  Your browser does not support audio playback.
                </audio>
              </div>
            )}
          </div>

          <a href="/resume.pdf" className="nav-resume">
            Resume
          </a>
        </div>

      </div>
    </header>
  );
}

export default Navbar;