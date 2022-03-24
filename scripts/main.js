import {
  keysBlack,
  keysWhite,
  decorateBlackKey,
  decorateWhiteKey,
} from "./index.js";

/* Tocar notas (play notes) */

const getKeyCode = (event) => {
  let key;

  if (event.type === "keydown") {
    key = event.keyCode;
  } else if (event.type === "click") {
    key = event.target.dataset.code;
  }

  return key;
};

const playAudio = (audioKeyCode) => {
  const audio = document.querySelector(`audio[data-code="${audioKeyCode}"]`);
  audio.currentTime = 0;
  audio.play();
};

const decorateKey = (key) => {
  if (key.classList.contains("white")) {
    decorateWhiteKey(key);
  } else if (key.classList.contains("black")) {
    decorateBlackKey(key);
  }
}

const playNotes = (event) => {
  const audioKeyCode = getKeyCode(event);
  const key = document.querySelector(`.key[data-code="${audioKeyCode}"]`);

  const cantFoundAnyKey = !key;
  if (cantFoundAnyKey) {
    return;
  }

  decorateKey(key);

  playAudio(audioKeyCode);
};

/* Click com o mouse (click with mouse) */

keysWhite.forEach((key) => {
  key.addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
      playNotes(e);
    },
    { capture: false }
  );
});

keysBlack.forEach((key) => {
  key.addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
      playNotes(e);
    },
    { capture: true }
  );
});

/* Digitar com o teclado (keyboard type) */

// Captura evento de digitar qualquer tecla
window.addEventListener("keydown", playNotes);
