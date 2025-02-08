var btn = document.getElementById("btn");
var handleEvent = function (event) {
    alert("Button is clicked");
};
btn === null || btn === void 0 ? void 0 : btn.addEventListener("keydown", handleEvent);
var submit = document.getElementById("submit");
var input = document.getElementById("input");
var handleEvent1 = function (event) {
    var target = event.target;
    console.log("current input value ".concat(target.value));
};
submit === null || submit === void 0 ? void 0 : submit.addEventListener("input", handleEvent1);
var inputField = document.createElement("input");
document.body.appendChild(inputField);
inputField.addEventListener("focus", function () {
    inputField.style.border = "2px solid green";
});
// inputField.addEventListener("blur", () => {
//   inputField.style.border = "2px solid black";
// });
window.addEventListener("scroll", function () {
    console.log("Scrolled:".concat(window.scrollY));
});
