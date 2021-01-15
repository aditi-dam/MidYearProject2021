//interacts with HTML popup

//https://stackoverflow.com/questions/40286947/how-to-access-multiple-keys-from-chrome-extensions-storage-api

var allTaskKeys = []; 
var count = 1;

document.addEventListener('DOMContentLoaded', function(){
  
  /*
  chrome.storage.local.set({'task1': 'one'});
  allTaskKeys.push('task1')
  chrome.storage.local.set({'task2': 'two'});
  allTaskKeys.push('task2')
  */

  var defaultValue = [];
  chrome.storage.sync.get({taskKeys: defaultValue}, function(data) {
    // data.taskKeys will be either the stored value, or defaultValue if nothing is set
    chrome.storage.sync.set({taskKeys: data.taskKeys}, function() {
      // The value is now stored, so you don't have to do this again
      allTaskKeys = data.taskKeys;
    });
  });


  var button = document.getElementById("task");

  for(i = 0; i < allTaskKeys.length; i++){
    var taskKey = allTaskKeys[i]
    chrome.storage.local.get([taskKey], function(data){
    var text = data.task1
      //var text = data.taskKey;
    addTask(text);
    
    });
  }

  button.addEventListener("click", function(){
    var text = document.getElementById("myInput").value 
    addTask(text);
    
    var taskKey = 'task1';
    allTaskKeys.push(taskKey);
    chrome.storage.sync.set({taskKeys: allTaskKeys}, function() {});
    
  });

});

function addTask(text){
  var tag = document.createElement("li");
  var text = document.createTextNode(text);
  tag.appendChild(text);
  var element = document.getElementById("myList");
  element.appendChild(tag);
}

