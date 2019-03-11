function getTable(){
    let table={
        head: [["序号","学年学期","课程代码","课程名称","学分","成绩","成绩性质"]],
        body: []
    }
    let allTr=frames["packageFrame"].document.querySelectorAll("#table2 tr")
    allTr.forEach((tr,index)=>{
        if(index==0) return
        let Alltds=tr.querySelectorAll("td")
        let item=[]
        Alltds.forEach((td,index)=>{
            item.push(td.innerText)
        })
        table.body.push(item)
    })
    console.log(table);
    return table
}
console.log("content");
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request);
        if (request.table){
            console.log("content get message");
            let table=getTable()
            sendResponse({data: table});
            console.log(table);
        }

    });


