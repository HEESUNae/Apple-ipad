const basketStarterEl = document.querySelector("header .basket-starter");
const basketEl = basketStarterEl.querySelector(".basket");

basketStarterEl.addEventListener("click", (event) => {
  event.stopPropagation();
  if (basketEl.classList.contains("show")) {
    hideBasket();
  } else {
    showBasket();
  }
});

basketEl.addEventListener("click", (event) => {
  event.stopPropagation();
});

window.addEventListener("click", () => {
  hideBasket();
});

const showBasket = () => {
  basketEl.classList.add("show");
};
const hideBasket = () => {
  basketEl.classList.remove("show");
};
