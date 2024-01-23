let boxes = document.querySelectorAll(".box");
let container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newgame = document.querySelector("#new-btn");
let resetgame = document.querySelector("#reset-btn");

let turn = true;


let winnnerpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


boxes.forEach((box) => {
    console.log("hi bhai");
    box.addEventListener('click', () => {
        if (turn) {
            box.innerText = "X";
            turn = false;
        }
        else {
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        chechkwinner();
    });
});


let showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    container.classList.remove("hide");
    boxdisable();
}

let boxdisable = () => {
    for (box of boxes) {
        turn = true;
    }
}

const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

let resetbtn = () => {
    turn = true; 
    count = 0;
    enablebox();
    container.classList.add("hide");
};

let chechkwinner = () => {
    for (pattern of winnnerpattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showwinner(pos1Val);
                console.log("Win");
            }
        }
    }
};


newgame.addEventListener('click', resetbtn);
resetgame.addEventListener('click', resetbtn);