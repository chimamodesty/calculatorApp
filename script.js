function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  let display = document.getElementById('display').value;
  document.getElementById('display').value = display.slice(0, -1);
}

function calculate() {
  let expression = document.getElementById('display').value;

  expression = expression.replace(/\^/g, '**');

  // Replace `sqrt` with `Math.sqrt`
  expression = expression.replace(/sqrt/g, 'Math.sqrt');

  try {
    const result = eval(expression);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
