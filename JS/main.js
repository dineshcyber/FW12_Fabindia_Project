
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
    "https://www.fabindia.com/file/general/hp-mb-27sep21-2.jpg"
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



