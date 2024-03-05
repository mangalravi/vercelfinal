$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".navwhite").addClass("bg-active");
    } else {
        $(".navwhite").removeClass("bg-active");
    }
});





$(document).ready(function(){
    $('.projetos-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        paginationClickable: true,
        parallax: true,
        spaceBetween: 10,
        grabCursor: true,
        speed: 1500,
      responsive: [
        {
            breakpoint: 1121,
            settings: {
                slidesToShow: 1,
                autoplay: true,
                adaptiveHeight: true,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                autoplay: true,
                adaptiveHeight: true,
            }
        }
        ]  
         
    });

});  
$('.prev-arrow').click(function() {
    $('.projetos-slider').slick('slickPrev'); // Trigger previous slide on click
  });

  $('.next-arrow').click(function() {
    $('.projetos-slider').slick('slickNext'); // Trigger next slide on click
  });
  
// product-list page



$(".sidebar-dropdown > a").click(function() {
    $(".sidebar-submenu").slideUp(200);
    if (
      $(this)
        .parent()
        .hasClass("active")
    ) {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .parent()
        .removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .next(".sidebar-submenu")
        .slideDown(200);
      $(this)
        .parent()
        .addClass("active");
    }
  });
  
  $('#btn-collapse').on('click', function(){
    $('#sidebar').toggleClass('collapsed');
});
  



var Cookie = {
  set: function set(name, value, days) {
    var domain, domainParts, date, expires, host;
    if (days) {
      date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toGMTString();
    } else {
      expires = "";
    }
    host = location.host;
    if (host.split(".").length === 1) {
      document.cookie = name + "=" + value + expires + "; path=/";
    } else {
      domainParts = host.split(".");
      domainParts.shift();
      domain = "." + domainParts.join(".");
      document.cookie = name + "=" + value + expires + "; path=/; domain=" + domain;
        if (Cookie.get(name) == null || Cookie.get(name) != value) {
          domain = "." + host;
        document.cookie = name + "=" + value + expires + "; path=/; domain=" + domain;
      }
    }
  },
  get: function get(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  erase: function erase(name) {
    Cookie.set(name, "", -1);
  }
};
function googleTranslateElementInit() {
  var url = new URL(window.location);
  var lang = url.searchParams.get("lang");
  if (lang) {
    console.log(lang);
    Cookies.set("googtrans", "/en/".concat(lang), {
      path: ""
    });
    Cookie.set("googtrans", "/en/".concat(lang));
    Cookies.set("googtrans", "/en/".concat(lang), {
      path: "",
      domain: location.host
    });
  } else {
    Cookie.erase("googtrans");
    Cookies.remove("googtrans", {
      path: ""
    });
  }
  new google.translate.TranslateElement({
    pageLanguage: "en"
  }, "translate");
  // add event listener to change url param on language selection change
  var langSelector = document.querySelector(".goog-te-combo");
  langSelector.addEventListener("change", function () {
    var lang = langSelector.value;
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + lang;
    window.history.pushState({
      path: newurl
    }, "", newurl);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  (function () {
    Cookie.erase("googtrans");
    var googleTranslateScript = document.createElement("script");
    googleTranslateScript.type = "text/javascript";
    googleTranslateScript.async = true;
    googleTranslateScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(googleTranslateScript);
  })();
});


document.addEventListener("DOMContentLoaded", function() {
  var selectElement = document.querySelector('.goog-te-combo');
  var selectOptions = selectElement.querySelectorAll('option');
  
  // Remove the <option> with value=""
  selectOptions.forEach(function(option) {
      if (option.value === "") {
          option.remove();
      }
  });

  // Add Bootstrap icon inside the <select> element
  var selectIcon = document.createElement('i');
  selectIcon.classList.add('bi', 'bi-translate'); // Add Bootstrap icon classes
  selectElement.insertBefore(selectIcon, selectElement.firstChild);
});




function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

/* Initiate Magnify Function
with the id of the image, and the strength of the magnifier glass:*/
magnify("myimage", 3);



