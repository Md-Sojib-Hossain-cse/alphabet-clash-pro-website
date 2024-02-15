// function startPlay(){
//     //hide the start window 
//     //show the play window
//     const startWindow = document.getElementById('start-window');
//     startWindow.classList.add('hidden');
//     const playWindow = document.getElementById('play-window');
//     playWindow.classList.remove('hidden');
// }

// continue playing
function continueGame(){
    const randomAlphabet = generateRandomAlphabet();

    //display random alphabet
    const display = document.getElementById('alphabet-display');
    display.innerText = randomAlphabet;

    // set background color by ID 
    setBackgroundColorByID(randomAlphabet);
}

// startPlay 
function startPlay(){
    hideElementById('start-window');
    showElementById('play-window');
    continueGame();
}