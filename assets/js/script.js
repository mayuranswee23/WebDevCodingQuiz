
//Start Quiz button
var startButton = document.getElementById ("startButton");

var startQuiz = document.getElementById ("quizBox");
var quizTime = document.getElementById ("time");





//Quiz Questions
var quizQuestions = [
    {
    question: "1+1?",
    options: ["1","2","3","4"],
    answer: "2"
},
{
    question: "2+1?",
    options: ["1","2","3","4"],
    answer: "3"
},
{
    question: "1+3?",
    options: ["1","2","3","4"],
    answer: "4"
},
{
    question: "2+2?",
    options: ["1","2","3","4"],
    answer: "4"
},
]; 
//time 
var timer = 5;
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

function nextQuestion(){
 startTime();   
var removeBarrier = document.getElementById("remove");
removeBarrier.classList.remove('hide')
startQuiz.style.display = ("block"); 
}

function selectAnswer (){

}

function displayGameOver(){
    window.alert ("Game Over");
}

startButton.addEventListener ('click', startGame);

