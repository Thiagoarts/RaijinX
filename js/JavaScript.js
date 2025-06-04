// Dropdown menu por clique
function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.classList.toggle("hidden");
}

// Fecha se clicar fora
window.addEventListener("click", function (e) {
  const button = e.target.closest("button");
  if (!e.target.closest("li") || (button && !button.onclick)) {
    document.getElementById("dropdownMenu")?.classList.add("hidden");
  }
});

// Swiper (Carrossel)
window.addEventListener("DOMContentLoaded", () => {
  new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
