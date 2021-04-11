function postHighScore() {

    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.forEach(function(score) {
        var liEl = document.createElement("li");
        liEl.textContent = score.initials + ":  " + score.score;

        var olEl = document.getElementById("highscores");
        olEl.appendChild(liEl);
    });

}

function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }

  document.getElementById("clear").onclick = clearHighscores;

  postHighScore();