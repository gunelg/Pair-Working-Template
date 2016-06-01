$(document).ready(function() {
  $(".workImg div img").mouseover(function(){
    $(this).css({"transform":"scale(1.3)"});
    $(".hoverImg",this).css({"background":"black","opacity":".5","visibility":"visible"});
}); 
  $(".workImg div img").mouseout(function(){
    $(this).css({"transform":"scale(1)"});
    //$(".word").eq(0).css({"background":"none","opacity":"0","visibility":"hidden"});
});
});


$(document).ready(function() {
  $(".hoverImg").mouseover(function(){
    $(".hoverImg",this).css({"transform":"scale(1.3)"});
    $(".word",this).css({"background":"black","opacity":".5","visibility":"visible"});
}); 
  $(".hoverImg").mouseout(function(){
    $(".hoverImg",this).css({"transform":"scale(1)"});
    $(".word",this).css({"background":"none","opacity":"0","visibility":"hidden"});
});
});


