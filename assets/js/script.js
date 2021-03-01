//required elements
const start = document.querySelector(".start");
const questionContainer = document.querySelector(".container");
const results_box = document.querySelector(".results_container");


start.onclick = startGame(){
    questionContainer.classList.add(".activeInfo");

}
start.addEventListener("click", startGame());
   







