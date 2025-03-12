// popup modal js start
const downloadBtns = document.querySelectorAll(".download-btn");
const popupModal = document.getElementById("popup-modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");
const password = "ellenpass";

// Функция для показа окна
const showModal = () => {
  popupModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  setTimeout(() => {
    popupModal.classList.add("active");
    overlay.classList.add("active");
  }, 10);
};

// Функция для скрытия окна
const hideModal = () => {
  popupModal.classList.remove("active");
  overlay.classList.remove("active");
  setTimeout(() => {
    popupModal.classList.add("hidden");
    overlay.classList.add("hidden");
  }, 300);
};

downloadBtns.forEach((button) => {
  button.addEventListener("click", showModal);
});

closeBtn.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hideModal();
  }
});

// popup modal js end

//   ===================================================================================================
// form password hide js
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".main-password")
    .forEach(function (passwordContainer) {
      const input = passwordContainer.querySelector(".input-password");
      const toggleIcon = passwordContainer.querySelector(".icon-view i");

      passwordContainer
        .querySelector(".icon-view")
        .addEventListener("click", function () {
          if (input.type === "password") {
            input.type = "text";
            toggleIcon.classList.remove("fa-eye");
            toggleIcon.classList.add("fa-eye-slash");
          } else {
            input.type = "password";
            toggleIcon.classList.remove("fa-eye-slash");
            toggleIcon.classList.add("fa-eye");
          }
        });
    });
});
//   ===================================================================================================
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in-observer");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-active");
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
});
//   ===================================================================================================
document.addEventListener("DOMContentLoaded", function () {
  gsap.set("#content-box", { visibility: "visible" }); // Делаем контент видимым
  gsap.from("#content-box", {
    scale: 0.8, // Появление сдвигом вверх
    duration: 1.2,
    ease: "power3.out"
  });
});


//   ===================================================================================================
// download btn password in popup modal

$("#form-pdf").submit(function (e) {
  e.preventDefault();
  let pass = $("#password-pdf").val();
  if (pass === password) {
    $("#form-download-btn").html("Скачано");
    // $("#group-input").css("display", "none");
    $("#password-pdf").removeClass("border-red");
    $("#error-message").css("display", "none");
    $("#password-pdf").val(""); // Очистка инпута
    var link = document.createElement("a");
    link.href = "/ellen Agro Presentation-Molecules-komprimiert.pdf";
    link.download = "/ellen Agro Presentation-Molecules-komprimiert.pdf";
    link.dispatchEvent(new MouseEvent("click"));
  } else {
    $("#error-message").css("display", "block");
    $("#password-pdf").addClass("border-red");
  }
});
