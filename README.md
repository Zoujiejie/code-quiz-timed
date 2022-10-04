# Code-Quiz-Timed

## User Story
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

## Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

## Psuedocode
* Create a count down timer of 60 seconds, when the user clicks the start button, the timer starts counting down every second. When the timers reaches 0, the game ends
* When the user answers a question, it will show result of correct or wrong and jump to the next question. And when the answer is wrong, the timer will minus 10 seconds. When all questions answered before the timer reaches 0, then game ends
* When the game ends, the user will be able to see the score. And when the user enters their initials, the score is saved and the user will be able to see the ranking

## Features
* A count down timer and incorrect answers will be penalized 10 seconds
* Responsive buttons to start the quiz, submit, go back to the quiz and clear scores
* Responsive answer buttons to reveal the results (correct or wrong) and jump to the next question
* After each user gets their scores and enter their initials, both of which will be stored in local storage and the scores will be ranked from the highest to the lowest
* A "View Highscores" hyperlink that can direct the user to the score ranking page

## Demo Video
