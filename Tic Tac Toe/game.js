let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let msgBox = document.querySelector(".msg-box");
let resetBtn = document.querySelector("#rst-btn");
let newGameBtn = document.querySelector("#new-btn");
let turn0 = true;

// Hide the winner message initially
msgBox.classList.add("hide");

const posWin = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    // Check for a winner after each move
    chkwinner();
  });
});

const chkwinner = () => {
  for (let pattern of posWin) {
    let posval1 = boxes[pattern[0]].innerText;
    let posval2 = boxes[pattern[1]].innerText;
    let posval3 = boxes[pattern[2]].innerText;

    // Ensure the boxes are not empty before checking for a win
    if (posval1 !== "" && posval1 === posval2 && posval1 === posval3) {
      showWinner(posval1);
      disableAllBoxes();
      return;
    }
  }
   // Check for a draw using a for loop
   let isDraw = true; // Assume it's a draw initially
   for (let i = 0; i < boxes.length; i++) {
     if (boxes[i].innerText === "") {
       isDraw = false; // If any box is empty, it's not a draw
       break;
     }
   }
 
   if (isDraw) {
     gameDraw();
   }
 
};

const showWinner = (winner) => {
  msg.innerText = `🎉 Congratulations! The winner is ${winner}`;
  msgBox.classList.remove("hide");
};

// Function to handle a draw
const gameDraw = () => {
  msg.innerText = `😢 Game is a Draw.`;
  msgBox.classList.remove("hide");
  disableAllBoxes();
};

// Disable all boxes once a winner is found
const disableAllBoxes = () => {
  boxes.forEach((box) => (box.disabled = true));
};

// Enable all boxes for a new game
const enableBoxes = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
};

// Reset or Start a New Game
const resetGame = () => {
  turn0 = true; // Fixing the typo (was turnO)
  enableBoxes();
  msgBox.classList.add("hide"); // Fixing msgContainer -> msgBox
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
