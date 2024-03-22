const form = document.createElement("form");
const input = document.createElement("input");
const button = document.createElement("button");

input.type = "text";
button.type = "submit";
button.textContent = "Submit";

form.appendChild(input);
form.appendChild(button);

