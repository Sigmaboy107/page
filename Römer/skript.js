function startQuiz() {
    document.getElementById("quiz-container").style.display = "block";
}

function checkAnswer(button, antwort) {
    if (antwort === "richtig") {
        document.getElementById("quiz-result").innerText = "Richtig! Rom wurde 753 v. Chr. gegründet.";
        button.style.backgroundColor = "green";
    } else {
        document.getElementById("quiz-result").innerText = "Falsch! Versuche es nochmal.";
        button.style.backgroundColor = "red";
    }
}
