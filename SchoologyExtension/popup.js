document.addEventListener('DOMContentLoaded', function(){

  var taskButton = document.getElementById("task");
  var clearButton = document.getElementById("clearAll");

  //load past tasks
  chrome.storage.sync.get("task", (function(data){
      var text = data.task;
      var task = "";
      
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

  //add tasks accordingly
  if(taskButton != null){
    taskButton.addEventListener("click", function(){
      addTask(document.getElementById("myInput").value);
      saveToStorage(); 
    });
  }

  //clear tasks accordingly
  if(clearButton != null){
    clearButton.addEventListener("click", function(){
      clearAll();
      saveToStorage(); 
    });
  }

});

function addTask(text){
  if(text != "" && text != null){
    var tag = document.createElement("li");
    var text = document.createTextNode(text);
    tag.appendChild(text);
    var element = document.getElementById("myList");
    element.appendChild(tag);
  }
}

function clearAll(){
  var ul = document.getElementById("myList");
  var items = ul.getElementsByTagName("li");
  console.log(items.length);

  while(items.length > 0){
    items[0].remove();
  }

}

function saveToStorage(){
  var list = [];
  var ul = document.getElementById("myList");
  var items = ul.getElementsByTagName("li");
  
  for (var i = 0; i < items.length; ++i) {
    list.push(items[i].innerHTML);
  }

  chrome.storage.sync.set({"task": list.join(";;;")});
}


