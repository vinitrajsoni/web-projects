function appendToDisplay(value) {
  document.getElementById("calc-display").value += value;
}

function clearDisplay() {
  document.getElementById("calc-display").value = "";
}

function deleteLast() {
  let display = document.getElementById("calc-display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let display = document.getElementById("calc-display");
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
