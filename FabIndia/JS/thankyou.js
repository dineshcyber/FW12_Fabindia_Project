//Scroller hider start
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("scroller");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//scroller hider end

//mouseover start
let links = document.getElementById(`scroller-b`).querySelectorAll(`p`);
links[2].addEventListener(`click`, function () {
  window.location.href = "women.html";
});
links[3].addEventListener(`click`, function () {
  window.location.href = "men.html";
});
links[6].addEventListener(`click`, function () {
  window.location.href = "decorative.html";
});
links[1].addEventListener(`click`, function () {
  window.location.href = "products.html";
});

//input-bar
var input = document.getElementById(`search`);
var warning = document.getElementById(`warning`);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (input.value == `men` || input.value == `MEN`) {
      window.location.href = "men.html";
    } else if (input.value == `women` || input.value == `WOMEN`) {
      window.location.href = "women.html";
    } else if (input.value == `decor` || input.value == `DECOR`) {
      window.location.href = "decorative.html";
    } else {
      warning.style.display = `block`;
      input.value = null;
    }
  }
});
