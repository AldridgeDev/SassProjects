$(document).ready(function(){ //event
  $("#container").on('click', function(){ //click listener
    $(this).toggleClass("open");
  });
});

$(document).ready(function(){
  $("h1").on('click', function(){
    $(this).toggleClass("add");
  });
});
