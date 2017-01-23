$(window).load(function(){

  alert($("body").height());
  alert($(window).height());

  if ($("body").height() > $(window).height()) {
    $("footer").hide();
    alert("footer should be hidden");
    window.onscroll = function (ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        $("footer").slideDown();
        alert("footer should be visible again");
      } else {
        $("footer").slideUp();
        alert("footer should be hidden again");
      }
    };
  };
});
