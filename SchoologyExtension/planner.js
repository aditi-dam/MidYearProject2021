//interacts with HTML popup

document.getElementById("taskone").innerHTML = "hello world";

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting == "Hello?")
        sendResponse({farewell: "Goodbye."})
    }
  );


