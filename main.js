
const opponents = [
                "/images/always-plays-rock.svg",
                "/images/always-plays-paper.jpg",
                "/images/girl-who-likes-scissors.jpg",
                "/images/asl-fast-talker.jpg",
                "/images/creepy-kid-looking-in.png"
                ];
            
const choices = [
  {
    name: "rock",
    image: "/images/rock.png",
    rules: {
      "scissors": "You win!",
      "rock": "You tied.",
      "paper": "You lose!"
    } 
  },
  {
    name: "paper",
    image: "/images/paper.png",
    rules: {
      "scissors": "You Lose!",
      "rock": "You win.",
      "paper": "You tied!"
    }  
  },
  {
    name: "scissors",
    image: "/images/scissors.png",
    rules: {
      "scissors": "You tied!",
      "rock": "You lose.",
      "paper": "You win!"
    } 
  },
]

window.onload = function() {
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.checked = false;
  });
};

// const HTMLPlaceholderVar = document.getElementById("hidden-element");


document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll("input[name='difficulty']");
  const preview = document.getElementById("difficulty-preview");
  //may need to put one for the battle ground box to match what was selected earlier. 
  radios.forEach(radio => {
    radio.addEventListener("change", (event) => {
      const selectedImage = opponents[event.target.value];
      preview.src = selectedImage;
    });
  });
}); //will need to add a layer that that tweaks the behavior of the computer.

let yourChoice = null;
const yourPlay = document.getElementById("your-play");

document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll("input[name='plays']");
  radios.forEach(radio => {
    radio.addEventListener("change", (event) => {
      yourChoice =  choices[event.target.value];
      yourPlay.src =  yourChoice.image;
    });
  });
}); //<------this is the JS logic for the battle ground and how to get my selection to show linked to my selection.

                          
function startGame() {     
    document.getElementById("play-button").style.display = "none";
    document.getElementById("select-difficulty").style.display = "block";
    document.getElementById("battleground").style.display = "none";
}

function acceptOpponent() {
    document.getElementById("game-container").style.display = "flex";
    document.getElementById("select-difficulty").style.display = "none";
    //need to add a null option. return "Please choose your opponent"
    //if they press it again with no selection, 
    // code something silly (animation, etc.) that makes fun of them for not reading the instructions.
};


function playRPS () {
    document.getElementById("battleground").style.display = "flex";
    document.getElementById("game-container").style.display = "none";
     
    const opponentDiv = document.getElementById("opponents-choice");
    const oppPlayOption = choices[Math.floor(3*Math.random())];
    opponentDiv.src = oppPlayOption.image;
    const opponentPlay = oppPlayOption.name;

    const youPlayed = yourChoice.name;
    yourChoice.rules[opponentPlay])
    //will need to get the result posted to the DOM when I return to this.
  }
