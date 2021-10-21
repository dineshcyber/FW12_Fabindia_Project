let imageslatestright = [
    "https://www.fabindia.com/file/general/mn-hp-lfts1-21july21.jpg",
    "https://www.fabindia.com/file/general/mn-hp-tfts1-1july21.jpg",
    "https://www.fabindia.com/file/general/mn-hp-lfts-9aug21-1.jpg",
    "https://www.fabindia.com/file/general/mn-hp-lfts-27sep-2.jpg",
  ];

  let detaillatestright = [
      "GET IN BACK TO WORK MODE WITH A RANGE OF SHIRTS MADE WITH FINEST QUALITY FABRICS",
      "AWAY FROM THE DAILY WHIRL OF ACTIVITIES, GIVE YOURSELF A BREAK & GET COMFORTABLE IN OUR KURTAS & SHIRTS",
      "REJUVENATE YOUR FESTIVE WARDROBE WITH OUR MUST-HAVE KURTAS, SHIRTS, NEHRU JACKETS FOR YOU",
      "Unique festive finds to surprise the men in your life",
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