//document object represents our popup


document.addEventListener('DOMContentLoaded', function() { //calls the below when the initial HTML document is completely loaded
   
  var htmlRoot = document.children[0];
  var body = htmlRoot.children[1]
  var firstP = body.children[1];
  
  var tasks = "hello";

  firstP.innerText = tasks;
  
}, false);
