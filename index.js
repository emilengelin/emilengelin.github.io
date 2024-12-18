const createSnow = (amount) => {
  const snowContainer = document.getElementById("snow-container");
  const snowContent = ["&#10052", "&#10053", "&#10054"];

  const random = (num) => Math.floor(Math.random() * num);

  const getRandomStyles = () => {
    const top = random(100);
    const left = random(100);
    const dur = random(10) + 10;
    const size = random(25) + 25;
    return `
      top: -${top}%;
      left: ${left}%;
      font-size: ${size}px;
      animation-duration: ${dur}s;
    `;
  };

  for (var i = amount; i > 0; i--) {
    var snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML = snowContent[random(3)];
    snowContainer.append(snow);
  }
};

(() => {
  window.addEventListener("load", () => {
    createSnow(30);

    for (const door of document.getElementsByClassName("door")) {
      door.addEventListener("click", () => {
        door.classList.add("open");
      });
    }

    for (const content of document.getElementsByClassName("content")) {
      content.addEventListener("click", () => {
        const dialog = document.getElementById(
          `detail-${content.parentElement.id.substring("door-".length)}`
        );
        dialog.setAttribute("open", "");
      });
    }

    for (const detail of document.getElementsByClassName("detail")) {
      detail.addEventListener("click", () => {
        detail.removeAttribute("open");
      });
    }

    /* Jackpot! */
    document.getElementById("door-13").addEventListener("click", () => {
      document.getElementById("jackpot").play();
    });
  });
})();
