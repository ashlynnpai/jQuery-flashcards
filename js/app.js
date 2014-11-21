
var set = [];
var origset = [];
var Card; 

$.getJSON('js/set.json', function(data) {
    $.each(data, function(index, item) {
        set.push(item);
        cycle();
    });
});

var origset = set.slice(0);
       
function cycle(){
    Card = set.shift();  
    $("#card").html(Card.front);
    set.push(Card);
}

$("#card").click(function(){
    $("#card").html($("#card").text() == Card.front ? Card.back : Card.front);
    });

$( "#nextbutton" ).click(function() {
    cycle();
     });        

$( "#knownbutton" ).click(function() {
  set.pop();
  cycle();
   });       

 $( "#resetbutton" ).click(function() {
  set = origset;
  cycle();
   });    

 


