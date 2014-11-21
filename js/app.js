
var set = [];
var origset = [];
var Card; 

  $.getJSON('js/set.json', function(data) {
      $.each(data, function(index, item) {
          console.log(data);
          set.push(item);
          console.log(set);
          cycle();
      });
  });

 var origset = set.slice(0);
       
function cycle(){
  console.log(set);
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

 


