// Retrieve the stored form data
chrome.runtime.sendMessage({type: 'getFormData'}, function(response) {
    if (response.data) {
      // Fill in any input fields with matching names or IDs with the stored data
      Object.keys(response.data).forEach(function(key) {
        var input = document.querySelector('[name="' + key + '"], [id="' + key + '"]');
        if (input) {
          input.value = response.data[key];
        }
      });
    }
  });
  