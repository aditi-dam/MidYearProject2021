//interacts with HTML popup
/*
document.addEventListener('DOMContentLoaded', function() { //calls when the DOM is completely loaded
  document.getElementById("taskone").innerHTML = "hello";

});
*/



function addTask(text){ 



   var tag = document.createElement("li");
   var text = document.createTextNode(text);
   tag.appendChild(text);
  var element = document.getElementById("myList");
   element.appendChild(tag);


}



// Once the DOM is ready...









