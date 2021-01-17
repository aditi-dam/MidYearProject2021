//interacts with HTML popup

//https://stackoverflow.com/questions/40286947/how-to-access-multiple-keys-from-chrome-extensions-storage-api


document.addEventListener('DOMContentLoaded', function(){
  
  /*
  chrome.storage.local.set({'task1': 'one'});
  allTaskKeys.push('task1')
  chrome.storage.local.set({'task2': 'two'});
  allTaskKeys.push('task2')
  */



  var button = document.getElementById("task");


  chrome.storage.sync.get("task", function(data){
      var text = data.task;
      addTask(text);
      console.log(text);
      
    
  });


  button.addEventListener("click", function(){
    var newElement = document.getElementById("myInput").value 
    addTask(newElement);

    var text = "";
    var ul = document.getElementById("myList");
    var items = ul.getElementsByTagName("li");
    
    for (var i = 0; i < items.length; ++i) {
      text += items[i].innerHTML 
    }
    chrome.storage.sync.set({"task": text});
    
    
  });

});

function addTask(text){
  var tag = document.createElement("li");
  var text = document.createTextNode(text);
  tag.appendChild(text);
  var element = document.getElementById("myList");
  element.appendChild(tag);
}

