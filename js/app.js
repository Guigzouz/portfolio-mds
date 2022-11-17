i = 0;
$("#toggle-menu").click(function() {
    $("#menu-collapsed").toggleClass("menu-expanded");
    i++
    console.log(i)
    if(i % 2 === 0){
        $("p").css("color", "#707070");

    } else{
        $("p").css("color", "#AFABA0");
    }
  });

var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});