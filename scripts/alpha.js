//keyboard button press
function handleKeyboardButtonPress(event){
    const display = document.getElementById('alphabet-display');
    const expectedKey = display.innerText.toLowerCase();
    console.log('Expected Key' , expectedKey);

    const pressedKey = event.key;
    const playerPressed = pressedKey.toLowerCase()
    if(playerPressed === 'Escape'){
        gameOver();
    }

    if(playerPressed === expectedKey){
        console.log('player pressed the correct key : ', playerPressed);
        console.log('You Got a point');

        const currentScore = getElementTextValueById('current-score');
        const newScore = currentScore + 1;
        setNewScore( 'current-score' , newScore);
        //---------------------------------------------------------------------
        // const currentScoreElement =  document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorByID(playerPressed);
        continueGame();
    }
    else{
        console.log('Player pressed a wrong key..😑');
        console.log('You Loose a life');

        const currentScore = getElementTextValueById('current-life');
        const newLife = currentScore - 1;
        setRemainingLife('current-life' , newLife);

        if(newLife === 0){
            gameOver();
        }

        //---------------------------------------------------------------------
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
    }
}
document.addEventListener("keyup" , handleKeyboardButtonPress);

// continue playing
function continueGame(){
    const randomAlphabet = generateRandomAlphabet();

    //display random alphabet
    const display = document.getElementById('alphabet-display');
    display.innerText = randomAlphabet;

    // set background color by ID 
    setBackgroundColorByID(randomAlphabet);
}

//game over
function gameOver(){
    hideElementById('play-window');
    showElementById('result-window');
    //update result
    const lastScore = getElementTextValueById('current-score');
    setNewScore('result-score', lastScore);

    //remove key bg color
    const currentAlphabet = getElementTextById('alphabet-display');
    removeBackgroundColorByID(currentAlphabet);
};

//play again
function playAgain(){
    hideElementById('result-window');
    showElementById('start-window');
}

//reset game 


// startPlay 
function startPlay(){
    //hide everything only show play window
    hideElementById('start-window');
    hideElementById('result-window');
    showElementById('play-window');

    //reset life and score 
    setNewScore('current-score' , 0);
    setRemainingLife('current-life' , 5);
    continueGame();
}