// JS - Секция текст при уменьшении экрана меньше 1400px.
document.addEventListener("DOMContentLoaded", function () {
  function updateText() {
    const items = document.querySelectorAll(".items-wrapper .item p");
    const shortNames = [
      "РГАУ-МСХА им. К. А. Тимирязева",
      "ДВНИИСХ",
      "ПСПбГМУ им. И. П. Павлова",
      "МГУ им. М. В. Ломоносова",
    ];
    const fullNames = [
      "Московская сельскохозяйственная академия имени К. А. Тимирязева",
      "Дальневосточный научно-исследовательский институт сельского хозяйства",
      "Первый Санкт-Петербургский государственный медицинский университет им. акад. И.П. Павлова",
      "Московский государственный университет имени М.В.Ломоносова",
    ];

    items.forEach((item, index) => {
      if (
        (window.innerWidth < 1400 && window.innerWidth >= 1200) ||
        window.innerWidth < 768
      ) {
        item.textContent = shortNames[index]; // Показываем короткие названия
      } else {
        item.textContent = fullNames[index]; // Показываем полные названия
      }
    });
  }

  // Запуск при загрузке и при изменении размера экрана
  updateText();
  window.addEventListener("resize", updateText);
});

//   ===================================================================================================

// popup modal js start
const downloadBtns = document.querySelectorAll(".download-btn");
const popupModal = document.getElementById("popup-modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");
const password = "test";

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
// download btn password in popup modal

$("#form-pdf").submit(function (e) {
  e.preventDefault();
  let pass = $("#password-pdf").val();
  if (pass === password) {
    $("#form-download-btn").html('Скачено');
    // $("#group-input").css("display", "none");
    $("#password-pdf").removeClass('border-red');
    $("#error-message").css("display", "none");
    var link = document.createElement("a");
    link.href = "/Taras_Resume.pdf";
    link.download = "/Taras_Resume.pdf";
    link.dispatchEvent(new MouseEvent("click"));
  } else {
    $("#error-message").css("display", "block");
    $("#password-pdf").addClass('border-red');
  }
});
