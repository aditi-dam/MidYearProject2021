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


  chrome.storage.sync.get("task", (function(data){
      var text = data.task;
      var task = "";
      //addTask(text);
      
      try{ 
        for(i = 0; i < text.length; i++){
          if(text.substring(i, i+3) == ";;;"){
            addTask(task);
            i += 2;  
            task = "";
          }
          else{
            task += text.charAt(i);
          }
        }
        addTask(task);
      }
      catch(err){};

  }));


  button.addEventListener("click", function(){
    var newElement = document.getElementById("myInput").value 
    addTask(newElement);

    var list = [];
    var ul = document.getElementById("myList");
    var items = ul.getElementsByTagName("li");
    
    for (var i = 0; i < items.length; ++i) {
      list.push(items[i].innerHTML);
    }


    chrome.storage.sync.set({"task": list.join(";;;")});
    
    
  });

});

function addTask(text){
  var tag = document.createElement("li");
  var text = document.createTextNode(text);
  tag.appendChild(text);
  var element = document.getElementById("myList");
  element.appendChild(tag);
}

