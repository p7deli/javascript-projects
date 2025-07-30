const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display");

const clear = function () {
  display.textContent = "0";
};

const backSpace = function () {
  const text = display.textContent;
  if (text.length <= 1) {
    display.textContent = "0";
  } else {
    display.textContent = text.slice(0, -1);
  }
};

const mosavi = function () {
  let text = display.textContent;
  try {
    display.textContent = eval(text);
  } catch {
    display.textContent = "Error";
  }
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const val = buttons[i].textContent;

    if (val === "C") {
      clear();
    } else if (val === "←") {
      backSpace();
    } else if (val == "=") {
      mosavi();
    } else {
      if (display.textContent === "0" || display.textContent === "Error") {
        display.textContent = val;
      } else {
        display.textContent += val;
      }
    }
  });
}
