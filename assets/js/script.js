
//Start Quiz button
var startButton = document.getElementById ("startButton");

var startQuiz = document.getElementById ("quizBox");





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

function startGame(){
    
    var start = document.getElementById ("startingPage");
    start.style.display = ("none"); 
    nextQuestion();
}

function nextQuestion(){
    
var removeBarrier = document.getElementById("remove");
removeBarrier.classList.remove('hide')
startQuiz.style.display = ("block");
    
   
}

function selectAnswer (){

}

startButton.addEventListener ('click', startGame);