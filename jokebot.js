var guess;

var jokes = ["Why do a fly always bzzzzzz to people?", "How do fireflise start a race?", "If there are 5 flies in the kitchen how do you know which one is the Football player?", "What is the difference between a bird and a fly?"]
 
var answers = ["They want to bezzzz in your business", "Ready Set Glow", "The one thats is in the Sugar Bowl" , "A bird can fly and a fly can't bird"]
// alert(jokes[0]);




var randomNumber;
    
    
function randomize (){  randomNumber = Math.round(Math.random() * (jokes.length - 1)); }


// alert(randomNumber);

function tellJoke(){
  randomize();
  guess = prompt(jokes[randomNumber]);
 var answer=
  answers[randomNumber];
  
  if(answer === guess){
   alert("Correct!! Nice Job!!")
  } else {
    alert("Wrong!!! Nice try tho!!");
    alert(answer)
    
    
  }
};
