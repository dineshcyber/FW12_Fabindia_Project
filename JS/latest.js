let imageslatest = [
    "https://www.fabindia.com/file/general/hp-wehave-27ep21-10.jpg",
    "https://www.fabindia.com/file/general/hp-wehave-27ep21-11.jpg",
    "https://www.fabindia.com/file/general/hp-wehave-27ep21-13.jpg",
    "https://www.fabindia.com/file/general/hp-wehave-27ep21-14.jpg",
  ];

  let detaillatest = [
      "Smart choices to let your little champs dress to the occasion",
      "In vivid shades & patterns for a home bathed in the festive spirit",
      "To dress up warm, celebratory tablescapes",
      "Finely crafted pieces to delight guests with sherbets, tea or traditional beverages",
  ];


    let containerlatest=document.getElementById("partleft");
    let intervallatest;

    function startSlide(){
        //1.
        let counter=0;
        intervallatest = setInterval( function() {
            containerlatest.innerHTML = null;
            if(counter === images.length){
                counter=0;
            }
            let img = document.createElement("img");

            let detaillatestdiv = document.createElement("p");
            detaillatestdiv.textContent = detaillatest[counter];
        img.src=imageslatest[counter];
        containerlatest.append(img,detaillatestdiv);
        detaillatestdiv.setAttribute("id","styledetaillatest");
        
        counter = counter+1;
    }, 3000);
    }
    startSlide();