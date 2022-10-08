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
var answerButton = document.getElementsByClassName("answer-button");
var scoreCard = document.getElementById("scores");
document.querySelector("#start-button").addEventListener("click", startQuiz);
var currentQuestion = 0;

var currentHighscore = localStorage.getItem("mytime");
var timeLeft = 60;

var elem = document.getElementById('timer');


function countdown() {
    var timerId = setInterval(countdown, 1000);
    if (timeLeft < 0) {
        clearTimeout(timerId);
        gameEnds();
    }
    else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
};


function startQuiz() {
    questionCard.style.display = 'block';
    startCard.style.display = "none";
    showQuestion();
    countdown();
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

function continueQuiz(event) {
    // console.log(event.target);
    var button = answer1.textContent;
    console.log(button);
    var button2 = answer2.textContent;
    results.style.display = "block";
    // console.log(button.innerHTML);
    console.log(options[currentQuestion].answer);

        if (button === options[currentQuestion].answer && timeLeft > 0) {
            resultText.textContent = "Correct!";
            showQuestion();
        } else {
            resultText.textContent = "Incorrect!";
            if (timeLeft >= 10) {
                timeLeft = timeLeft - 10;
                // countdown();
            } else {
                timeLeft = 0;
                gameEnds();
            }
        }

        currentQuestion++;

        // if (time <= 0 || currentQuestion === options.length) {
        //     gameEnds();
        // } else {
        //     showQuestion();
        // }
    };

// questionCard.style.display = 'none';
// scoreCard.style.display = "block";


// add questions
// var questionText = document.getElementById("question-text");
// var answers = document.getElementById("answers");

// answerButton.onclick = continueQuiz;
