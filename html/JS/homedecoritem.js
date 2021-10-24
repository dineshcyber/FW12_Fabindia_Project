let homeimageslider = [
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

  let parenthomeslider = document.getElementById('parthomeslider');

    function runsliderhome(){
    homeimageslider.forEach(function(homeslide){ 
        console.log(homeslide);
       
        let homediv = document.createElement('div');

        let homeimg = document.createElement('img');
        homeimg.src=homeslide.img;

        let homeproduct_content = document.createElement('p');
        homeproduct_content.textContent = homeslide.price;

        let homeproduct_name = document.createElement('p');
        homeproduct_name.textContent = homeslide.name;


        homediv.append(homeimg,homeproduct_name,homeproduct_content); //HTML Element
        parenthomeslider.append(homediv);//HTML Element
    });
    }
    runsliderhome();