"use strict";

const value1 = document.querySelector(".value-1");
const button1 = document.querySelector(".button");
const value = document.querySelector(".unit1");
const input = document.querySelector(".value");
button1.addEventListener("click", function () {
  let opt = value.value;
  const data = value1.value;

  if (data) {
    if (opt === "Fahrenheit") {
      const result = (data * 9) / 5 + 32;
      input.textContent = Math.trunc(result);
      value1.value = "";
    } else {
      const result = ((data - 32) * 5) / 9;
      input.textContent = Math.trunc(result);
      value1.value = "";
    }
  }
});
