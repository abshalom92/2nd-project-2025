

const images = [
                "/images/always-plays-rock.svg",
                "/images/always-plays-paper.jpg",
                "/images/girl-who-likes-scissors.jpg",
                "/images/asl-fast-talker.jpg",
                "/images/creepy-kid-looking-in.png"
                ];

document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll("input[name='difficulty']");
  const preview = document.getElementById("difficulty-preview");
  //need to put one for the battle ground box to match what was selected earlier. 
  radios.forEach(radio => {
    radio.addEventListener("change", (event) => {
      preview.src = images[event.target.value];
    });
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const buttons = document.querySelectorAll("input[name='difficulty']");
//   const preview = document.getElementById("difficulty-preview");
//   //need to put one for the battle ground box to match what was selected earlier. 
//   radios.forEach(radio => {
//     radio.addEventListener("change", (event) => {
//       preview.src = images[event.target.value];
//     });
//   });
// }); <------this is the JS logic for the battle ground and how to get my selection to show linked to my selection.

                          
// function addImage(numb) {
//     const img = document.createElement("img");
//     img.src = images[numb];
//     document.getElementById("opponent").appendChild(img);
//     //figure out how to get alt image to match
    
// }

function startGame() {
    // const playBoxDiv = document.getElementById("play-box");
    // const difficulty = document.createElement('h3');
    // playBoxDiv.appendChild(difficulty);
      
    document.getElementById("play-button").style.display = "none";
    document.getElementById("select-difficulty").style.display = "block";
    
    
    
    // chooseDifficulty.
    // const imageNumber = 
    // const selectDifficulty = 
    // addImage();
}

function acceptOpponent() {
    document.getElementById("game-container").style.display = "flex";
    document.getElementById("select-difficulty").style.visibility = "collapse";
}

function chooseWeapon () {
    document.getElementById("battleground").style.display = "flex";
    document.getElementById("game-container").style.visibility = "collapse";
}