$(document).ready(function () {
  //Header-top dissappears when scrolled
  var topbar = $("#Header-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topbar.addClass("scrolled");
    } else {
      topbar.removeClass("scrolled");
    }
  });

  //Add active class when pagination buttons clicked:
  $(".paginate-btn").click(function () {
    $(".paginate-btn").removeClass("active-btn");

    $(this).addClass("active-btn");
  });

  //Scroll to top button:
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#backToTop").fadeIn();
    } else {
      $("#backToTop").fadeOut();
    }
  });

  $("#backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
