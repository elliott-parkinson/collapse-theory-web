
export default function Home() {
  const homeScreenshots = [
    "arcade.png",
    "level-complete.png",
    "puzzle.png",
  ];

  return <>
    <div class="container hero" id="top">
      <div class="heroGrid">
        <div>
          <h1>Games you own.<br/>Mechanics that matter.</h1>
          <p class="sub">
            Collapse Theory is a puzzle studio building timeless gameplay with modern polish.
            No DRM traps. No subscriptions. No disappearing libraries. Just games that respect your time — and your ownership.
          </p>

          <div class="badgeRow" aria-label="Key principles">
            <div class="badge"><strong>Buy once</strong> · play forever</div>
            <div class="badge">Offline-first</div>
            <div class="badge">Mod-friendly</div>
            <div class="badge">Cross‑platform by design</div>
          </div>

          <div class="heroActions">
            <a class="btn primary" href="#join">Join the Theory</a>
            <a class="btn" href="#manifesto">Read the Manifesto</a>
          </div>
        </div>

        <aside class="heroCard" aria-label="Manifesto highlight">
          <div class="heroCardInner">
            <div class="miniTitle">Collapse Theory Manifesto</div>
            <p class="manifestoLine">When you buy a game, it should be <em>yours</em>. Forever.</p>
            <div class="divider"></div>
            <ul class="promiseList">
              <li><span class="dot" aria-hidden="true"></span><span><strong>Zero DRM.</strong> No online checks, no hostage libraries.</span></li>
              <li><span class="dot" aria-hidden="true"></span><span><strong>Zero manipulation.</strong> No ads, loot boxes, or “engagement” traps.</span></li>
              <li><span class="dot" aria-hidden="true"></span><span><strong>Built to last.</strong> Modular systems, clear UI, deep mechanics.</span></li>
              <li><span class="dot" aria-hidden="true"></span><span><strong>Respectful by default.</strong> Your time, your skill, your ownership.</span></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>

    <section id="manifesto">
      <div class="container">
        <div class="sectionTitle">
          <h2>Why we exist</h2>
          <p class="hint">Because “renting” games forever is definitely a totally normal idea.</p>
        </div>

        <div class="grid3">
          <div class="card">
            <p class="kicker">Mechanics-first</p>
            <h3>Reward mastery, not monetization</h3>
            <p>Design that respects skill — with systems you can learn, exploit, and truly master.</p>
          </div>
          <div class="card">
            <p class="kicker">Puzzle games with soul</p>
            <h3>Rituals, not retention metrics</h3>
            <p>Games you come back to because they feel good, not because a timer told you to.</p>
          </div>
          <div class="card">
            <p class="kicker">Polish + depth</p>
            <h3>Modular clarity, not spectacle</h3>
            <p>Every asset earns its place. Every UI element is crafted for clarity and delight.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="games">
      <div class="container">
        <div class="sectionTitle">
          <h2>Games</h2>
          <p class="hint">The beginning of a small rebellion against disposable design.</p>
        </div>

        <div class="spotlight">
          <div class="gamePoster" aria-label="Droppy Blocky spotlight">
            <div class="posterTop">
              <ct-badge>First Release</ct-badge>
              <ct-badge>Puzzle · At‑your‑pace</ct-badge>
            </div>
            <h3 class="dbTitle">Droppy Blocky</h3>
            <p class="dbDesc">
              A modern interpretation of classic collapse-style puzzling: clean visuals, crisp feedback,
              and mechanics that scale from “cozy session” to “I can’t believe I just did that.”
            </p>

            <ul class="featureList">
              <li><ct-spark /><span><strong>Calm puzzle mode</strong> — no timer pressure, just flow.</span></li>
              <li><ct-spark /><span><strong>Readable board state</strong> — clarity first, always.</span></li>
              <li><ct-spark /><span><strong>Depth through systems</strong> — emergent combos, not gimmicks.</span></li>
              <li><ct-spark /><span><strong>Future-proof</strong> — offline play, no vanishing purchases.</span></li>
            </ul>

            <div class="pillRow" aria-label="Planned platforms">
              <span class="pill">Mobile</span>
              <span class="pill">Desktop</span>
              <span class="pill">Tablet</span>
              <span class="pill">Console</span>
            </div>
          </div>

          <div class="gameCard">
            <p class="kicker">Screenshot preview</p>
            <h3>Droppy Blocky in motion</h3>
            <p style="margin-top:8px;color:var(--muted)">
              Quick look at the current build. Full gallery and release notes are on the game page.
            </p>

            <div class="divider"></div>

            <div class="carouselControls" aria-label="Homepage screenshot carousel controls">
              <button class="btn" type="button" data-carousel-target="droppy-home-carousel" data-direction="prev">Previous</button>
              <button class="btn" type="button" data-carousel-target="droppy-home-carousel" data-direction="next">Next</button>
            </div>

            <div class="screenshotCarousel screenshotCarouselCompact" id="droppy-home-carousel" aria-label="Droppy Blocky homepage screenshots">
              {homeScreenshots.map((imageName) => (
                <figure class="shotCard shotCardCompact" key={imageName}>
                  <img
                    src={`/images/screenshots/droppy-blocky/${imageName}`}
                    alt={`Droppy Blocky screenshot: ${imageName.replace(".png", "").replace("-", " ")}`}
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>

            <div class="heroActions" style="margin-top:14px">
              <a class="btn primary" href="/droppy-blocky">View full game page</a>
              <a class="btn" href="/#join">Get Droppy Blocky updates</a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="promise">
      <div class="container">
        <div class="sectionTitle">
          <h2>Our promise to players</h2>
          <p class="hint">If this sounds “anti-industry,” that’s because it is.</p>
        </div>

        <div class="grid3">
          <div class="card">
            <p class="kicker">Ownership</p>
            <h3>Buy once, play forever</h3>
            <p>No online checks. No platform lock‑in. Your purchase is a gift to your future self.</p>
          </div>
          <div class="card">
            <p class="kicker">No traps</p>
            <h3>No ads. No loot boxes. No manipulation.</h3>
            <p>We make games, not slot machines wearing a puzzle skin.</p>
          </div>
          <div class="card">
            <p class="kicker">Longevity</p>
            <h3>Offline, mod‑friendly, cross‑platform</h3>
            <p>Built for the devices you have now — and the ones you’ll have next.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="philosophy">
      <div class="container">
        <div class="sectionTitle">
          <h2>Design philosophy</h2>
          <p class="hint">Every mechanic earns its place. Every pixel has a job.</p>
        </div>

        <div class="grid3">
          <div class="card">
            <p class="kicker">Craft</p>
            <h3>Clarity is a feature</h3>
            <p>Readable UI, satisfying feedback, and systems that teach you as you play.</p>
          </div>
          <div class="card">
            <p class="kicker">Systems</p>
            <h3>Creative systems, not treadmills</h3>
            <p>Emergence > endless content. Depth > daily chores. Your brain deserves better.</p>
          </div>
          <div class="card">
            <p class="kicker">Modularity</p>
            <h3>Reuse without repetition</h3>
            <p>Assets and mechanics designed to evolve across games — without feeling copy‑pasted.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="join">
      <div class="container">
        <div class="sectionTitle">
          <h2>Join the Theory</h2>
          <p class="hint">If you believe games should be owned, not rented… welcome.</p>
        </div>

        <div class="card">
          <p class="kicker">Get updates</p>
          <h3 style="margin:0 0 8px">Be first to play Droppy Blocky</h3>
          <p style="margin:0;color:var(--muted);max-width:75ch">
            Drop your email for launch updates and dev notes. We’ll keep it human.
            (If we ever send “limited-time” anything, you have permission to publicly mock us.)
          </p>

          <form action="#" method="post" onsubmit="return false" aria-label="Newsletter signup">
            <div class="fieldRow">
              <label for="email" class="skip">Email</label>
              <input id="email" type="email" placeholder="you@domain.com" autocomplete="email" />
              <button class="btn primary" type="submit" onclick="fakeSignup()">Notify me</button>
            </div>
            <p class="fineprint">No spam. No tracking pixels. No pretending this is a ‘community.’</p>
            <p class="fineprint" id="signupMsg" aria-live="polite"></p>
          </form>
        </div>
      </div>
    </section>
  </>
}
