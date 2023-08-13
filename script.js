const dropdownMenu1 = document.querySelector(".dropdown1Men");
const dropdownMenu1Content = document.querySelector(".dropdown1");
const buttons = document.querySelector(".left");
const img1 = document.querySelector(".arrow1");
const img2 = document.querySelector(".arrow2");
const dropdownMenu2 = document.querySelector(".dropdown2Men");
const dropdownMenu2Content = document.querySelector(".dropdown2");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logoo");
const end = document.querySelector(".endo");
const endImg = document.querySelector(".endoImg");
const im = document.getElementById("imgLogo");
const navSideBar = document.querySelector(".navSSide");
const close = document.querySelector(".close");

function closeNav() {
  close.classList.add("hidden");
  nav.style.visibility = "hidden";
  navSideBar.classList.add("hidden");
  endImg.classList.toggle("hidden");
  nav.classList.toggle("navSide");
  logo.classList.remove("logoS");
}
function openNav() {
  close.classList.remove("hidden");
  nav.style.visibility = "visible";
  nav.classList.toggle("navSide");
  logo.classList.add("logoS");
  im.remove();
}
if (window.innerWidth < 750) {
  end.classList.toggle("hidden");
  end.style.paddingRight = "5px";
  end.style.paddingTop = "5px";
  navSideBar.style.display = "flex";
  navSideBar.classList.remove("hidden");
  navSideBar.style.zIndex = "1";
  navSideBar.style.width = "100%";
  navSideBar.style.justifyContent = "space-between";
  if (window.innerWidth < 750) {
    end.addEventListener("click", openNav);
    close.addEventListener("click", closeNav);
  }
}


dropdownMenu1.addEventListener("mouseenter", function () {
  dropdownMenu1Content.classList.remove("hidden");
  if (window.innerWidth < 750) {
    buttons.style.marginTop = "240px";
  }
  img1.src = "icon-arrow-up.svg";
});

dropdownMenu1.addEventListener("mouseleave", function () {
  dropdownMenu1Content.classList.add("hidden");
  if (window.innerWidth < 750) {
    buttons.style.marginTop = "130px";
  }
  img1.src = "icon-arrow-down.svg";
});

dropdownMenu2.addEventListener("mouseenter", function () {
  dropdownMenu2Content.classList.remove("hidden");
  if (window.innerWidth < 750) {
    buttons.style.marginTop = "240px";
  }
  img2.src = "icon-arrow-up.svg";
});

dropdownMenu2.addEventListener("mouseleave", function () {
  dropdownMenu2Content.classList.add("hidden");
  if (window.innerWidth < 750) {
    buttons.style.marginTop = "130px";
  }
  img2.src = "icon-arrow-down.svg";
});

