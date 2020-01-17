/*
	Cascade by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {
  var $window = $(window),
    $body = $("body"),
    $header = $("#header"),
    $banner = $("#banner"),
    settings = {
      carousel: {
        // Transition speed (in ms)
        // For timing purposes only. It *must* match the transition speed of ".carousel > article".
        speed: 350
      }
    };

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: [null, "480px"]
  });

  // Play initial animations on page load.
  $window.on("load", function() {
    window.setTimeout(function() {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Menu.
  $("#menu")
    .append('<a href="#menu" class="close"></a>')
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: "right"
    });

  // Header.
  // if ($banner.length > 0 && $header.hasClass("alt")) {
  //   $window.on("resize", function() {
  //     $window.trigger("scroll");
  //   });

  //   $banner.scrollex({
  //     bottom: $header.outerHeight(),
  //     terminate: function() {
  //       $header.removeClass("alt");
  //     },
  //     enter: function() {
  //       $header.addClass("alt");
  //     },
  //     leave: function() {
  //       $header.removeClass("alt");
  //     }
  //   });
  // }

  // Images.
  $(".image[data-position]").each(function() {
    var $this = $(this),
      $img = $this.children("img");

    // Polyfill object-fit.
    if (!browser.canUse("object-fit")) {
      // Apply img as background.
      $this
        .css("background-image", 'url("' + $img.attr("src") + '")')
        .css("background-position", $this.data("position"))
        .css("background-size", "cover")
        .css("background-repeat", "no-repeat");

      // Hide img.
      $img.css("opacity", "0");

      return;
    }
  });

  // Scrolly.
  // $(".scrolly").scrolly({
  //   offset: function() {
  //     return $header.outerHeight() - 2;
  //   }
  // });

  // $(".scrolly-middle").scrolly({
  //   anchor: "middle",
  //   offset: function() {
  //     return $header.outerHeight() - 2;
  //   }
  // });

  // Spotlights.
  $(".spotlight").scrollex({
    top: "30vh",
    bottom: "30vh",
    delay: 25,
    initialize: function() {
      $(this).addClass("is-inactive");
    },
    terminate: function() {
      $(this).removeClass("is-inactive");
    },
    enter: function() {
      $(this).removeClass("is-inactive");
    }
  });
})(jQuery);
