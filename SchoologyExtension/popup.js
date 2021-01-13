//interacts with HTML popup
/*
document.addEventListener('DOMContentLoaded', function() { //calls when the DOM is completely loaded
  document.getElementById("taskone").innerHTML = "hello";

});
*/

function addTask(){ 
  //Aditi can you figure out how to display what was typed in the entry box. 
  //Try displaying it in the "taskone" for now
  
  var inputValue = document.getElementbyId("taskone").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("myList").appendChild(li);


  //document.getElementById("taskone").innerHTML = document.getElementByName("task")[0].value;
  //document.getElementById("taskone").innerHTML = "hello";
}



// Once the DOM is ready...









