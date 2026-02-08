// components/timeline-search.ts
var FilterSearch = class extends HTMLElement {
  input;
  targetElement = null;
  static get observedAttributes() {
    return [
      "for"
    ];
  }
  connectedCallback() {
    this.bindInput();
    this.resolveTarget();
  }
  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === "for") {
      this.resolveTarget();
    }
  }
  bindInput(element) {
    this.input = this.getElementsByTagName("input")[0];
    if (element) this.input = element;
    if (!this.input) return;
    this.input.style.display = "";
    this.input.addEventListener("input", this.handleSearch.bind(this));
  }
  resolveTarget() {
    const targetId = this.getAttribute("for");
    this.targetElement = targetId ? document.getElementById(targetId) : null;
  }
  handleSearch() {
    if (!this.targetElement) return;
    const term = this.input.value.toLowerCase();
    Array.from(this.targetElement.children).forEach((child) => {
      const text = child.textContent?.toLowerCase() || "";
      child.style.display = text.includes(term) ? "" : "none";
    });
  }
};
customElements.define("filter-search", FilterSearch);

// src/main.ts
console.log("loaded");

const carouselButtons = document.querySelectorAll("[data-carousel-target]");
carouselButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-carousel-target");
    const direction = button.getAttribute("data-direction");
    if (!targetId || !direction) return;
    const carousel = document.getElementById(targetId);
    if (!carousel) return;

    const firstCard = carousel.querySelector(".shotCard");
    if (!firstCard) return;
    const cardWidth = firstCard.getBoundingClientRect().width + 12;
    const delta = direction === "next" ? cardWidth : -cardWidth;

    carousel.scrollBy({ left: delta, behavior: "smooth" });
  });
});
