// ----- Buttons On Click Animation -----
const modifierStyle = document.querySelectorAll('.modifier');
const numberStyle = document.querySelectorAll('.number');
const operatorStyle = document.querySelectorAll('.operator');

modifierStyle.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('clicked')
    setTimeout(() => {
      button.classList.remove('clicked')
    }, 200)
  })
})

numberStyle.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('clicked')
    setTimeout(() => {
      button.classList.remove('clicked')
    }, 200)
  })
})

operatorStyle.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('clicked')
    setTimeout(() => {
      button.classList.remove('clicked')
    }, 200)
  })
})

// ----- Calculator Functionality -----
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const modifierButtons = document.querySelectorAll('.modifier');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

let firstValue = '';
let secondValue = '';
let operator = '';
let result = '';
let decimal = false;

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (firstValue.length < 12) {
      firstValue += button.textContent
      display.textContent = firstValue
    }
  })
})

operatorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.value === 'equals') {
      if (firstValue !== '' && secondValue !== '') {
        result = Number(operate(operator, secondValue, firstValue))
        display.textContent = result
        firstValue = result
        secondValue = ''
        decimal = false
      }
    }

    if (firstValue !== '') {
      operator = e.target.value
      secondValue = firstValue
      firstValue = ''
      decimal = false
    }
  })
})

modifierButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.textContent === '%') {
      firstValue = firstValue / 100
    } else if (button.textContent === '+/-') {
      firstValue = firstValue * -1
    }
    display.textContent = firstValue
  })
})

clearButton.addEventListener('click', () => {
  firstValue = ''
  secondValue = ''
  display.textContent = '0'
  decimal = false
})

// Functions
const divide = (a, b) => {
    return a / b
}

const multiply = (a, b) => {
    return a * b
}

const subtract = (a, b) => {
    return a - b
}

const add = (a, b) => {
    return a + b
}

const operate = (operator, a, b) => {
  a = Number(a);
  b = Number(b);

  if(operator === 'divide') {
    return divide(a, b)
  } else if(operator === 'multiply') {
    return multiply(a, b)
  } else if(operator === 'subtract') {
    return subtract(a, b)
  } else if(operator === 'add') {
    return add(a, b)
  }
}