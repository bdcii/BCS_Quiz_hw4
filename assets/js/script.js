//Setting variables for my functions
var rules = document.querySelector(".info_card")
var start = document.querySelector("#start_btn");
var questionContainer = document.querySelector(".container");
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
    rules.classList.add("invisible");
    rules.classList.remove("visible");
    questionContainer.classList.remove("invisible");
    questionContainer.classList.add("visible");
    results_box.classList.remove("visible");
    results_box.classList.add("invisible"); 
}

start.addEventListener("click", function() {
    setTimer();
   //code to start timer
   startGame();
});


