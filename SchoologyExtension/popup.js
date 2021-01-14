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
//https://stackoverflow.com/questions/40286947/how-to-access-multiple-keys-from-chrome-extensions-storage-api

document.addEventListener('DOMContentLoaded', function(){
  var button = document.getElementById("task");
  chrome.storage.local.get(['task'], function(data){

    var text = data.task;

    var tag = document.createElement("li");
    var text = document.createTextNode(text);
    tag.appendChild(text);
    var element = document.getElementById("myList");
    element.appendChild(tag);
  });

  button.addEventListener("click", function(){
    var text = document.getElementById("myInput").value
    chrome.storage.local.set({'task': text});

    var tag = document.createElement("li");
    var text = document.createTextNode(text);
    tag.appendChild(text);
    var element = document.getElementById("myList");
    element.appendChild(tag);
  });

});








// Once the DOM is ready...









