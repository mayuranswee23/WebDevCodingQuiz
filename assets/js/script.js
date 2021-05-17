
//Start Quiz button
var startButton = document.getElementById ("startButton");

var startQuiz = document.getElementById ("quizBox");
var quizTime = document.getElementById ("time");
var questionElement = document.getElementById ("questionTitle");
var answerOptions = document.getElementById ("questionButtons");
var currentQuestionIndex = 0;
var buttonA = document.getElementById ("a");
var buttonB = document.getElementById ("b");
var buttonC = document.getElementById ("c");
var buttonD = document.getElementById ("d");




//Quiz Questions
var quizQuestions = [
    {
    question: "What does DOM stand for?",
    options: ["Direct Object Messaging","Document Object Model","Document Object Manipulation","i dunno"],
    answer: "Document Object Model"
},
{
    question: "Javascript is..?",
    options: ["a movie script","Programming Language","Java","dunno"],
    answer: "Programming Language"
},
{
    question: "what is the syntax for function?",
    options: ["function{}","function()","funtion[]","dunno"],
    answer: "function()"
},
{
    question: "what is Javascript responsible for?",
    options: ["styling","content","behavior of webpage","dunno"],
    answer: "behavior of webpage"
},
]; 
//time 
var timer = 20;
function startTime (){
    var gameTime = setInterval(function(){

        if (timer > 0){
            quizTime.textContent = timer + " seconds left";
        // decrease time
        timer--; 
        }
        else {
            timer.textContent = "";
            clearInterval (startTime)
            displayGameOver();
        }     
    }
    ,1000
    )}

function startGame(){
    
    var start = document.getElementById ("startingPage");
    start.style.display = ("none"); 
    nextQuestion();
}

function showQuestion (){
    var currentQuestion = quizQuestions[currentQuestionIndex];
   questionElement.innerHTML = "<h1>" + currentQuestion.question + "</h1>";
   buttonA.textContent = quizQuestions[0].options[0];
   buttonB.textContent = quizQuestions[0].options[1];
   buttonC.textContent = quizQuestions[0].options[2];
   buttonD.textContent = quizQuestions[0].options[3];

buttonA.addEventListener ('click', wrongAnswer);
buttonB.addEventListener ('click', rightAnswer);
buttonC.addEventListener ('click', wrongAnswer);
buttonD.addEventListener ('click', wrongAnswer);



}

function nextQuestion(){
 startTime();   
var removeBarrier = document.getElementById("remove");
removeBarrier.classList.remove('hide')
startQuiz.style.display = ("block"); 

    showQuestion ();
}

function anotherQuestion (){
    currentQuestionIndex++
    var currentQuestion = quizQuestions[currentQuestionIndex];
   questionElement.innerHTML = "<h1>" + currentQuestion.question + "</h1>";
   buttonA.textContent = quizQuestions[1].options[0];
   buttonB.textContent = quizQuestions[1].options[1];
   buttonC.textContent = quizQuestions[1].options[2];
   buttonD.textContent = quizQuestions[1].options[3];

buttonA.addEventListener ('click', wrongAnswerq);
buttonB.addEventListener ('click', rightAnswerq);
buttonC.addEventListener ('click', wrongAnswerq);
buttonD.addEventListener ('click', wrongAnswerq);
}

function setOfQuestions(){
    currentQuestionIndex++
    var currentQuestion = quizQuestions[2];
   questionElement.innerHTML = "<h1>" + currentQuestion.question + "</h1>";
   buttonA.textContent = quizQuestions[2].options[0];
   buttonB.textContent = quizQuestions[2].options[1];
   buttonC.textContent = quizQuestions[2].options[2];
   buttonD.textContent = quizQuestions[2].options[3];

buttonA.addEventListener ('click', wrongAnswerw);
buttonB.addEventListener ('click', rightAnswerw);
buttonC.addEventListener ('click', wrongAnswerw);
buttonD.addEventListener ('click', wrongAnswerw);

}

function nextSetOfQuestions(){
    // currentQuestionIndex++
//     var currentQuestion = quizQuestions[currentQuestionIndex];
//    questionElement.innerHTML = "<h1>" + currentQuestion.question + "</h1>";
//    buttonA.textContent = quizQuestions[3].options[0];
//    buttonB.textContent = quizQuestions[3].options[1];
//    buttonC.textContent = quizQuestions[3].options[2];
//    buttonD.textContent = quizQuestions[3].options[3];

// buttonA.addEventListener ('click', wrongAnswer);
// buttonB.addEventListener ('click', rightAnswer);
// buttonC.addEventListener ('click', wrongAnswer);
// buttonD.addEventListener ('click', wrongAnswer);

// function rightAnswer(){
//     window.alert ('Correct')
//     // nextSetOfQuestions();
// }

// function wrongAnswer() {
//     window.alert ('The answer is wrong')
//     timer = timer - 10;
//     // nextSetOfQuestions();

}

function displayGameOver(){
    window.alert ("Game Over");
}

function rightAnswer(){
    window.alert ('Correct')
    anotherQuestion ();
}

function wrongAnswer() {
    window.alert ('The answer is wrong')
    timer = timer - 10;
    anotherQuestion();
}

function rightAnswerq(){
    window.alert ('Correct')
    setOfQuestions ();
}

function wrongAnswerq() {
    window.alert ('The answer is wrong')
    timer = timer - 10;
    setOfQuestions();
}

function rightAnswerw(){
    window.alert ('Correct')
    
    window.alert ("Your score is " + timer);
}

function wrongAnswerw() {
    window.alert ('The answer is wrong')
    timer = timer - 10;
    window.alert ("Your score is " + timer);
    
}
startButton.addEventListener ('click', startGame);

