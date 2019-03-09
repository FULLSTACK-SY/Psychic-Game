// creates an array holding all of the computer options

var letters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var computerChoices = letters.split(",");
// creating variables to hold the number of wins, losses, guessed characters
var wins=0;
var losses=0;
var guessedChar=[];
var guessesLeft = 9;
// creating variables that hold references to the places in the HTML
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var yourGuessesText = document.getElementById("yourguesses-text");


    document.onkeyup = function(event) {
    // Determines which key was pressed.
    // var to return win increment

    var userGuess = event.key;

    // generate random character by computer.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      if(guessesLeft != 0){

        if(userGuess === computerGuess) {
            wins++;
            guessesLeft=9;
            guessedChar=[];
        }

        if(userGuess != computerGuess) {
            guessesLeft--;
            guessedChar.push(userGuess);
         }

        if(guessesLeft == 0) {
        guessesLeft=9;
        guessedChar=[];
        losses++;
        }


        // Display the user and computer guesses, and wins/losses/ties.
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        yourGuessesText.textContent = "Your Guesses so far: "+ guessedChar.toString();

      }
    }
