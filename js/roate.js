$(window).mousemove(function(event) {
  $(".rotation").css({
    "margin-left": -(event.pageX * 0.02),
    "margin-top": -(event.pageY * 0.02)
  });
  $("#rotate2").css({
    "margin-left": -(event.pageX * 0.05),
    "margin-top": -(event.pageY * 0.05)
  });
});