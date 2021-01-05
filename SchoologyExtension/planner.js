function addTasks() {
    $('div#overdue-submissions.overdue-submissions.overdue-submissions-wrapper').remove();
        //$('div.upcoming-event.course-event').remove();
    var upcoming = $('div.upcoming-events.upcoming-events-wrapper.sEventUpcoming-processed');
    var list = $('div.upcoming-list');
    var event = $('div.upcoming-event.course-event');
    var x = event.children()[1].innerText
    
   console.log(x);
    
  
  }

  addTasks();