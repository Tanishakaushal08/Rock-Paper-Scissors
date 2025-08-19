let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg-btn');

const userScorePara = document.querySelector('#your-score');
const compScorePara = document.querySelector('#comp-score');

let draw = () => {
    console.log("Game was draw");
    msg.innerText = "Draw! Play again...";
    msg.style.backgroundColor = "#40916c";
}

const showWinner = (userWin, compChoice, userChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You! Win \u{1F389} Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You! lose...Comp ${userChoice} beats you ${compChoice}`;
        msg.style.backgroundColor = "#bf0603";
    }
};

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor((Math.random()) * 3);
    return option[ranIdx];
}

const playGame = (userChoice) => {
    console.log("userchoice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("compchoice = ", compChoice);

    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, compChoice, userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});