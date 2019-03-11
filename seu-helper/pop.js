function exportGPA(data){
    data.styles=P={fontStyle:"normal"}
}

let button=document.querySelector("button")
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {table: "true"}, function(response) {
      console.log(response.data);
     // exportGPA(response.data)
  });
});