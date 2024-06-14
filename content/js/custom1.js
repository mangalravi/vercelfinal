$(document).ready(function () {
  // Scroll event for navbar
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".navwhite").addClass("bg-active");
    } else {
      $(".navwhite").removeClass("bg-active");
    }
  });

  // Slick slider initialization
  $(".projetos-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    speed: 1500,
    responsive: [
      {
        breakpoint: 1121,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          adaptiveHeight: true,
        },
      },
    ],
  });

  $(".prev-arrow").click(function () {
    $(".projetos-slider").slick("slickPrev");
  });

  $(".next-arrow").click(function () {
    $(".projetos-slider").slick("slickNext");
  });

  // Sidebar dropdown
  $(".sidebar-dropdown > a").click(function () {
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

  $(document).ready(function () {
    var sidebarTimeout;
    var sidebarCollapsed = true; // Initially collapsed
    var hoverEffectEnabled = true; // To track if hover effect is enabled

    // Function to collapse sidebar
    function collapseSidebar() {
      $("#sidebar").addClass("collapsed").css("width", "10px");
      $(".main-prodlist").css("margin-left", "15px");
      $("#btn-collapse").css("left", "-18px");
      sidebarCollapsed = true;
      hoverEffectEnabled = false; // Disable hover effect after the sidebar collapses to 10px
    }

    // Function to expand sidebar
    function expandSidebar() {
      $("#sidebar").removeClass("collapsed").css("width", "250px");
      $(".main-prodlist").css("margin-left", "250px");
      $("#btn-collapse").css("left", "215px");
      sidebarCollapsed = false;
    }

    // Toggle sidebar collapse on button click
    $("#btn-collapse").on("click", function () {
      if (sidebarCollapsed) {
        expandSidebar();
      } else {
        collapseSidebar();
      }
      clearTimeout(sidebarTimeout);
      sidebarTimeout = setTimeout(collapseSidebar, 100000); // Reset the timeout to collapse the sidebar after 100 seconds
    });

    // Add hover event listeners for sidebar
    $("#sidebar").hover(
      function () {
        if (hoverEffectEnabled && sidebarCollapsed) {
          clearTimeout(sidebarTimeout);
          expandSidebar();
        }
      },
      function () {
        if (hoverEffectEnabled && !sidebarCollapsed) {
          sidebarTimeout = setTimeout(collapseSidebar, 5000); // Collapse the sidebar after 5 seconds
          hoverEffectEnabled = false; // Disable hover effect after first collapse to 10px
        }
      }
    );

    // Ensure the sidebar collapse state is respected when the page is first loaded
    // Initial collapse after 5 seconds if no interaction
    sidebarTimeout = setTimeout(collapseSidebar, 5000);

    // Additional event for the new button to display sidebar
    $(".navbar-toggler.bfltr.mdlcat").on("click", function () {
      $("#sidebar").css("display", "block");
      expandSidebar();
    });

    // Re-check the screen size on window resize and adjust sidebar accordingly
    $(window).resize(function () {
      if ($(window).width() > 991) {
        if (sidebarCollapsed) {
          collapseSidebar();
        } else {
          expandSidebar();
        }
      } else {
        // If the window is resized to a smaller width, ensure the sidebar is collapsed
        collapseSidebar();
      }
    });
  });

  // Text animation
  var spans = $(".new_homebstock-change-title-box").find(
    ".new_homebstock-amimationText"
  );
  var currentIndex = 0;

  function showNextSpan() {
    spans.eq(currentIndex).removeClass("active");
    currentIndex = (currentIndex + 1) % spans.length;
    spans.eq(currentIndex).addClass("active");
  }

  spans.eq(currentIndex).addClass("active");
  var interval = setInterval(showNextSpan, 3000);

  $(window).on("unload", function () {
    clearInterval(interval);
  });

  // Image hover effect
  var $bigItem = $(".image-big-list-item");
  var $smallItem = $(".image-small-list-item");

  $smallItem.on("click mouseenter", function () {
    $bigItem.removeClass("active");
    $smallItem.removeClass("active");
    $bigItem.eq($(this).index()).addClass("active");
    $smallItem.eq($(this).index()).addClass("active");
  });

  // Filter toggle
  $("#clsfltr").click(function () {
    $("#sidebar").css("display", "none");
  });
  $(".mdlcat").click(function () {
    $("#sidebar").css("display", "block");
  });
});

//whatsp chat
// (function () {
//   var options = {
//     whatsapp: "6350428940", // Contact Number
//     call_to_action: "Wanna Chat With Us !!!",
//     position: "right",
//   };
//   var proto = document.location.protocol,
//     host = "getbutton.io",
//     url = proto + "//static." + host;
//   var s = document.createElement("script");
//   s.type = "text/javascript";
//   s.async = true;
//   s.src = url + "/widget-send-button/js/init.js";
//   s.onload = function () {
//     WhWidgetSendButton.init(host, proto, options);
//   };

//   var x = document.getElementsByTagName("script")[0];
//   x.parentNode.insertBefore(s, x);
// })();
// Google Translate initialization
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
      document.cookie =
        name + "=" + value + expires + "; path=/; domain=" + domain;
      if (Cookie.get(name) == null || Cookie.get(name) != value) {
        domain = "." + host;
        document.cookie =
          name + "=" + value + expires + "; path=/; domain=" + domain;
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
  },
};

function googleTranslateElementInit() {
  var url = new URL(window.location);
  var lang = url.searchParams.get("lang");
  if (lang) {
    console.log(lang);
    Cookies.set("googtrans", "/en/".concat(lang), {
      path: "",
    });
    Cookie.set("googtrans", "/en/".concat(lang));
    Cookies.set("googtrans", "/en/".concat(lang), {
      path: "",
      domain: location.host,
    });
  } else {
    Cookie.erase("googtrans");
    Cookies.remove("googtrans", {
      path: "",
    });
  }
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
    },
    "translate"
  );
  // add event listener to change url param on language selection change
  var langSelector = document.querySelector(".goog-te-combo");
  langSelector.addEventListener("change", function () {
    var lang = langSelector.value;
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?lang=" +
      lang;
    window.history.pushState(
      {
        path: newurl,
      },
      "",
      newurl
    );
  });
}

document.addEventListener("DOMContentLoaded", function () {
  (function () {
    Cookie.erase("googtrans");
    var googleTranslateScript = document.createElement("script");
    googleTranslateScript.type = "text/javascript";
    googleTranslateScript.async = true;
    googleTranslateScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(googleTranslateScript);
  })();
});

document.addEventListener("DOMContentLoaded", function () {
  var selectElement = document.querySelector(".goog-te-combo");
  var selectOptions = selectElement.querySelectorAll("option");

  // Remove the <option> with value=""
  selectOptions.forEach(function (option) {
    if (option.value === "") {
      option.remove();
    }
  });

  // Add Bootstrap icon inside the <select> element
  var selectIcon = document.createElement("i");
  selectIcon.classList.add("bi", "bi-translate"); // Add Bootstrap icon classes
  selectElement.insertBefore(selectIcon, selectElement.firstChild);
});

document.addEventListener("DOMContentLoaded", function () {
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
    tab.addEventListener("click", function () {
      clearInterval(intervalId);
      showSlide(index);
      intervalId = setInterval(switchSlide, 2000);
    });
  });

  intervalId = setInterval(switchSlide, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  const children = document.querySelectorAll(".ImgContent");
  let currentIndex = 0;

  function setActive(index) {
    children.forEach((child, i) => {
      if (i === index) {
        child.classList.add("active");
      } else {
        child.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % children.length;
    setActive(currentIndex);
  }

  setInterval(nextSlide, 3000);

  children.forEach((child, index) => {
    child.addEventListener("mouseenter", () => {
      setActive(index);
    });
    child.addEventListener("mouseleave", () => {
      setActive(-1);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");

  registerBtn.addEventListener("click", () => {
    container.classList.add("active");
  });

  loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });
});

$(document).ready(function () {
  // Open sidebar when clicking the Filter button
  $(".mdlcat2").click(function () {
    $("#sidebar").css("display", "block");
  });
  // Close sidebar when clicking the close button inside the sidebar
  $("#clsfltr").click(function () {
    $("#sidebar").css("display", "none");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Find the select element with class 'goog-te-combo'
  var selectElement = document.querySelector(".goog-te-combo");

  // Check if the element exists
  if (selectElement) {
    // Add the 'selectSearch' class to the element
    selectElement.classList.add("selectSearch");
  }
});

// whatsp chatbot
// document.addEventListener("DOMContentLoaded", function () {
//   const chatToggleBtn = document.getElementById("chatToggleBtn");
//   const chatBody = document.getElementById("chatBody");
//   const sendBtn = document.getElementById("sendBtn");
//   const messageInput = document.getElementById("messageInput");

//   chatToggleBtn.addEventListener("click", function () {
//     chatBody.style.display =
//       chatBody.style.display === "block" ? "none" : "block";
//   });

//   sendBtn.addEventListener("click", function () {
//     const message = messageInput.value.trim();
//     if (message) {
//       const phoneNumber = "6350428940"; // Replace with your WhatsApp number
//       const encodedMessage = encodeURIComponent(message);
//       const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//       window.open(whatsappUrl, "_blank");
//     }
//   });
// });

//whatsp chatbot with roboicon
document.addEventListener("DOMContentLoaded", function () {
  const chatToggleBtn = document.getElementById("chatToggleBtn");
  const chatBody = document.getElementById("chatBody");
  const sendBtn = document.getElementById("sendBtn");
  const messageInput = document.getElementById("messageInput");

  chatToggleBtn.addEventListener("click", function () {
    chatBody.style.display =
      chatBody.style.display === "block" ? "none" : "block";
  });

  sendBtn.addEventListener("click", function () {
    const message = messageInput.value.trim();
    if (message) {
      const phoneNumber = "6350428940"; // Replace with your WhatsApp number
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");
    }
  });
});
