// Listen for a message from the popup window
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === 'fill_form') {
      // Find the input fields on the page
      var inputs = document.getElementsByTagName('input');
      for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        // Fill in the input fields with the user's data
        switch (input.type) {
          case 'text':
            input.value = message.data[input.name];
            break;
          case 'email':
            input.value = message.data[input.name];
            break;
          case 'url':
            input.value = message.data[input.name];
            break;
        }
      }
      // Send a message back to the popup window to confirm that the form was filled in
      sendResponse({status: 'success'});
    }
  });
  