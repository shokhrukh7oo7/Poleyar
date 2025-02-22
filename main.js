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
const downloadBtn = document.querySelectorAll(".download-btn");
const popupModal = document.getElementById("popup-modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

// add classList hidden
const addHidden = () => {
  popupModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// remove classList hidden
const removeHidden = () => {
  popupModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

downloadBtn.forEach((button) => {
  button.addEventListener("click", () => {
    removeHidden();
  });
});

closeBtn.addEventListener("click", addHidden);

overlay.addEventListener("click", addHidden);

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
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
