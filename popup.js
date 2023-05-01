// Listen for the form submit event
document.getElementById("prefill-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Retrieve the user's data from the input fields
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
  
    // Create an object with the user's data
    const userData = {
      firstName,
      lastName,
      email,
      linkedin,
      github,
      city,
      state,
      country
    };
  
    // Send a message to the background script to fill in the form with the user's data
    chrome.runtime.sendMessage({ type: "prefill-form", userData }, function(response) {
      // Display a status message to the user
      const statusDiv = document.getElementById("status");
      statusDiv.innerHTML = response.message;
    });
  });