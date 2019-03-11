/**
 * Created by Neil
 * 2019-02-26 11:04
 */
data=
function exportGPA(data){
    var doc = new jsPDF()
    console.log(doc);
    doc.addFont('NotoSansCJKtc-Regular.ttf', 'NotoSansCJKtc', 'normal');
    doc.setFont('NotoSansCJKtc');
    doc.text('东南大学成绩',12,16)
    data.theme='plain'
    data.styles={ font: "NotoSansCJKtc",fontStyle:"normal"}
    doc.autoTable(data);
    doc.save('table.pdf');
}
exportGPA(data)