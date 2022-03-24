export const keysWhite = document.querySelectorAll(".white");
export const keysBlack = document.querySelectorAll(".black");

export const decorateWhiteKey = (key) => {
  key.style.boxShadow = "inset 5px -5px 8px rgba(0, 0, 0, .5)";
  key.style.border = "none";
  key.style.transition = ".3s";

  setTimeout(() => {
    key.style.boxShadow = "none";
    key.style.border = "1px solid #d3d3d3";
    key.style.borderTop = "none";
  }, 200);
};

export const decorateBlackKey = (key) => {
  key.style.boxShadow = "0px 7px 10px 7px rgba(0, 0, 0, .6)";
  key.style.borderBottom = "3px solid dimgray";
  key.style.transition = ".3s";

  setTimeout(() => {
    key.style.borderBottom = "5px solid gray";
    key.style.boxShadow = "2px 10px 10px rgba(0, 0, 0, .6)";
  }, 100);
};

const checkbox = document.querySelector("input");

checkbox.addEventListener("click", (e) => {
  const p = document.querySelectorAll(".shortcut");

  if (e.target.checked) {
    p.forEach((element) => {
      element.style.display = "block";
    });
  } else {
    p.forEach((element) => {
      element.style.display = "none";
    });
  }
});

window.addEventListener("load", () => {
  checkbox.checked = true;
});
