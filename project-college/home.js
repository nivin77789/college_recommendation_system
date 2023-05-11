$(".a1").hide();
$(".a2").hide();
$(".b1").hide();
$(".b2").hide();
$(".c1").hide();
$(".det").hide();

$(document).ready(function () {
  $(".btn").click(function () {
    $(".ima").hide();

    var inp_p = $(".inp-p").val();
    var inp_b = $(".inp-b").val();
    var inp_jee = $(".inp-jee").val();
    var inp_cet = $(".inp-cet").val();
    $(".left2 p").text(inp_p);
    $(".left p").text(inp_b);
    $(".mid p").text(inp_jee);
    $(".right p").text(inp_cet);

    if (inp_b === 0) {
      console.log("am i working");
      $(".det").show();
      $(".c1").hide();
      $(".a1").hide();
      $(".a2").hide();
      $(".b1").hide();
      $(".b2").hide();
    }
    if (inp_b > 90 && inp_p > 90 && inp_jee > 85) {
      $(".a1").show();
      $(".a2").hide();
      $(".b1").hide();
      $(".b2").hide();
      $(".c1").hide();
      $(".det").hide();
    } else if (inp_b > 80 && inp_p > 80 && inp_jee > 85) {
      $(".a2").show();
      $(".a1").hide();
      $(".b1").hide();
      $(".b2").hide();
      $(".c1").hide();
      $(".det").hide();
    } else if (inp_b > 75 || (inp_p > 75 && inp_cet < 20000)) {
      $(".b1").show();
      $(".a1").hide();
      $(".a2").hide();
      $(".b2").hide();
      $(".c1").hide();
      $(".det").hide();
    } else if (inp_b > 65 || (inp_p > 65 && inp_cet < 20000)) {
      $(".b2").show();
      $(".a1").hide();
      $(".a2").hide();
      $(".b1").hide();
      $(".c1").hide();
      $(".det").hide();
    } else if (
      inp_b < 65 ||
      (inp_p < 65 && inp_cet > 20000 && inp_cet < 40000)
    ) {
      $(".c1").show();
      $(".a1").hide();
      $(".a2").hide();
      $(".b1").hide();
      $(".b2").hide();
      $(".det").hide();
    }
  });
});
