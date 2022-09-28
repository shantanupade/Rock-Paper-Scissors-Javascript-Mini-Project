const userScoreVal = document.querySelector("#userScoreVal");
const compScoreVal = document.querySelector("#compScoreVal");
const resultUserStat = document.querySelector("#result-user-stat");
const resultCompStat = document.querySelector("#result-comp-stat");
const resultFinalStat = document.querySelector("#result-final-stat");
const rock = document.querySelector("#r").children[0];
const paper = document.querySelector("#p").children[0];
const scissors = document.querySelector("#s").children[0];

let userTag = document.createElement("span");
let compTag = document.createElement("span");
let winTag = document.createElement("span");
resultUserStat.appendChild(userTag);
resultCompStat.appendChild(compTag);
resultFinalStat.appendChild(winTag);


let compCount = 0;
let userCount = 0;


rock.addEventListener("click", () => {
    let computerChoice = computer();
    if (compCount != 3 && userCount != 3) {
        userTag.innerText = "rock";
        if (computerChoice === "paper") {
            compCount++;
            compScoreVal.textContent = compCount;
            compTag.innerText = "paper";
        }
        else if (computerChoice === "scissors") {
            userCount++;
            userScoreVal.textContent = userCount;
            compTag.innerText = "scissors";
        }
        else {
            compTag.innerText = "rock";
        }
    }
    maxCount()

});

paper.addEventListener("click", () => {
    let computerChoice = computer();
    if (compCount != 3 && userCount != 3) {
        userTag.innerText = "paper";
        if (computerChoice === "scissors") {
            compCount++;
            compScoreVal.textContent = compCount;
            compTag.innerText = "scissors";
        }
        else if (computerChoice === "rock") {
            userCount++;
            userScoreVal.textContent = userCount;
            compTag.innerText = "rock";
        }
        else {
            compTag.innerText = "paper";
        }
    }
    maxCount()

});

scissors.addEventListener("click", () => {
    let computerChoice = computer();
    if (compCount != 3 && userCount != 3) {
        userTag.innerText = "scissors";
        if (computerChoice === "rock") {
            compCount++;
            compScoreVal.textContent = compCount;
            compTag.innerText = "rock";
        }
        else if (computerChoice === "paper") {
            userCount++;
            userScoreVal.textContent = userCount;
            compTag.innerText = "paper";
        }
        else {
            compTag.innerText = "scissors";
        }
    }
    maxCount()
    
});

function computer() {
    let options = ["rock", "paper", "scissors"]
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

function maxCount(){
    if (userCount == 3) {
        winTag.textContent = "You";
        setTimeout(clear, 5000);
    }
    else if (compCount == 3) {
        winTag.textContent = "Computer";
        setTimeout(clear, 5000);
    }
}

function clear() {
    compTag.innerText = " "
    userTag.innerText = " ";
    compScoreVal.textContent = "0";
    userScoreVal.textContent = "0";
    winTag.textContent = " ";
    compCount = 0;
    userCount = 0;
}