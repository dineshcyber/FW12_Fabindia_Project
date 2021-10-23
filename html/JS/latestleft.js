let imageslatest = [
    "https://www.fabindia.com/file/general/wmn-hp-lfts-27sep-2.jpg",
    "https://www.fabindia.com/file/general/hp-latestfr-30jul21-1.jpg",
    "https://www.fabindia.com/file/general/ww-hp-tfts1-1july21.jpg",
    "https://www.fabindia.com/file/general/wmn-hp-lfts-9aug21-1.jpg",
  ];

  let detaillatest = [
      "EXQUISITE HANDCRAFTED STYLES TO GIFT THE SPECIAL WOMEN IN YOUR LIFE",
      "SHOW THE WORLD YOUR OWN #OOTD STYLE WITH CROP TOPS, TUNICS, DRESSES,  JUMPSUITS, PANTS AND CO-ORD SETS.",
      "HIT YOUR FAVOURITE GLAMPING SPOT & UNWIND IN BEST OF OUR KAFTANS, DRESSES, & TOPS",
      "FROM HANDWOVEN SARIS TO EMBROIDERED SUIT SETS,GET READY TO DRESS THE BEST!",
  ];


    let containerlatest=document.getElementById("partleft");
    let intervallatest;

    function startSlideleft(){
        
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
    startSlideleft();