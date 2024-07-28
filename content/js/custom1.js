// document.addEventListener("DOMContentLoaded", () => {
//   const mobileInput = document.getElementById("mobno");
//   const otpInput = document.getElementById("otp");
//   const continueButton = document.getElementById("continueButton");
//   const section2 = document.getElementById("section2");

//   function validateMobileNumber() {
//     const mobileNumber = mobileInput.value;
//     const numberRegex = /^\d{10}$/;

//     if (numberRegex.test(mobileNumber)) {
//       otpInput.disabled = false;
//       validateOtp();
//     } else {
//       otpInput.disabled = true;
//       continueButton.disabled = true;
//     }
//   }

//   function validateOtp() {
//     const otpNumber = otpInput.value;
//     const numberRegex = /^\d{6}$/;

//     if (numberRegex.test(otpNumber)) {
//       checkEnableContinueButton();
//     } else {
//       continueButton.disabled = true;
//     }
//   }

//   function checkEnableContinueButton() {
//     const mobileNumber = mobileInput.value;
//     const otpNumber = otpInput.value;
//     const mobileRegex = /^\d{10}$/;
//     const otpRegex = /^\d{6}$/;

//     if (mobileRegex.test(mobileNumber) && otpRegex.test(otpNumber)) {
//       continueButton.disabled = false;
//     } else {
//       continueButton.disabled = true;
//     }
//   }

//   function disableAccordionSections() {
//     const sections = document.querySelectorAll(".accordion-item");
//     sections.forEach((section) => {
//       if (section.id !== "section1" && section.id !== "section2") {
//         section.classList.add("disabled");
//         section.classList.add("dnone"); // Ensure it's hidden
//         const button = section.querySelector(".accordion-button");
//         button.setAttribute("disabled", true);
//         button.setAttribute("aria-expanded", "false");
//       }
//     });
//   }

//   function enableAccordionSections() {
//     const sections = document.querySelectorAll(".accordion-item.dnone");
//     sections.forEach((section) => {
//       if (section.id !== "section2") {
//         section.classList.remove("dnone");
//         section.classList.remove("disabled");
//         const button = section.querySelector(".accordion-button");
//         button.removeAttribute("disabled");
//         button.setAttribute("aria-expanded", "false");
//       }
//     });
//   }

//   // Handle continue button click
//   function handleButtonClick() {
//     if (section2) {
//       section2.classList.remove("dnone");
//     }
//   }

//   // Event listeners
//   mobileInput.addEventListener("input", () => {
//     const value = mobileInput.value.replace(/\D/g, "");
//     mobileInput.value = value;
//     validateMobileNumber();
//   });

//   otpInput.addEventListener("input", () => {
//     const value = otpInput.value.replace(/\D/g, "");
//     otpInput.value = value;
//     validateOtp();
//   });

//   disableAccordionSections();

//   continueButton.addEventListener("click", () => {
//     if (!continueButton.disabled) {
//       handleButtonClick();
//       enableAccordionSections();
//     }
//   });

//   const accordionButtons = document.querySelectorAll(".accordion-button");
//   accordionButtons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//       if (button.hasAttribute("disabled")) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const viewmore = document.getElementById("viewmore");
//   const hide = document.getElementById("hide");
//   const viewmoreText = document.getElementById("viewmore-text");

//   viewmore.addEventListener("click", () => {
//     if (hide.style.display === "none") {
//       hide.style.display = "flex";
//       viewmoreText.textContent = "Hide products";
//     } else {
//       hide.style.display = "none";
//       viewmoreText.textContent = "View all 5 addresses";
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const parentRadios = document.querySelectorAll(
//     'input[name="payment-option"]'
//   );

//   const childRadios = document.querySelectorAll(
//     'input[name="child-payment-option"]'
//   );

//   function handleChildRadioChange(event) {
//     const parentLabel = event.target.closest("label").previousElementSibling;
//     if (parentLabel) {
//       const parentRadio = parentLabel.querySelector(
//         'input[name="payment-option"]'
//       );
//       if (parentRadio) {
//         parentRadio.checked = true;
//       }
//     }
//   }

//   function handleParentRadioChange() {
//     // Uncheck all child radio buttons
//     childRadios.forEach((child) => (child.checked = false));
//   }

//   childRadios.forEach((child) => {
//     child.addEventListener("change", handleChildRadioChange);
//   });

//   parentRadios.forEach((parent) => {
//     parent.addEventListener("change", handleParentRadioChange);
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const mobileInput = document.getElementById("mobno");
  const otpInput = document.getElementById("otp");
  const continueButton = document.getElementById("continueButton");
  const section1 = document.getElementById("section1");
  const section2 = document.getElementById("section2");

  function validateMobileNumber() {
    const mobileNumber = mobileInput.value.replace(/\D/g, "");
    const numberRegex = /^\d{10}$/;

    if (numberRegex.test(mobileNumber)) {
      otpInput.disabled = false;
      validateOtp();
    } else {
      otpInput.disabled = true;
      continueButton.disabled = true;
    }
  }

  function validateOtp() {
    const otpNumber = otpInput.value.replace(/\D/g, "");
    const numberRegex = /^\d{6}$/;

    if (numberRegex.test(otpNumber)) {
      checkEnableContinueButton();
    } else {
      continueButton.disabled = true;
    }
  }

  function checkEnableContinueButton() {
    const mobileNumber = mobileInput.value.replace(/\D/g, "");
    const otpNumber = otpInput.value.replace(/\D/g, "");
    const mobileRegex = /^\d{10}$/;
    const otpRegex = /^\d{6}$/;

    if (mobileRegex.test(mobileNumber) && otpRegex.test(otpNumber)) {
      continueButton.disabled = false;
    } else {
      continueButton.disabled = true;
    }
  }

  function openSection(sectionToOpen) {
    sectionToOpen.classList.remove("dnone");
  }

  function closeSection(sectionToClose) {
    sectionToClose.classList.add("dnone");
  }

  function handleButtonClick() {
    if (section1) {
      closeSection(section1); // Hide section1
    }
    if (section2) {
      openSection(section2); // Show section2
    }
  }

  // Event listeners
  mobileInput.addEventListener("input", () => {
    const value = mobileInput.value.replace(/\D/g, "");
    mobileInput.value = value;
    validateMobileNumber();
  });

  otpInput.addEventListener("input", () => {
    const value = otpInput.value.replace(/\D/g, "");
    otpInput.value = value;
    validateOtp();
  });

  continueButton.addEventListener("click", () => {
    if (!continueButton.disabled) {
      handleButtonClick(); // Hide section1 and show section2
    }
  });

  // Initialize sections
  openSection(section1); // Open section1 by default
  closeSection(section2); // Ensure section2 is hidden by default

  const accordionButtons = document.querySelectorAll(".accordion-button");
  accordionButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      if (button.hasAttribute("disabled")) {
        event.preventDefault();
        event.stopPropagation();
      }
    });
  });

  // Handle child and parent radio button logic
  const parentRadios = document.querySelectorAll(
    'input[name="payment-option"]'
  );
  const childRadios = document.querySelectorAll(
    'input[name="child-payment-option"]'
  );

  function handleChildRadioChange(event) {
    const parentLabel = event.target.closest("label").previousElementSibling;
    if (parentLabel) {
      const parentRadio = parentLabel.querySelector(
        'input[name="payment-option"]'
      );
      if (parentRadio) {
        parentRadio.checked = true;
      }
    }
  }

  function handleParentRadioChange() {
    // Uncheck all child radio buttons
    childRadios.forEach((child) => (child.checked = false));
  }

  childRadios.forEach((child) => {
    child.addEventListener("change", handleChildRadioChange);
  });

  parentRadios.forEach((parent) => {
    parent.addEventListener("change", handleParentRadioChange);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const viewmore = document.getElementById("viewmore");
  const hide = document.getElementById("hide");
  const viewmoreText = document.getElementById("viewmore-text");

  viewmore.addEventListener("click", () => {
    if (hide.style.display === "none") {
      hide.style.display = "flex";
      viewmoreText.textContent = "Hide products";
    } else {
      hide.style.display = "none";
      viewmoreText.textContent = "View all 5 addresses";
    }
  });
});
openSection(section1); // Open section1 by default
closeSection(section2); // Ensure section2 is hidden by default
function handleButtonClick() {
  if (section1) {
    closeSection(section1); // Hide section1
  }
  if (section2) {
    openSection(section2); // Show section2
  }
}
