import "../components/timeline-search.ts";
import "../components/web-page.ts";
import "../components/ct-spark.ts";
//import "../components/picture-modal.ts";

console.log("loaded");

const carouselButtons = document.querySelectorAll<HTMLElement>("[data-carousel-target]");

carouselButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-carousel-target");
    const direction = button.getAttribute("data-direction");
    if (!targetId || !direction) return;

    const carousel = document.getElementById(targetId);
    if (!carousel) return;

    const firstCard = carousel.querySelector<HTMLElement>(".shotCard");
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width + 12;
    const delta = direction === "next" ? cardWidth : -cardWidth;
    carousel.scrollBy({ left: delta, behavior: "smooth" });
  });
});
