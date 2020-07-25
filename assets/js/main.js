$('.draggable-items-section1').arrangeable();
$('.draggable-items-section2').arrangeable();
$('.draggable-items-section3').arrangeable();

$(".check-icon").on("click", function (e) {
  $(event.target).parent().toggleClass("checked");
  e.preventDefault();
});

$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
      $("#header").addClass("active");
  }
  else {
      $("#header").removeClass("active");
  }
});
