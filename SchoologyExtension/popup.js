//interacts with HTML popup

//https://stackoverflow.com/questions/40286947/how-to-access-multiple-keys-from-chrome-extensions-storage-api

var allTaskKeys = []; //needs to be sort of like a static variable-- shouldn't reset even if extension is closed
var count = 1;

document.addEventListener('DOMContentLoaded', function(){

  chrome.storage.local.set({'task1': 'one'});
  allTaskKeys.push('task1')
  chrome.storage.local.set({'task2': 'two'});
  allTaskKeys.push('task2')


  var button = document.getElementById("task");
  
  for(i = 0; i < allTaskKeys.length; i++){
    var taskKey = allTaskKeys[i]
    chrome.storage.local.get([taskKey], function(data){

     // var text = data.task1
      var text = data.taskKey;

      var tag = document.createElement("li");
      var text = document.createTextNode(text);
      tag.appendChild(text);
      var element = document.getElementById("myList");
      element.appendChild(tag);
    });
  }

  button.addEventListener("click", function(){
    var text = document.getElementById("myInput").value 
    var taskKey = 'task' + count;
    chrome.storage.local.set({taskKey: text});
    count++;
    allTaskKeys.push(taskKey)

    //to add to list in html
    var tag = document.createElement("li");
    var text = document.createTextNode(text);
    tag.appendChild(text);
    var element = document.getElementById("myList");
    element.appendChild(tag);
  });

});

















