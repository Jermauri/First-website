var guess;

var jokes = ["What did the receiver say to the football?", " Why was Cinderella such a poor football player?", "What happens to football players who go blind?", "Which football player wears the biggest helmet?"]
 
var answers = ["Catch you later.", "Her coach was a pumpkin.", "They become referees." , "The one with the biggest head."]
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
