chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Check if the message is to fill in form fields
    if (request.type === 'fillForm') {
      // Get the form data from storage
      chrome.storage.local.get([
        'name',
        'email',
        'linkedin',
        'github',
        'city',
        'state',
        'country'
      ], function(result) {
        // Fill in the form fields
        var nameInput = document.querySelector('[name="name"]');
        if (nameInput) {
          nameInput.value = result.name || '';
        }
        var emailInput = document.querySelector('[name="email"]');
        if (emailInput) {
          emailInput.value = result.email || '';
        }
        var linkedinInput = document.querySelector('[name="linkedin"]');
        if (linkedinInput) {
          linkedinInput.value = result.linkedin || '';
        }
        var githubInput = document.querySelector('[name="github"]');
        if (githubInput) {
          githubInput.value = result.github || '';
        }
        var cityInput = document.querySelector('[name="city"]');
        if (cityInput) {
          cityInput.value = result.city || '';
        }
        var stateInput = document.querySelector('[name="state"]');
        if (stateInput) {
          stateInput.value = result.state || '';
        }
        var countryInput = document.querySelector('[name="country"]');
        if (countryInput) {
          countryInput.value = result.country || '';
        }
  
        // Notify the content script that the form has been filled
        sendResponse({message: 'Form filled!'});
      });
    }
  
    return true; // Required for asynchronous responses
  });
  