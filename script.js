//your JS code here. If required.
// Retrieve the necessary elements from the DOM
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

// Async function to introduce delay and display the message
async function displayMessage() {
  // Retrieve values from the input fields
  const text = textInput.value;
  const delay = parseInt(delayInput.value); // Convert delay to an integer

  if (isNaN(delay) || delay < 0) {
    alert("Please enter a valid delay time (in milliseconds).");
    return;
  }

  // Delay function using Promise and setTimeout
  const delayPromise = new Promise((resolve) => {
    setTimeout(() => resolve(), delay); // Resolve the promise after the delay
  });

  // Wait for the delay to finish
  await delayPromise;

  // Display the message in the output div
  output.textContent = text;
}

// Add an event listener to the button
btn.addEventListener('click', displayMessage);
