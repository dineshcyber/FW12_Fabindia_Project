let imageslatestright = [
    "https://www.fabindia.com/file/general/hp-wehave-27ep21-10.jpg",
    "https://www.fabindia.com/file/general/hp-wehave-27ep21-11.jpg",
    "https://www.fabindia.com/file/general/hp-wehave-27ep21-13.jpg",
    "https://www.fabindia.com/file/general/hp-wehave-27ep21-14.jpg",
  ];

  let detaillatestright = [
      "Smart choices to let your little champs dress to the occasion",
      "In vivid shades & patterns for a home bathed in the festive spirit",
      "To dress up warm, celebratory tablescapes",
      "Finely crafted pieces to delight guests with sherbets, tea or traditional beverages",
  ];


    let containerlatestright=document.getElementById("partright");
    let intervallatestright;

    function startSlideright(){
        
        let counter=0;
        intervallatestright = setInterval( function() {
            containerlatestright.innerHTML = null;
            if(counter === images.length){
                counter=0;
            }
            let img = document.createElement("img");

            let detaillatestrightdiv = document.createElement("p");
            detaillatestrightdiv.textContent = detaillatestright[counter];
        img.src=imageslatestright[counter];
        containerlatestright.append(img,detaillatestrightdiv);
        detaillatestrightdiv.setAttribute("id","styledetaillatestright");
        
        counter = counter+1;
    }, 3000);
    }
    startSlideright();