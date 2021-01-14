//interacts with HTML popup

/*
document.addEventListener('click', function(){
    if(click = true){
    var text = document.getElementById("myInput").value
    var tag = document.createElement("li");
    var text = document.createTextNode(text);
    tag.appendChild(text);
    var element = document.getElementById("myList");
    element.appendChild(tag);
    click = false;
    }

});
*/

document.addEventListener('DOMContentLoaded', function(){
  var button = document.getElementById("task");
  button.addEventListener("click", function(){
    var text = document.getElementById("myInput").value
    var tag = document.createElement("li");
    var text = document.createTextNode(text);
    tag.appendChild(text);
    var element = document.getElementById("myList");
    element.appendChild(tag);
    click = false;
  });

});







// Once the DOM is ready...









