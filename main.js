const images = [
                "/images/always-plays-rock.svg",
                "/images/always-plays-paper.jpg",
                "/images/girl-who-likes-scissors.jpg",
                "/images/asl-fast-talker.jpg",
                "/images/creepy-kid-looking-in.png"
                ];
            
const playOptions = [
                     "/images/rock.png",
                     "/images/paper.png",
                     "/images/scissors.png"
];




window.onload = function() {
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.checked = false;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll("input[name='difficulty']");
  const preview = document.getElementById("difficulty-preview");
  //may need to put one for the battle ground box to match what was selected earlier. 
  radios.forEach(radio => {
    radio.addEventListener("change", (event) => {
      preview.src = images[event.target.value];
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll("input[name='plays']");
  const yourPlay = document.getElementById("your-play");
  radios.forEach(radio => {
    radio.addEventListener("change", (event) => {
      yourPlay.src = playOptions[event.target.value];
    });
  });
}); //<------this is the JS logic for the battle ground and how to get my selection to show linked to my selection.

                          
// function addImage(numb) {
//     const img = document.createElement("img");
//     img.src = images[numb];
//     document.getElementById("opponent").appendChild(img);
//     //figure out how to get alt image to match
    
// }

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
}

const rules = {
  rock:"scissors",
  paper: "rock",
  scissors: "paper"
};

function playRPS () {
    document.getElementById("battleground").style.display = "flex";
    document.getElementById("game-container").style.display = "none";
    
    const opponentDiv = document.getElementById("opponents-choice");
    opponentDiv.src = playOptions[Math.floor(3*Math.random())];
    const opponentPlay = opponentDiv.src;
    const yourPlay = document.getElementById("your-play").src;
    // const youWonRock = yourPlay === playOptions[0] && opponentPlay ===playOptions[2];
    // const youWonPaper = yourPlay === playOptions[1] && opponentPlay ===playOptions[0];
    // const youWonScissors = yourPlay === playOptions[2] && opponentPlay ===playOptions[1];
    // const tieGame = yourPlay === opponentPlay;

    // const youWin = youWonRock || youWonPaper || youWonScissors;

    // console.log(yourPlay, playOptions[0]);

    // if (tieGame) {
    //   console.log('Wow, you tied');
    // } else if (youWin){
    //   console.log("You win!!");
    // } else {
    //   console.log("Sorry, you lost.")
    // }

    } 


//     const userPlay = document.getElementById("your-play").value;
//     userPlay.src = playOptions[userPlay.value]
// ;
