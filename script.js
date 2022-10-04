// addEventListenser to make buttons responsive
var startButton = document.getElementById("start-button");
var questionCard = document.getElementById("questions");
var startCard = document.getElementById("start-card");
var answerButton = document.getElementById("answer-button");
var scoreCard = document.getElementById("scores");
document.querySelector("#start-button").addEventListener("click", startQuiz);

function startQuiz() {
    questionCard.style.display = 'block';
    startCard.style.display = "none";

    //add timer
    var timeLeft = 30;
    var elem = document.getElementById('timer');
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft < 0) {
            clearTimeout(timerId);
            gameEnds();
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }
};

function gameEnds() {
    questionCard.style.display = 'none';
    scoreCard.style.display = "block";
}

document.querySelector("#answer1").addEventListener("click", continueQuiz);
document.querySelector("#answer2").addEventListener("click", continueQuiz);

function continueQuiz() {
    questionCard.style.display = 'none';
    scoreCard.style.display = "block";
};

// add questions
var questionText = document.getElementById("question-text");
var answers = document.getElementById("answers");

var questions = [
    {
        questionText: "Which one is a self-closing tag?",
        answers: ["1. <br>", "2. <form>"],
        answer: "1. <br>",
    },

    {
        questionText: "What syntax do you use before the 'hover' selector? ",
        answers: ["1. :", "2. ."],
        answer: "1. :",
    },

    {
        questionText: "How to hide a card?",
        answers: ["1. display: none", "2. display: block"],
        answer: "1. display: none",
    },
];

function showQuestion() {
    var questions = questions[i];

    questionText.textContent = question.questionText;

    for (var i = 0; i < questions.length; i++) {

    }
}