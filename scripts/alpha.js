//keyboard button press
function handleKeyboardButtonPress(event){
    const display = document.getElementById('alphabet-display');
    const expectedKey = display.innerText.toLowerCase();
    console.log('Expected Key' , expectedKey);

    const pressedKey = event.key;
    const playerPressed = pressedKey.toLowerCase()

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
        const newScore = currentScore - 1;
        setRemainingLife('current-life' , newScore);

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

// startPlay 
function startPlay(){
    hideElementById('start-window');
    showElementById('play-window');
    continueGame();
}