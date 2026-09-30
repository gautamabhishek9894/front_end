class car{
    run(){
        return "car is running";
    }
}
class truck extends car{
    run(){
        return "truck is running";
    }
}
class BMW extends car{
    run(){
        return "bmd is running";
    }
}

const a1=new car();
const a2=new truck();
const a3=new BMW();

let pdfPrint={
    print: ()=>{
        console.log('printing txt ');
        
    }
}
let docsPrint={
    print: ()=>{
        console.log('printing docs ');
        
    }
}
let txtPrint={
    print: ()=>{
        console.log('printing  txt');
        
    }
}
 function scan(data){
    data.print();
 }
 scan(pdfPrint);
  scan(docsPrint);
   scan(txtPrint);