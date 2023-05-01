// Get the input fields
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const linkedinInput = document.getElementById('linkedin');
const githubInput = document.getElementById('github');
const cityInput = document.getElementById('city');
const stateInput = document.getElementById('state');
const countryInput = document.getElementById('country');

// Load the stored form data
chrome.runtime.sendMessage({type: 'getFormData'}, function(response) {
  if (response.data) {
    // Fill in the form fields with the stored data
    nameInput.value = response.data.name;
    emailInput.value = response.data.email;
    linkedinInput.value = response.data.linkedin;
    githubInput.value = response.data.github;
    cityInput.value = response.data.city;
    stateInput.value = response.data.state;
    countryInput.value = response.data.country;
  }
});

// Save the form data when the "Save" button is clicked
document.getElementById('prefill-form').addEventListener('click', function() {
  // Get the form data from the input fields
  const name = nameInput.value;
  const email = emailInput.value;
  const linkedin = linkedinInput.value;
  const github = githubInput.value;
  const city = cityInput.value;
  const state = stateInput.value;
  const country = countryInput.value;

  // Send a message to the background script to store the form data
  chrome.runtime.sendMessage({type: 'formData', data: {
    name: name,
    email: email,
    linkedin: linkedin,
    github: github,
    city: city,
    state: state,
    country: country
  }}, function(response) {
    console.log('Form data stored:', response);
  });
});
