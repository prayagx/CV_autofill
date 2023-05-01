// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === 'formData') {
      // Store the form data in local storage
      chrome.storage.local.set({formData: message.data}, function() {
        console.log('Form data saved:', message.data);
        sendResponse({success: true});
      });
      // Send a message to the content script to fill in the form fields
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: 'fillForm'});
      });
    } else if (message.type === 'getFormData') {
      // Retrieve the stored form data from local storage
      chrome.storage.local.get('formData', function(data) {
        console.log('Form data retrieved:', data.formData);
        sendResponse({data: data.formData});
      });
    }
    // Make sure to return true to indicate that the response is asynchronous
    return true;
  });
  