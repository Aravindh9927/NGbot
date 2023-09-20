jQuery(document).ready(function($){
  // For public menu
  $('#public-green-mobile').append(
    $('<li class="title green"></li>').append(
      $('<a></a>').attr('href', $('.holder-key .first-nav-green ul.site-menu li.home a').attr('href')).append(
        $('.for-public').html()
      )
    )
  );
  var publicMenu = $('.holder-key .first-nav-green ul.site-menu li:not([class])').clone();
  var publicMobile = $('#mySidenav #public-green-mobile.main-mobile-nav');
  publicMenu = $($(publicMenu).get().reverse());
  publicMenu.each(function(){
    if($(this).find('.holder-key__list').length){ // if has dropdown
      var groupName = $(this).find('.holder-key__list');
      $(this).find('.holder-key__list').remove();
      $(this).addClass('grn')
             .find('a')
             .removeClass()
             .append('<span class="show-dropdown"><i class="fa fa-plus"></i></span>');
      var columns = $(groupName).find('.menu-item').clone();
      var dropdownList = $('<ul></ul>').addClass('dropdown');
      columns.each(function(){
        var listItem = $(this).find('h2').html();
        var listItemHref = $(this).find('a').attr('href');
        $(dropdownList).append('<li><a href="'+listItemHref+'">'+listItem+'</a></li>');
      });
      $(this).append(dropdownList);
      publicMobile.append($(this));
    } else {
      $(this).addClass('grn')
             .find('a')
             .removeClass();
      publicMobile.append($(this));
    }
  });

  // For hpp
  $('#prof-blue-mobile').append(
    $('<li class="title blue"></li>').append(
      $('<a></a>').attr('href', $('.holder-key .second-nav-blue ul.site-menu li.home a').attr('href')).append(
        $('.for-hp').html()
      )
    )
  );
  var hppMenu = $('.holder-key .second-nav-blue ul.site-menu li:not([class])').clone();
  var hppMobile = $('#mySidenav #prof-blue-mobile.main-mobile-nav');
  hppMenu.each(function(){
    if($(this).find('.holder-key__list').length){ // if has dropdown
      var groupName = $(this).find('.holder-key__list');
      $(this).find('.holder-key__list').remove();
      $(this).addClass('blu')
             .find('a')
             .removeClass()
             .append('<span class="show-dropdown"><i class="fa fa-plus"></i></span>');
      var ifHealthcare = $(this).attr('id') == "menu-healthcare";
      var columns = !ifHealthcare ? $(groupName).find('.menu-item').clone() : $(groupName).find('.menu-item a').clone();
      var dropdownList = $('<ul></ul>').addClass('dropdown');
      columns.each(function(){
        var listItem = !ifHealthcare ? $(this).find('h2').html() : $(this).text();
        var listItemHref = !ifHealthcare ? $(this).find('a').attr('href') : $(this).attr('href');
        $(dropdownList).append('<li><a href="'+listItemHref+'">'+listItem+'</a></li>');
      });
      $(this).append(dropdownList);
      hppMobile.append($(this));
    } else {
      $(this).addClass('blu')
             .find('a')
             .removeClass();
      hppMobile.append($(this));
    }
  });

  // Small menu
  var smallMenu = $('.header-side .small-menu li:not([class])').clone();
  let turn = 0;
  smallMenu.each(function(){
    $('#mySidenav .nav-panel #small-menu-' + turn).append($(this));
    turn = (turn + 1) % 2 ;
  });
  // Small menu social
  $('#mySidenav .nav-panel #small-menu-0').append($('.socmed'));

  //logo
  var mobileLogo = $('.main-header .desktop-logo').clone().removeClass('desktop-logo');
  $(mobileLogo).find('img').css('height', '55px').css('object-fit', 'cover').css('width', '220px');
  $('#main-header-nav-mobile-logo').append(mobileLogo);

  // Search
  $(".search-btn").on("click", function(){
    if($(".search--container").css("display") == "none"){
        $(".search--container").slideDown();
        $(".search-btn").html('<i class="fa fa-times-circle"></i> Close');
    } else if($(".search--container").css("display") == "block"){
        $(".search--container").slideUp();
        $(".search-btn").html('<i class="fa fa-search"></i> Search');
    }
  });

  // // Sticky HEADER
    $(window).scroll(function () {
        var navBarSticky = $('#navbar');
        var navbarStickyHeight = $('#navbar').height();
        var navBarTabBlock = $(".tabs-menu.content");
        if (navBarTabBlock != null && navBarTabBlock.length > 0) {
            var navBarTabBlockTop = navBarTabBlock.offset().top;
            var navBarTabBlockBot = navBarTabBlockTop + navBarTabBlock.height();

            if ($(window).scrollTop() >= navBarTabBlockBot) {
                if ($(".stickyNavTempHeightHolder") == null || $(".stickyNavTempHeightHolder").length < 1) {
                    navBarSticky.parent().append(
                        $("<div>").addClass("stickyNavTempHeightHolder").height(navbarStickyHeight).css("visibility", "hidden")
                    );
                }
                navBarSticky.addClass('sticky');
                $('#navbar-second').addClass('sticky');
                $('.gstl_51.gssb_c').css('top', '119px');
            }
            else {
                $(".stickyNavTempHeightHolder").remove();
                navBarSticky.removeClass('sticky');
                $('#navbar-second').removeClass('sticky');
                $('.search--container').removeClass('sticky');
                $('.gstl_51.gssb_c').css('top', '267px');
            }
        }
    });
});

// GCSE
jQuery(function ($) {
    function customiseSearchInput() {
        $(".gsc-search-button").hide();
        $("#gsc-i-id1").prop("placeholder", "Search within this site");
        $(".gsib_b").remove();
        $(".gsc-input input").attr("placeholder", "Search within this site");

        $("#gcseSearchBtn, #gcseSearchBtn2").click(function () {
            $(".gsc-search-button").click();
        })
    }

    var myCallback = function () {
        var gcseAttr = { "enableAutoComplete": "true", "autoCompleteMaxCompletions": "5", "autoCompleteMatchType": "ordered", "newWindow": "true" }
        if (document.readyState == 'complete') {
            // Document is ready when CSE element is initialized.
            // Render an element with both search box and search results in div with id 'test'.
            google.search.cse.element.render({
                div: "mainSearchInputBlock",
                tag: 'searchbox-only',
                attributes: gcseAttr
            });
            google.search.cse.element.render({
                div: "mainSearchInputBlock2",
                tag: 'searchbox-only',
                attributes: gcseAttr
            });
            customiseSearchInput();
        } else {
            // Document is not ready yet, when CSE element is initialized.
            google.setOnLoadCallback(function () {
                // Render an element with both search box and search results in div with id 'test'.
                google.search.cse.element.render({
                    div: "mainSearchInputBlock",
                    tag: 'searchbox-only',
                    attributes: gcseAttr
                });
                google.search.cse.element.render({
                    div: "mainSearchInputBlock2",
                    tag: 'searchbox-only',
                    attributes: gcseAttr
                });
                customiseSearchInput();
            }, true);
        }
    };

    // Insert it before the CSE code snippet so that cse.js can take the script
    // parameters, like parsetags, callbacks.
    window.__gcse = {
        parsetags: 'explicit',
        callback: myCallback
    };

    (function () {
        var cx = '012812776585105760202:1copal8_qrk'; // Insert your own Custom Search engine ID here
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        gcseMOHCorpCx = cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
    })();
});