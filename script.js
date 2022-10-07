// addEventListenser to make buttons responsive
var options = [
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

var startButton = document.getElementById("start-button");
var questionCard = document.getElementById("questions");
var startCard = document.getElementById("start-card");
var answerButton = document.getElementById("answer-button");
var scoreCard = document.getElementById("scores");
document.querySelector("#start-button").addEventListener("click", startQuiz);
var currentQuestion = 0;

var currentHighscore = localStorage.getItem("mytime");
var timeLeft = 30;

function startQuiz() {
    questionCard.style.display = 'block';
    startCard.style.display = "none";

    //add timer
    var elem = document.getElementById('timer');
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft < 0) {
            clearTimeout(timerId);
            gameEnds();
        }
        else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    };
    showQuestion();
};

function gameEnds() {
    questionCard.style.display = 'none';
    scoreCard.style.display = "block";
}

var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");

answer1.addEventListener("click", continueQuiz);
answer2.addEventListener("click", continueQuiz);

var results = document.querySelector("#results");
var resultText = document.querySelector("#result-text");

function continueQuiz(event) {
    // console.log(event.target);
    var button = answer1.textContent;
    var button2 = answer2.textContent;
    results.style.display = "block";
    console.log(button.value);
    console.log(options[currentQuestion].answer);

    if (button.value === options[currentQuestion].answer) {
        resultText.textContent = "Correct!";
        showQuestion();
    } else {
        resultText.textContent = "Incorrect!";
        if (timeLeft >= 10) {
            timeLeft = timeLeft - 10;
            countdown();
        } else {
            timeLeft = 0;
            countdown();
            gameEnds();
        }
    }

    currentQuestion++;

    if (time <= 0 || currentQuestion === options.length) {
        gameEnds();
    } else {
        showQuestion();
    }
};

// questionCard.style.display = 'none';
// scoreCard.style.display = "block";


// add questions
// var questionText = document.getElementById("question-text");
// var answers = document.getElementById("answers");


function showQuestion() {
    var questions = options[currentQuestion];
    var h2QuestionElement = document.querySelector("#question-text");
    h2QuestionElement.textContent = questions.questionText;

    for (var i = 0; i < questions.answers.length; i++) {
        var answer = questions.answers[i];
        let answersButton = document.querySelector("#answer" + (i + 1));
        answersButton.textContent = answer;


        // };
        // currentQuestion++;
        //     if (currentQuestion < questions.length) {
        //         showQuestion();
        //       } else {
        //         gameEnds();
        //       }
    };
};

answerButton.onclick=continueQuiz;
