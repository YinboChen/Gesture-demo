/* This file intentionally left blank. */

var x1,x2,y1,y2
num=0
var number =0,d=null;
//mouseup when in the precifically area
$( "#gestureArea" ).mouseup(function() {
    x2 = event.pageX;
    y2 = event.pageY;
    cal()
  });

$("#gestureArea").mousedown(function() {
    x1 = event.pageX;
    y1 = event.pageY;
    //alert("mouse down");
});

//mouse move
$( "#gestureArea" ).mousemove(function( event ) {
    var msg = "Handler for .mousemove() called at ";
    msg += event.pageX + ", " + event.pageY;
    $( "#log" ).append( "<div>" + msg + "</div>" );
  });

//mouse clicks
$( "#gestureArea" ).click(function( event ) {
    num++;
    $("#clicknum").text(num+" clicks")
    if(d){clearTimeout(d)}
    d= setTimeout(function(){number=0},200);
    number++;
    if(number==2){
         $("#quickclick").text("Great! Double click!"+" ( "+number+" ) ")
    }else if(number==3){
        $("#quickclick").text("Nice! Triple click!"+" ( "+number+" ) ")
    }   
});

//change mouse cursor style when overed this area
$( "#gestureArea" ).mouseover(function() {
    this.style.cursor = "pointer";
    //this.style.cursor = "url(cur.ico),auto";
  });

//reset account when mouse out of area
$( "#gestureArea" ).mouseout(function() {
    num=0
    $("#gestureResult").text("No gesture.");
    $("#clicknum").text("Number of clicks.")
    $("#quickclick").text("Double click or triple click!")
});


function cal(){
    if(x2<x1){
        $("#gestureResult").text("swipe left")
    }else if(x2>x1){
        $("#gestureResult").text("swipe right")
    }else if(x1==x2){
        $("#gestureResult").text("mouse up")
    }
}






