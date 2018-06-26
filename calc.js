//var seven = document.getElementById("seven");
//var eight = document.getElementById("eight");
var result = document.getElementById("result");
var clear = document.getElementById("clearButton");

var operation = document.getElementsByClassName("plusMinus");

var numbers = document.getElementsByClassName("numberButton");
var decimal = document.getElementById("decimalPoint");

var enter = document.getElementById("enterButton");

function readValue(element){
	return element.querySelector("p").innerHTML;
}

function setValue(element, value){
	element.querySelector("p").innerHTML = value;
}

function addToValue(element, value){
	element.querySelector("p").innerHTML += value;
}

function decimalClick(event) {
	if (result.querySelector("p").innerHTML.includes('.'))
		result.querySelector("p").innerHTML;
	else
		result.querySelector("p").innerHTML += '.';
}

function numberClick(event) {
	if (result.querySelector("p").innerHTML === '0')
		setValue(result, readValue(event.currentTarget));
	else
		addToValue(result, readValue(event.currentTarget));
}

function operationClick(event) {
	var operationCheck = result.querySelector("p").innerHTML;
	var lastChar = operationCheck.charAt(operationCheck.length - 1);

	console.log(lastChar);

	if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
		//if (event.currentTarget.querySelector("p").innerHTML !== lastChar) {
			result.querySelector("p").innerHTML = readValue(result).substr(0, readValue(result).length - 1);
			//result.querySelector("p").innerHTML += event.currentTarget.querySelector("p").innerHTML;
		//}

	} 
	result.querySelector("p").innerHTML += event.currentTarget.querySelector("p").innerHTML;

}

function clearScreen(event) {
	result.querySelector("p").innerHTML = '0';
}

function enterClick(event) {
	var answer = result.querySelector("p").innerHTML;

	result.querySelector("p").innerHTML = eval(answer);
}

//for loop setting up event listener for every number button
for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', numberClick);
}

//for loop setting up event listener for operation buttons
for (var n = 0; n < operation.length; n++) {
	operation[n].addEventListener('click', operationClick);
}

//event listener for decimal point
decimal.addEventListener('click', decimalClick);

//event listener for the clear screen
clear.addEventListener('click', clearScreen);

//event listener for enter button
enter.addEventListener('click', enterClick)

//seven.addEventListener('click', onClick); 
//eight.addEventListener('click', onClick); 
