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

const HTMLPlaceholderVar = document.getElementById("hidden-element");


document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll("input[name='difficulty']");
  const preview = document.getElementById("difficulty-preview");
  //may need to put one for the battle ground box to match what was selected earlier. 
  radios.forEach(radio => {
    radio.addEventListener("change", (event) => {
      const selectedImage = images[event.target.value];
      preview.src = selectedImage;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll("input[name='plays']");
  const yourPlay = document.getElementById("your-play");
  radios.forEach(radio => {
    radio.addEventListener("change", (event) => {
      HTMLPlaceholderVar.innerText = playOptions[event.target.value];
      yourPlay.src =  playOptions[event.target.value];
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

const rules = [
  /images/rock.png: "scissors",
  /images/paper.png:"rock",
  /images/scissors.png: "paper"
];


function playRPS () {
    document.getElementById("battleground").style.display = "flex";
    document.getElementById("game-container").style.display = "none";
     
    const opponentDiv = document.getElementById("opponents-choice");
    const oppPlayOption = playOptions[Math.floor(3*Math.random())];
    opponentDiv.src = oppPlayOption
    const opponentPlay = playOptions.indexOf(oppPlayOption);

    const yourPlayDiv = document.getElementById("your-play");
    const yourPlayOption = playOptions.indexOf(HTMLPlaceholderVar.innerText);
    const yourPlay = HTMLPlaceholderVar.innerText;
    
    console.log(yourPlay, rules[yourPlay]);
    if (yourPlay === opponentPlay){
      console.log("you tied");
      return "tie";
    } else if (rules[yourPlay] === opponentPlay) {
      console.log("you win");
      return "win";
    } else {
      console.log("you lost")
      return "lose";
    };

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
