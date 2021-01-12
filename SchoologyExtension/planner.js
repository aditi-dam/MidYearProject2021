//interacts with HTML popup

document.addEventListener('DOMContentLoaded', function() { //calls the below when the initial HTML document is completely loaded

  //$('div#overdue-submissions.overdue-submissions.overdue-submissions-wrapper').remove();
      //$('div.upcoming-event.course-event').remove();
console.log(document.querySelector("#right-column-inner > div > div > div:nth-child(2) > h4 > span > a").innerHTML);

document.getElementById("taskone").innerHTML = document.querySelector("#right-column-inner > div > div > div:nth-child(2) > h4 > span > a").innerHTML;

});

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
      if (request.message == "hi") {
        sendResponse({message: "hi to you"});
        sendResponse({message: "Here's the real message"});
      }
    }
  );


