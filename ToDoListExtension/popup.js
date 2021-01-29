document.addEventListener('DOMContentLoaded', function(){

  var taskButton = document.getElementById("task");
  var clearButton = document.getElementById("clearAll");

  //load past tasks
  chrome.storage.sync.get("task", (function(data){
      var text = data.task;
      var task = "";
      console.log(text);
      try { 
        for(i = 0; i < text.length; i++){
          if(text.substring(i, i+3) == ";;;"){
            addTask(task);
            i += 2;  
            task = "";
          }
          else {
            task += text.charAt(i);
          }
        }
        addTask(task);
      }
      catch(err){};
  }));
  
  //cross off the tasks that were crossed off before
  chrome.storage.sync.get("toggle", (function(data){
    var ul = document.getElementById("myList");
    var items = ul.getElementsByTagName("li");

    try{ 
      for(i = 0; i < data.toggle.length; i++){
        
        if(data.toggle.charAt(i) == "t"){
          items[i].classList.toggle('checked');
        }
        
      }
    }
    catch(err){};
  }));

  //add tasks when the add button is clicked and save to storage
  if(taskButton != null){
    taskButton.addEventListener("click", function(){
      addTask(document.getElementById("myInput").value);
      document.getElementById("myInput").value = "";
      saveToStorage(); 
    });
  }

  //clear tasks when the clear button is clicked and save to storage
  if(clearButton != null){
    clearButton.addEventListener("click", function(){
      clearAll();
      saveToStorage(); 
    });
  }

  //cross tasks off
  
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');    
    }

    saveCheckedToStorage();
  }, false);

});

//functions for when certain things are repeated

function addTask(text){
  if(text != "" && text != null){
    var tag = document.createElement("li");
    var text = document.createTextNode(text);
    tag.appendChild(text);
    tag.type = "checkbox";

    //add close element
    var span = document.createElement("SPAN");
    span.className = "close";
    span.appendChild(document.createTextNode("\u00D7"));
    tag.appendChild(span);

    document.getElementById("myList").appendChild(tag);

    //add event listener for if the close is clicked
    span.addEventListener("click", function(){
      span.parentElement.remove();
      saveToStorage();
    })
    saveCheckedToStorage();
  }

}

function clearAll(){
  var ul = document.getElementById("myList");
  var items = ul.getElementsByTagName("li");

  while(items.length > 0){
    items[0].remove();
  }

}

function saveToStorage(){
  var list = [];
  var ul = document.getElementById("myList");
  var items = ul.getElementsByTagName("li");
  
  for (var i = 0; i < items.length; ++i) {
    list.push(items[i].textContent.substring(0, items[i].textContent.length -1));
  }

  chrome.storage.sync.set({"task": list.join(";;;")});
  saveCheckedToStorage();
}

function saveCheckedToStorage(){
  var list = [];
  var ul = document.getElementById("myList");
  var items = ul.getElementsByTagName("li");
  
  for (var i = 0; i < items.length; ++i) {
    if(items[i].classList.value == 'checked'){
      list.push("t");
    }
    else{
      list.push("f");
    }
  }

  chrome.storage.sync.set({"toggle": list.join("")});
}

