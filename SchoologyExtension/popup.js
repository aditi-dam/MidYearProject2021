
document.addEventListener('DOMContentLoaded', function() { //calls the below when the initial HTML document is completely loaded
  
    var htmlRoot = document.children[0];
    var body = htmlRoot.children[1]
    var firstP = body.children[1];
    firstP.innerText = "hello";

    addTasks();
    console.trace();

}, false);

function addTasks() {
    $('div#overdue-submissions.overdue-submissions.overdue-submissions-wrapper').remove();
        //$('div.upcoming-event.course-event').remove();
    /*
    var upcoming = $('div.upcoming-events.upcoming-events-wrapper.sEventUpcoming-processed');
    var list = $('div.upcoming-list');
    var event = $('div.upcoming-event.course-event');
    var x = event.children()[1].innerText;

    return x;
    */
 
  }

