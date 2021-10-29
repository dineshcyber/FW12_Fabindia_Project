const open_btn = document.querySelector('#menu_btn');
const close_btn = document.querySelector('.close-btn');
const popup = document.querySelector('.popup');
const main_popup = document.querySelector('.main-popup');

open_btn.addEventListener('click', () => {
	popup.style.display = 'flex';
	main_popup.style.cssText = 'animation:slide-in .5s ease; animation-fill-mode: forwards;';
});

close_btn.addEventListener('click', () => {
	main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
	setTimeout(() => {
		popup.style.display = 'none';
	}, 500);
});

window.addEventListener('click', (e) => {
	if (e.target == document.querySelector('.popup-overlay')) {
		main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
		setTimeout(() => {
			popup.style.display = 'none';
		}, 500);
	}
});



window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



let images = [
  "https://www.fabindia.com/file/general/hp-mb-14sep21-1.jpg",
  "https://www.fabindia.com/file/general/hp-mb-27sep21-4.jpg",
  "https://www.fabindia.com/file/general/hp-mb-27sep21-5.jpg",
];

let container = document.getElementById("mySlideshow");
let interval;

function startSlideshow() {
  //1.
  let counter = 0;
  interval = setInterval(function () {
    container.innerHTML = null;
    if (counter === images.length) {
      counter = 0;
    }
    let img = document.createElement("img");
    img.src = images[counter];
    container.append(img);
    counter = counter + 1;
  }, 3000);
}
startSlideshow();

//  for sign-in pop up
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    }else if(event.target == modal2){
      modal2.style.display = "none";
  }
}

//  for sign-up pop up
var modal2 = document.getElementById("myModal2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];


// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
};


function  go_to_cart() {
  location.href = "cart.html"; 
}
function  go_to_products() {
  location.href = "products.html"; 
}
function  go_to_women() {
  location.href = "women.html"; 
}
function  go_to_men() {
  location.href = "men.html"; 
}

function  go_to_decor() {

  location.href = "decorative.html"; 
}

function signinpage(){
  modal.style.display = "block";
}
function signupppage(){
  modal.style.display = "none";
  modal2.style.display = "block";
}
function already_si(){
  modal2.style.display = "none";
  modal.style.display = "block";
}
  
