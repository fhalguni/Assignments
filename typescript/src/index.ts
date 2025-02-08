let btn = document.getElementById("btn");
const handleEvent = (event: Event): void => {
  alert("Button is clicked");
};

btn?.addEventListener("keydown", handleEvent);

let submit = document.getElementById("submit");
let input = document.getElementById("input");
const handleEvent1 = (event: Event): void => {
  let target = event.target as HTMLInputElement;
  console.log(`current input value ${target.value}`);
};

submit?.addEventListener("input", handleEvent1);

const inputField = document.createElement("input");
document.body.appendChild(inputField);

inputField.addEventListener("focus", () => {
  inputField.style.border = "2px solid green";
});

// inputField.addEventListener("blur", () => {
//   inputField.style.border = "2px solid black";
// });

window.addEventListener("scroll", () => {
  console.log(`Scrolled:${window.scrollY}`);
});
