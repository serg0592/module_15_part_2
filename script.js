let [firstOperand, newOperand, result, operator, clearInput] = [0, false, 0, null, false];

const inputWindow = document.getElementById('inputWindow');
const storyWindow = document.getElementById('storyWindow');
const storyWindow_2 = document.getElementById('storyWindow_2');

document.getElementById('btn_clr').addEventListener('click', function () { 
  firstOperand = 0;
  operator = null;
  inputWindow.value = '';
  storyWindow.value = '';
  storyWindow_2.value = '';
})

document.getElementById('btn_ce').addEventListener('click', function () {
  inputWindow.value = '';
})

document.getElementById('btn_1').addEventListener('click', function () {
  clearInput && (inputWindow.value = '');
  if (inputWindow.value === '0' || operator === 'un' || operator === 'sqrt') {
    inputWindow.value = '';
    storyWindow.value = '';
  }
  clearInput = false;
  inputWindow.value += '1';
  storyWindow.value += '1';
})

document.getElementById('btn_2').addEventListener('click', function () {
  clearInput && (inputWindow.value = '');
  if (inputWindow.value === '0' || operator === 'un' || operator === 'sqrt') {
    inputWindow.value = '';
    storyWindow.value = '';
  }
  clearInput = false;
  inputWindow.value += '2';
  storyWindow.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
  clearInput && (inputWindow.value = '');
  if (inputWindow.value === '0' || operator === 'un' || operator === 'sqrt') {
    inputWindow.value = '';
    storyWindow.value = '';
  }
  clearInput = false;
  inputWindow.value += '3';
  storyWindow.value += '3';
})

document.getElementById('btn_4').addEventListener('click', function () {
  clearInput && (inputWindow.value = '');
  if (inputWindow.value === '0' || operator === 'un' || operator === 'sqrt') {
    inputWindow.value = '';
    storyWindow.value = '';
  }
  clearInput = false;
  inputWindow.value += '4';
  storyWindow.value += '4';
})

document.getElementById('btn_5').addEventListener('click', function () {
  clearInput && (inputWindow.value = '');
  if (inputWindow.value === '0' || operator === 'un' || operator === 'sqrt') {
    inputWindow.value = '';
    storyWindow.value = '';
  }
  clearInput = false;
  inputWindow.value += '5';
  storyWindow.value += '5';
})

document.getElementById('btn_6').addEventListener('click', function () {
  clearInput && (inputWindow.value = '');
  if (inputWindow.value === '0' || operator === 'un' || operator === 'sqrt') {
    inputWindow.value = '';
    storyWindow.value = '';
  }
  clearInput = false;
  inputWindow.value += '6';
  storyWindow.value += '6';
})

document.getElementById('btn_7').addEventListener('click', function () {
  clearInput && (inputWindow.value = '');
  if (inputWindow.value === '0' || operator === 'un' || operator === 'sqrt') {
    inputWindow.value = '';
    storyWindow.value = '';
  }
  clearInput = false;
  inputWindow.value += '7';
  storyWindow.value += '7';
})

document.getElementById('btn_8').addEventListener('click', function () {
  clearInput && (inputWindow.value = '');
  if (inputWindow.value === '0' || operator === 'un' || operator === 'sqrt') {
    inputWindow.value = '';
    storyWindow.value = '';
  }
  clearInput = false;
  inputWindow.value += '8';
  storyWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () {
  clearInput && (inputWindow.value = '');
  if (inputWindow.value === '0' || operator === 'un' || operator === 'sqrt') {
    inputWindow.value = '';
    storyWindow.value = '';
  }
  clearInput = false;
  inputWindow.value += '9';
  storyWindow.value += '9';
})

document.getElementById('btn_0').addEventListener('click', function () {
  clearInput && (inputWindow.value = '');
  if (inputWindow.value === '0' || operator === 'un' || operator === 'sqrt') {
    inputWindow.value = '';
    storyWindow.value = '';
  }
  clearInput = false;
  inputWindow.value += '0';
  storyWindow.value += '0';
})

document.getElementById('btn_dot').addEventListener('click', function () {
  clearInput && (inputWindow.value = '');
  clearInput = false;
  inputWindow.value += '.';
  storyWindow.value += '.';
})

document.getElementById('btn_sum').addEventListener('click', function () {
  if (inputWindow.value === '') {
    inputWindow.value = 0;
    storyWindow.value = 0;
  }
  if (clearInput === false && firstOperand === 0) {
    result = firstOperand = parseFloat(inputWindow.value);
    inputWindow.value = result;
  } else if (clearInput === false) {
    result = firstOperand + parseFloat(inputWindow.value);
    inputWindow.value = result;
  }
  (operator === 'calc') && (storyWindow.value = result);
  clearInput = true;
  firstOperand = parseFloat(inputWindow.value);
  operator = 'sum';
  storyWindow.value += ' + ';
})

document.getElementById('btn_dif').addEventListener('click', function () {
  if (inputWindow.value === '') {
    inputWindow.value = 0;
    storyWindow.value = 0;
  }
  if (clearInput === false && firstOperand === 0) {
    result = firstOperand = parseFloat(inputWindow.value);
    inputWindow.value = result;
  } else if (clearInput === false) {
    result = firstOperand - parseFloat(inputWindow.value);
    inputWindow.value = result;
  }
  (operator === 'calc') && (storyWindow.value = result);
  clearInput = true;
  firstOperand = parseFloat(inputWindow.value);
  operator = 'dif';
  storyWindow.value += ' - ';
})

document.getElementById('btn_mult').addEventListener('click', function () {
  if (inputWindow.value === '') {
    inputWindow.value = 0;
    storyWindow.value = 0;
  }
  if (clearInput === false && firstOperand === 0) {
    result = firstOperand = parseFloat(inputWindow.value);
    inputWindow.value = result;
  } else if (clearInput === false) {
    result = firstOperand * parseFloat(inputWindow.value);
    inputWindow.value = result;
  }
  (operator === 'calc') && (storyWindow.value = result);
  clearInput = true;
  firstOperand = parseFloat(inputWindow.value);
  operator = 'mult';
  storyWindow.value += ' * ';
})

document.getElementById('btn_div').addEventListener('click', function () {
  if (inputWindow.value === '') {
    inputWindow.value = 0;
    storyWindow.value = 0;
  }
  if (clearInput === false && firstOperand === 0) {
    result = firstOperand = parseFloat(inputWindow.value);
    inputWindow.value = result;
  } else if (clearInput === false) {
    result = firstOperand / parseFloat(inputWindow.value);
    inputWindow.value = result;
  }
  (operator === 'calc') && (storyWindow.value = result);
  clearInput = true;
  firstOperand = parseFloat(inputWindow.value);
  operator = 'div';
  storyWindow.value += ' / ';
})

document.getElementById('btn_sqrt').addEventListener('click', function () {
  if (inputWindow.value === '') {
    inputWindow.value = 0;
    storyWindow.value = 0;
  }
  result = parseFloat(inputWindow.value) ** (1 / 2);
  inputWindow.value = result;
  clearInput = true;
  firstOperand = parseFloat(inputWindow.value);
  operator = 'sqrt';
  storyWindow.value = ' sqrt(' + storyWindow.value + ')';
})

document.getElementById('btn_un').addEventListener('click', function () {
  if (inputWindow.value === '') {
    inputWindow.value = 0;
    storyWindow.value = 0;
  }
  result = parseFloat(inputWindow.value) * -1;
  inputWindow.value = result;
  clearInput = true;
  firstOperand = parseFloat(inputWindow.value);
  operator = 'un';
  storyWindow.value = ' -(' + storyWindow.value + ')';
})

document.getElementById('btn_calc').addEventListener('click', function () {
  clearInput = true;
  if (operator === 'sum') {
    result = firstOperand + parseFloat(inputWindow.value);
    storyWindow_2.value = storyWindow.value + ' = ' + result;
    storyWindow.value = '';
    inputWindow.value = result;
    operator = 'calc';
  }
  if (operator === 'dif') {
    result = firstOperand - parseFloat(inputWindow.value);
    storyWindow_2.value = storyWindow.value + ' = ' + result;
    storyWindow.value = '';
    inputWindow.value = result;
    operator = 'calc';
  }
  if (operator === 'mult') {
    result = firstOperand * parseFloat(inputWindow.value);
    storyWindow_2.value = storyWindow.value + ' = ' + result;
    storyWindow.value = '';
    inputWindow.value = result;
    operator = 'calc';
  }
  if (operator === 'div') {
    result = firstOperand / parseFloat(inputWindow.value);
    storyWindow_2.value = storyWindow.value + ' = ' + result;
    storyWindow.value = '';
    inputWindow.value = result;
    operator = 'calc';
  }
})