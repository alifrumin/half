(function () {
  console.log("linked script.js");
  $(".miles").each(function(){
    $(this).addclass("foo");
    console.log("rt");
    var i = 0;
    $("span.miles").each(function(){
      i = i + $(this).val();
    })
    $(".total").html(i);
    console.log(i);
  })
})();
