var inputTxt = document.querySelector("#ip-txt");
var transBtn = document.querySelector("#trans-btn");
var outputDiv = document.querySelector("#output");

function clickHandler(){
    //console.log("clicked");
    //console.log(inputTxt.value);
    outputDiv.innerText = "jjjjjaaaa " + inputTxt.value;
    //console.log(outputDiv.innerText);
}

transBtn.addEventListener("click", clickHandler);