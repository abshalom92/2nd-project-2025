

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
    //document.getElementById("select-difficulty").style.display = "block";
    
    
    
    // chooseDifficulty.
    // const imageNumber = 
    // const selectDifficulty = 
    //maybe a radio button? will figure out tomorrow
    // addImage();
}

function chooseWeapon() {
    document.getElementById("game-container").style.display = "flex";
    document.getElementById("select-difficulty").style.visibility = "collapse";
}

//I eventually want it to be more like "press play" > pick opponent > play rock paper or scissor > your img
//renders simultaneously as the opponents image. 