"use strict";
const inputword = document.querySelector(".inputword");
const inputmeaning = document.querySelector(".inputmeaning");
const inputbutton = document.querySelector(".inputbutton");
const wordsearch = document.querySelector(".wordsearch");
const searchbutton = document.querySelector(".searchbutton");
const meaningarea = document.querySelector(".meaningarea");
const worddelete = document.querySelector(".worddelete");
const deletebutton = document.querySelector(".deletebutton");
const cleaneverything = document.querySelector(".clean");
const inputDictionary = new Map();

inputbutton.addEventListener("click", function () {
  const inputW = inputword.value;
  const inputM = inputmeaning.value;
  if (inputM) {
    if (inputW) {
      console.log(inputW, inputM);
      inputDictionary.set(inputW, inputM);
    }
  }
  console.log(inputDictionary);
});

searchbutton.addEventListener("click", function () {
  const wordS = wordsearch.value;
  if (wordS) {
    meaningarea.value = inputDictionary.get(wordS);
  }
});

deletebutton.addEventListener("click", function () {
  const sampleText = worddelete.value;
  if (sampleText) {
    inputDictionary.delete(sampleText);
  }
});

cleaneverything.addEventListener("click", function () {
  inputDictionary.clear();
  inputword.value = "";
  inputmeaning.value = "";
  wordsearch.value = "";
  meaningarea.value = "";
  worddelete.value = "";
});
