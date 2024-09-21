function my(){


var ob1={
    bidamt:600,
    youramt:prompt("Enter your bid ")
}

if(ob1.youramt>600){
if(ob1.youramt>localStorage.getItem("a")){
    ob1.bidamt=ob1.youramt;
    localStorage.setItem("a",ob1.bidamt);
    document.getElementById("demo").innerHTML=ob1.bidamt ;
    document.getElementById("bid1").innerHTML=ob1.bidamt;
}
else{
    alert("Higher bid is already made");
    document.getElementById("bid1").innerHTML=ob1.youramt;
    document.getElementById("demo").innerHTML=localStorage.getItem("a") ;
}

}
else{
    alert("Bid price not allowed");
}
}

function my1(){
var ob2={
    bidamt1:800,
    youramt1:prompt("Enter your bid ")
}
    
if(ob2.youramt1>800){
if(ob2.youramt1>localStorage.getItem("b")){
    ob2.bidamt1=ob2.youramt1;
    localStorage.setItem("b",ob2.bidamt1);
    document.getElementById("demo1").innerHTML=ob2.bidamt1 ;
    document.getElementById("bid2").innerHTML=ob2.bidamt1;
    }
else{
    alert("Higher bid is already made");
    document.getElementById("bid2").innerHTML=ob2.youramt1;
    document.getElementById("demo1").innerHTML=localStorage.getItem("b") ;
    }
    
    }
else{
    alert("Bid price not allowed");
    }
}
function my2(){
    var ob3={
        bidamt2:1400,
        youramt2:prompt("Enter your bid ")
    }
        
    if(ob3.youramt2>1400){
    if(ob3.youramt2>localStorage.getItem("c")){
        ob3.bidamt2=ob3.youramt2;
        localStorage.setItem("c",ob3.bidamt2);
        document.getElementById("demo2").innerHTML=ob3.bidamt2;
        document.getElementById("bid3").innerHTML=ob3.bidamt2;
        }
    else{
        alert("Higher bid is already made");
        document.getElementById("bid3").innerHTML=ob3.youramt2;
        document.getElementById("demo2").innerHTML=localStorage.getItem("c") ;
        }
        
        }
    else{
        alert("Bid price not allowed");
        }
}

function my3(){
    var ob4={
        bidamt2:200,
        youramt2:prompt("Enter your bid ")
    }
        
    if(ob4.youramt2>200){
    if(ob4.youramt2>localStorage.getItem("d")){
        ob4.bidamt2=ob4.youramt2;
        localStorage.setItem("d",ob4.bidamt2);
        document.getElementById("demo3").innerHTML=ob4.bidamt2;
        document.getElementById("bid4").innerHTML=ob4.bidamt2;
        }
    else{
        alert("Higher bid is already made");
        document.getElementById("bid4").innerHTML=ob4.youramt2;
        document.getElementById("demo3").innerHTML=localStorage.getItem("d") ;
        }
        
        }
    else{
        alert("Bid price not allowed");
        }
}
function my4(){
    var ob5={
        bidamt2:250,
        youramt2:prompt("Enter your bid ")
    }
        
    if(ob5.youramt2>250){
    if(ob5.youramt2>localStorage.getItem("e")){
        ob5.bidamt2=ob5.youramt2;
        localStorage.setItem("e",ob5.bidamt2);
        document.getElementById("demo4").innerHTML=ob5.bidamt2;
        document.getElementById("bid5").innerHTML=ob5.bidamt2;
        }
    else{
        alert("Higher bid is already made");
        document.getElementById("bid5").innerHTML=ob5.youramt2;
        document.getElementById("demo4").innerHTML=localStorage.getItem("e") ;
        }
        
        }
    else{
        alert("Bid price not allowed");
        }
}
function my5(){
    var ob6={
        bidamt2:40,
        youramt2:prompt("Enter your bid ")
    }
        
    if(ob6.youramt2>40){
    if(ob6.youramt2>localStorage.getItem("f")){
        ob6.bidamt2=ob6.youramt2;
        localStorage.setItem("f",ob6.bidamt2);
        document.getElementById("demo5").innerHTML=ob6.bidamt2;
        document.getElementById("bid6").innerHTML=ob6.bidamt2;
        }
    else{
        alert("Higher bid is already made");
        document.getElementById("bid6").innerHTML=ob6.youramt2;
        document.getElementById("demo5").innerHTML=localStorage.getItem("f") ;
        }
        
        }
    else{
        alert("Bid price not allowed");
        }
}
function my6(){
    var ob7={
        bidamt2:300,
        youramt2:prompt("Enter your bid ")
    }
        
    if(ob7.youramt2>300){
    if(ob7.youramt2>localStorage.getItem("g")){
        ob7.bidamt2=ob7.youramt2;
        localStorage.setItem("g",ob7.bidamt2);
        document.getElementById("demo6").innerHTML=ob7.bidamt2;
        document.getElementById("bid7").innerHTML=ob7.bidamt2;
        }
    else{
        alert("Higher bid is already made");
        document.getElementById("bid7").innerHTML=ob7.youramt2;
        document.getElementById("demo6").innerHTML=localStorage.getItem("g") ;
        }
        
        }
    else{
        alert("Bid price not allowed");
        }
}
function my7(){
    var ob8={
        bidamt2:1000,
        youramt2:prompt("Enter your bid ")
    }
        
    if(ob8.youramt2>1000){
    if(ob8.youramt2>localStorage.getItem("h")){
        ob8.bidamt2=ob8.youramt2;
        localStorage.setItem("h",ob8.bidamt2);
        document.getElementById("demo7").innerHTML=ob8.bidamt2;
        document.getElementById("bid8").innerHTML=ob8.bidamt2;
        }
    else{
        alert("Higher bid is already made");
        document.getElementById("bid8").innerHTML=ob8.youramt2;
        document.getElementById("demo7").innerHTML=localStorage.getItem("h") ;
        }
        
        }
    else{
        alert("Bid price not allowed");
        }
}
