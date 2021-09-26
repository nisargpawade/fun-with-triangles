const quizForm=document.querySelector(".quiz-form");
const ques1=document.querySelectorAll(".que1");
const ques2=document.querySelectorAll(".que2");
const submitBtn=document.querySelector("#btn-submit");
const output=document.querySelector("#output");

const correctAnswers=["90°", "right angled"];

function calculateScore(){
    let score=0;
    let index=0;
    const data = new FormData(quizForm);
    for (let value of data.values()){
        if (value === correctAnswers[index]){
            score=score+1
        }
        index=index+1
    }
    output.innerText="Your score is "+score
}

submitBtn.addEventListener('click', calculateScore);