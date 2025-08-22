

function addImage(numb) {
    const img = document.createElement("img");
    const imageChoices = [
                            "/images/always-plays-rock.svg",
                            "/images/always-plays-paper.jpg",
                            "/images/girl-who-likes-scissors.jpg",
                            "/images/asl-fast-talker.jpg",
                            "/images/creepy-kid-looking-in.png"
                            ];
    img.src = imageChoices[numb];
    //figure out how to get alt image to match
    
}

function startGame() {
    const gameDifficulty = window.prompt("How hard do want this game? On a scale of 1 - 5")
    //maybe a radio button? will fifgure out tomorrow
    addImage(gameDifficulty);
}