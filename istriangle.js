const inputs = document.querySelectorAll(".input-angles");
const btnTriangle = document.querySelector("#btn-istriangle");
const outputText = document.querySelector("#output");

function isTriangle(){
    if (calculateSumOfAngles() == 180){
        outputText.innerText = "These angles make up a Triangle";
    } else {
        outputText.innerText="These angles don't make a Triangle";
}
}

function calculateSumOfAngles(){
    sumOfAngles = 0;
    for (let i=0; i<inputs.length; i++){
        sumOfAngles+=Number(inputs[i].value)
    }
    return sumOfAngles;
}

btnTriangle.addEventListener("click", isTriangle);