const checks = [...document.querySelectorAll("#checklist input")];
const count = document.querySelector("#checkCount");
const steps = [...document.querySelectorAll(".pipeline-step")];

function updateCount() {
  const done = checks.filter((item) => item.checked).length;
  count.textContent = `完成 ${done} / ${checks.length} 項`;
}

checks.forEach((item) => item.addEventListener("change", updateCount));
updateCount();

let activeStep = 0;
setInterval(() => {
  steps.forEach((step, index) => {
    step.classList.toggle("is-active", index === activeStep);
  });
  activeStep = (activeStep + 1) % steps.length;
}, 1400);
