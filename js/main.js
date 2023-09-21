$(document).ready(function () {
  var topbar = $("#Header-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topbar.addClass("scrolled");
    } else {
      topbar.removeClass("scrolled");
    }
  });

  $(".paginate-btn").click(function () {
    $(".paginate-btn").removeClass("active-btn");

    $(this).addClass("active-btn");
  });

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
