// $( document ).ready(function() {
//   console.log("linked script.js");
//   $("tr").each(function(){
//     if ($(".miles").parent().is(this)) {
//       $(".miles").each(function(){
//         var miles = parseInt($(".miles").text());
//         console.log(miles);
//         var i = 0;
//         i = i + $(".miles").val();
//         $(".total").html(i);
//     });
//     }
//   })
// });

$( document ).ready(function() {
  i = 0;
  $(".miles").each(function(){
      var week = parseInt($(this).text());
      if (week > 0) {
        i = i + week;
        console.log(i);
      }
  });
  // var miles = parseInt($(".miles").text());
  // console.log(miles);
  // var i = 0;
  // i = i + miles;
  // $(".total").html(i);
});
