class CollapseTheorySparkElement extends HTMLElement {
  private rendered = false;

  connectedCallback() {
    if (this.rendered) return;
    this.rendered = true;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        :host {
          display: inline-flex;
          align-items: center;
        }

        .spark {
          width: 12px;
          height: 12px;
          border-radius: 6px;
          margin-top: 3px;
          background:
            radial-gradient(circle at 30% 30%, var(--accent), rgba(126, 231, 255, 0) 60%),
            linear-gradient(180deg, rgba(126, 231, 255, 0.7), rgba(126, 231, 255, 0.05));
          border: 1px solid rgba(126, 231, 255, 0.35);
          flex: 0 0 auto;
        }
      </style>
      <span class="spark" aria-hidden="true"></span>
    `;
  }
}

customElements.define("ct-spark", CollapseTheorySparkElement);
