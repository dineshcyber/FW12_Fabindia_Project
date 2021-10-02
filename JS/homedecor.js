let imagesdecor = [
    "https://www.fabindia.com/file/general/hp-hdf-28sep21-1.jpg",
    "https://www.fabindia.com/file/general/hp-hld-30jul21-2.jpg",
    "https://www.fabindia.com/file/general/hp-hdf-27sep21-1.jpg",
  ];


    let containerdecor=document.getElementById("mySlideshowdecor");
    let intervaldecor;

    function decorSlideshow(){
        //1.
        let counter=0;
        intervaldecor = setInterval( function() {
            containerdecor.innerHTML = null;
            if(counter === imagesdecor.length){
                counter=0;
            }
            let imgdecor = document.createElement("img");
        imgdecor.src=imagesdecor[counter];
        containerdecor.append(imgdecor);
        counter = counter+1;
    }, 3000);
    }
    decorSlideshow();