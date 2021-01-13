chrome.runtime.onMessage.addListener((msg, sender) => {
    // First, validate the message's structure.
    if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
      // Enable the page-action for the requesting tab.
      console.log("I'm here");
      chrome.pageAction.show(sender.tab.id);
      console.log("I did the show stuff");
    }
});