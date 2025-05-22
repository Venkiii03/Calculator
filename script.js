const display = document.getElementById("display");
const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value.replace('%', '/100'));
  } catch {
    display.value = "Error";
  }
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
});


document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (!isNaN(key)) {
    appendValue(key); // Numbers
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    appendValue(key); // Operators
  } else if (key === 'Enter' || key === '=') {
    calculate(); // Enter or = key
  } else if (key === '.' || key === ',') {
    appendValue('.'); // Decimal
  } else if (key === '%') {
    appendValue('%');
  } else if (key === 'Backspace') {
    deleteLast(); // Delete one character
  } else if (key === 'Delete') {
    clearDisplay(); // Clear all
  } else if (key.toLowerCase() === 't') {
    toggleTheme(); // Toggle theme on 'T' press
  }
});
