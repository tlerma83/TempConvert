var inputField = document.getElementById("number");
var convertButton = document.getElementById("convertButton");
var convertedNumber = document.getElementById("converted-value");
var clearButton = document.getElementById("clear-button");
var celciusRadioButt = document.getElementById("celcius-button");
var farenheitRadioButt = document.getElementById("radio-farenheit");
var celcius;
var farenheit;

function toCelcius () {
    var inputValue = parseInt(inputField.value);
    celcius = (inputValue - 32) / 1.8;
    convertedNumber.innerHTML = celcius;
    colorConvert(convertedNumber);
}

function toFarenheit () {
    var inputValue = parseInt(inputField.value);
    farenheit = (inputValue * 1.8) + 32;
    convertedNumber.innerHTML = farenheit;
    colorConvert(convertedNumber);
}


function colorConvert () {
    if (celcius > 32 || farenheit > 90) {
        convertedNumber.style.color = "red";
    } else if (celcius < 0 || farenheit < 32) {
        convertedNumber.style.color = "blue";
    } else {
        convertedNumber.style.color = "green";
    }
}

function clear (convertedNumber) {
    location.reload();
}

function tempConverter () {
    var inputValue = parseInt(inputField.value);
    if (inputValue !== inputValue) {
        alert("Please enter a number");
    } else if (celciusRadioButt.checked === false &&       farenheitRadioButt.checked === false) {
        alert("Please choose Celcius or Farenheit");      
    } else if (celciusRadioButt.checked) {
        toCelcius();
    } else if (farenheitRadioButt.checked) {
        toFarenheit();
    }
}


// OH MY GOD! This took forever and I still don't fully understand this part? doesn't work//
//document.addEventListener("number").onkeypress =
//    //grabbed the input field id
//    function (e) {
//        if (e.keyCode === 13) {
//    //seeing if keycode pressed is the enter key
//        e.preventDefault();
//        var pressedEnter = document.getElementById('convertButton').click();
//        }
//    };
        
        
convertButton.addEventListener("click", tempConverter);
clearButton.addEventListener("click", clear);

//still not sure how the keypress for enter works completely. This website helped me get something that worked.. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent//

document.addEventListener('keypress', (event) => {
    console.log(event);
  var keyName = event.key;
  if (keyName === 'Enter') {
    tempConverter();
  }
}, false);

//took form element out of html so the page would not refresh and would log each keypress event//