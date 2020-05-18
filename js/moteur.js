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
  
  $('#g_actu').click(function () {
    window.location = 'actualites.html';
  });

  $('#g_actu').mouseover(function () {
    $('.txt_actu').css('fill-opacity', '1');
  });

  $('#g_actu').mouseout(function () {
    $('.txt_actu').css('fill-opacity', '0');
  });
  
  $('#g_solutions').click(function () {
    window.location = 'nos-solutions.html';
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



$(function () {
    "use strict";
  
 
   var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
      triggerHook: "onLeave"
  }
});
      
      function greenDotPostal() {
        $('#dot-nav #dot-postal li').css('background-color',"#2CD18A");
        $('#dot-nav #dot-postal p').css('color',"#2CD18A");
    }
      
      function greenDotEmail() {
        $('#dot-nav #dot-email li').css('background-color',"#2CD18A");
        $('#dot-nav #dot-email p').css('color',"#2CD18A");
    }

      function greenDotBtob() {
        $('#dot-nav #dot-btob li').css('background-color',"#2CD18A");
        $('#dot-nav #dot-btob p').css('color',"#2CD18A");
    }
      
      function greenDotTerritory() {
        $('#dot-nav #dot-territory li').css('background-color',"#2CD18A");
        $('#dot-nav #dot-territory p').css('color',"#2CD18A");
    }
      
      function greenDotPrivacy() {
        $('#dot-nav #dot-privacy li').css('background-color',"#2CD18A");
        $('#dot-nav #dot-privacy p').css('color',"#2CD18A");
    }
      
      function greenDotConseil() {
        $('#dot-nav #dot-conseil li').css('background-color',"#2CD18A");
        $('#dot-nav #dot-conseil p').css('color',"#2CD18A");
    }
  
  function greenReset() {
        $('#dot-nav li').css('background-color','#D8D8D8');
        $('#dot-nav p').css('color',"#D8D8D8");
    }
  
   function tweenreset() {
        TweenMax.to('#wipe', 0.7, {top: "100%", delay: 0.2});
        TweenMax.to('#second-wipe', 0.7, {top: "100%", delay: 0.2});
        TweenMax.to('#slide', 0.7, {top: "-100%", delay: 0.2});
        TweenMax.to('#slide-two', 0.7, {left: "-100%", delay: 0.2});
        TweenMax.to('#third-wipe', 0.7, {top: "100%", delay: 0.2});
    }   
    
  
  
 $("#dot-postal").on('click', function () {
       greenReset(),
    greenDotPostal(),
        tweenreset();
    });

 $("#dot-email").on('click', function () {
       greenReset(),
    greenDotEmail(),
   tweenreset()
     var scrollAnim = new TimelineMax()
     .scrollTo(TweenMax.to("#wipe", 1, {top: "0%", delay: 0.2}))
    });

   $("#dot-btob").on('click', function () {
         greenReset(),
    greenDotBtob(),
     tweenreset()
    var scrollAnim = new TimelineMax()
        .scrollTo(TweenMax.to("#second-wipe", 1, {top: "0%", delay: 0.2}))
     
    });
  
  $("#dot-territory").on('click', function () {
        greenReset(),
    greenDotTerritory(),
    tweenreset()
    var scrollAnim = new TimelineMax()
        .add(TweenMax.to("#slide", 1, {top: "0%", delay: 0.2}))
    });
  
  
  $("#dot-privacy").on('click', function () {
        greenReset(),
    greenDotPrivacy(),
    tweenreset()
    var scrollAnim = new TimelineMax()
       .add(TweenMax.to("#slide-two", 1, {left: "0%", delay: 0.2}))
    });
  
  $("#dot-conseil").on('click', function () {
        greenReset(),
    greenDotConseil(),
    tweenreset()
    var scrollAnim = new TimelineMax()
      .add(TweenMax.to("#third-wipe", 1, {top: "0%", delay: 0.2}))
    });
  
  

var scrollAnim = new TimelineMax()
    .add(TweenMax.to("#wipe", 1, {top: "0%", delay: 0.2}))
.add([
       TweenMax.to("#dot-nav #dot-email li", 0.1, {backgroundColor: "#2CD18A"}),
        TweenMax.to("#dot-nav #dot-email p", 0.1, {color: "#2CD18A"}),
  TweenMax.to("#dot-nav #dot-postal li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-postal p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-btob li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-btob p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-territory li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-territory p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-privacy li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-privacy p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-conseil li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-conseil p", 0.1, {color: "#D8D8D8"})
    ])
    .add(TweenMax.to("#second-wipe", 1, {top: "0%", delay: 0.2}))
.add([
      TweenMax.to("#dot-nav #dot-btob li", 0.1, {backgroundColor: "#2CD18A"}),
        TweenMax.to("#dot-nav #dot-btob p", 0.1, {color: "#2CD18A"}),
   TweenMax.to("#dot-nav #dot-postal li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-postal p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-email li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-email p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-territory li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-territory p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-privacy li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-privacy p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-conseil li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-conseil p", 0.1, {color: "#D8D8D8"})
    ])
    .add(TweenMax.to("#slide", 1, {top: "0%", delay: 0.2}))
.add([
  TweenMax.to("#dot-nav #dot-territory li", 0.1, {backgroundColor: "#2CD18A"}),
        TweenMax.to("#dot-nav #dot-territory p", 0.1, {color: "#2CD18A"}),
  TweenMax.to("#dot-nav #dot-btob li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-btob p", 0.1, {color: "#D8D8D8"}),
   TweenMax.to("#dot-nav #dot-privacy li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-privacy p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-conseil li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-conseil p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-postal li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-postal p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-email li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-email p", 0.1, {color: "#D8D8D8"})
    ])
    .add(TweenMax.to("#slide-two", 1, {left: "0%", delay: 0.2}))
.add([
  TweenMax.to("#dot-nav #dot-territory li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-territory p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-privacy li", 0.1, {backgroundColor: "#2CD18A"}),
        TweenMax.to("#dot-nav #dot-privacy p", 0.1, {color: "#2CD18A"}),
  TweenMax.to("#dot-nav #dot-conseil li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-conseil p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-postal li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-postal p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-email li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-email p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-btob p", 0.1, {color: "#D8D8D8"}),
   TweenMax.to("#dot-nav #dot-btob li", 0.1, {backgroundColor: "#D8D8D8"})
    ])
.add(TweenMax.to("#third-wipe", 1, {top: "0%", delay: 0.2}))
.add([
  TweenMax.to("#dot-nav #dot-privacy li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-privacy p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-conseil li", 0.1, {backgroundColor: "#2CD18A"}),
        TweenMax.to("#dot-nav #dot-conseil p", 0.1, {color: "#2CD18A"}),
   TweenMax.to("#dot-nav #dot-postal li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-postal p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-email li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-email p", 0.1, {color: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-btob p", 0.1, {color: "#D8D8D8"}),
   TweenMax.to("#dot-nav #dot-btob li", 0.1, {backgroundColor: "#D8D8D8"}),
  TweenMax.to("#dot-nav #dot-territory li", 0.1, {backgroundColor: "#D8D8D8"}),
        TweenMax.to("#dot-nav #dot-territory p", 0.1, {color: "#D8D8D8"})
    ])


new ScrollMagic.Scene({
  triggerElement: "section#pin",
  duration: '100%'
})
.setTween(scrollAnim)
.setPin("section#pin")
.addTo(controller);
    
    
  });