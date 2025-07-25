"use strict";

const btns = document.querySelectorAll(".cell");
const btnRestart = document.getElementById("restart-btn");
const showPlayer = document.querySelector(".status");

let activePlayer = "X";
let gameStatus = true;
let bord = ["", "", "", "", "", "", "", "", ""];

const checkWinPlayer = function (player) {
  const status =
    (bord[0] === player && bord[1] === player && bord[2] === player) ||
    (bord[3] === player && bord[4] === player && bord[5] === player) ||
    (bord[6] === player && bord[7] === player && bord[8] === player) ||
    (bord[2] === player && bord[4] === player && bord[6] === player) ||
    (bord[0] === player && bord[4] === player && bord[8] === player) ||
    (bord[0] === player && bord[3] === player && bord[6] === player) ||
    (bord[1] === player && bord[4] === player && bord[7] === player) ||
    (bord[2] === player && bord[5] === player && bord[8] === player);
  if (status) {
    alert(`🏆 Player ${player} Won`);
    gameStatus = false;
  } else if (!bord.includes("")) {
    alert("🤝 Equal Players.");
    gameStatus = false;
  }
};

btns.forEach((element) => {
  element.addEventListener("click", function () {
    const index_ = element.dataset.index;
    if (gameStatus && bord[index_] === "") {
      if (activePlayer === "X") {
        bord[index_] = "X";
        activePlayer = "O";
        checkWinPlayer("X");
      } else {
        bord[index_] = "O";
        activePlayer = "X";
        checkWinPlayer("O");
      }
      element.textContent = activePlayer;
      showPlayer.textContent = `Player ${activePlayer}'S turn`;
      element.classList.add(activePlayer);
    }
  });
});

btnRestart.addEventListener("click", function () {
  activePlayer = "X";
  gameStatus = true;
  bord = ["", "", "", "", "", "", "", "", ""];
  btns.forEach((element) => {
    element.textContent = "";
  });
  showPlayer.textContent = `Player ${activePlayer}'S turn`;
  element.classList.remove("X", "O");
});
