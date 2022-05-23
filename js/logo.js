const item = document.querySelector(".logo");

item.animate(
  [{ transform: "translateX(-4rem)" }, { transform: "translateY(0rem)" }],
  {
    duration: 4000,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);
