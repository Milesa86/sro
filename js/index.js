document.querySelector(".selected").addEventListener("click", function () {
  const options = document.querySelector(".options");
  options.style.display = options.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".options li").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector(".selected").textContent = item.textContent;
    document.querySelector(".options").style.display = "none";
  });
});

const menu = document.querySelector(".header-nav");
console.log(menu);
const menuBtn = document.querySelector(".burger-menu");

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active-menu");
    menuBtn.classList.toggle("active-menu");
    body.classList.toggle("lock");
  });

  menu.querySelectorAll(".nav-menu__link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active-menu");
      menuBtn.classList.remove("active-menu");
      body.classList.remove("lock");
    });
  });
}

const openPopUpCall = document.getElementById("open_popup");
const closePopUp = document.querySelector(".popup__close");
const popUpCall = document.querySelector(".popup-call");

openPopUpCall.addEventListener("click", (e) => {
  e.preventDefault();
  popUpCall.classList.add("active-pop-up__call");
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
});

closePopUp.addEventListener("click", () => {
  popUpCall.classList.remove("active-pop-up__call");
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
});

const openPopUpLinks = document.querySelectorAll(".open-popup");
const popups = document.querySelectorAll(".popup-information");
const closeButtons = document.querySelectorAll(".popup-information__close");

openPopUpLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const popupId = link.getAttribute("data-popup");
    const popup = document.getElementById(popupId);
    popup.classList.add("active-pop-up__information");
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    popups.forEach((popup) => {
      popup.classList.remove("active-pop-up__information");
      overlay.style.display = "none";
      document.body.style.overflow = "auto";
    });
  });
});

const offerButtons = document.querySelectorAll(".offer-buttons__item");
const offerArticle = document.querySelectorAll(".article");

offerButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    offerButtons.forEach((btn) => btn.classList.remove("active"));
    offerArticle.forEach((article) => article.classList.remove("active"));

    button.classList.add("active");

    const offerId = button.getAttribute("data-offer");

    const selectedOffer = document.getElementById(offerId);
    if (selectedOffer) {
      selectedOffer.classList.add("active");
    }
  });
});

const cardsContainer = document.querySelector(".description__item");

document.querySelector(".scroll-left").addEventListener("click", () => {
  cardsContainer.scrollBy({ left: -300, behavior: "smooth" });
});

document.querySelector(".scroll-right").addEventListener("click", () => {
  cardsContainer.scrollBy({ left: 300, behavior: "smooth" });
});

function initMap() {
  ymaps.ready(function () {
    const myMap = new ymaps.Map("map", {
      center: [56.8377, 60.6069],
      zoom: 16,
    });

    ymaps.geocode("Первомайская 56, Екатеринбург").then(function (res) {
      let firstGeoObject = res.geoObjects.get(0);
      const myPlacemark = new ymaps.Placemark(
        firstGeoObject.geometry.getCoordinates(),
        {
          balloonContent: "Первомайская 56 офис 258, Екатеринбург",
          hintContent: "Первомайская 56, офис 258",
        },
        {
          preset: "islands#redDotIcon", // Стиль метки (красная точка)
        }
      );
      myMap.geoObjects.add(myPlacemark);
      myMap.setCenter(firstGeoObject.geometry.getCoordinates(), 16);
    });
  });
}

document.addEventListener('click', (e) => {
    if (e.target.matches('.card__button')) {
        e.preventDefault();

        const activePopup = document.querySelector('.active-pop-up__information');
        if(activePopup) {
            activePopup.classList.remove('active-pop-up__information');
            overlay.style.display = "none";
            document.body.style.overflow = "auto";
        }

        setTimeout(() => {
            const targetId = e.target.getAttribute("href").substring(1); // Получаем ID якоря
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" }); // Плавная прокрутка
            }
          }, 300);
    }
})
