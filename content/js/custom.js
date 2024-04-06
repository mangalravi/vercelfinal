$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
      $(".navwhite").addClass("bg-active");
  } else {
      $(".navwhite").removeClass("bg-active");
  }
});

// $(document).ready(function(){
//   $('.projetos-slider').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 1000,
//       arrows: false,
//       dots: false,
//       adaptiveHeight: true,
//       paginationClickable: true,
//       parallax: true,
//       spaceBetween: 10,
//       grabCursor: true,
//       speed: 1500,
//       responsive: [
//           {
//               breakpoint: 1121,
//               settings: {
//                   slidesToShow: 1,
//                   autoplay: true,
//                   adaptiveHeight: true,
//               }
//           },
//           {
//               breakpoint: 768,
//               settings: {
//                   slidesToShow: 1,
//                   autoplay: true,
//                   adaptiveHeight: true,
//               }
//           }
//       ]  
//   });

//   $('.prev-arrow').click(function() {
//       $('.projetos-slider').slick('slickPrev'); // Trigger previous slide on click
//   });

//   $('.next-arrow').click(function() {
//       $('.projetos-slider').slick('slickNext'); // Trigger next slide on click
//   });
// });

// product-list page

$(document).ready(function() {
  $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if ($(this).parent().hasClass("active")) {
          $(".sidebar-dropdown").removeClass("active");
          $(this).parent().removeClass("active");
      } else {
          $(".sidebar-dropdown").removeClass("active");
          $(this).next(".sidebar-submenu").slideDown(200);
          $(this).parent().addClass("active");
      }
  });
  
  var sidebarTimeout;
  var sidebarCollapsed = false;

  // Function to collapse sidebar after a certain time interval
  function collapseSidebar() {
      $('#sidebar').addClass('collapsed').css('width', '10px');
      $('.main-prodlist').css('margin-left', '15px');
      sidebarCollapsed = true;
  }

  // Toggle sidebar collapse on button click
  $('#btn-collapse').on('click', function(){
      $('#sidebar').toggleClass('collapsed');
      if (sidebarCollapsed) {
          $('#sidebar').css('width', '250px'); // Adjust the width of the sidebar when expanding
      } else {
          $('#sidebar').css('width', '10px'); // Set the width to zero when collapsing
      }
      $('.main-prodlist').css('margin-left', sidebarCollapsed ? '250px' : '20px');
      sidebarCollapsed = !sidebarCollapsed; // Toggle the sidebarCollapsed flag
      // Reset the timeout if the button is clicked
      clearTimeout(sidebarTimeout);
      sidebarTimeout = setTimeout(collapseSidebar, 100000); // Adjust the time interval as needed (100000 milliseconds = 100 seconds)
  });

  // Set timeout to collapse sidebar if button is not clicked
  sidebarTimeout = setTimeout(collapseSidebar, 5000);  // Adjust the time interval as needed (5000 milliseconds = 5 seconds)
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

// text animation

$(document).ready(function() {
  // Define an array to store all the spans
  var spans = $('.new_homebstock-change-title-box').find('.new_homebstock-amimationText');
  var currentIndex = 0; // Initialize index for the current active span

  // Function to show the next span and hide the previous one
  function showNextSpan() {
      spans.eq(currentIndex).removeClass('active'); // Hide current active span
      currentIndex = (currentIndex + 1) % spans.length; // Calculate index for the next span
      spans.eq(currentIndex).addClass('active'); // Show next span
  }

  // Initially, show the first span
  spans.eq(currentIndex).addClass('active');

  // Set interval to change spans every 3 seconds (adjust the interval as needed)
  var interval = setInterval(showNextSpan, 3000);

  // Stop the interval when the page unloads
  $(window).unload(function() {
      clearInterval(interval); // Stop the interval
  });
});

// whatsapp chat

(function () {
  var options = {
      whatsapp: "6350428940", // Contact Number
      call_to_action: "Wanna Chat With Us !!!",
      position: "right", 
  };
  var proto = document.location.protocol,
      host = "getbutton.io",
      url = proto + "//static." + host;
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = url + '/widget-send-button/js/init.js';
  s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
  
  var x = document.getElementsByTagName('script')[0];
  x.parentNode.insertBefore(s, x);    
})();

$(document).ready(function () {
  
  // save big images
  var $bigItem = $('.image-big-list-item');
  // save small images
  var $smallItem = $('.image-small-list-item');
  // click and mouseenter function on small image
  // you could delete one eventlistener
  $smallItem.on('click mouseenter', function () {
      // remove active class from all items
      $bigItem.removeClass('active');
      $smallItem.removeClass('active');
      // add active class to item as small item's index
      $bigItem.eq($(this).index()).addClass('active');
      $smallItem.eq($(this).index()).addClass('active');
  });

});

document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  const tabs = document.querySelectorAll(".tab");
  let currentIndex = 0;
  let intervalId;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === index);
      });
      tabs.forEach((tab, i) => {
          tab.classList.toggle("active", i === index);
      });
      currentIndex = index;
  }

  function switchSlide() {
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex);
  }

  tabs.forEach((tab, index) => {
      tab.addEventListener("click", function() {
          clearInterval(intervalId);
          showSlide(index);
          intervalId = setInterval(switchSlide, 2000);
      });
  });

  intervalId = setInterval(switchSlide, 2000);
});

function showTooltip(event) {
  // check presence
  let tooltipDiv = event.target.closest("*[data-tooltip]");
  if (!tooltipDiv) return;

  // get tooltip text
  let tooltipText = tooltipDiv.dataset.tooltip;

  // make the tooltip box 
  let tooltipBox = document.createElement("div");

  // (append the complete thing else positioning is impossible)
  tooltipBox.className = "tooltip";
  tooltipBox.innerHTML = tooltipText;
  document.body.append(tooltipBox); // position of the code is important

  let tooltipBoxCoors = tooltipBox.getBoundingClientRect();
  let tooltipDivCoors = tooltipDiv.getBoundingClientRect();
  let topPosition = "none";
  let leftPosition = "none";

  topPosition = tooltipDivCoors.top - tooltipBoxCoors.height - 3;
  leftPosition = tooltipDivCoors.left + tooltipDivCoors.width / 2 - tooltipBoxCoors.width / 2;

  if (topPosition < 0) {
      topPosition = tooltipDivCoors.top + tooltipDivCoors.height + 3;
  }
  if (leftPosition < 0) leftPosition = tooltipDivCoors.left;

  // final position and show tooltip
  tooltipBox.style.left = leftPosition + "px";
  tooltipBox.style.top = topPosition + "px";

}

function removeTooltip(event) {
  let tooltipList = document.querySelectorAll(".tooltip");
  Array.from(tooltipList).forEach(item => item.remove());
}

document.addEventListener("mouseover", showTooltip);
document.addEventListener("mouseout", removeTooltip);





const children = document.querySelectorAll('.ImgContent');
  let currentIndex = 0;

  function setActive(index) {
    children.forEach((child, i) => {
      if (i === index) {
        child.classList.add('active');
      } else {
        child.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % children.length;
    setActive(currentIndex);
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds

  // Add event listeners for mouse enter and mouse leave
  children.forEach((child, index) => {
    child.addEventListener('mouseenter', () => {
      setActive(index);
    });
    child.addEventListener('mouseleave', () => {
      // Reset to default behavior
      setActive(-1);
    });
  });



// const children = document.querySelectorAll('.ImgContent');
// let currentIndex = 0;

// function setActive(index) {
//   children.forEach((child, i) => {
//     if (i === index) {
//       child.classList.add('active');
//     } else {
//       child.classList.remove('active');
//     }
//   });
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % children.length;
//   setActive(currentIndex);
// }

// setInterval(nextSlide, 3000); // Change slide every 3 seconds

// // Add event listeners for mouse enter and mouse leave
// children.forEach((child, index) => {
//   child.addEventListener('mouseenter', () => {
//     setActive(index);
//     child.classList.add('arrow');
//   });
//   child.addEventListener('mouseleave', () => {
//     // Reset to default behavior
//     setActive(-1);
//     child.classList.remove('arrow');
//   });
// });
