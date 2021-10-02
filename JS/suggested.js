let suggestedimage = [
    {
      name: "IZNAL COTTON PRINTED BED COVER",
     price:"Rs. 8,999.00",
      img: "https://www.fabindia.com/file/general/hdf-car1-1oct21-1.jpg",
    },
    {
        name: "TAANI ETCHED HURRICANE SMALL",
        price:"Rs. 2,999.00",
        img: "https://www.fabindia.com/file/general/hdf-car1-1oct21-2.jpg",
      },
      {
        name: "TRISHNA HANGING T-LITE HOLDER LARGE",
        price:"Rs. 1,490.00",
        img: "https://www.fabindia.com/file/general/hdf-car1-1oct21-6.jpg",
      },
      {
        name: "AGRIM LEAF PLATTER SMALL",
        price:"Rs. 1,099.00",
        img: "https://www.fabindia.com/file/general/hdf-car1-1oct21-10.jpg",
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