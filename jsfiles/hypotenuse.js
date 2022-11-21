const form=document.querySelector("#main-form");
const base=document.querySelector("#base");
const height=document.querySelector("#height");
const outputDiv=document.querySelector(".main-message");
const outputMsg=document.querySelector("#output-short");
const resetBtn=document.querySelector("#btn-reset");

const calculateHypotenuse=(base,height)=>{
    let sum=Math.pow(base,2)+Math.pow(height,2);
    let hypotenuse=Math.pow(sum,0.5);
    hypotenuse=hypotenuse.toFixed(2);
    return hypotenuse;
}

function hypotenuseHandler(event){
    event.preventDefault()
    let b=Number(base.value);
    let h=Number(height.value);
    let hypotenuse=calculateHypotenuse(b,h);

    outputDiv.style.display='block';
    outputMsg.innerText=`The hypotenuse of a triangle which has a base of ${b} units and a height of ${h} units is ${hypotenuse} units.`
}
function reset(){
    outputDiv.style.display='none';
    outputMsg.innerText='';
    base.value='';
    height.value='';
    
}
form.addEventListener("submit",(e)=>hypotenuseHandler(e))
resetBtn.addEventListener('click',reset)