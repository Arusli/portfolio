//initiates game
let remainingGuesses = 6;
//
function checkGame(){
    //to check winner, make a new array of the innerHTML with a forloop and push. 
    // then check array length against original word length.
    let winnerArray = []    
    for (i=0;i<wordContainer.children.length;i++){
        if (wordContainer.children[i].innerHTML !== '') {
            winnerArray.push(wordContainer.children[i].innerHTML)
        }
    }
    if (winnerArray.length === hiddenWord.length) {
       function winneralert() {
           alert('You win! The hidden word was ' + hiddenWord + '.');
       }
       setTimeout(winneralert, 500);
}
}
//intializes global variable for word array
let wordArray;

//select word
let hiddenWord = 'cannoli'.toUpperCase();
console.log(hiddenWord);

//create blanks
let wordContainer = document.querySelector('.word-container');

function createBlanks() {
    for (i=0; i<hiddenWord.length; i++) {
        wordContainer.appendChild(document.createElement('div'))
    }
    for (i=0; i<wordContainer.children.length; i++) {
        wordContainer.children[i].className = 'blank';
    }
}

createBlanks();

//check and hide letter
//convert hiddenword to an array?
function convertArray(){
    wordArray = Array.from(hiddenWord);
    console.log(wordArray);
}

convertArray();

//check letter

function checkLetter(e) {
    if (wordArray.includes(e.target.innerHTML)) {
        for (i=0; i<wordArray.length; i++) {
            if (wordArray[i] === e.target.innerHTML) {
                wordContainer.children[i].innerHTML = e.target.innerHTML
            }
        }
    } else {
        remainingGuesses -= 1;
        drawHangman();
    }
};

// Hides target letter on click.
function hideLetter(e) {
    if (e.target.className === 'letter') {
        e.target.className = 'letter hide';
        e.target.style.transition = '0s';
        checkLetter(e);
        checkGame();
    }
}
document.addEventListener('click', hideLetter);


//test
let h3 = document.querySelector('h3');
h3.style.color = 'red';
//

let head = document.querySelector('#head');
let face = document.querySelector('#face');
let torso = document.querySelector('#torso');
let leftarm = document.querySelector('#leftarm');
let rightarm = document.querySelector('#rightarm');
let leftleg = document.querySelector('#leftleg');
let rightleg = document.querySelector('#rightleg');

function drawHangman() {
    if (remainingGuesses === 5) {
        head.className = 'show';
        face.className = 'show';
    }
    if (remainingGuesses === 4) {
        torso.className = 'show';
    }
    if (remainingGuesses === 3) {
        leftarm.className = 'show';
    }
    if (remainingGuesses === 2) {
        rightarm.className = 'show';
    }
    if (remainingGuesses === 1) {
        leftleg.className = 'show';
    }
    if (remainingGuesses === 0) {
        rightleg.className = 'show';
        setTimeout(()=>{alert('You lost. Better luck next time.')}, 500);        
    }
}

//test
// drawHangman();


//


// initialize game
// select random hidden word from an array or from an api.
// display hidden word blanks, dependent on hiddenword.length.
// game begins, player may now click/select letters from word bank.
// check if clicked letter is correct (matches hiddenword) via innerHTML property.
// if letter is correct, reveal matching letters in the Hidden word.
// if letter is incorrect, remainingGuesses -= 1, un-hide one portion of the hangman body.
// if hidden word is revealed before remainingGuesses = 0, player wins, game ends.
// if remainingGuesses = 0, player loses, game ends.
// provide reset option, which reinitializes game.

