const btnNumbers = document.querySelectorAll('.btn-number');
const btnClear = document.querySelector('.btn-clear');
const btnOperations = document.querySelectorAll('.btn-operation');
const btnPercent = document.querySelector('.btn-percent');
const btnEquals = document.querySelector('.btn-equals');

const results = document.querySelector('.screen');
const tape = document.querySelector('.tape');

const numericChar = /[0-9]|\./;
const numericStr = /-?[0-9]+\.?[0-9]?$/;

let zeroed = true;
let solved = false;
let activeOperation;

btnNumbers.forEach(function (button) {
	button.addEventListener('click', function () {
		if (zeroed === true) {
			results.innerText = '';
		}
		if (solved) {
			results.innerText = '';
			tape.innerText = results.innerText;
			solved = false;
		}
		if (activeOperation && !numericChar.test(tape.innerText.slice(-1))) {
			results.innerText = '';
		}
		zeroed = false;
		results.innerText += button.innerText;
		tape.innerText += button.innerText;			
	});
});

btnOperations.forEach(function (button) {
	button.addEventListener('click', function () {
		// Ignore operation click if screen shows "0"
		if (parseFloat(results.innerText)) {
			activeOperation = document.querySelector('.btn-active');
			solved = false;
			// When user has not activated any operations yet
			if (activeOperation === null) {
				activeOperation = button;
				button.classList.toggle('btn-active');
				tape.innerText += button.getAttribute('name');
			} else {
				// When user clicks a currently active operation (i.e., + twice in a row)
				if (activeOperation === button) {
					activeOperation = null;
					button.classList.remove('btn-active');
					tape.innerText = tape.innerText.slice(0, -1);
				// When user activates an operation subsequent to initial one
				} else {
					// When user activates a different operation subsequent to previous one (i.e., + then immediately *)
					if (!numericChar.test(tape.innerText.slice(-1))) {
						tape.innerText = tape.innerText.slice(0, -1);
					}
					activeOperation.classList.remove('btn-active');
					activeOperation = button;
					button.classList.add('btn-active');
					tape.innerText += button.getAttribute('name');
				}
			}
		}
	});
});

btnPercent.addEventListener('click', function () {
	let toPercentify = results.innerText;
	if (toPercentify) {
		let tapeMatch = tape.innerText.match(toPercentify);

		results.innerText = parseFloat(toPercentify)/100;
		tape.innerText = tape.innerText.replace(tapeMatch, parseFloat(toPercentify)/100);
	}
});

btnClear.addEventListener('click', function () {
	solved = false;
	results.innerText = '0';
	zeroed = true;
	tape.innerText = '';
});

btnEquals.addEventListener('click', function () {
	activeOperation.classList.remove('btn-active');
	results.innerText = eval(tape.innerText);
	tape.innerText = results.innerText;
	solved = true;
})