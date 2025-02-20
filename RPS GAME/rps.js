let images = document.querySelectorAll(".image");
let msg = document.querySelector("#msg");
let comcountel = document.querySelector("#ComScore");
let usercountel = document.querySelector("#UserScore");

// Initialize scores
let comcount = 0;
let usercount = 0;

// Add event listeners to images
images.forEach((image) => {
    image.addEventListener("click", () => {
        const userChoice = image.getAttribute("id");
        const comChoice = getComChoice();
        playGame(userChoice, comChoice);
    });
});

// Function to generate Computer's choice
const getComChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const indx = Math.floor(Math.random() * 3); // Generate a random index (0, 1, or 2)
    return choices[indx]; // Return the choice at the random index
};

// Function to play the game
const playGame = (userChoice, comChoice) => {
    if (userChoice === comChoice) {
        gameDraw();
    } else if (
        (userChoice === "Rock" && comChoice === "Scissors") ||
        (userChoice === "Paper" && comChoice === "Rock") ||
        (userChoice === "Scissors" && comChoice === "Paper")
    ) {
        usercount++;
        showWinner("User", userChoice, comChoice);
    } else {
        comcount++;
        showWinner("Computer", comChoice, userChoice);
    }

    // Update Scoreboard
    updateScore();
};

// Function to update score display
const updateScore = () => {
    comcountel.innerText = comcount;
    usercountel.innerText = usercount;
};

// Function to display draw message
const gameDraw = () => {
    msg.innerText = "Game is a Draw! Play again.";
    updateScore();
};

// Function to display winner message
const showWinner = (winner, winnerChoice, loserChoice) => {
    if (winner === "User") {
        msg.innerText = `You Won! Your choice was ${winnerChoice}, and the computer's choice was ${loserChoice}.`;
    } else {
        msg.innerText = `You Lost! Your choice was ${loserChoice}, and the computer's choice was ${winnerChoice}.`;
    }
};