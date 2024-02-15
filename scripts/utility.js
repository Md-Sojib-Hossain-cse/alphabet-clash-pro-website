function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function generateRandomAlphabet(){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const index = Math.round(Math.random()*25);
    const randomAlphabet = alphabet[index];
    return randomAlphabet;
}


function setBackgroundColorByID(elementId){
    const alphabet = document.getElementById(elementId);
    alphabet.classList.add('bg-orange-400');
}