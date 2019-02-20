const game = () => {
    let playerScore = 0;
    let computerScore= 0;
  
    
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");

      
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };

    // play
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });

      // computer options
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {

            
            compareHands(this.textContent, computerChoice);

            // images update
            playerHand.src = `images/${this.textContent}.png`;
            computerHand.src = `images/${computerChoice}.png`;
          }, 2000);

          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = () => {
      const playerResult = document.querySelector(".player-wins");
      const computerResult = document.querySelector(".computer-wins");
      playerResult.textContent = playerScore;
      computerResult.textContent = computerScore;
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        return;
      }
      // check for rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Player Wins";
          playerScore += 1;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          computerScore += 1;
          updateScore();
          return;
        }
      }
      // check for paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          computerScore += 1;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          playerScore += 1;
          updateScore();
          return;
        }
      }
      // check for scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins";
          computerScore += 1;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          playerScore += 1;
          updateScore();
          return;
        }
      }
    };

    const restartGame = () =>{
      playerScore = 0;
      computerScore = 0;
    }

  
    // call inner functions 
    startGame();
    playMatch();
  };
  
  
  game();
  
