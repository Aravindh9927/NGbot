jQuery(function ($) {
  $('.searchshow').hide();

  $('.mobile-search').click(function() {
    $('.searchshow').slideDown(300);
  });

  $('.searchshow .close').click(function() {
    $('.searchshow').slideUp(300);
  });

  var elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'a', 'label', '.font-size', 'input', 'button', '.date', 'span', 'figcaption', '.search-filter', '.body-content *'];
  var plusCounter = 0;
  var minusCounter = 0;

  function decreaseFont() {
    if (minusCounter < 1) {
      for (i = 0; i < elements.length; i++) {
        var element = elements[i];
        $('.body-content ' + element).each(function() {
          var fontSize = $(this).css('font-size');
          var res = parseInt(fontSize.substring(0, 2));
          if (res >= 10 && !$(this).hasClass('no-fresize')) {
            $(this).css('font-size', (res - 2) + 'px');
          }
        });
      }
      --plusCounter;
      ++minusCounter;
    }
  }

  function increaseFont() {
    if (plusCounter < 1) {
      for (i = 0; i < elements.length; i++) {
        var element = elements[i];
        $('.body-content ' + element).each(function() {
          var fontSize = $(this).css('font-size');
          var res = parseInt(fontSize.substring(0, 2));

          if (!$(this).hasClass('no-fresize')) {
            $(this).css('font-size', (res + 2) + 'px');
          }
        });
      }
      ++plusCounter;
      --minusCounter;
    }
  }

  $('.decrease-font').on('click', function(e) {
    e.preventDefault();
    decreaseFont();
  });

  $('.increase-font').on('click', function(e) {
    e.preventDefault();
    increaseFont();
  });


  $('.eac-square').css("width", "100%");
  $('.looking-search form .condition input[type="text"]').keyup(function() {
    if($(this).val() != '') {
      $('.looking-search .click-me').hide();
    }
  });

  $('.warning .warning-conts button').click(function(event){
    $('.warning').fadeOut();
  });

  // add HOverOn on hover
  $('.search--body .filter-container .filter--date .date--range').click(function(){
    $(this).find('p').children('i').toggleClass('down');
    $(this).toggleClass('active');
  })

  $('.looking-search form .condition input').click(function(event){
    event.preventDefault();
    $('.looking-search .click-me').slideToggle();
  });

  $(document).mouseup(function(event){
    var container = $('.click-me');
    if(!container.is(event.target) && container.has(event.target).length == 0){
      container.hide('slow');
    }
  });

  //Accordion CHAS and IDAPE
  $( function() {
    var icons = {
      header: "not-active",
      activeHeader: "active"
    };
    $( "#accordion" ).accordion({
      icons: icons,
      collapsible: true,
      heightStyle: "content"
    });
    $( "#toggle" ).button().on( "click", function() {
      if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
        $( "#accordion").accordion( "option", "icons", null );
      } else {
        $( "#accordion").accordion( "option", "icons", icons );
      }
    });
  });

  //Accordion HCP
  $( function() {
    var icons = {
      header: "not-active",
      activeHeader: "active"
    };
    $( "#accordion-hcp" ).accordion({
      icons: icons,
      heightStyle: "content"
    });
    $( "#toggle" ).button().on( "click", function() {
      if ( $( "#accordion-hcp" ).accordion( "option", "icons" ) ) {
        $( "#accordion-hcp").accordion( "option", "icons", null );
      } else {
        $( "#accordion-hcp").accordion( "option", "icons", icons );
      }
    });
  });

  /*DROPDOWN GROUP CHECKED*/
  $("#all-primarycare").click(function () {
    $('.category-container .category-drops .descent .to--be input:checkbox').not(this).prop('checked', this.checked);
  });

  $('#all-intermediatecare').click(function(){
    $('.category-container .category-drops .descent .to--be2 input:checkbox').not(this).prop('checked', this.checked);
  })

  $('#all-homecare').click(function(){
    $('.category-container .category-drops .descent .to--be3 input:checkbox').not(this).prop('checked', this.checked);
  })

  $('#ed').click(function(){
    $('.indent input:checkbox').not(this).prop('checked', this.checked);
  })

  $('#all-acute').click(function(){
    $('.category-container .category-drops .descent .to--be4 input:checkbox').not(this).prop('checked', this.checked);
  })

  $('#all-facility').click(function(){
    $('.category-container .category-drops .descent input:checkbox').not(this).prop('checked', this.checked);
  })

  $('#all-categories').click(function(){
    $('.children input:checkbox').not(this).prop('checked', this.checked);
  })

  $('#all-citizens').click(function(){
    $('.children input:checkbox').not(this).prop('checked', this.checked);
  })

  $('#all-statistics').click(function(){
    $('.category-container .category-drops .descent .to--be5 input:checkbox').not(this).prop('checked', this.checked);
  })

  $('#all-publication').click(function(){
    $('.category-container .category-drops .descent .to--be6 input:checkbox').not(this).prop('checked', this.checked);
  })

  $('#all-resources').click(function(){
    $('.category-container .category-drops .descent .to--be7 input:checkbox').not(this).prop('checked', this.checked);
  })

  $('#all').click(function(){
    $('.category-container .category-drops .descent input:checkbox').not(this).prop('checked', this.checked);
  })

  /*SCROLL TO TOP*/
  $(document).ready(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() > 500) {
        $('.scroll-top--container .scroll--top').show(500);
      } else {
        $('.scroll-top--container .scroll--top').hide(500);
      }
    });
    $('.scroll-top--container .scroll--top').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });

    // anchorlink
    $('a[href^="#"]:not([data-toggle="tab"]):not(.popup-link)').on('click', function(){
      var hash = $(this).attr('href');
      if(hash != '#' && $(hash).length){
        $('html, body').animate({
          scrollTop: $(hash).offset().top - $('nav.navbar-default').height() - 1.5
        });
      }
    });

    if ($(location).attr("hash")) {
      var hashlink = $(location).attr("hash");
      $('a[href="' + hashlink + '"]').click();
    }

    $('.footer__links > li > ul').each(function(){
      if($(this).children('li').children('ul').length > 0){
        $('<span class="caret-drop down"></span>').insertBefore($(this).children('li').children('ul'));
      }
    });
    $('.caret-drop').on('click', function(){
      $(this).toggleClass('down').toggleClass('up');
      $(this).next('ul').slideToggle();
    });
  });

  $('.disease--container .disease--inner .warning--updates .fa.fa-times').click(function(event){
    $('.disease--container .disease--inner .warning--updates').fadeOut();
  })

  $( function() {
    var dateFormat = "mm/dd/yy",
    from = $( "#search--date--from" )
    .datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      changeYear: true,
      yearRange: "1930:2030",
      numberOfMonths: 1
    })
    .on( "change", function() {
      to.datepicker( "option", "minDate", getDate( this ) );
    }),
    to = $( "#search--date--to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      changeYear: true,
      yearRange: "1930:2030",
      numberOfMonths: 1
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
      $('.date--flow').slideUp(300);
    });

    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
      return date;
    }
  });

  $('.search--body .filter-container .filter--date .date--range').click(function(){
    $('.date--flow').slideToggle();
  });

  $('.login--click .i-am').click(function(){
    $('.result').slideDown();
  })

  //Expanding and collapsing CHAS And IDAPE Accordion
  $('#expand').click(function(){
    $('#accordion .ui-accordion-content').slideDown();
    $('#accordion .ui-accordion-content').addClass('ui-accordion-content-active');
    $('#accordion .ui-accordion-header span').addClass('active');
    $('#accordion .ui-accordion-header span').removeClass('not-active');
  });

  $('#collapse').click(function(){
    $('#accordion .ui-accordion-content').slideUp();
    $('#accordion .ui-accordion-content').removeClass('ui-accordion-content-active');
    $('#accordion .ui-accordion-header span').removeClass('active');
    $('#accordion .ui-accordion-header span').addClass('not-active');
  });

  $('#accordion .tobe').click(function(){
    $('#accordion .toggle-down').slideDown(300);
  });

  //Expanding and collapsing HCP Bridging Accordion
  $('#expand').click(function(){
    $('#accordion-hcp .ui-accordion-content').slideDown();
    $('#accordion-hcp .ui-accordion-content').addClass('ui-accordion-content-active');
    $('#accordion-hcp .ui-accordion-header span').addClass('active');
    $('#accordion-hcp .ui-accordion-header span').removeClass('not-active');
  });

  $('#collapse').click(function(){
    $('#accordion-hcp .ui-accordion-content').slideUp();
    $('#accordion-hcp .ui-accordion-content').removeClass('ui-accordion-content-active');
    $('#accordion-hcp .ui-accordion-header span').removeClass('active');
    $('#accordion-hcp .ui-accordion-header span').addClass('not-active');
  });

  $('#accordion-hcp .tobe').click(function(){
    $('#accordion-hcp .acc-hcp-content').slideDown(300);
  });

  $('.applying').click(function(){
    $('.drops-container').slideUp(300);
  })

  $('.legis-applying').click(function() {
    $('.drops-container').slideUp(300);
  })


  /*GLOBAL VARIABLEs*/
  var view_all = ".left-controls .stats-up-container .view";
  var viewInit = ".left-controls .stats-up-container .init";
  var hoverPath = ".left-controls .stats-up-container .hover";
  var activePath = ".left-controls .stats-up-container .active";
  var touch = ".left-controls .stats-up-container .touch";
  var touch1 = ".left-controls .stats-up-container .touch-child1";
  var hoverLeave = ".left-controls .stats-up-container .hoverLeave";

  $(hoverPath).hover(
    function() {
      var src = $(this).find(".icon-container").children('img').attr('src');
      var newSrc = src.substring(0, 8);
      $(this).find(".icon-container").children('img').attr('src', newSrc + '-i.png');
    }, function() {
      var src = $(this).find(".icon-container").children('img').attr('src');
      var newSrc = src.substring(0, 8);
      $(this).find(".icon-container").children('img').attr('src', newSrc + '.png');
    }
  );

  if($(view_all).hasClass("view")){
    var source = $(view_all).find(".icon-container").children('img').attr('src');
    var newSource = source.substr(0, 8);
    $(view_all).find(".icon-container").children('img').attr('src', newSource + '-i.png');
    $(view_all).removeClass("hover");
  }

  $(viewInit).click(function(){
    $(activePath).removeClass("active").addClass("hover");
    $(viewInit).addClass("view").removeClass("hover");

    var src = $(view_all).find(".icon-container").children('img').attr('src');
    var newSrc = src.substr(0, 8);
    $(view_all).find(".icon-container").children('img').attr('src', newSrc + '-i.png');

    $(hoverPath).mouseleave(
      function() {
        var src = $(this).find(".icon-container").children('img').attr('src');
        var newSrc = src.substr(0, 8);
        $(this).find(".icon-container").children('img').attr('src', newSrc + '-i.png');
      }, function() {
        var src = $(this).find(".icon-container").children('img').attr('src');
        var newSrc = src.substr(0, 8);
        $(this).find(".icon-container").children('img').attr('src', newSrc + '.png');
      }
    );
    $(view_all).mouseleave(
      function() {
        var src = $(view_all).find(".icon-container").children('img').attr('src');
        var newSrc = src.substr(0, 8);
        $(view_all).find(".icon-container").children('img').attr('src', newSrc + '.png');
      }, function() {
        var src = $(view_all).find(".icon-container").children('img').attr('src');
        var newSrc = src.substr(0, 8);
        $(view_all).find(".icon-container").children('img').attr('src', newSrc + '-i.png');
      }
    );
  });

  $(viewInit).hover( function() {
    var src = $(this).find(".icon-container").children('img').attr('src');
    var newSrc = src.substring(0, 8);
    $(this).find(".icon-container").children('img').attr('src', newSrc + '-i.png');
  }, function() {
    var src = $(this).find(".icon-container").children('img').attr('src');
    var newSrc = src.substring(0, 8);
    $(this).find(".icon-container").children('img').attr('src', newSrc + '.png');
  }
);

/*BACK TOUCH*/
$(touch).click(function(){
  var src = $(touch1).find(".icon-container").children('img').attr('src');
  var newSrc = src.substr(0, 8);
  $(touch1).find(".icon-container").children('img').attr('src', newSrc + '.png');
});

/*START OF MAIN ACTIVE STATE*/
$(hoverPath).click(function(){
  $(this).addClass("active");
  $(view_all).removeClass("view").addClass("hover");
  if($(viewInit).hasClass("init")){
    var src = $(viewInit).find(".icon-container").children('img').attr('src');
    var newSrc = src.substr(0, 8);
    $(viewInit).find(".icon-container").children('img').attr('src', newSrc + '.png');
  }
  if($(activePath).hasClass("active")){
    var src = $(this).find(".icon-container").children('img').attr('src');
    var newSrc = src.substr(0, 8);
    $(this).find(".icon-container").children('img').attr('src', newSrc + '-i.png');
    $(this).removeClass("hover");
  }
  $(activePath).mouseleave(
    function() {
      var src = $(this).find(".icon-container").children('img').attr('src');
      var newSrc = src.substr(0, 8);
      $(this).find(".icon-container").children('img').attr('src', newSrc + '.png');
    }, function() {
      var src = $(this).find(".icon-container").children('img').attr('src');
      var newSrc = src.substr(0, 8);
      $(this).find(".icon-container").children('img').attr('src', newSrc + '-i.png');
    }
  );
});

$('.notice-container .fa-times').click(function(){
  $('.notice-container').fadeOut(300);
})

$('.left-controls .stats-up-container .stats').click(function(){
  $('.graphing-inner .graphing-content .graph-container .graph-stats').show();
  $('.graphing-inner .graphing-content .graph-container .table-stats').hide();
})

$('.left-controls .stats-up-container .grid').click(function(){
  $('.graphing-inner .graphing-content .graph-container .graph-stats').hide();
  $('.graphing-inner .graphing-content .graph-container .table-stats').show();
})

$('#toEmbed').click(function(){
  $('#embed').css({'display': 'block'}).addClass('animated fadeIn').removeClass('fadeOut');
  $('.modal-content').addClass('animated slideInDown').removeClass('bounceOutUp');
});

$('.close-modal').click(function(){
  $('#embed').addClass('animated fadeOut').removeClass('fadeIn');
  setTimeout(function() {
    $('#embed').css({'display':'none'});
  }, 500);
  $('.modal-content').addClass('animated bounceOutUp').removeClass('slideInDown');
})

$(".sfContentBlock table:not(.thb-div-table table), .sfContentBlock table:not(.tof table)").each(function(){
  $(this).wrap('<div style="max-width:100%;overflow-x:auto;"></div>');
});

$(".thb-div-table table, .tof table").each(function(){
  $(this).attr("id", "");
});

//tables
//SET VARIABLES
var getrowtext;
var colspanhtml;
var $temp;
var $coltemp;
var $coltemptwo;
var colindex;
var totalArr;
var nextcolspan;
var colnumber;
var resultsArrone = [];
var resultsArrtwo = [];
var rowtextArr = [];

//fix table by NOT collapsing
$("table#no-more-tables").each(function (index, element) {

  if($(this).attr("id") == "no-more-tables"){
    $(this).find("tr").first().each(function(ind,v){
      ind += 1;

      //TABLE HTML
      getrowtext = $(this).html().trim().replace(/\s+/g, " ").replace(/^\s|\s$/g, "");

      // CHECK FOR COLSPAN
      $(this).find("th").each(function(thind, thval){
        if($(this).attr('colspan')>1){
          colindex = $(this).index();
          colnumber = $(this).attr('colspan');
          $(this).parent().parent().parent().addClass("gotcolspan");
        }
      });

      // USE GOTCOLSPAN
      $(".gotcolspan thead tr").first().each(function(colind, colval){
        var count = $(this).find("th").length;
        colspanhtml = $(this).html().trim().replace(/\s+/g, " ").replace(/^\s|\s$/g, "");
        $coltemp = colspanhtml.replace(/<\/th>/g," |").replace(/(<([^>]+)>)/ig, "").replace(/&nbsp;/g, ' ').replace(/&amp;/g, "&");
        // MERGE ARRAY
        resultsArrone = $coltemp.split("|");
        // REMOVE N MOVE ARRAY
        Array.prototype.combine = function(arr,deleteCount,Insert){
          Insert.pop();
          this.splice.apply(arr, [colindex, deleteCount].concat(Insert));
          return this;
        }
        totalArr = resultsArrone.combine(resultsArrone, 1, resultsArrtwo);
      });

      // REMOVE TH, &NBSP AND &AMP AND SPLIT INTO ARRAY
      $temp = getrowtext.replace(/<\/th>/g," |").replace(/(<([^>]+)>)/ig, "").replace(/&nbsp;/g, ' ').replace(/&amp;/g, "&");
      rowtextArr = $temp.split("|");
    });
  }
});

if($(".legis,.disease--container").length){
  $(".body-content").css("padding","0");
}

if($(".greybg, .about-wrapper").length){
  $(".body-content").css("padding-bottom","0");
}

$(".desktopview").on("click", function(e){
  $('meta[name=viewport]').attr("content", "width=1024");
});

$(".ttip").tooltip();
$('[data-toggle="tooltip"]').not(".mod-tooltip").tooltip({html:true});
});
jQuery(function ($) {
  $(function () {

    //accordion
    $(".accordion-list .show-more").hide();

    $(".accordion-list .accordion").each(function (i, v) {
      var headText = $(v).text().replace(/[^a-zA-Z\d\s]/g, '').replace(/\s\s*/g, '-').toLowerCase();;
      $(this).attr('data-header', headText);
      $(this).click(function () {
        if ($(this).next(".show-more").css("display") == "none") {
          $(this).addClass("active");
          $(this).next(".show-more").slideDown();
        } else {
          if ($(this).next(".show-more").css("display") == "block") {
            $(this).removeClass("active");
            $(this).next(".show-more").slideUp();
          }
        }
      });
    });
    // accordion anchor
    var hash = window.location.hash;
    // if it is id but very likely not used
    if(hash.length && $(hash).length) {
      var accordionhash = '.accordion[data-header=' + hash.substr(1) + ']';
      if($(accordionhash).length) {
        hash = accordionhash;
      }
      $('html, body').animate({
        scrollTop: $(hash).offset().top - $('nav.navbar-default').height() - 1.5
      });
      $(hash).addClass('active');
      $(hash).next('.show-more').slideDown();
    }

    $(".accordion-list").each(function () {
      var $this = $(this);
      $this.find(".expand").on("click", function (e) {
        $this.find(".accordion").addClass("active");
        $this.find(".show-more").slideDown();
        $this.find(".expandHide").css("display", "none");
        e.preventDefault();
      });
      $this.find(".collapses").on("click", function (e) {
        $this.find(".accordion").removeClass("active");
        $this.find(".show-more").slideUp();
        $this.find(".expandHide").css("display", "block");
        e.preventDefault();
      });
    });
    $(".last-updated").empty().text("Last Updated on " + $(".last").html());
    $(".last").remove();
  })
});

jQuery(function ($) {
  $(function () {
    // $(".accordion-list .show-more").hide();
    $(".accordion-list .headerContent .accordionWithSubContent").each(function (c, b) {
      $(this).click(function () {
        if ($(this).parent().next(".show-more").css("display") == "none") {
          $(this).addClass("active");
          $(this).next(".subContent").children(".expandHide").css("display", "none");
          $(this).next(".subContent").children(".expandChange").html('<a  style="float:right;">See less</a>');
          $(this).parent().next(".show-more").slideDown()
        } else {
          if ($(this).parent().next(".show-more").css("display") == "block") {
            $(this).removeClass("active");
            $(this).next(".subContent").children(".expandHide").css("display", "block");
            $(this).next(".subContent").children(".expandChange").html('<a  style="float:right;">Learn more<em class="fa fa-chevron-right" aria-hidden="true" style="color:#105cb6;"></em></a>');
            $(this).parent().next(".show-more").slideUp()
          }
        }
      })
    });
    $(".expandChange").each(function () {
      $(this).click(function () {

        if ($(this).parent().parent().next(".show-more").css("display") == "none") {
          $(this).parent().next("accordionWithSubContent").addClass("active");
          $(this).siblings().css("display", "none");
          $(this).html('<a  style="float:right;">See less</a>');
          $(this).parent().parent().next(".show-more").slideDown()
        } else {
          if ($(this).parent().parent().next(".show-more").css("display") == "block") {
            $(this).parent().next("accordionWithSubContent").removeClass("active");
            $(this).siblings().css("display", "block");
            $(this).html('<a  style="float:right;">Learn more<em class="fa fa-chevron-right" aria-hidden="true" style="color:#105cb6;"></em></a>');
            $(this).parent().parent().next(".show-more").slideUp()
          }
        }
      })
    });
    $(".accordion-list").each(function () {
      var $this = $(this);
      $this.find(".expand").on("click", function (e) {
        $this.find(".accordionWithSubContent").addClass("active");
        $this.find(".show-more").slideDown();
        $this.find(".expandHide").css("display", "none");
        e.preventDefault()
      });
      $this.find(".collapses").on("click", function (e) {
        $this.find(".accordionWithSubContent").removeClass("active");
        $this.find(".show-more").slideUp();
        $this.find(".expandHide").css("display", "block");
        e.preventDefault()
      })
    });

  })
});

// 2021
$(function($) {
  // Add external icon
  $('footer').find('a[target^="_blank"]:not(:has(img, span:empty))').each(function(){
    if(this.host !== window.location.host) {
      $(this).append('<span class="sgds-icon sgds-icon-external ml-2"></span>');
    }
  })
  $('.footer-menu .has-child').each(function() {
    $(this).children('a, span').after('<span class="menu-toggler sgds-icon sgds-icon-chevron-down"></span>');
  });
  $('.footer-menu .has-child > .menu-toggler').on('click', function() {
    $(this).siblings('ul').slideToggle();
    $(this).toggleClass('sgds-icon-chevron-down').toggleClass('sgds-icon-chevron-up');
  });

  // tab
  $(".tab-container .tab-list .tab-list-item").on("click", function () {
    var dataTab = $(this).data('tab');
    var tabContainer = $(this).closest('.tab-container');

    tabContainer.find('.tab-content-item').attr('aria-hidden', true);
    tabContainer.find('.tab-content-item[data-tab='+dataTab+']').attr('aria-hidden', false);
    // for tab grid layout
    tabContainer.find('.tab-item-content').attr('aria-hidden', true);
    tabContainer.find('.tab-item-content[data-tab='+dataTab+']').attr('aria-hidden', false);

    tabContainer.find('.tab-item-content').attr('aria-hidden', true);
    tabContainer.find('.tab-item-content[data-placeholder-label='+dataTab+']').attr('aria-hidden', false);

    $(this).siblings('.tab-list-item').removeClass('active');
    $(this).addClass('active');
  });

    $(".tab-container:not(#QSLH) .tab-list .tab-list-item:first-child").click();
});
$(window).on('load resize orientationchange', function() {
  $ = jQuery;
});