$(document).ready(function() {
  $('#jq_hide').click(function(){
    $("#frog").hide();
  });
  $('#jq_show').click(function(){
    $("#frog").show();
  });
  $('#jq_toggle').click(function(){
    $("#frog2").toggle();
  });
  $('#slide_up').click(function(){
    $("#frog3").slideUp();
  });
  $('#slide_down').click(function(){
    $("#frog3").slideDown();
  });
  $('#slide_toggle').click(function(){
    $("#frog4").slideToggle("slow");
  });
  $('#fade_in').click(function(){
    $("#frog5").fadeIn();
  });
  $('#fade_out').click(function(){
    $("#frog5").fadeOut();
  });
  $("#add_class").click(function(){
    if (!$("#frog6").attr("class")) {
      $("#frog6").addClass("biggie");
    } else {
      $("#frog6").removeClass();
    }
    $("#biggie_p").html("<h1>BIG FROG</h1><p>Click to toggle class</p>");
  });

  $("#jq_before").click(function(){
    $("#poliwhirl").before(`<img src="./poliwag.jpeg">`)
  });
  $("#jq_after").click(function(){
    $("#poliwhirl").after(`<img src="./poliwrath.jpeg">`)
  });
  
  $("#append").click(function(){
    $("#append_here").append(`<img src="./frogs.png">`);
  });

  $( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".frog_h2" ).text( value );
  })
  .keyup();
})