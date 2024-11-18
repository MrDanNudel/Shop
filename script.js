window.onload = function () {
  var introText = document.getElementById("intro-text");

  var welcomeText = document.getElementById("welcome-text");
  welcomeText.classList.add("activate-letter-spacing-effect");
  // Function to show and hide the text with a delay
  function toggleText() {
    // Show the text
    introText.classList.add("toggle-visibility");

    // After 5 seconds, hide the text again
  }

  // Trigger the function immediately when the page loads
  toggleText();

  // Repeat the cycle every 10 seconds (5 seconds to appear + 5 seconds to disappear)
  setInterval(toggleText, 500);
};
