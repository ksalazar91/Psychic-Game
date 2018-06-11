//You're going to make a game just like the one in the video. 
//Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. 
//Put the following text on your page:

//gobal veriables
var wins = 0;
var losses = 0;
var guesses = 9;
var letterType = [];



//store all the letters to an array 
var letter = ["a", "b", "c", "d","e", "f", "g", "h","i", "j" , "k", "l", "m","n", "o", "p", "q","r", "s","t", "u", "v", "w", "x", "y", "z"];

//Chose a random letter
function getRandomInt(){
    return Math.floor(Math.random()* Math.floor(letter.length));
}


var i = getRandomInt();
var randomLetter = letter[i]; 

//updates the screet to reflect the current wins or losses, remaning guesses and letter aptempted 
function updateScreen(){
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
    document.getElementById("soFar").innerHTML = "Your Guesses so far: " + letterType; 
}

//when win we reset the setting so we can try and guess a new letter
function restarGame(){
    guesses = 9;
    letterType.length = 0; // clears the array

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
    document.getElementById("soFar").innerHTML = "Your Guesses so far: " + letterType; 
    
}

function win(){
    wins++;
    restarGame();
    randomLetter = letter[getRandomInt()]; 
}

function lost(input){
    guesses--;//decresse the guesse left
    letterType.push(input);//shows the letters that the array has
    if(guesses === 0){
        losses++;
        restarGame();
        randomLetter = letter[getRandomInt()];
    }            
    else{
        updateScreen();
    }
}

function searchArry(input){
    var k;
    var j= 0;

    for(var i=0; i<letter.length; i++){
        k = letterType[i];
        if(input === k){
            j = 1;
        }
    }
    return j;
}

console.log(randomLetter)





//get the user guesses from the keyboard
document.onkeypress = function(event){
      
    var x = event.keyCode;
    var y = String.fromCharCode(x);
   
    if(randomLetter === y.toLowerCase()){
       /* wins++;
        restarGame();
        randomLetter = letter[getRandomInt()];  */ 
        win();
    }
    
    else{
        var a = searchArry(y);
        if(a === 0){
            lost(y);
        }
        else{
            alert("Try diffrent letter");
        }
    }
    
}


//https://ksalazar91.github.io/Responsive-Portfolio/portfolio.html link to porfolio 