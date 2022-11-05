"use strict";
const jokeAPi = {
  error: false,
  amount: 10,
  jokes: [
    {
      category: "Programming",
      type: "single",
      joke: "Your momma is so fat, you need to switch to NTFS to store a picture of her.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: true,
      },
      id: 55,
      safe: false,
      lang: "en",
    },
    {
      category: "Programming",
      type: "single",
      joke: '"Knock, knock."\n"Who\'s there?"\n\n[very long pause]\n\n"Java."',
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 36,
      safe: true,
      lang: "en",
    },
    {
      category: "Programming",
      type: "single",
      joke: "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 41,
      safe: true,
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
      joke: 'Judge: "I sentence you to the maximum punishment..."\nMe (thinking): "Please be death, please be death..."\nJudge: "Learn Java!"\nMe: "Damn."',
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 45,
      safe: true,
      lang: "en",
    },
    {
      category: "Programming",
      type: "single",
      joke: "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 4,
      safe: true,
      lang: "en",
    },
    {
      category: "Programming",
      type: "single",
      joke: 'Two SQL tables sit at the bar. A query approaches and asks "Can I join you?"',
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 221,
      safe: true,
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
      category: "Programming",
      type: "single",
      joke: "ASCII silly question, get a silly ANSI.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 25,
      safe: true,
      lang: "en",
    },
    {
      category: "Programming",
      type: "single",
      joke: "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 123,
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
