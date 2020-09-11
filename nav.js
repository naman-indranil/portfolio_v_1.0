(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function () {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function () {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery



$(document).ready(function () {

  //hide all descriptions
  $('.description-w').hide();

  function showFullHeight() {

    $('.gallery-w li').each(function () {

      $(this).find('.btn-w').click(function (e) {

        console.log('Botão clicado');

        e.preventDefault();

        //NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
        $('.description-w').slideUp('normal');

        //IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
        if ($(this).next().is(':hidden') == true) {

          //ADD THE ON CLASS TO THE BUTTON
          $(this).addClass('on');

          //OPEN THE SLIDE
          $(this).next().slideDown('normal');



        }

      }); //click
    }); //each
  } //function


  //load the function when the doc is ready		
  showFullHeight();

});


var angle = 0;

function galleryspin(sign) {
  spinner = document.querySelector("#spinner");
  if (sign) {
    angle = angle - 90;
  } else {
    angle = angle + 90;
  }
  spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}

function spining() {
  spinner = document.querySelector("#spinner");
  angle = angle + 90;
  spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}

var autospin = setInterval(spining, 1500);
var arrow = document.getElementsByClassName("ss-icon");
arrow[0].addEventListener("mouseover", function () {
  clearInterval(autospin);
});
arrow[1].addEventListener("mouseover", function () {
  clearInterval(autospin);
});
arrow[0].addEventListener("mouseout", function () {
  autospin = setInterval(spining, 1500);
});
arrow[1].addEventListener("mouseout", function () {
  autospin = setInterval(spining, 1500);
});




var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");


  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";

}



function slideTime(n) {
  n = 1
  showSlides(slideIndex += n);
}

setInterval(slideTime, 3000);