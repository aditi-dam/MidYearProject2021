//interacts with schoology


$('div#overdue-submissions.overdue-submissions.overdue-submissions-wrapper').remove();

console.log("Chrome extension go")
/*

document.addEventListener('DOMContentLoaded', function() { //calls the below when the initial HTML document is completely loaded

  document.getElementById("taskone").innerHTML = "Chrome extension go";
//document.getElementById("taskone").innerHTML = document.querySelector("#right-column-inner > div > div > div:nth-child(2) > h4 > span > a").innerHTML;



});
*/

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if (request.message == "hi") {
      sendResponse({message: "hi to you"});
      console.log("Where's the real message?")
    }
  }
);


chrome.runtime.sendMessage({message: "hi"}, (response) => {
    console.log(response.message); // doesn't work
  });




    


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

