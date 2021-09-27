const inputA = document.querySelector("#input-a");
const inputB = document.querySelector("#input-b");
const btnCalculate = document.querySelector("#btn-calculate-hypo");
const outputHypo = document.querySelector("#output-hypo");

function addSqSides(){
    let sumOfSqSides = Number(inputA.value)*Number(inputA.value) + Number(inputB.value)*Number(inputB.value)
    return sumOfSqSides;
}

function calculateHypo(){
    let hypoLength = addSqSides()**(1/2)
    outputHypo.innerText="Length of the Hypotenuse is "+hypoLength
}

btnCalculate.addEventListener("click", calculateHypo);