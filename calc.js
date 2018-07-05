//var seven = document.getElementById("seven");
//var eight = document.getElementById("eight");
var result = document.getElementById("result");
var clear = document.getElementById("clearButton");

var operation = document.getElementsByClassName("plusMinus");

var numbers = document.getElementsByClassName("numberButton");
var decimal = document.getElementById("decimalPoint");

var enter = document.getElementById("enterButton");

var memory = 0;
var memoryOp = '';
var append = false;
var operatorCheck = false;

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

	append = true;
	operatorCheck = false;
}

function numberClick(event) {
	if (!append)
		setValue(result, readValue(event.currentTarget));
	else
		addToValue(result, readValue(event.currentTarget));

	append = true;
	operatorCheck = false;
}

function operationClick(event) {
	var step;

	if (operatorCheck) {
		memoryOp = readValue(event.currentTarget);
	} 
	else {
		if (memoryOp === "-") {
			step = memory - parseFloat(readValue(result));

			setValue(result, step);
		}
		else if (memoryOp === "+") {
			step = memory + parseFloat(readValue(result));

			setValue(result, step);
		}
		else if (memoryOp === "*") {
			step = memory * parseFloat(readValue(result));

			setValue(result, step);
		}
		else if (memoryOp === "/") {
			step = memory / parseFloat(readValue(result));

			setValue(result, step);
		}

		memoryOp = readValue(event.currentTarget);
		memory = parseFloat(readValue(result));
	}

	append = false;
	operatorCheck = true;
}

function clearScreen(event) {
	setValue(result, '0');

	memory = 0;
	memoryOp = '';

	append = false;
	operatorCheck = false;
}



function enterClick(event) {
	var answer = readValue(result);

	if (memoryOp === "-") {
		answer = memory - parseFloat(readValue(result));
	}
	else if (memoryOp === "+") {
		answer = memory + parseFloat(readValue(result));
	}
	else if (memoryOp === "*") {
		answer = memory * parseFloat(readValue(result));
	}
	else if (memoryOp === "/") {
		answer = memory / parseFloat(readValue(result));
	}

	setValue(result, answer);

	memory = answer
	memoryOp = '';

	append = false;
	operatorCheck = false;
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
