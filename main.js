

const images = [
                            "/images/always-plays-rock.svg",
                            "/images/always-plays-paper.jpg",
                            "/images/girl-who-likes-scissors.jpg",
                            "/images/asl-fast-talker.jpg",
                            "/images/creepy-kid-looking-in.png"
                            ];
                          
function addImage(numb) {
    const img = document.createElement("img");
    img.src = images[numb];
    document.getElementById("opponent").appendChild(img);
    //figure out how to get alt image to match
    
}

function startGame() {
    // const playBoxDiv = document.getElementById("play-box");
    // const difficulty = document.createElement('h3');
    // playBoxDiv.appendChild(difficulty);
      
    const playButton = document.getElementById("play-button");
    const showPlayButton = playButton.style;
    const showDifficulty = document.getElementsByName("label");
    console.log(showDifficulty);
    showDifficulty.style.display = "block";
    showPlayButton.display = "none";
    
    // chooseDifficulty.
    // const imageNumber = 
    // const selectDifficulty = 
    //maybe a radio button? will fifgure out tomorrow
    // addImage();
}