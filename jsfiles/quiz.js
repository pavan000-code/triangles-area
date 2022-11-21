const form=document.querySelector(".main-body");
const submitBtn=document.querySelector("#btn-submit");
let score=0;
const correctAnswers=["0","Right Angled","8","180°","Equilateral","31°","Right","Isosceles"]
const outputDiv=document.querySelector(".main-message")
const outputMsg=document.querySelector("#output-short");
const quesContainer=document.querySelectorAll(".question-details")


const checkAllQuestionsAttempted=(attempted_values)=>{
    let index=0;
    for(let value of attempted_values){
        index+=1;
    }
    if(index===correctAnswers.length){
        return true
    }else{
        outputDiv.style.display="block";
        outputMsg.innerText="Please answer all the questions."
    }
}
function submitHandler(e){
    e.preventDefault();
    score=0
    let index=0;
    let formResults=new FormData(form);
    if(checkAllQuestionsAttempted(formResults.values())){
        for (let value of formResults.values()){
            if(value===correctAnswers[index]){
                score+=1;
                quesContainer[index].style.background='#90EE90';
            }else{
                quesContainer[index].style.background='#F08080'
            }
            index+=1
        }
        outputDiv.style.display="block";
        outputMsg.innerText="Your score : "+score;
    }
}
form.addEventListener("submit",(e)=>submitHandler(e))
form.addEventListener("click",function reattempt(){
    for(let q of quesContainer){
        q.style.background='#0A1931'
    }
    outputDiv.style.display='none'
    outputMsg.innerText='';
})