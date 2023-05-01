// listen for message from popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "fill_form") {
      // find input fields on the page
      var inputFields = document.querySelectorAll(
        'input[type="text"], input[type="email"], input[type="url"]'
      );
  
      // fill input fields with values from storage
      for (var i = 0; i < inputFields.length; i++) {
        if (request.data[inputFields[i].name]) {
          inputFields[i].value = request.data[inputFields[i].name];
        }
      }
  
      // send response to popup
      sendResponse({ message: "form_filled" });
    }
  });
  