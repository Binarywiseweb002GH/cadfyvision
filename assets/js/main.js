/*
    Glacier - Clean & Minimal Portfolio HTML5 Template
    Version: 1.0.3
    Author: Mountain-Themes
    Author URL: https://themeforest.net/user/mountain-themes
    Glacier © 2025. Design & Coded by Mountain-Themes.
    
    TABLE OF CONTENTS
    ---------------------------
     1. Loading
     2. Mobile Menu
     3. Text animation
     4. Shop
     5. Skillbars
     6. Counter
     7. LightCase
     8. Blog
     9. Portfolio
     10. Wow
     11. Parallax
     12. Flex Slider
     13. Contact Form
     14. Accordion
     15. Google Map
*/


  jQuery.noConflict()(function ($) {

  'use strict';

  var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iPhone: function () {
    return navigator.userAgent.match(/iPhone/i);
  },
  iPad: function () {
    return navigator.userAgent.match(/iPad/i);
  },
  iPod: function () {
    return navigator.userAgent.match(/iPod/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
  };


  /* ================================= */
  /* :::::::::: 1. Loading ::::::::::: */
  /* ================================= */


  $(document).ready(function () {

    mt_minimal_loading();
    mt_mobile_menu();
    mt_texteffect();
    mt_shop();
    mt_blog();
    mt_portfolio();
    mt_lightCase();
    mt_wow();
    mt_parallax();
    mt_flexslider();
    mt_ajax_contact_form();
    mt_skillbars_shortcode();
    mt_counter_shortcode();
    mt_accordion();
    mt_google_map();

  });
 

  function mt_minimal_loading() {
    $(".minimal-page-loader").fadeOut("slow");
  }

  /* ================================= */
  /* ::::::: 2. Mobile Menu :::::::::: */
  /* ================================= */

  function mt_mobile_menu() {

  $(".menu-container").slicknav({
    prependTo: 'header .header-inner-box',
    allowParentLinks: false
  });
  }

  /* ================================= */
  /* :::::: 3. Text animation :::::::: */
  /* ================================= */

  function mt_texteffect() {

  $(function () {
    $('.info h2').textillate();
  });
  }

  /* ================================= */
  /* ::::::::::: 4. Shop ::::::::::::: */
  /* ================================= */

function mt_shop() {

// Cart Widget
$('.icon-cart').on('click', function () {
  $('.cart-widget').toggleClass('widget-visible');
});

// Shop Grid
var element = $('.shopContainer');
element.imagesLoaded().done(function () {
  element.isotope({
    itemSelector: '.product',
    masonry: {
      columnWidth: '.product',
      gutter: '.gutter-sizer'
    },
    percentPosition: true
  });
});
$(window).on('resize', function () {
  element.isotope();
}).trigger('resize');

// Quantity
$(document).on('click', '.shop-qty .plus, .shop-qty .minus', function(){

  var $this = $(this),
    $qty = $this.siblings('.qty'),
    current = parseInt($qty.val(), 10),
    min = parseInt($qty.attr('min'), 10),
    max = parseInt($qty.attr('max'), 10),
    step = parseInt($qty.attr('step'), 10);

  min = min ? min : 1;
  max = max ? max : current + step;

  if ($this.hasClass('minus') && current > min) {
    $qty.val(current - step);
    $qty.trigger('change');
  }

  if ($this.hasClass('plus') && current < max) {
    $qty.val(current + step);
    $qty.trigger('change');
  }

  return false;
});

  $('#grid-shop').cubeportfolio({
    filters: '',
    layoutMode: 'masonry',
    sortByDimension: true,
    mediaQueries: [{
      width: 1500,
      cols: 3,
    }, {
      width: 1100,
      cols: 3,
    }, {
      width: 800,
      cols: 3,
    }, {
      width: 480,
      cols: 2,
    }, {
      width: 320,
      cols: 1,
      options: {
        caption: '',
        gapHorizontal: 45,
        gapVertical: 35,
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 30,
    gapVertical: 30,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,

    plugins: {
      loadMore: {
        element: '.load-more',
        action: 'click',
        loadItems: 3,
      }
    },
  });

  }

  /* ================================= */
  /* ::::::::: 5. Skillbars :::::::::: */
  /* ================================= */

  function mt_skillbars_shortcode() {

  $('.skillbar').appear(function () {
    var skillbar = $(this).html();
    $(this).skillBars({
      from: 0,
      speed: 3000,
      interval: 100,
      decimals: 0,
    });
  });
  }

  /* ================================= */
  /* :::::::::: 6. Counter ::::::::::: */
  /* ================================= */

  function mt_counter_shortcode() {

  $('.timer .number').appear(function () {
    var counter = $(this).html();
    $(this).countTo({
      from: 0,
      to: counter,
      speed: 3000,
      refreshInterval: 70
    });
  });
  }

  /* ================================= */
  /* :::::::: 7. LightCase ::::::::::: */
  /* ================================= */

  function mt_lightCase() {

  $('a.showcase').lightcase({
    transition: 'scrollVertical',
    speedIn: 400,
    speedOut: 300,
  });
  }

  /* ================================= */
  /* :::::::::::: 8. Blog :::::::::::: */
  /* ================================= */

  function mt_blog() {

  $('#grid-blog-column-1').cubeportfolio({
    filters: '',
    layoutMode: 'masonry',
    sortByDimension: true,
    mediaQueries: [{
      width: 1500,
      cols: 1,
    }, {
      width: 1100,
      cols: 1,
    }, {
      width: 800,
      cols: 1,
    }, {
      width: 480,
      cols: 1,
      options: {
        caption: '',
        gapHorizontal: 30,
        gapVertical: 30,
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 30,
    gapVertical: 30,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,

    plugins: {
      loadMore: {
        element: '.load-more',
        action: 'click',
        loadItems: 3,
      }
    },
  });

  $('#grid-blog-column-2').cubeportfolio({
    filters: '',
    layoutMode: 'masonry',
    sortByDimension: true,
    mediaQueries: [{
      width: 1500,
      cols: 2,
    }, {
      width: 1100,
      cols: 2,
    }, {
      width: 800,
      cols: 2,
    }, {
      width: 480,
      cols: 2,
      options: {
        caption: '',
        gapHorizontal: 30,
        gapVertical: 30,
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 30,
    gapVertical: 30,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,

    plugins: {
      loadMore: {
        element: '.load-more',
        action: 'click',
        loadItems: 3,
      }
    },
  });


}

  /* ================================= */
  /* ::::::::: 9. Portfolio :::::::::: */
  /* ================================= */

  function mt_portfolio() {

  $('#grid-mosaic').cubeportfolio({
    filters: '.portfolioFilter',
    layoutMode: 'mosaic',
    sortByDimension: true,
    mediaQueries: [{
      width: 1500,
      cols: 5,
    }, {
      width: 1100,
      cols: 4,
    }, {
      width: 800,
      cols: 3,
    }, {
      width: 480,
      cols: 2,
      options: {
        caption: '',
        gapHorizontal: 15,
        gapVertical: 15,
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 5,
    gapVertical: 5,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,

    plugins: {
      loadMore: {
        element: '.load-more',
        action: 'click',
        loadItems: 3,
      }
    },
  });

  $('#grid-masonry').cubeportfolio({
    filters: '.portfolioFilter',
    layoutMode: 'masonry',
    sortByDimension: true,
    mediaQueries: [{
      width: 1500,
      cols: 5,
    }, {
      width: 1100,
      cols: 4,
    }, {
      width: 800,
      cols: 3,
    }, {
      width: 480,
      cols: 2,
      options: {
        caption: '',
        gapHorizontal: 15,
        gapVertical: 15,
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 15,
    gapVertical: 15,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,

    plugins: {
      loadMore: {
        element: '.load-more',
        action: 'click',
        loadItems: 3,
      }
    },
  });

  $('#grid-masonry-2').cubeportfolio({
    filters: '.portfolioFilter',
    layoutMode: 'mosaic',
    sortByDimension: true,
    mediaQueries: [{
      width: 1500,
      cols: 5,
    }, {
      width: 1100,
      cols: 4,
    }, {
      width: 800,
      cols: 3,
    }, {
      width: 480,
      cols: 2,
      options: {
        caption: '',
        gapHorizontal: 15,
        gapVertical: 15,
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 0,
    gapVertical: 0,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,

    plugins: {
      loadMore: {
        element: '.load-more',
        action: 'click',
        loadItems: 3,
      }
    },
  });

  }


  /* ================================= */
  /* :::::::::::: 10. Wow :::::::::::: */
  /* ================================= */

  function mt_wow() {
  new WOW().init();
  }

  /* ================================= */
  /* :::::::: 11. Parallax ::::::::::: */
  /* ================================= */

  function mt_parallax() {
  $('.parallax').jarallax({
    speed: 0.8,
    noAndroid: true
  });
  }


  /* ================================= */
  /* ::::::: 12. Flex Slider ::::::::: */
  /* ================================= */

  function mt_flexslider() {
  $('.flexslider').flexslider({
    controlNav: false,
    prevText: '<i class="fa fa-angle-left"></i>',
    nextText: '<i class="fa fa-angle-right"></i>',
    slideshowSpeed: '3000',
    pauseOnHover: true
  });
  }

  /* ================================= */
  /* :::::: 13. Contact Form ::::::::: */
  /* ================================= */

  function mt_ajax_contact_form() {

			// check if plugin defined
			if (typeof $.fn.validate == 'undefined') {
				return;
			}
			var el = $('.ajax-contact-form');
			el.each(function () {
				var thisForm = $(this),
					successMessage = thisForm.find('.message.success'),
					errorMessage = thisForm.find('.message.danger');
				thisForm.validate({
					errorClass: 'error',
					submitHandler: function (form) {
						$.ajax({
							type: 'POST',
							url: 'handler.php',
							data: new FormData(form),
							cache: false,
							contentType: false,
							processData: false,
							success: function () {
                // Clear all input fields
                thisForm.find('input[type="text"], input[type="email"], textarea').val('');
								successMessage.fadeIn();
								setTimeout(function () {
									successMessage.fadeOut();
								}, 5000);
							},
							error: function () {
								errorMessage.fadeIn();
								setTimeout(function () {
									errorMessage.fadeOut();
								}, 5000);
							}
						});
					}
				});

			});
		
  }

  /* ================================= */
  /* :::::::: 14. Accordion :::::::::: */
  /* ================================= */

  function mt_accordion() {
  // Variables
  var i;
  var accordions = document.querySelectorAll('.accordion-box button');
  document.querySelectorAll('.accordion-box').forEach(function(accordion) {
    accordion.setAttribute('aria-expanded', 'false');
  });
  // Event Listeners
  for (i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function() {
      // Get the parent accordion box
      var accordionBox = this.parentElement;
      
      // Toggle the aria-expanded attribute
      if (accordionBox.getAttribute('aria-expanded') == 'true') {
        accordionBox.setAttribute('aria-expanded', 'false');
      } else {
        accordionBox.setAttribute('aria-expanded', 'true');
      }
      
      // Get the content panel (main element)
      var content = this.nextElementSibling;
      
      // Add slide effect
      if (content.style.maxHeight) {
        // If content is open, close it (slide up)
        content.style.maxHeight = null;
      } else {
        // If content is closed, open it (slide down)
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
 }

  /* ================================= */
  /* :::::::: 15. Google Map ::::::::: */
  /* ================================= */

  function mt_google_map() {

  if ($('#google-container').length) {

    //set your google maps parameters
    var latitude = -37.8602828,
      longitude = 145.079616,
      map_zoom = 10;

    //google map custom marker icon - .png fallback for IE11
    var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
    var marker_url = (is_internetExplorer11) ? 'assets/images/icon-location.png' : 'assets/images/icon-location.png';

    //define the basic color of your map, plus a value for saturation and brightness
    var main_color = '#2d313f',
      saturation_value = -70,
      brightness_value = 5;

    //we define here the style of the map
    var style = [{
        //set saturation for the labels on the map
        elementType: 'labels',
        stylers: [{
          saturation: saturation_value
        }, ]
      },
      { //poi stands for point of interest - don't show these lables on the map 
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{
          visibility: 'off'
        }, ]
      },
      {
        //don't show highways lables on the map
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [{
          visibility: 'off'
        }, ]
      },
      {
        //don't show local road lables on the map
        featureType: 'road.local',
        elementType: 'labels.icon',
        stylers: [{
          visibility: 'off'
        }, ]
      },
      {
        //don't show arterial road lables on the map
        featureType: 'road.arterial',
        elementType: 'labels.icon',
        stylers: [{
          visibility: 'off'
        }, ]
      },
      {
        //don't show road lables on the map
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{
          visibility: 'off'
        }, ]
      },
      //style different elements on the map
      {
        featureType: 'transit',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'poi',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'poi.government',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'poi.attraction',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'poi.business',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'transit',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'landscape',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]

      },
      {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      }
    ];


    //set google map options
    var map_options = {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: map_zoom,
      panControl: false,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      styles: style,
    }

    //inizialize the map
    var map = new google.maps.Map(document.getElementById('google-container'), map_options);
    //add a custom marker to the map      


    var contentString = '<div class="contact-info-box left">' +
      '<h3>CONTACT INFORMATION.</h3>' +
      '<ul>' +
      '<li><i class="fa-solid fa-location-dot"></i>Melbourne, Australia</li>' +
      '<li><i class="fas fa-phone"></i>765-302-2878</li>' +
      '<li><i class="fas fa-paper-plane"></i><a href="mailto:">name@domain.com</a></li>' +
      '<li><i class="fas fa-globe"></i><a href="">mycompanyname.com</a></li>' +
      '</ul>' +
      '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 300,

    });

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(latitude, longitude),
      map: map,
      title: 'Melbourne, Australia',
      visible: true,
      icon: marker_url,
    });

    infowindow.open(map, marker);

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });

    google.maps.event.addDomListener(window, "resize", function () {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);

    });


    //add custom buttons for the zoom-in/zoom-out on the map
    function CustomZoomControl(controlDiv, map) {
      //grap the zoom elements from the DOM and insert them in the map 
      var controlUIzoomIn = document.getElementById('zoom-in'),
        controlUIzoomOut = document.getElementById('zoom-out');
      controlDiv.appendChild(controlUIzoomIn);
      controlDiv.appendChild(controlUIzoomOut);

      // Setup the click event listeners and zoom-in or out according to the clicked element
      google.maps.event.addDomListener(controlUIzoomIn, 'click', function () {
        map.setZoom(map.getZoom() + 1)
      });
      google.maps.event.addDomListener(controlUIzoomOut, 'click', function () {
        map.setZoom(map.getZoom() - 1)
      });
    }

    var zoomControlDiv = document.createElement('div');
    var zoomControl = new CustomZoomControl(zoomControlDiv, map);

    //insert the zoom div on the top left of the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
  }
  }

  });