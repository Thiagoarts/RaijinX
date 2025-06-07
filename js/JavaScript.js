 function toggleDropdown(menuId) {
    // Fecha todos os dropdowns
    const allMenus = document.querySelectorAll('ul[id^="dropdown"]');
    allMenus.forEach(menu => {
      if (menu.id !== menuId) {
        menu.classList.add('hidden');
      }
    });

    // Alterna o menu clicado
    const menu = document.getElementById(menuId);
    menu.classList.toggle('hidden');
  }

  // Fecha dropdowns ao clicar fora
  window.addEventListener('click', function (e) {
    if (!e.target.closest('li.relative')) {
      const dropdowns = document.querySelectorAll('ul[id^="dropdown"]');
      dropdowns.forEach(menu => menu.classList.add('hidden'));
    }
  });

// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.querySelector("#mobileMenu button");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("flex");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("flex");
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


//controle dos botao dos 10 mais populares de 2025
document.querySelectorAll('.top10-container').forEach(section => {
  const carousel = section.querySelector('.carousel');
  const btnLeft = section.querySelector('.btnLeft');
  const btnRight = section.querySelector('.btnRight');

  const scrollAmount = carousel.offsetWidth;

  checkButtons();

  btnRight.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(checkButtons, 300);
  });

  btnLeft.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    setTimeout(checkButtons, 300);
  });

  function checkButtons() {
    const scrollLeft = carousel.scrollLeft;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    btnLeft.style.display = scrollLeft > 0 ? 'flex' : 'none';
    btnRight.style.display = scrollLeft >= maxScrollLeft - 1 ? 'none' : 'flex';
  }
});


  function checkButtons() {
    // Scroll atual
    const scrollLeft = carousel.scrollLeft;
    // Scroll máximo
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    // Botão esquerdo só aparece se scrollLeft > 0
    if (scrollLeft > 0) {
      btnLeft.style.display = 'flex';
    } else {
      btnLeft.style.display = 'none';
    }

    // Botão direito some se chegou no fim
    if (scrollLeft >= maxScrollLeft - 1) { // margem de erro por causa do smooth scroll
      btnRight.style.display = 'none';
    } else {
      btnRight.style.display = 'flex';
    }
  }

  // Atualiza visibilidade dos botões ao fazer scroll manual
  carousel.addEventListener('scroll', checkButtons);
