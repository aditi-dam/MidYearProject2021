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
    var element = document.getElementById("myList");
    element.appendChild(tag);

    saveCheckedToStorage();
  }
/*
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
*/
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
    list.push(items[i].innerHTML);
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

