const form1=document.querySelector("#form1");
const form2=document.querySelector("#form2");
const form3=document.querySelector("#form3");
const form4=document.querySelector("#form4");

const outputDiv1=document.querySelector(".m1");
const outputDiv2=document.querySelector(".m2");
const outputDiv3=document.querySelector(".m3");
const outputDiv4=document.querySelector(".m4");

const outputMessage1=document.querySelector(".mess1");
const outputMessage2=document.querySelector(".mess2");
const outputMessage3=document.querySelector(".mess3");
const outputMessage4=document.querySelector(".mess4");


const base=document.querySelector("#base");
const height=document.querySelector("#height");

const calculateAreaForRightTriangle=(event)=>{
    event.preventDefault();
    let b=Number(base.value);
    let h=Number(height.value);

    let area=(b*h)/2
    area=area.toFixed(2);
    outputDiv1.style.display='block';
    outputMessage1.innerText=`The area of a triangle whose base is ${b} units and height is ${h} units is ${area} sq.units`
}

const side=document.querySelector("#side")
const calculateAreaForEquilateralTriangle=(event)=>{
    event.preventDefault();
    let a=Number(side.value)

    let area=(Math.pow(a,2)*Math.pow(3,0.5))/4;
    area=area.toFixed(2);
    outputDiv2.style.display='block';
    outputMessage2.innerText=`The area of an equilateral triangle whose each side length is of ${a} units is ${area} sq.units.`
}

const side1=document.querySelector("#side1");
const side2=document.querySelector("#side2");
const side3=document.querySelector("#side3");

const calculateAreaOfTriangle=(event)=>{
    event.preventDefault();
    let a=Number(side1.value);
    let b=Number(side2.value);
    let c=Number(side3.value);
    if((a+b>c)&&(b+c>a)&&(c+a>b)){
        let s=(a+b+c)/2;
        let product=s*(s-a)*(s-b)*(s-c);
        let area=Math.pow(product,0.5);
        area=area.toFixed(2);

        outputDiv3.style.display='block';
        outputMessage3.innerText=`The area of a triangle whose side lengths are of ${a} units,${b} units and ${c} units is ${area} sq.units.`
        outputMessage3.style.color='#0A1931';
    }
    else{
        outputDiv3.style.display='block';
        outputMessage3.innerText=`Enter valid side lengths such that each side length should be less than sum of other two sides`
        outputMessage3.style.color='red';
    }
    
}

const sideAngle1=document.querySelector("#side-angle1");
const sideAngle2=document.querySelector("#side-angle2");
const angle1=document.querySelector("#angle1");

const calculateAreaOfTriangleProvided=(event)=>{
    event.preventDefault();
    let s1 = Number(sideAngle1.value);
    let s2 = Number(sideAngle2.value);
    let ang1=Number(angle1.value);

    let rad1=(Math.PI*ang1)/180;
    let sinAng=Math.sin(rad1);

    let area=(s1*s2*sinAng)/2;
    area=area.toFixed(2);

    outputDiv4.style.display='block';
    outputMessage4.innerText=`The area of a triangle whose side lengths are of ${s1} units and ${s2} units with an angle of ${ang1}° is ${area} sq.units.`

}

form1.addEventListener("submit",(e)=>calculateAreaForRightTriangle(e))
form2.addEventListener("submit",(e)=>calculateAreaForEquilateralTriangle(e));
form3.addEventListener("submit",(e)=>calculateAreaOfTriangle(e));
form4.addEventListener("submit",(e)=>calculateAreaOfTriangleProvided(e))