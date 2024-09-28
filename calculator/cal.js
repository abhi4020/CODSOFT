document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let firstValue = '', operator = '', awaitingSecondValue = false;

    // Function to handle calculations
    function calculate(first, operator, second) {
        const num1 = parseFloat(first);
        const num2 = parseFloat(second);

        if (operator === 'add') return num1 + num2;
        if (operator === 'subtract') return num1 - num2;
        if (operator === 'multiply') return num1 * num2;
        if (operator === 'divide') return num1 / num2;

        return second; // If no operator, return the second number
    }

    // Event listener for button clicks
    document.querySelector('.keys').addEventListener('click', function(event) {
        const key = event.target;
        const action = key.dataset.action;
        const keyValue = key.textContent;
        const displayedNum = display.value;

        if (!key.matches('button')) return;

        if (!action) {
            // If the calculator is awaiting a second value and the user presses a number key
            if (displayedNum === '0' || awaitingSecondValue) {
                display.value = keyValue;
                awaitingSecondValue = false;
            } else {
                display.value = displayedNum + keyValue;
            }
        }

        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.value = displayedNum + '.';
            }
        }

        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            if (firstValue && operator && !awaitingSecondValue) {
                // Perform calculation if there's already a first value and operator
                const result = calculate(firstValue, operator, displayedNum);
                display.value = result;
                firstValue = result;
            } else {
                firstValue = displayedNum;
            }

            operator = action;
            awaitingSecondValue = true;
        }

        if (action === 'clear') {
            display.value = '0';
            firstValue = '';
            operator = '';
            awaitingSecondValue = false;
        }

        if (action === 'calculate') {
            if (firstValue) {
                const result = calculate(firstValue, operator, displayedNum);
                display.value = result;
                firstValue = '';
                operator = '';
                awaitingSecondValue = false;
            }
        }
    });
});
