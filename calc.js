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
	if (!readValue(result).includes('.'))
		addToValue(result, '.');
}

function numberClick(event) {
	if (readValue(result) === '0')
		setValue(result, readValue(event.currentTarget));
	else
		addToValue(result, readValue(event.currentTarget));

	behindTheScenes();
	behindTheScenes.number(readValue(result));
}

function operationClick(event) {
	var lastChar = readValue(result).charAt(readValue(result).length - 1);

	behindTheScenes();
	behindTheScenes.operation(readValue(event.currentTarget));

	setValue(result, '0');

	/*
	if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
		setValue(result, readValue(result).substr(0, readValue(result).length - 1));
	} 
	addToValue(result, readValue(event.currentTarget));
	*/

}

function clearScreen(event) {
	setValue(result, '0');
}

function behindTheScenes() {
	var letsCalculate = 0;



	function operation(nextOperation) {
		console.log(nextOperation);
	}

	function number(nextNumber) {
		letsCalculate += nextNumber;
		console.log(letsCalculate);
	}

	behindTheScenes.number = number;
	behindTheScenes.operation = operation;
}

function enterClick(event) {
	var answer = readValue(result);

	setValue(result, eval(answer));
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
