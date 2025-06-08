const menuBtn = document.querySelector(".menu-toggle");
const searchBox = document.querySelector(".menu");
menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchBox.classList.toggle("hidden");
});

/**************************** */
const categoriesItems = document.querySelectorAll(".category-items");
const showMoreBtn = document.querySelector(".show-more");
const update = () => {
  const is768 = window.matchMedia("(max-width: 768px)").matches;
  if (is768) {
    [...categoriesItems]
      .slice(4)
      .forEach((item) => item.classList.add("hidden"));
  } else {
    categoriesItems.forEach((item) => item.classList.remove("hidden"));
  }
};
window.addEventListener("resize", update);
window.addEventListener("DOMContentLoaded", update);
showMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  [...categoriesItems].slice(4).forEach((item) => {
    item.classList.toggle("hidden");
  });
});

/************شرکت های محبوب ************/
const popularComponyBtn = document.querySelector(".popular-company-btn");
const popularCompanyCards = document.querySelectorAll(".company-card");
const popularCompanyContainer = document.querySelector(
  ".Popular__Companies__cards"
);
let isFlex3 = true;
popularComponyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (isFlex3) {
    popularCompanyContainer.style.display = "grid";
  } else {
    popularCompanyContainer.style.display = "flex";
  }
  isFlex3 = !isFlex3;
});
let isBlock = false;
[...popularCompanyCards].forEach((card) => {
  const is768 = window.matchMedia("(max-width: 768px)").matches;

  card.addEventListener("click", (e) => {
    if (is768) {
      console.log(card);
      const stat = card.querySelector(".stats");
      const desc = card.querySelector(".description");
      const loc = card.querySelector(".location");
      if (!isBlock) {
        stat.style.display = "block";
        desc.style.display = "block";
        loc.style.display = "block";
      } else {
        stat.style.display = "none";
        desc.style.display = "none";
        loc.style.display = "none";
      }
      isBlock = !isBlock;
    }
  });
});
/**************فرصت های شغلی*************/
function scrollSlider(direction) {
  const container = document.getElementById("career-slider");
  const scrollAmount = 234;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}
const careerCards = document.querySelectorAll(".career-card");
const careerShowBtn = document.querySelector(".creer-show-btn");
const careerContainer = document.querySelector(".career__container");
let isFlex = true;
careerShowBtn.addEventListener("click", (e) => {
  if (isFlex) {
    careerContainer.style.display = "grid";
  } else {
    careerContainer.style.display = "flex";
    careerContainer.style.flexDirection = "row";
  }
  isFlex = !isFlex;
});

/****************  تازه ترین اخبار  ************* */
const newsCards = document.querySelectorAll(".news-card");

let isFlex2 = true;
newsCards.forEach((card, i) => {
  card.addEventListener("click", (e) => {
    const is992 = window.matchMedia("(max-width: 992px)").matches;
    if (is992) {
      if (isFlex2) {
        card.querySelector(".news-description ").style.display = "flex";
        card.querySelector(".news-footer ").style.display = "flex";
      } else {
        card.querySelector(".news-description ").style.display = "none";
        card.querySelector(".news-footer").style.display = "none";
      }
      isFlex2 = !isFlex2;
    }
  });
});
/***************** */
