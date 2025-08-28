const coinImage = document.getElementById("coinImage");
const resultText = document.getElementById("resultText");
const flipButton = document.getElementById("flipButton");
const bellSound = new Audio("sounds/bell.mp3");
let soundEnabled = false;

const soundToggle = document.getElementById("soundToggle");
soundToggle.addEventListener("change", () => {
  soundEnabled = !soundToggle.checked;
});
soundEnabled = !soundToggle.checked; // Initialize state based on default checkbox

// Yes and No image URLs (you can customize with real coin face images later)
const results = [
  {
    label: "Yes, Good to Proceed 🙏",
    img: "images/saibaba-yes.png" // YES
  },
  {
    label: "No, Wait, Not Now 🙏",
    img: "images/saibaba-no.png" // NO
  }
];

const saibabaQuotes = [
  "Why fear when I am here?",
  "If you look to me, I look to you.",
  "Trust in me and your prayer shall be answered.",
  "I am formless and everywhere.",
  "I will never forsake anyone who relies on me.",
  "Be patient. Your struggles will end.",
  "Surrender to me and I shall protect you.",
  "I shall be active and vigorous even from my tomb.",
  "Have faith and patience — Shraddha and Saburi.",
  "I draw to me my man from far off or even across the seven seas.",
  "I am the inner ruler of all and seated in your hearts.",
  "Meditate on me, and you will see me.",
  "My business is to give blessings.",
  "Whatever you do, wherever you may be, always bear this in mind: I am always aware of everything you do.",
  "I feel for you in all times of sorrow.",
  "Even a leaf moves not without my will.",
  "I am your servant, and you are my master — so lead me.",
  "I will take you across the ocean of life.",
  "Do not be obsessed by egotism, imagining that you are the cause of action.",
  "I am ever living to help and guide all who come to me.",
  "Love all. Serve all.",
  "I give people what they want in the hope that they will begin to want what I want to give them.",
  "Let your mind be in me and your body work.",
  "The wise are indifferent to praise or blame.",
  "He who remembers me always, I shall take care of him."
];

// Show a random Sai Baba quote on load
const quoteText = document.getElementById("quoteText");
const randomQuote = saibabaQuotes[Math.floor(Math.random() * saibabaQuotes.length)];
quoteText.textContent = `"${randomQuote}"`;


flipButton.addEventListener("click", () => {
  if (soundEnabled) {
    bellSound.currentTime = 0;
    bellSound.play();
  }
  // Optional: Animate
  coinImage.style.transform = "rotateY(360deg)";
  setTimeout(() => {
    const result = results[Math.floor(Math.random() * results.length)];
    coinImage.src = result.img;
    resultText.textContent = `Sai Baba says: ${result.label}`;
    coinImage.style.transform = "rotateY(0deg)";
  }, 600);
});
