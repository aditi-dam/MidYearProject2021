//interacts with schoology


$('div#overdue-submissions.overdue-submissions.overdue-submissions-wrapper').remove();

console.log("Chrome extension go")

chrome.runtime.sendMessage({greeting: "Hello?"}, function(response) {
    console.log("The message is sent, but isn't received by onMessage for some reason");
    console.log(response.farewell); // doesn't work
  });

console.log("Message sent");

    


/*
document.addEventListener('DOMContentLoaded', function() { //calls the below when the initial HTML document is completely loaded

    //$('div#overdue-submissions.overdue-submissions.overdue-submissions-wrapper').remove();
        //$('div.upcoming-event.course-event').remove();

document.getElementById("taskone").innerHTML = "hello world";



});



  /*
document.addEventListener('DOMContentLoaded', function() { //calls the below when the initial HTML document is completely loaded
  
    var htmlRoot = document.children[0];
    var body = htmlRoot.children[1]
    var firstP = body.children[1];
    firstP.innerText = "hello";

    addTasks();
    console.trace();

}, false);

*/

