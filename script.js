const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
  "In order to be irreplaceable, one must always be different.",
  "JavaScript is the duct tape of the Internet.",
  "Programs must be written for people to read, and only incidentally for machines to execute.",
  "The best error message is the one that never shows up.",
  "Simplicity is the soul of efficiency.",
  "Before software can be reusable it first has to be usable.",
  "Code never lies, comments sometimes do.",
  "Don’t comment bad code — rewrite it.",
  "Programming isn't about what you know; it's about what you can figure out.",
  "Make it work, make it right, make it fast.",
  "Talk is cheap. Show me the code.",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
  "Walking on water and developing software from a specification are easy if both are frozen.",
  "Testing leads to failure, and failure leads to understanding.",
  "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
  "Computers are fast; programmers keep them slow.",
  "Deleted code is debugged code.",
];

quotes.push(
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Simplicity is prerequisite for reliability.",
  "The only way to learn a new programming language is by writing programs in it."
);

const generateBtn = document.getElementById("generate");
const quoteContainer = document.getElementById("quote-container");
const copyBtn = document.getElementById("copy");
const clearBtn = document.getElementById("clear");

quoteContainer.textContent = "Your wisdom will appear here...";

generateBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteContainer.textContent = quotes[randomIndex];
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
  document.body.style.backgroundColor = randomColor;
});

clearBtn.addEventListener("click", () => {
  quoteContainer.textContent = "Your wisdom will appear here...";
  document.body.style.backgroundColor = "#fff";
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteContainer.textContent).then(() => {
    alert("Quote copied to clipboard! 📋");
  });
});
