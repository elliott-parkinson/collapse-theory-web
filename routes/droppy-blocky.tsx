export default function DroppyBlockyPage() {
  const screenshots = [
    "arcade.png",
    "menu.png",
    "level-complete.png",
    "high-score.png",
    "loading.png",
    "paused.png",
    "puzzle.png",
  ];

  const releaseNotes = [
    {
      version: "0.8.0",
      date: "February 2026",
      notes: [
        "Added arcade mode score scaling for longer combo chains.",
        "Improved board readability with stronger contrast on active drops.",
        "Reduced input delay on fast move-and-drop interactions.",
      ],
    },
    {
      version: "0.7.2",
      date: "January 2026",
      notes: [
        "Rebalanced puzzle mode progression to smooth early difficulty spikes.",
        "Improved pause-state resume behavior for mobile sessions.",
        "Fixed high-score ordering edge cases after tied runs.",
      ],
    },
    {
      version: "0.7.0",
      date: "December 2025",
      notes: [
        "Introduced level complete celebration pass and faster rematch flow.",
        "Added additional board generation seeds for better puzzle variety.",
        "Updated feedback effects for chain clears and combo streaks.",
      ],
    },
  ];

  return (
    <>
      <section class="dbPageHero">
        <div class="container">
          <p class="kicker">Game page</p>
          <h1>Droppy Blocky</h1>
          <p class="sub">
            A mechanics-first collapse puzzle game built for flow, clarity, and
            long-term replayability. Buy once, play forever.
          </p>
          <div class="heroActions">
            <a class="btn primary" href="/#join">Get release updates</a>
            <a class="btn" href="/#promise">Read the Player Promise</a>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="sectionTitle">
            <h2>Screenshots</h2>
            <div class="carouselControls" aria-label="Screenshot carousel controls">
              <button class="btn" type="button" data-carousel-target="droppy-gallery" data-direction="prev">Previous</button>
              <button class="btn" type="button" data-carousel-target="droppy-gallery" data-direction="next">Next</button>
            </div>
          </div>

          <div class="screenshotCarousel screenshotCarouselProminent" id="droppy-gallery" aria-label="Droppy Blocky screenshots">
            {screenshots.map((imageName) => (
              <figure class="shotCard shotCardProminent" key={imageName}>
                <img
                  src={`/images/screenshots/droppy-blocky/${imageName}`}
                  alt={`Droppy Blocky screenshot: ${imageName.replace(".png", "").replace("-", " ")}`}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="sectionTitle">
            <h2>Game details</h2>
            <p class="hint">What you can expect from Droppy Blocky.</p>
          </div>

          <div class="grid3">
            <div class="card">
              <p class="kicker">Modes</p>
              <h3>Calm + arcade playstyles</h3>
              <p>
                Play at your own pace in calm mode or chase bigger score chains
                in arcade mode.
              </p>
            </div>
            <div class="card">
              <p class="kicker">Design</p>
              <h3>Readable by default</h3>
              <p>
                Clear board states, strong feedback, and UI tuned for fast
                decision-making.
              </p>
            </div>
            <div class="card">
              <p class="kicker">Ownership</p>
              <h3>No DRM, no lock-in</h3>
              <p>
                Built around long-term ownership, offline play, and
                cross-platform support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="sectionTitle">
            <h2>Release notes</h2>
            <p class="hint">Short, practical updates as the game evolves.</p>
          </div>

          <div class="releaseNotesList">
            {releaseNotes.map((entry) => (
              <article class="card releaseNoteCard" key={entry.version}>
                <div class="releaseNoteHeader">
                  <h3>{entry.version}</h3>
                  <span class="pill">{entry.date}</span>
                </div>
                <ul class="releaseNoteItems">
                  {entry.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
