// initialize game
// select random hidden word from an array or from an api.
// display hidden word blanks, dependent on hiddenword.length.
// game begins, player may now click/select letters from word bank.
// check if clicked letter is correct (matches hiddenword) via innerHTML property.
// if letter is correct, reveal matching letters in the Hidden word.
// if letter is incorrect, remainingGuesses -= 1, un-hide one portion of the hangman body.
//if remainingGuesses = 0, player loses, game ends.
// if hidden word is revealed before remainingGuesses = 0, player wins, game ends.
// Game End Screen provides Reset Option, which reinitializes game.


//establish remaining guesses
let remainingGuesses = 7;

//intializes global variable, that is later assigned the value of an array made out of the hiddenWord's letters.
let hiddenWordAsArray;

//initializes var hiddenWord to be defined later by random number or api.
let hiddenWord;

//creates objects for the body parts of the hangman
let hangmanBody = document.querySelector('.hangman').children; // hangmanBody[0] = gallows
let head = document.querySelector('#head');
let face = document.querySelector('#face');
let torso = document.querySelector('#torso');
let leftarm = document.querySelector('#leftarm');
let rightarm = document.querySelector('#rightarm');
let leftleg = document.querySelector('#leftleg');
let rightleg = document.querySelector('#rightleg');

//selectors for necessary elements
let message = document.querySelector('#message');
const letters1 = document.querySelector('.letters1');
const letters2 = document.querySelector('.letters2');
let wordContainer = document.querySelector('.word-container');



// fetches random word from api
let url = 'https://random-word-api.herokuapp.com//word?number=1'



startGame();





//Alternative random word generator: Downloaded full json object from the api, saved as a js variable.
//selects random word from wordlist.js
// function selectHiddenWord() {
//     const randomNum = Math.floor(Math.random() * Math.floor(wordList.length));
//     hiddenWord = wordList[randomNum].toUpperCase();
//   }
// selectHiddenWord()
// console.log(hiddenWord);
// makeRequest();



//GAME FUNCTIONS

//requests api, converts response to json, stores as hiddenWord, creates blanks.
//the await blocks the code within the function while code outside runs
//this allows hiddenword to be assigned a value BEFORE calling the functions that require it.
//which was the problem i had in the earlier version.
async function makeRequest() {
    let response = await fetch(url);
    let jsonObject = await response.json();
    hiddenWord = jsonObject[0].toUpperCase();
    console.log(jsonObject);
    createBlanks();
    convertArray();
}

//starts game
function startGame() {
    makeRequest();
}

//create blanks: this adds children (class='blank') to the word-container div.
//these are the blank spots that represent the hidden word, and are revealed with correct guesses.
function createBlanks() {
    for (i=0; i<hiddenWord.length; i++) {
        wordContainer.appendChild(document.createElement('div'))
    }
    for (i=0; i<wordContainer.children.length; i++) {
        wordContainer.children[i].className = 'blank';
    }
}


//check and hide letter
//convert hiddenword to an array?
function convertArray(){
    hiddenWordAsArray = Array.from(hiddenWord);
    console.log(hiddenWordAsArray);
}



//checks game for a winner
function checkGame(){
    //to check winner, make a new array of the filled in blanks of wordContainer.
    //fill array with a forloop and push. 
    //then check array length against original word length.
    //if array lengths match, that means word has been solved.
    let winnerArray = []    
    for (i=0;i<wordContainer.children.length;i++){
        if (wordContainer.children[i].innerHTML !== '') {
            winnerArray.push(wordContainer.children[i].innerHTML)
        }
    }
    if (winnerArray.length === hiddenWord.length) {
       function winneralert() {
           message.className = 'show';
           message.innerHTML = 'You win! The hidden word was ' + '<a href="https://www.google.com/search?q=' + hiddenWord + '+definition" target="_blank">' + hiddenWord + '</a>' + '.' + '<div onclick="reset()" style="margin-top:20px; background-color: pink; cursor: pointer;"><a style="color: purple; font-size: 2rem; font-weight: bold;">New Game?</a></div>';
       }
       document.removeEventListener('click', hideLetter);
       setTimeout(winneralert, 500);
    }
}


//checks the hiddenWord array for correct letter, to be called during the hide letter function.
function checkLetter(e) {
    if (hiddenWordAsArray.includes(e.target.innerHTML)) {
        for (i=0; i<hiddenWordAsArray.length; i++) {
            if (hiddenWordAsArray[i] === e.target.innerHTML) {
                wordContainer.children[i].innerHTML = e.target.innerHTML
            }
        }
    } else {
        remainingGuesses -= 1;
        drawHangman();
    }
};

// Hides target letter on click, then performs the other functions of the game.
function hideLetter(e) {
    if (e.target.className === 'letter') {
        e.target.className = 'letter hide';
        e.target.style.transition = '0s';
        checkLetter(e);
        checkGame();
    }
}

document.addEventListener('click', hideLetter);


//checks the number of remaining guesses and 'draws' hangman accordingly
function drawHangman() {
    if (remainingGuesses === 7) {
       for (i=1; i<hangmanBody.length; i++) {
           hangmanBody[i].className = 'hide';
       }
    }
    if (remainingGuesses === 6) {
        head.className = 'show';
    }
    if (remainingGuesses === 5) {
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
        document.removeEventListener('click', hideLetter);
        function alertLoser(){
            message.className = 'show';
            message.innerHTML = 'You lost. The hidden word was ' + '<a href="https://www.google.com/search?q=' + hiddenWord + '+definition" target="_blank">' + hiddenWord + '</a>' + '.' + '<div onclick="reset()" style="margin-top:20px; background-color: pink; cursor: pointer;"><a style="color: purple; font-size: 2rem; font-weight: bold;">New Game?</a></div>';
        }
        setTimeout(alertLoser, 500);        
    }
}

//resets the alphabet 
function showAlphabet(){
    for (let element of letters1.children) {
        element.className = 'letter';
        element.style.transition = '.6s'

    }
    for (let element of letters2.children) {
        element.className = 'letter';
        element.style.transition = '.6s'
    }
}

//resets game
function reset(){
    if (message.className === 'show') {
        message.className = 'hide';
        message.innerHTML = '';
        remainingGuesses = 7;
        wordContainer.innerHTML = '';
        drawHangman();
        makeRequest();
        showAlphabet();
        document.addEventListener('click', hideLetter);   
    }
} //end reset()


//Bug: after one playthrough, the transition effect wears off on some of the alphabet. why?
//I think that after clicking letters, they do not respawn with their transition property intact. why?
//For some reason the alphabet (.letter) loses its transition property after re-classifying
//Solution: Reapply inline style transition in showAlphabet() function.

//Bug: api problem
//solution: Declare createBlanks() and convertArray() inside the async function, thus making them
//await the value of hiddenWord before being called.

