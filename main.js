function myFunction(x) {
  x.classList.toggle("change");
};

// jquery
$(document).ready(function(){
  $("#darkmode").click(function(){
    $("#box").toggleClass("boxing");
    $("#ajax-btn").toggleClass("ajax-btn");
    $(".fa-0").toggleClass("number-dark");
  })
});

$(document).ready(function(){
  $("li").not(".exempt").css("color", "blue");
});

$(document).ready(function(){
  $("#ajax-btn").click(function(){
    $(".ajax-p").text("i will be so glad to be able to manipulate this text with a single button click");
  })
  // .text changes a text on click to the one in the bracket
});

//normal function
let changeIcon = function(zero) {
  zero.classList.toggle('fa-moon');
}