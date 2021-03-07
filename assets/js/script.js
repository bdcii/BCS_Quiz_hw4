//Setting variables for my functions
const rules = document.querySelector(".info_card")
const start = document.querySelector(".start");
const questionContainer = document.querySelector(".container");
const results_box = document.querySelector(".results_container");


//Start Game//
function startGame(){
    rules.classList.add("invisible");
    questionContainer.classList.remove("invisible");
    questionContainer.classList.add("visible");
}

start.addEventListener("click", startGame());
   


