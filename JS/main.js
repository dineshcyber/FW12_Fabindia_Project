

window.onscroll = function() {myFunction()};


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


    let container=document.getElementById("mySlideshow");
    let interval;

    function startSlideshow(){
        //1.
        let counter=0;
        interval = setInterval( function() {
            container.innerHTML = null;
            if(counter === images.length){
                counter=0;
            }
            let img = document.createElement("img");
        img.src=images[counter];
        container.append(img);
        counter = counter+1;
    }, 3000);
    }
    startSlideshow();

//  for sign-in pop up
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("signin");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  // }else if(event.target == modal2){
  //   modal2.style.display = "none";
  }
}

 
