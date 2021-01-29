//interacts with schoology

chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction',
});

chrome.runtime.sendMessage({
  from: 'content',
  subject: 'pleaseWork',
});


$('div#overdue-submissions.overdue-submissions.overdue-submissions-wrapper').remove();

console.log("Chrome extension go")


/*
chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    console.log("made it")
    if (request.message === "hi") {
      console.log("received")
    }
  }
);




/*

Different commands we've used before:

document.addEventListener('DOMContentLoaded', function() { //calls the below when the initial HTML document is completely loaded

    $('div#overdue-submissions.overdue-submissions.overdue-submissions-wrapper').remove();
    $('div.upcoming-event.course-event').remove();

    document.getElementById("taskone").innerHTML = "hello world";
    document.querySelector("#right-column-inner > div > div > div:nth-child(2) > h4 > span > a")




});

*/


