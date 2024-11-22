window.onload = function () {
  var introText = document.getElementById("intro-text");
  var welcomeText = document.getElementById("welcome-text");
  welcomeText.classList.add("activate-letter-spacing-effect");

  // Array of different texts to show
  var texts = [
    "Welcome to our website!",
    "Enjoy your stay!",
    "Let’s get started!",
    "Have a great day ahead!",
    "Ready to explore?",
    "You’re in the right place!",
  ];

  // Function to show and hide the text with a delay
  function toggleText() {
    // Randomly select a text from the array
    var randomText = texts[Math.floor(Math.random() * texts.length)];

    // Set the text content to the randomly selected text
    introText.textContent = randomText;

    // Show the text
    introText.classList.add("toggle-visibility");

    // Hide the text after 5 seconds
    setTimeout(function () {
      introText.classList.remove("toggle-visibility");
    }, 5000); // Hide after 5 seconds
  }

  // Trigger the function immediately when the page loads
  toggleText();

  // Repeat the cycle every 10 seconds (5 seconds visible + 5 seconds invisible)
  setInterval(toggleText, 5500); // 10 seconds interval
};
