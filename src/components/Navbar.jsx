import { useRef, useState } from "react";
import { Volume1, Volume2 } from "lucide-react";

function Navbar() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackError, setPlaybackError] = useState("");

  async function toggleMusic() {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
        setPlaybackError("");
      } catch {
        setIsPlaying(false);
        setPlaybackError("Unable to play the song. Please try again.");
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }

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
          <a href="#highlights">Highlights</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navbar-actions">
          <div className="nav-music">
            <button
              type="button"
              className="nav-music-toggle"
              aria-label={isPlaying ? "Pause song" : "Play song"}
              aria-pressed={isPlaying}
              title={isPlaying ? "Pause song" : "Play song"}
              onClick={toggleMusic}
            >
              {isPlaying ? <Volume2 size={19} /> : <Volume1 size={19} />}
            </button>

            <audio
              ref={audioRef}
              preload="metadata"
              src="/audio/bring-me-back.mp3"
              onEnded={() => setIsPlaying(false)}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
            />
            <span className="visually-hidden" aria-live="polite">
              {playbackError}
            </span>
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