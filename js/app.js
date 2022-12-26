i = 0;
$("#toggle-menu,#1,#2,#3,#4,#5").click(function() {
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

$('.projet-container .projet-slides > img').click(function(){
  var $smallImages = $(this).attr('src');
  $('.big-screen > img').attr('src', $smallImages);
})


// selecteur de description en fonction de l'image cliquée
// fais a la va vite mais ça marche 


$('#img1').click(function(){
  $('#desc1').css("display", "block");
  $('#desc2').css("display", "none");
  $('#desc3').css("display", "none");
  $('#desc4').css("display", "none");
})

$('#img2').click(function(){
  $('#desc1').css("display", "none");
  $('#desc2').css("display", "block");
  $('#desc3').css("display", "none");
  $('#desc4').css("display", "none");
})

$('#img3').click(function(){
  $('#desc1').css("display", "none");
  $('#desc2').css("display", "none");
  $('#desc3').css("display", "block");
  $('#desc4').css("display", "none");
})

$('#img4').click(function(){
  $('#desc1').css("display", "none");
  $('#desc2').css("display", "none");
  $('#desc3').css("display", "none");
  $('#desc4').css("display", "block");
})