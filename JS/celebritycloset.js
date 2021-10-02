let celebrityimage = [
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

  let parentcelebrity = document.getElementById('partcelebrityslider');

    function runslidercelebrity(){
    celebrityimage.forEach(function(celebrityslide){ 
        console.log(celebrityslide);
       
        let celebritydiv = document.createElement('div');

        let celebrityimg = document.createElement('img');
        celebrityimg.src=celebrityslide.img;

        let celebrityproduct_content = document.createElement('p');
        celebrityproduct_content.textContent = celebrityslide.price;

        let celebrityproduct_name = document.createElement('p');
        celebrityproduct_name.textContent = celebrityslide.name;


        celebritydiv.append(celebrityimg,celebrityproduct_name,celebrityproduct_content); //HTML Element
        parentcelebrity.append(celebritydiv);//HTML Element
    });
    }
    runslidercelebrity();