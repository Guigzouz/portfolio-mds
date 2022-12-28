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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// MODAL N2

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}