const angle1=document.querySelector("#angle1");
const angle2=document.querySelector("#angle2");
const angle3=document.querySelector("#angle3");
const form=document.querySelector("#main-form");
const outputDiv=document.querySelector(".main-message");
const outputMsg=document.querySelector("#output-short");
const resetBtn=document.querySelector("#btn-reset");
function calculateAngleSum(a1,a2,a3){
    let sum=a1+a2+a3;
    return sum;
}
function checkAngleSum(event){
    event.preventDefault();

    let ang1=Number(angle1.value);
    let ang2=Number(angle2.value);
    let ang3=Number(angle3.value);
    let sum=calculateAngleSum(ang1,ang2,ang3);
    outputDiv.style.display="block"
    if(sum===180){
        outputMsg.innerText='These angles form a triangle';
    }else{
        outputMsg.innerText="These angles don't form a triangle";
    }

    
}
form.addEventListener("submit",(e)=>checkAngleSum(e));

function reset(){
    outputDiv.style.display='none';
    outputMsg.innerText='';
    angle1.value='';
    angle2.value='';
    angle3.value='';
}
resetBtn.addEventListener('click',reset)