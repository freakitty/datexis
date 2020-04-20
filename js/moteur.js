/*global $, jQuery, TweenMax, THREE*/

$(function () {
  "use strict";

  /* ================= MENU ECPANDED ================= */
  $(".menu-collapsed").click(function () {
    $(this).toggleClass("menu-expanded");
  });

  /* ================= NAV ITEM HOME ================= */
  $('#g_clients').click(function () {
    window.location = 'nos-clients.html';
  });
  
  $("#g_clients").mouseover(function () {
    $(".txt_clients").css('fill-opacity', '1');
  });

  $('#g_clients').mouseout(function () {
    $('.txt_clients').css('fill-opacity', '0');
  });

  $('#g_lexique').click(function () {
    window.location = 'lexique.html';
  });
  
  $('#g_lexique').mouseover(function () {
    $('.txt_lexique').css('fill-opacity', '1');
  });

  $('#g_lexique').mouseout(function () {
    $('.txt_lexique').css('fill-opacity', '0');
  });

  $('#g_contact').click(function () {
    window.location = 'contact.html';
  });

  $('#g_contact').mouseover(function () {
    $('.txt_contact').css('fill-opacity', '1');
  });

  $('#g_contact').mouseout(function () {
    $('.txt_contact').css('fill-opacity', '0');
  });

  $('#g_actu').mouseover(function () {
    $('.txt_actu').css('fill-opacity', '1');
  });

  $('#g_actu').mouseout(function () {
    $('.txt_actu').css('fill-opacity', '0');
  });

  $('#g_solutions').mouseover(function () {
    $('.txt_solutions').css('fill-opacity', '1');
  });

  $('#g_solutions').mouseout(function () {
    $('.txt_solutions').css('fill-opacity', '0');
  });

  $('#g_about').click(function () {
    window.location = 'a-propos.html';
  });

  $('#g_about').mouseover(function () {
    $('.txt_about').css('fill-opacity', '1');
  });

  $('#g_about').mouseout(function () {
    $('.txt_about').css('fill-opacity', '0');
  });

  $('#g_map').click(function () {
    window.location = 'couverture-international.html';
  });

  $('#g_map').mouseover(function () {
    $('.txt_map').css('fill-opacity', '1');
  });

  $('#g_map').mouseout(function () {
    $('.txt_map').css('fill-opacity', '0');
  });

  /* ================= MAP ATTR SRC ================= */
  
  window.onload = function(){
    $('.dot_green').toggleClass('active');
    $('.greenText').toggleClass('active');
  };
  
  function colorGreen() {
    $('.dot_green').toggleClass('active');
    $('.greenText').toggleClass('active');
  }

  function colorBlue() {
    $('.dot_blue').toggleClass('active');
    $('.blueText').toggleClass('active');
  }

  function colorYellow() {
    $('.dot_yellow').toggleClass('active');
    $('.yellowText').toggleClass('active');
  }

  function resetColorGreen() {
    $('.dot_blue').removeClass('active');
    $('.blueText').removeClass('active');
    $('.dot_yellow').removeClass('active');
    $('.yellowText').removeClass('active');
  }

  function resetColorBlue() {
    $('.dot_green').removeClass('active');
    $('.greenText').removeClass('active');
    $('.dot_yellow').removeClass('active');
    $('.yellowText').removeClass('active');
  }

  function resetColorYellow() {
    $('.dot_green').removeClass('active');
    $('.greenText').removeClass('active');
    $('.dot_blue').removeClass('active');
    $('.blueText').removeClass('active');
  }

  $('#donnees').on({
    'click': function () {
      $('#carte01').attr('src', 'images/carte-enrichissementdonnees-vert.png');
      $('.title_map').html("Enrichissement des données");
      colorGreen();
      resetColorGreen();
    }
  });

  $('#ad_post').on({
    'click': function () {
      $('#carte01').attr('src', 'images/carte-redressementpostal-bleu.png');
      $('.title_map').html("Redressement des adresses postales");
      colorBlue();
      resetColorBlue();
    }
  });

  $('#robinson').on({
    'click': function () {
      $('#carte01').attr('src', 'images/carte-Robinson-jaune.png');
      $('.title_map').html("Data privacy - Robinson");
      colorYellow();
      resetColorYellow();
    }
  });
  

});
  $(document).ready(function() {
  $(".toggle01").click(function() {
    var elem = $(".toggle01").text();
    if (elem == "Lire plus") {
      //Stuff to do when btn is in the read more state
      $(".toggle01").text("Lire moins");
      $(".txt01").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $(".toggle01").text("Lire plus");
      $(".txt01").slideUp();
    }
  });
    
      $(".toggle02").click(function() {
    var elem = $(".toggle02").text();
    if (elem == "Lire plus") {
      //Stuff to do when btn is in the read more state
      $(".toggle02").text("Lire moins");
      $(".txt02").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $(".toggle02").text("Lire plus");
      $(".txt02").slideUp();
    }
  });
    
    $(".toggle03").click(function() {
    var elem = $(".toggle03").text();
    if (elem == "Lire plus") {
      //Stuff to do when btn is in the read more state
      $(".toggle03").text("Lire moins");
      $(".txt03").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $(".toggle32").text("Lire plus");
      $(".txt03").slideUp();
    }
  });
    
    $(".toggle04").click(function() {
    var elem = $(".toggle04").text();
    if (elem == "Lire plus") {
      //Stuff to do when btn is in the read more state
      $(".toggle04").text("Lire moins");
      $(".txt04").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $(".toggle04").text("Lire plus");
      $(".txt04").slideUp();
    }
  });
});


 $(window).scroll(function () {
        $(".anim .card").each(function () {
            const position = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > position - windowHeight) {
                $(this).addClass("active");
            }
            if (scroll < 100) {
                $(this).removeClass("active");
            }
        });
    });

var mq = window.matchMedia("(max-width: 480px)");
  
    if (mq.matches) {
         $('.anim').toggleClass('wrapp');
    }