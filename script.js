window.onload = function () {
  var introText = document.getElementById("intro-text");

  // Function to show and hide the text with a delay
  function toggleText() {
    // Show the text
    introText.classList.add("visible");

    // After 5 seconds, hide the text again
    setTimeout(function () {
      introText.classList.remove("visible"); // Hide the text
    }, 5000); // 5 seconds delay before disappearing
  }

  // Trigger the function immediately when the page loads
  toggleText();

  // Repeat the cycle every 10 seconds (5 seconds to appear + 5 seconds to disappear)
  setInterval(toggleText, 10000);
};
