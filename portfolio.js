$(document).ready(function() {


  //prevent right click pop up window 
  $(document).on("contextmenu", function(e) {
    if (e.target.nodeName != "INPUT" && e.target.nodeName != "TEXTAREA") {
      e.preventDefault();
    }
  }); //on contect menu end

  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 30
      }, 600, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      }); //End of html and body animate
    } // End of if statement

    var $animateThis = $(".workItem");
    var $window = $(window);
    $(window).on("scroll", checkView);
    $window.on("scroll resize", checkView);
    $window.trigger("scroll");

    function checkView(e) {
      var windowHeight = $window.height();
      var windowTopPos = $window.scrollTop();
      var windowBottomPos = (windowTopPos + windowHeight);

      $.each($animateThis, function(e) {

        var $element = $(this);
        var elementHeight = $element.outerHeight();
        var elementTopPos = $element.offset().top;
        var elementBottomPos = (elementTopPos + elementHeight);

        //check to see if this current container is within viewport
        if ((elementBottomPos >= windowTopPos) &&
          (elementTopPos <= windowBottomPos)) {
          $element.addClass("zoomIn");
        } else {
          $element.removeClass("zoomIn");

        }

      }); //End of each function

    } //End of checkView function

    }); //End of anchort click function

    function layOutSwitch() {
      var $width = $(window).width();
      if ($width >= 735) {
        $("#hamburger").off();
        $(".navItem").off();
      }
      if ($width >= 1024) {
        $("#navBar").append($("#socialContainer"));
        $("#navBar").append($("#navItemsContainer"));
      } else if ($width >= 735) {
        $("#home").append($("#socialContainer"));
        $("#navBar").append($("#navItemsContainer"));
      } else {
        $("#hamburger").off();
        $("#navContainer").append($("#navItemsContainer"));
        $("#navContainer").append($("#socialContainer"));
         $("#hamburger").on("click", function(e) {
          e.preventDefault();
          $("#navItemsContainer, #socialContainer").slideToggle();
        }); //End of hamburger click function

        $(".navItem").on("click", function() {
          $("#navItemsContainer, #socialContainer").slideUp();
        }); //End of navItem click function 
      }
    } //End of layOutSwitch function

       
    

    $(window).on("resize", layOutSwitch);

    layOutSwitch();

    $(document).load(setTimeout(function() {

      return $("#blog").append($("<iframe>").attr({
        id: "blogFrame",
        src: "https://migsadventureblog.wordpress.com/"
      }));
    }, 5000));

});