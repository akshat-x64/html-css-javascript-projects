"use strict";
const jokeAPi = {
  error: false,
  amount: 10,
  jokes: [
    {
      category: "Dark",
      type: "single",
      joke: "I have a fish that can breakdance! Only for 20 seconds though, and only once.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 237,
      safe: false,
      lang: "en",
    },
    {
      category: "Dark",
      type: "single",
      joke: "My ex had an accident. I told the paramedics the wrong blood type for her. She'll finally experience what rejection is really like.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 152,
      safe: false,
      lang: "en",
    },
    {
      category: "Dark",
      type: "single",
      joke: "My little daughter came to me all excited, saying \"Daddy! Daddy! Guess how old I'll be in June!\"\n\"Oh I don't know princess, why don't you tell me?\" I said. She gave me a huge smile and held up four fingers.\nIt's now three hours later, police have joined in and she still won't say where she got them.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 165,
      safe: false,
      lang: "en",
    },
    {
      category: "Programming",
      type: "single",
      joke: "Algorithm: A word used by programmers when they don't want to explain how their code works.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 51,
      safe: true,
      lang: "en",
    },
    {
      category: "Programming",
      type: "single",
      joke: "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 27,
      safe: false,
      lang: "en",
    },
    {
      category: "Misc",
      type: "single",
      joke: "Never date a baker. They're too kneady.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      safe: true,
      id: 271,
      lang: "en",
    },
    {
      category: "Pun",
      type: "single",
      joke: "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 204,
      safe: false,
      lang: "en",
    },
    {
      category: "Programming",
      type: "single",
      joke: "I'd tell you a joke about NAT but I would have to translate.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      safe: true,
      id: 319,
      lang: "en",
    },
    {
      category: "Dark",
      type: "single",
      joke: "I didn't vaccinate my 10 kids and the one that survived is fine!",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 96,
      safe: false,
      lang: "en",
    },
    {
      category: "Programming",
      type: "single",
      joke: 'A byte walks into a bar looking miserable.\nThe bartender asks it: "What\'s wrong buddy?"\n"Parity error." it replies. \n"Ah that makes sense, I thought you looked a bit off."',
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 24,
      safe: true,
      lang: "en",
    },
  ],
};

const jokes = [];
for (const iterator of jokeAPi.jokes) {
  jokes.push(iterator.joke);
}
console.log(jokes.length);
let rand = Math.trunc(Math.random() * jokes.length);
console.log(rand);
document.querySelector(".button").addEventListener("click", function () {
  rand = Math.trunc(Math.random() * jokes.length);
  document.querySelector(".data").textContent = "";
  document.querySelector(".data").textContent = jokes[rand];
  console.log(rand);
});
