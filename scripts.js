$(document).ready(function () {
  $("p").hover(
    function () {
      $(this).css("background-color", "green");
    },
    function () {
      $(this).css("background-color", "aqua");
    }
  );
});

$(document).ready(function () {
  $(".MsoNormal").click(function () {
    $(".MsoNormal").fadeOut("slow");
  });
});

$(document).ready(function () {
  $("div").animate({
    left: '250px',
    height: '+=1000px',
    width: '+=1000px'
  });
});
