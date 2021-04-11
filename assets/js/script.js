//Setting variables to manipulate DOM elements
var rules = document.querySelector(".info_card")
var start = document.getElementById("start_btn");
var questionContainer = document.getElementById("question-container");
var results_box = document.querySelector(".results_container");
var results = document.getElementById('results')
var optionsEl = document.getElementById("questionOptions");
var submit_btn = document.getElementById("submit");
var initialsEl = document.getElementById("initials");

var countdownTimer;


//variables to track my quiz status
var currentQuestionIndex = 0

var timerEl = document.getElementById("timerText");

var secondsLeft = 45;




//code runs when startGame is initiated
function startGame() {
    rules.setAttribute("class", "invisible");
    questionContainer.removeAttribute("class", "invisible");

    countdownTimer = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            endQuiz();

            //create function to show results page and user score
        }
    }, 1000);



    timerEl.textContent = secondsLeft

    generateQuestion();
}

function generateQuestion() {
    var currentQuestion = questions[currentQuestionIndex];

    var questionTitle = document.getElementById("question");
    questionTitle.textContent = currentQuestion.title;

    optionsEl.innerHTML = "";

    currentQuestion.choices.forEach(function (choice, i) {

        var possibleAnswer = document.createElement("button");
        possibleAnswer.setAttribute("class", "btn");
        possibleAnswer.setAttribute("value", choice);

        possibleAnswer.textContent = choice;

        optionsEl.appendChild(possibleAnswer);

        possibleAnswer.onclick = answerClick;
    });
}

function answerClick() {

    if (this.value !== questions[currentQuestionIndex].answer) {

        secondsLeft -= 5;

        if (secondsLeft < 0) {
            secondsLeft = 0;
        }

        timerEl.textContent = secondsLeft;

    }

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        endQuiz();
    } else {
        generateQuestion();
    }
}

function endQuiz() {

    clearInterval(countdownTimer);

    results.removeAttribute("class");
    questionContainer.setAttribute("class", "invisible");

    var endScore = document.getElementById("score_text");
    endScore.textContent = secondsLeft;

}

function highScores() {

    var initials = initialsEl.value.trim();

    if (initials !== "") {

        var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];

        var newScore = {
            score: secondsLeft,
            initials: initials
        };

        highscore.push(newScore);
        window.localStorage.setItem("highscore", JSON.stringify(highscore));

        window.location.href = "highScores.html";
    }
}

start.onclick = startGame;

submit_btn.onclick = highScores;


