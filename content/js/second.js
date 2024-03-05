


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
    }, "translatemob");
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
  
  
  