(function () {
  console.log("linked script.js");
  $("tr").each(function(){
    var i = 0;
    $(".miles").each(function(){
      i = i + $(this).val();
    });
    $(".total").html(i);
    console.log(i);
  });
})();
