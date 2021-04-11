//Setting variables for my functions
var rules = document.querySelector(".info_card")
var start = document.getElementById("start_btn");
var questionContainer = document.getElementById("question-container");
var results_box = document.querySelector(".results_container");

var timerEl = document.querySelector(".timer");

var secondsLeft = 31;



//function to set the timer
function setTimer(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);

            //create function to show results page and user score
        }
    }, 1000);
}




//code runs when startGame is initiated
function startGame(){
    rules.setAttribute("class", "invisible");
    questionContainer.removeAttribute("class", "invisible");
    
    
   
  
 
}

function generateQuestion(){

}

start.onclick = startGame;


