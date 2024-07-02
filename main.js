const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  function toggleMenu() {
    mobileMenu.classList.toggle("none");
    mobileMenu.classList.toggle("block");
    hamburgerBtn.classList.toggle("toggle-btn");
  }

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);

  function updateTime() {
    const date = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const day = days[date.getDay()];
    const time = date.toLocaleTimeString();

    document.getElementById("day").innerText = `Day is ${day}`;
    document.getElementById("time").innerText = `Time is ${time}`;
  }

  updateTime();

  setInterval(updateTime, 1000);
};

document.addEventListener("DOMContentLoaded", initApp);
