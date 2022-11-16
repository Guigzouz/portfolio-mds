i = 0;
$("#toggle-menu").click(function() {
    $("#menu-collapsed").toggleClass("menu-expanded");
    i++
    console.log(i)
    // if(i % 2 === 0){
    //     $("*").css("background-color", "red");

    // } else{
    //     $("*").css("background-color", "blue");
    // }
  });