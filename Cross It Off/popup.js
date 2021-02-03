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
    var list = document.getElementById("myList");
    var allTasks = list.getElementsByTagName("li");

    try{ 
      for(i = 0; i < data.toggle.length; i++){
        
        if(data.toggle.charAt(i) == "t"){
          allTasks[i].classList.toggle('checked');
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
  list.addEventListener('click', function(event) {
    if (event.target.tagName == 'LI') {
      event.target.classList.toggle('checked');    
    }

    saveCheckedToStorage();
  }, false);

});

//functions for when certain things are repeated

function addTask(taskText){
  if(taskText != "" && taskText != null){
    var allTasks = document.createElement("li");
    var taskText = document.createTextNode(taskText);
    allTasks.appendChild(taskText);
    allTasks.type = "checkbox";

    //add close element
    var close = document.createElement("SPAN");
    close.className = "close";
    close.appendChild(document.createTextNode("\u00D7"));
    allTasks.appendChild(close);

    document.getElementById("myList").appendChild(allTasks);

    //add event listener for if the close is clicked
    close.addEventListener("click", function(){
      close.parentElement.remove();
      saveToStorage();
    })
    saveCheckedToStorage();
  }

}

function clearAll(){
  var list = document.getElementById("myList");
  var allTasks = list.getElementsByTagName("li");

  while(allTasks.length > 0){
    allTasks[0].remove();
  }

}

function saveToStorage(){
  var textList = [];
  var list = document.getElementById("myList");
  var allTasks = list.getElementsByTagName("li");
  
  for (var i = 0; i < allTasks.length; ++i) {
    textList.push(allTasks[i].textContent.substring(0, allTasks[i].textContent.length -1));
  }

  chrome.storage.sync.set({"task": textList.join(";;;")});
  saveCheckedToStorage();
}

function saveCheckedToStorage(){
  var textList = [];
  var list = document.getElementById("myList");
  var allTasks = list.getElementsByTagName("li");
  
  for (var i = 0; i < allTasks.length; ++i) {
    if(allTasks[i].classList.value == 'checked'){
      textList.push("t");
    }
    else{
      textList.push("f");
    }
  }

  chrome.storage.sync.set({"toggle": textList.join("")});
}

