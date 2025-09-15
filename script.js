// ===============================
// Part 2: Functions & Scope
// ===============================

// Global variable (accessible everywhere)
let animationCount = 0;

// Function with parameter + return value
function incrementCounter(count) {
  return count + 1; // returns updated value
}

// Function to toggle a CSS class
function triggerAnimation() {
  const box = document.getElementById("animatedBox");
  box.classList.add("animate");

  // Remove class after animation ends (reusable)
  box.addEventListener("animationend", () => {
    box.classList.remove("animate");
  });

  // Update global counter
  animationCount = incrementCounter(animationCount);
  console.log("Box animated " + animationCount + " times!");
}

// ===============================
// Part 3: DOM + CSS Animations
// ===============================

// Animate the box when button is clicked
document.getElementById("animateBtn").addEventListener("click", triggerAnimation);

// Modal open/close functionality
const modal = document.getElementById("modal");
document.getElementById("showModal").addEventListener("click", () => {
  modal.classList.remove("hidden");
});

document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.add("hidden");
});
