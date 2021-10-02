let suggestedimage = [
    {
      name: "COTTON SILK EMBROIDERY GOTTAPATTI DUPATTA",
     price:"Rs. 3,990.00",
      img: "https://www.fabindia.com/file/general/hp-sfu1-13aug21.jpg",
    },
    {
        name: "COTTON SLUB PRINTED TOP",
        price:"Rs. 690.00",
        img: "https://www.fabindia.com/file/general/hp-sfu2-13aug21.jpg",
      },
      {
        name: "VISCOSE TUSSAR KOSI NEHRU JACKET",
        price:"Rs. 2,890.00",
        img: "https://www.fabindia.com/file/general/hp-sfu3-13aug21.jpg",
      },
      {
        name: "FLOWER POWER COTTON SLUB CUSHION COVER",
        price:"Rs. 690.00",
        img: "https://www.fabindia.com/file/general/hp-sfu4-13aug21.jpg",
      },
  ];

  let parentsuggested = document.getElementById('partsuggestedslider');

    function runslidersuggested(){
        suggestedimage.forEach(function(suggestedslide){ 
        console.log(suggestedslide);
       
        let suggesteddiv = document.createElement('div');

        let suggestedimg = document.createElement('img');
        suggestedimg.src=suggestedslide.img;

        let suggestedproduct_content = document.createElement('p');
        suggestedproduct_content.textContent = suggestedslide.price;

        let suggestedproduct_name = document.createElement('p');
        suggestedproduct_name.textContent = suggestedslide.name;


        suggesteddiv.append(suggestedimg,suggestedproduct_name,suggestedproduct_content); //HTML Element
        parentsuggested.append(suggesteddiv);//HTML Element
    });
    }
    runslidersuggested();