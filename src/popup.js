function exportGPA(data){
    var doc = new jsPDF()
    data.styles={font:"yahei",fontStyle:"normal"}
    doc.autoTable(data);
    doc.save('table.pdf');
}

let button=document.querySelector("button")
button.addEventListener("click",()=>{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {table: "true"}, function(response) {
            console.log(response.data);
            exportGPA(response.data)
        });
    });
})
