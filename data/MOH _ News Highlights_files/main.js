jQuery.fn.Pledge = function(options) {
  var $ = jQuery;
  $button = options.button ? options.button : $('.pledge-button');
  $counter = options.counter ? options.counter : $('.pledge-counter');
  count = options.count ? options.count : 0;
  counterPlates = options.counterPlates ? options.counterPlates : 7;
  $counter.css('max-width', (counterPlates * 65) + 30);

  counterUpdate(count);
  $button.on('mousedown touchstart', function() {
    $(this).addClass('mousedown');
  });
  $button.on('mouseup touchend mouseleave', function() {
    $(this).removeClass('mousedown');
  });
  $button.on('click', function() {
    
  });

  function counterUpdate(number) {
    $counter.empty();
    for(var  i=0; i<counterPlates; i++){
      var num = number % 10;
      number = Math.floor(number / 10);
      $counter.prepend('<div><span>' + num + '</span></div>');
    }
  }
}

jQuery(function($) {
    $(".level2 > li > a").each(function (e) {
      if ($(this).siblings("ul").length > 0) {
        var toggler = $('<span class="menu-item-toggler"></span>');
        $(this).after(toggler);
      }
    });

    $("#navbar").on("hide.bs.collapse", function () {
        $(".navbar-toggle span:not(.sr-only)").addClass("sgds-icon-menu");
        $(".navbar-toggle span:not(.sr-only)").removeClass("sgds-icon-cross");
    });
    $("#navbar").on("show.bs.collapse", function () {
        $(".navbar-toggle span:not(.sr-only)").removeClass("sgds-icon-menu");
        $(".navbar-toggle span:not(.sr-only)").addClass("sgds-icon-cross");
    });

    $("#searchBoxCollapse").on("hide.bs.collapse", function () {
        $(".searchToggle span").addClass("sgds-icon-search");
        $(".searchToggle span").removeClass("sgds-icon-cross");
    });
    $("#searchBoxCollapse").on("show.bs.collapse", function () {
        $(".searchToggle span").removeClass("sgds-icon-search");
        $(".searchToggle span").addClass("sgds-icon-cross");
    });

    if (msieversion()) {
        var menuHeight = $('nav.navbar-sticky-top').height();
        $('nav.navbar-sticky-top').css({ 'position': 'fixed', 'width': '100%' });
        $('main').css('margin-top', menuHeight);
    }
});

jQuery(window).on('resize orientationchange load', function() {
  var $ = jQuery.noConflict();
  $('.dropdown-toggle').off();
  $('.level2 > li > .menu-item-toggler').off();
  $('.level2 > li > a').off();
  if($(window).width() >= 768) {
    $('.level2 > li > a').on('mouseenter', function(e) {
      e.preventDefault();
      $(this).closest('.level2').find('.level3').css('display', 'none');
      $(this).siblings('.level3').css('display', 'flex');
      var dropdownHeight = $(this).siblings('.level3').height();
      $(this).closest('.level2').removeAttr('style');
      if($(this).closest('.level2').height() < dropdownHeight) {
        $(this).closest('.level2').height(dropdownHeight);
      }
    });
  } else {
    $('.dropdown-toggle').on('click', function(e) {
      $(this).closest('ul').find('.dropdown-menu').slideUp();
      if(!$(this).next('.dropdown-menu').is(':visible')) {
        $(this).next('.dropdown-menu').slideDown();
      }
    });
    $('.level2 > li > .menu-item-toggler, .level2 > li > a[href="javascript:void(0)"]').on('click', function(e) {
      e.preventDefault();
      $(this).closest('.level2').find('.level3').slideUp();
      if(!$(this).siblings('.level3').is(':visible')) {
        $(this).siblings('.level3').slideDown();
      }
    });
  }
});


function msieversion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) { // If Internet Explorer, return version number
      return true;
  }
  return false;
}