const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const toast = document.querySelector(".toast");
const moreToggle = document.querySelector(".more-toggle");
const moreContent = document.querySelector("#ken-more");
let toastTimer;

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Mở menu" : "Đóng menu");
  mainNav.classList.toggle("is-open", !isOpen);
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Mở menu");
  }
});

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    toast.textContent = `Đã chọn ${button.dataset.flavor} — Ken chuẩn bị cho bạn nhé!`;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
  });
});

moreToggle.addEventListener("click", () => {
  const isExpanded = moreToggle.getAttribute("aria-expanded") === "true";
  moreToggle.setAttribute("aria-expanded", String(!isExpanded));
  moreContent.hidden = isExpanded;
  moreToggle.querySelector(".more-label").textContent = isExpanded ? "Xem thêm" : "Thu gọn";
  moreToggle.querySelector("[aria-hidden='true']").textContent = isExpanded ? "＋" : "−";
});

document.querySelector(".back-to-top").addEventListener("click", () => {
  document.querySelector("#cau-chuyen").scrollIntoView({ behavior: "smooth" });
});
