import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Collapse Theory — Games You Own. Mechanics That Matter.</title>
        <meta name="description" content="Collapse Theory is a games studio building mechanics-first puzzle games you buy once and own forever — no DRM, no subscriptions, no traps." />
        <meta property="og:title" content="Collapse Theory — Games You Own. Mechanics That Matter." />
        <meta property="og:description" content="Mechanics-first puzzle games with soul. Buy once, play forever. No DRM. No subscriptions. No traps." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#0b0b12" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <a class="skip" href="#main">Skip to content</a>

        <web-page>
          <div slot="banner"></div>
          <header slot="header">
              <div class="container">
                <div class="nav">
                  <a class="brand" href="#top" aria-label="Collapse Theory home">
                    <img class="logo" src="./logo-128.png" alt="Collapse Theory logo" />
                    <span>Collapse Theory</span>
                  </a>

                  <nav class="navlinks" aria-label="Primary">
                    <a href="#manifesto">Manifesto</a>
                    <a href="#games">Games</a>
                    <a href="#promise">Player Promise</a>
                    <a href="#join">Join</a>
                  </nav>

                  <div class="cta">
                    <a class="btn" href="#join">Get updates</a>
                    <a class="btn primary" href="https://block-sinvl.netlify.app/">See Droppy Blocky</a>
                  </div>
                </div>
              </div>
          </header>
          <nav slot="subheader"></nav>
          <nav slot="navigation-header"></nav>
          <nav slot="navigation"></nav>
          <nav slot="navigation-footer"></nav>
          <header slot="main-header"></header>
          <main slot="main" id="main">
            <Component />
          </main>
          <footer slot="main-footer"></footer>
          <aside slot="aside"></aside>
          <footer slot="footer">
            <div class="container">
              <div class="footerRow">
                <div>
                  <strong style="color:var(--text)">Collapse Theory</strong>
                  <div style="font-size:12px;margin-top:4px">© <span id="year"></span> Collapse Theory. All rights reserved.</div>
                </div>
                <div class="footerLinks" aria-label="Footer links">
                  <a href="#manifesto">Manifesto</a>
                  <a href="#games">Games</a>
                  <a href="#promise">Promise</a>
                  <a href="#join">Join</a>
                </div>
              </div>
            </div>
          </footer>
        </web-page>

        <script src={asset("main.js")} async defer />
      </body>
    </html>
  );
}
