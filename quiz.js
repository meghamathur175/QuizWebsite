const quizDiv = document.querySelector(".quizDiv");
const timer = document.querySelector(".timer");
const question = document.querySelector(".question");
const scoreDiv = document.querySelector("#scoreDiv")
const option = document.querySelectorAll(".option");
let questionNumber = 0;
const userAnswer = [];
const data = ['2+2', '2+2+2', '2+2*2', '2+2-4'];

DisplayQuestionAndOptions(); 

let id = setInterval(changeQuestion, 5000);

function changeQuestion() {
    if(questionNumber === data.length - 1) {
        clearInterval(id);
    }

    DisplayQuestionAndOptions();
}

function DisplayQuestionAndOptions() {
    // Display QUESTION
    question.innerHTML = data[questionNumber++].question;

    // Options
    for(let i=0 ; i<option.length ; i++) {
        option[i].innerHTML = data[questionNumber].options[i];    
    }
}
 
function changeQuestion() {
if(questionNumber === data.length - 1) {

}
}