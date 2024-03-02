let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turnO = true;

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
];

// This func is use for reset or new game
const resetGame=()=>{
  enabled();
  turnO=true;
msgContainer.classList.add('hide')  
}


//   This code is to print 'x' and 'o' in any box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

// This code is for checkWinner e.g. x or o
const checkWinner = () => {
  for (const patterns of winPatterns) {
    let pos1Val = boxes[patterns[0]].innerText;
    let pos2Val = boxes[patterns[1]].innerText;
    let pos3Val = boxes[patterns[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        msgContainer.classList.remove("hide");
        msg.innerHTML = `Congratulations, Winner is ${pos1Val}`;
        disabled();
      }
    }
  }
};

// This code is for disabled func e.g. not adding x or o after winning
const disabled = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};

// This code is for enabled func e.g.  adding x or o after new or reset game
const enabled = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }};
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
