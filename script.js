const coinImage = document.getElementById("coinImage");
const resultText = document.getElementById("resultText");
const flipButton = document.getElementById("flipButton");
const bellSound = new Audio("sounds/bell.mp3");

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

flipButton.addEventListener("click", () => {
  bellSound.currentTime = 0; // rewind sound
  bellSound.play();
  // Optional: Animate
  coinImage.style.transform = "rotateY(360deg)";
  setTimeout(() => {
    const result = results[Math.floor(Math.random() * results.length)];
    coinImage.src = result.img;
    resultText.textContent = `Sai Baba says: ${result.label}`;
    coinImage.style.transform = "rotateY(0deg)";
  }, 600);
});
