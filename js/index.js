// Start Setting Box
// Check Local Strorge Is Empty

let ColorOption = window.localStorage.getItem("Color_Option");

if (ColorOption !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.getItem("Color_Option")
  );
  let listLi = document.querySelectorAll(".Color-List li");
  listLi.forEach(function (li) {
    li.classList.remove("active");
    if (li.dataset.color === ColorOption) {
      li.classList.add("active");
    }
  });
}
// Select Setting Box Element
let settingsIcon = document.querySelector(".icon-div .fa-gear");
let SettingBox = document.querySelector(".setting-box");
let listLi = document.querySelectorAll(".Color-List li");
let randomBackground = document.querySelectorAll(".random-background span");

// Add Toggle Class
settingsIcon.onclick = function () {
  // Add Toggle class to icon
  this.classList.toggle("fa-spin");
  // Add Toggle class to main Setting Box
  SettingBox.classList.toggle("open");
};
// Change Color
listLi.forEach(function (li) {
  li.onclick = function (e) {
    handlefunction(e);
    console.log(e.target.dataset.color);
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    window.localStorage.setItem("Color_Option", e.target.dataset.color);
  };
});
// Variable Control
let RandomOption = true;
// Variable Handle
let RandomInterval;

// Check Local Storage
let LocalRandom = localStorage.getItem("background_option");

if (LocalRandom !== null) {
  if (LocalRandom === "true") {
    RandomOption = true;
  } else {
    RandomOption = false;
  }
  document.querySelectorAll(".random-background span").forEach(function (ele) {
    ele.classList.remove("active");
  });
  if (LocalRandom === "true") {
    document.querySelector(".random-background .yes").classList.add("active");
  } else if (LocalRandom === "false") {
    document.querySelector(".random-background .no").classList.add("active");
  }
}
randomBackground.forEach(function (ele) {
  ele.onclick = function (e) {
    handlefunction(e);
    if (e.target.dataset.background === "yes") {
      RandomOption = true;

      randomizeImage();

      localStorage.setItem("background_option", true);
    } else if (e.target.dataset.background === "no") {
      RandomOption = false;

      clearInterval(RandomInterval);

      localStorage.setItem("background_option", false);
    }
  };
});
// Select Bullets
let Selectbullets = document.querySelectorAll(".show-bullets span");

let dadSelectBullets = document.querySelector(".bullets");

let LocalSelect = window.localStorage.getItem("bullet-option");

if (LocalSelect !== null) {
  Selectbullets.forEach(function (ele) {
    ele.classList.remove("active");
  });

  if (LocalSelect === "block") {
    dadSelectBullets.style.display = "block";

    document.querySelector(".show-bullets .yes").classList.add("active");
  } else {
    dadSelectBullets.style.display = "none";

    document.querySelector(".show-bullets .no").classList.add("active");
  }
}
Selectbullets.forEach(function (ele) {
  ele.onclick = function (e) {
    handlefunction(e);

    if (e.target.dataset.display === "show") {
      dadSelectBullets.style.display = "block";

      localStorage.setItem("bullet-option", "block");
    } else {
      dadSelectBullets.style.display = "none";

      localStorage.setItem("bullet-option", "none");
    }
  };
});
// End Setting Box
// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array For th Image
let imageArray = ["-1.png", "-2.png", "-3.png", "-4.png", "-5.png"];

// Function To Interval
function randomizeImage() {
  if (RandomOption === true) {
    RandomInterval = setInterval(function () {
      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imageArray.length);
      // Change Background Image
      landingPage.style.backgroundImage = `url('../image/${imageArray[randomNumber]}')`;
    }, 5000);
  }
}

randomizeImage();

// Start Our Skills

// Select Skill div
let skills = document.querySelector(".skills");

window.onscroll = function () {
  let SkillsOffsetTop = skills.offsetTop;

  let OurSkillsHigher = skills.offsetHeight;

  let windowHight = this.innerHeight;

  let windowScroll = this.pageYOffset;

  if (windowScroll > SkillsOffsetTop + OurSkillsHigher - windowHight) {
    let Skills = document.querySelectorAll(".skills-progress span");

    Skills.forEach(function (ele) {
      ele.style.width = ele.dataset.prog;
    });
  } else {
    let Skills = document.querySelectorAll(".skills-progress span");

    Skills.forEach(function (ele) {
      ele.style.width = "0";
    });
  }
};

// Start Our Gallery
// Select Gallery Image
let ourGallery = document.querySelectorAll(".image-box img");

ourGallery.forEach(function (ele) {
  ele.onclick = function (e) {
    // Create Popup Overlay
    let popupOverlay = document.createElement("div");

    // Add Class To Popup Overlay
    popupOverlay.className = "popup-overlay";

    // Add Popup Overlay To Body
    document.body.appendChild(popupOverlay);

    // Create popup Box
    let BobubBox = document.createElement("div");

    // Add Class To Bobub Box
    BobubBox.className = "popub-box";

    if (ele.alt !== null) {
      // Add Alt Text
      let alternet = document.createElement("div");

      // Add Class To Alt
      alternet.className = "alt-text";

      // Create Text Node
      let alternetText = document.createTextNode(ele.alt);

      alternet.appendChild(alternetText);

      BobubBox.appendChild(alternet);
    }
    // Create Close Button
    let closeButton = document.createElement("button");

    // Add Class
    closeButton.className = "close-button";

    // Create Close Text
    let closeButtonText = document.createTextNode("X");

    closeButton.appendChild(closeButtonText);

    BobubBox.appendChild(closeButton);

    // Create Image
    let BobubImage = document.createElement("img");

    BobubImage.src = ele.src;

    BobubBox.appendChild(BobubImage);

    document.body.appendChild(BobubBox);
  };
});

document.onclick = function (ele) {
  if (ele.target.className === "close-button") {
    ele.target.parentNode.remove();

    document.querySelector(".popup-overlay").remove();
  }
};

// Start Bullets
// Select All Bullets
let bullets = document.querySelectorAll(".bullets .bullet");

bullets.forEach(function (bullet) {
  bullet.onclick = function (e) {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  };
});

// Handel Function
function handlefunction(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach(function (e) {
    e.classList.remove("active");
  });
  ev.target.classList.add("active");
}

// Reset Local Storage
document.querySelector(".reset-options").onclick = function () {
  localStorage.clear();
  window.location.reload();
};
// Select Mega mnu
let mega = document.querySelector(".mega-minu");
let links = document.querySelector(".container ul");

mega.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("active");
  links.classList.toggle("open");
};
