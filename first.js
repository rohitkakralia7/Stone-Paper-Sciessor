let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");
const restart = document.querySelector(".restart");

restart.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    msg.innerText = "Let's Start Game";
    user.innerText = userScore;
    comp.innerText = compScore;
})

const increase = (userWin) => {
    if(userWin){
        userScore += 1;
        user.innerText = userScore;
    }else{
        compScore ++;
        comp.innerText = compScore;
    }
}
const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw! Paly Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        increase(userWin);
        // userScore++;
        // user.innerText = userScore;
        console.log("you win");
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        
        increase(userWin);
        //  compScore ++;
        // comp.innerText = compScore;
        console.log("comp win");
        msg.innerText = `You lost! your ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoice == compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
    const  userChoice = choice.getAttribute("id");
       
       playGame(userChoice);
    })
})

