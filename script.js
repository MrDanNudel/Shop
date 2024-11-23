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

  // Get the modal, buttons, and close button
  var modalOverlay = document.getElementById("modal-overlay");
  var loginBtn = document.getElementById("login-button");
  var closeBtn = document.getElementById("close-btn");

  // Show the modal when the button is clicked
  loginBtn.onclick = function () {
    modalOverlay.style.display = "flex"; // Show the modal
  };

  // Close the modal when the close button is clicked
  closeBtn.onclick = function () {
    modalOverlay.style.display = "none"; // Hide the modal
  };

  // Close the modal if the user clicks outside of the modal content
  window.onclick = function (event) {
    if (event.target == modalOverlay) {
      modalOverlay.style.display = "none"; // Hide the modal if clicked outside
    }
  };
  let currentIndex = 0;
  const itemsContainer = document.querySelector(".pants-slider-container");
  const totalItems = document.querySelectorAll(".pants-item-card").length;
  const itemWidth = 200; // Width of each item
  const itemMargin = 10; // Margin between items (adjust if necessary)
  const itemsToShow = 3; // Number of items to show at once

  // Function to move the slider
  function moveSlider(direction) {
    // Calculate the new index
    currentIndex = (currentIndex + direction) % totalItems;
    if (currentIndex < 0) currentIndex = totalItems - 1;

    // Calculate the offset (itemsWidth + margin)
    const offset = -(currentIndex * (itemWidth + itemMargin)); // Item width + margin

    // Move the container to the new position
    itemsContainer.style.transform = `translateX(${offset}px)`;
  }

  // Optional: Add event listeners for next/prev buttons
  document
    .querySelector(".next")
    .addEventListener("click", () => moveSlider(1));
  document
    .querySelector(".prev")
    .addEventListener("click", () => moveSlider(-1));

  // Automatically move slider every 3 seconds (optional)
  setInterval(() => moveSlider(1), 3000);
};
