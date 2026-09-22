// TODO:
// Implement step navigation with only one visible step at a time.
const steps = document.querySelectorAll(".step");
let currentStep = 0;

// Function to show only current step
function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("visible", i === index);
  });
}

// Next buttons
document.querySelectorAll(".next-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

// Prev buttons
document.querySelectorAll(".prev-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

// Initial state
showStep(currentStep);