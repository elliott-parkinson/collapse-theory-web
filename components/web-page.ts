class WebPage extends HTMLElement {
  private rendered = false;

  connectedCallback() {
    if (this.rendered) return;
    this.rendered = true;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          min-height: 100vh;
          --wa-page-nav-width: 16rem;
          --wa-page-aside-width: 18rem;
          --wa-page-gap: 1.5rem;
          --wa-page-nav-gap: 0.75rem;
          --wa-page-main-gap: 1rem;
        }

        .page {
          min-height: 100vh;
          display: grid;
          grid-template-rows: auto auto auto 1fr auto;
        }

        .banner,
        .header,
        .subheader,
        .footer {
          display: block;
        }

        .body {
          display: grid;
          grid-template-areas: "nav main aside";
          grid-template-columns: var(--wa-page-nav-width) minmax(0, 1fr) var(--wa-page-aside-width);
          align-items: start;
          gap: var(--wa-page-gap);
        }

        :host(:not([data-has-nav])) .body {
          grid-template-areas: "main aside";
          grid-template-columns: minmax(0, 1fr) var(--wa-page-aside-width);
        }

        :host(:not([data-has-aside])) .body {
          grid-template-areas: "nav main";
          grid-template-columns: var(--wa-page-nav-width) minmax(0, 1fr);
        }

        :host(:not([data-has-nav])):not([data-has-aside]) .body {
          grid-template-areas: "main";
          grid-template-columns: minmax(0, 1fr);
        }

        .nav {
          grid-area: nav;
          display: flex;
          flex-direction: column;
          gap: var(--wa-page-nav-gap);
          min-width: 0;
        }

        .main {
          grid-area: main;
          display: flex;
          flex-direction: column;
          gap: var(--wa-page-main-gap);
          min-width: 0;
        }

        .aside {
          grid-area: aside;
          min-width: 0;
        }

        :host(:not([data-has-nav])) .nav {
          display: none;
        }

        :host(:not([data-has-aside])) .aside {
          display: none;
        }

        .nav-body,
        .main-body {
          min-width: 0;
        }

        @media (max-width: 960px) {
          .body {
            grid-template-areas:
              "main"
              "nav"
              "aside";
            grid-template-columns: minmax(0, 1fr);
          }

          :host(:not([data-has-nav])) .body {
            grid-template-areas:
              "main"
              "aside";
          }

          :host(:not([data-has-aside])) .body {
            grid-template-areas:
              "main"
              "nav";
          }

          :host(:not([data-has-nav])):not([data-has-aside]) .body {
            grid-template-areas: "main";
          }
        }

        ::slotted(*) {
          box-sizing: border-box;
        }
      </style>

      <div class="page">
        <div class="banner"><slot name="banner"></slot></div>
        <header class="header"><slot name="header"></slot></header>
        <div class="subheader"><slot name="subheader"></slot></div>

        <div class="body">
          <aside class="nav">
            <div class="nav-header"><slot name="navigation-header"></slot></div>
            <nav class="nav-body"><slot name="navigation"></slot></nav>
            <div class="nav-footer"><slot name="navigation-footer"></slot></div>
          </aside>

          <section class="main">
            <div class="main-header"><slot name="main-header"></slot></div>
            <main class="main-body"><slot name="main"></slot></main>
            <div class="main-footer"><slot name="main-footer"></slot></div>
          </section>

          <aside class="aside"><slot name="aside"></slot></aside>
        </div>

        <footer class="footer"><slot name="footer"></slot></footer>
      </div>
    `;

    const slots = shadow.querySelectorAll("slot");
    slots.forEach((slot) => {
      slot.addEventListener("slotchange", () => this.updateSlotState());
    });
    this.updateSlotState();
  }

  private updateSlotState() {
    const shadow = this.shadowRoot;
    if (!shadow) return;
    const hasNav = this.slotHasContent(shadow, [
      "navigation-header",
      "navigation",
      "navigation-footer",
    ]);
    const hasAside = this.slotHasContent(shadow, ["aside"]);

    this.toggleAttribute("data-has-nav", hasNav);
    this.toggleAttribute("data-has-aside", hasAside);
  }

  private slotHasContent(shadow: ShadowRoot, names: string[]) {
    return names.some((name) => {
      const slot = shadow.querySelector(`slot[name="${name}"]`);
      if (!slot) return false;
      return slot.assignedNodes({ flatten: true }).length > 0;
    });
  }
}

customElements.define("web-page", WebPage);
