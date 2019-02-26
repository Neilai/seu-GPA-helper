function exportGPA(data){
    var doc = new jsPDF()
    data.styles={font:"yahei",fontStyle:"normal"}
    doc.addFont('yahei.ttf', 'custom', 'normal');
    doc.setFont('custom');
    data.theme="plain"
    doc.text(15, 15, '测试');
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
