//document object represents our webpage
document.addEventListener('DOMContentLoaded', function() { //calls the below when the initial HTML document is completely loaded
    var checkPageButton = document.getElementById('checkPage'); //store the element which has id 'checkPage' in checkPageButton
    checkPageButton.addEventListener('click', function() { //calls the below function when checkPageButton is clicked
  
      chrome.tabs.getSelected(null, function(tab) { //get the currently selected tab
        d = document;
        
        //the rest are specific to the gtmetrix website
        var f = d.createElement('form'); 
        f.action = 'http://gtmetrix.com/analyze.html?bm';
        f.method = 'post';
        var i = d.createElement('input');
        i.type = 'hidden';
        i.name = 'url';
        i.value = tab.url;
        f.appendChild(i);
        d.body.appendChild(f);
        f.submit();
      });
    }, false);
  }, false);