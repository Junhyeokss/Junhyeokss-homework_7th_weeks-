$(function () {
  $(".mainVisual .main_slide").slick({
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: true,
    arrows: false,
    fade: true,
  });

  $(".mainVisual .arrow i:last-child").on("click", function () {
    $(".main_slide").slick("slickNext");
  });
  $(".mainVisual .arrow .xi-arrow-left").on("click", function () {
    $(".main_slide").slick("slickPrev");
  });
});
