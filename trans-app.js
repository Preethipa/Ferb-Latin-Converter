var inputTxt = document.querySelector("#ip-txt");
var transBtn = document.querySelector("#trans-btn");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong with server try again later!");
}

function clickHandler(){
   
    var inputText = inputTxt.value;
    //outputDiv.innerText = inputTxt.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var TranslatedText = json.contents.translated;
        outputDiv.innerText = TranslatedText;
        //console.log(TranslatedText);
    })
    
        
    .catch(errorHandler)
    
};

transBtn.addEventListener("click", clickHandler);