

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
    console.log(images[numb]);
    //figure out how to get alt image to match
    
}

function startGame() {
    const difficulty = document.getElementById('difficulty');
     
    // const selectDifficulty = 
    //maybe a radio button? will fifgure out tomorrow
    addImage(gameDifficulty);
}