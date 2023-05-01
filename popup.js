// Get the form inputs
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var linkedinInput = document.getElementById('linkedin');
var githubInput = document.getElementById('github');
var cityInput = document.getElementById('city');
var stateInput = document.getElementById('state');
var countryInput = document.getElementById('country');

// Save the form inputs
document.getElementById('save').addEventListener('click', function() {
  // Get the input values
  var name = nameInput.value;
  var email = emailInput.value;
  var linkedin = linkedinInput.value;
  var github = githubInput.value;
  var city = cityInput.value;
  var state = stateInput.value;
  var country = countryInput.value;

  // Store the input values in local storage
  chrome.storage.local.set({
    'name': name,
    'email': email,
    'linkedin': linkedin,
    'github': github,
    'city': city,
    'state': state,
    'country': country
  }, function() {
    // Notify the user that data has been saved
    var statusDiv = document.getElementById('status');
    statusDiv.innerHTML = 'Data saved!';
  });
});

// Load the saved data
chrome.storage.local.get([
  'name',
  'email',
  'linkedin',
  'github',
  'city',
  'state',
  'country'
], function(result) {
  // Populate the form with the saved data
  nameInput.value = result.name || '';
  emailInput.value = result.email || '';
  linkedinInput.value = result.linkedin || '';
  githubInput.value = result.github || '';
  cityInput.value = result.city || '';
  stateInput.value = result.state || '';
  countryInput.value = result.country || '';
});
