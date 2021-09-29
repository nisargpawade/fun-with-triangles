const inputBase = document.querySelector("#input-base");
const inputHeight = document.querySelector("#input-height");
const btnCalculateArea = document.querySelector("#btn-calculate-area");
const outputArea = document.querySelector("#output-area");

function calculateArea(){
    var areaOfT= 1/2*(inputBase.value*inputHeight.value)
    outputArea.innerText="Area of the Triangle is "+areaOfT
}

btnCalculateArea.addEventListener("click", calculateArea);