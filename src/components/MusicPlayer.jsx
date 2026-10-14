import { Music2 } from "lucide-react";

function MusicPlayer() {
  return (
    <section className="music-section" aria-label="Featured song">
      <div className="music-card">
        <div className="music-icon" aria-hidden="true">
          <Music2 size={21} />
        </div>
        <div className="music-details">
          <p className="music-eyebrow">A SONG I LIKE</p>
          <h2>Bring Me Back</h2>
          <p className="music-artist">Jherwen</p>
        </div>
        <audio controls preload="metadata" aria-label="Play Bring Me Back by Jherwen">
          <source src="/audio/bring-me-back.mp3" type="audio/mpeg" />
          Your browser does not support audio playback.
        </audio>
      </div>
    </section>
  );
}

export default MusicPlayer;
