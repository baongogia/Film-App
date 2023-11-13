// ToggleButton
export function toggleButton() {
  const BUTTON = document.querySelector(".toggle");
  const IS_PRESSED = BUTTON.matches("[aria-pressed=true]");
  document.body.setAttribute("data-dark-mode", IS_PRESSED ? false : true);
  BUTTON.setAttribute("aria-pressed", IS_PRESSED ? false : true);
}

// Control Button

export function scrollRight() {
  const rightButtons = document.querySelectorAll(".icon--control-right");

  rightButtons.forEach(function (element) {
    element.onclick = () => {
      const contentList = element.closest(".content__films");
      contentList.scrollLeft += 470 * 3;
    };
  });
}

export function scrollLeft() {
  const leftButtons = document.querySelectorAll(".icon--control-left");

  leftButtons.forEach(function (element) {
    element.onclick = () => {
      const contentList = element.closest(".content__films");
      contentList.scrollLeft -= 470 * 3;
    };
  });
}

// Play Trailer

export function showTrailer() {
  const content = document.getElementById("Content");
  content.style.opacity = 0;
  const videoTrailer = document.getElementById("filmTrailer");
  videoTrailer.style.zIndex = 1;
  videoTrailer.style.opacity = 1;
  const cancel = document.getElementById("CancelButton");
  cancel.style.zIndex = 1;
  cancel.style.opacity = 1;
}

export function hideTrailer() {
  const content = document.getElementById("Content");
  content.style.opacity = 1;
  const videoTrailer = document.getElementById("filmTrailer");
  videoTrailer.style.zIndex = -1;
  videoTrailer.style.opacity = 0;
  const cancel = document.getElementById("CancelButton");
  cancel.style.zIndex = -1;
  cancel.style.opacity = 0;
}

// Change Icon Color

export function redHeart() {
  const heart = document.getElementById("Heart");
  heart.setAttribute("fill", "red");
}

export function yellowMark() {
  const mark = document.getElementById("Mark");
  mark.setAttribute("fill", "yellow");
}

export function blackNofi() {
  const nofi = document.getElementById("Nofi");
  nofi.setAttribute("fill", "green");
}

// Login & Signup

export function Login() {
  const loginBtn = document.querySelector(".navbar__user--in");
  loginBtn.classList.add("hovin");
  const SignUpBtn = document.querySelector(".navbar__user--up");
  SignUpBtn.classList.remove("hovup");
  const loginPage = document.getElementById("LoginPage");
  loginPage.style.opacity = 1;
  loginPage.style.zIndex = 15;
  const switchBtn = document.querySelector(".checkbox");
  switchBtn.checked = false;
  const ggLog = document.getElementById("GGSignIn");
  ggLog.style.display = "block";
}

export function HideLogin() {
  const loginPage = document.getElementById("LoginPage");
  loginPage.style.opacity = 0;
  loginPage.style.zIndex = -1;
}

export function SignUp() {
  const SignUpBtn = document.querySelector(".navbar__user--up");
  SignUpBtn.classList.add("hovup");
  const loginBtn = document.querySelector(".navbar__user--in");
  loginBtn.classList.remove("hovin");
  const loginPage = document.getElementById("LoginPage");
  loginPage.style.opacity = 1;
  loginPage.style.zIndex = 10;
  const switchBtn = document.querySelector(".checkbox");
  switchBtn.checked = true;
  const ggLog = document.getElementById("GGSignIn");
  // ggLog.style.opacity = 0;
  ggLog.style.display = "none";
}

// Show trailer poster

export function pos() {
  const posTrailer = document.getElementById("posterTrailer");
  posTrailer.style.display = "block";
}

export function hidepos() {
  const posTrailer = document.getElementById("posterTrailer");
  posTrailer.style.display = "none";
}

// Rating

export function ratingFilm() {
  const points = document.querySelectorAll(".Rate");

  points.forEach((point) => {
    const rating = parseFloat(point.innerHTML);

    if (rating >= 8.0) {
      point.classList.add("high");
    } else if (rating >= 6.0 && rating < 8.0) {
      point.classList.add("medium");
    } else {
      point.classList.add("low");
    }
  });
}

// Search bar

export function showSearchBox() {
  const searchBox = document.getElementById("SearchBox");
  searchBox.style.opacity = 1;
  searchBox.style.pointerEvents = "auto";
}

export function hideSearchBox() {
  const searchBox = document.getElementById("SearchBox");
  setTimeout(() => {
    searchBox.style.opacity = 0;
    searchBox.style.pointerEvents = "none";
  }, 200);
}

// show infor

export function showInfor() {
  const infor = document.querySelector(".infor-box");
  infor.style.opacity = 1;
}
