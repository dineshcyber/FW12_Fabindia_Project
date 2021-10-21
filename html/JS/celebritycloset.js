let celebrityimage = [
    {
      name: "COTTON STRIPED SLIM FIT KURTA",
     price:"Rs. 1,390.00",
      img: "https://www.fabindia.com/file/general/celeb-21june21-1.jpg",
    },
    {
        name: "COTTON HAND BLOCK PRINTED SARI",
        price:"Rs. 2,990.00",
        img: "https://www.fabindia.com/file/general/celeb-21june21-2.jpg",
      },
      {
        name: "COTTON CAMBRIC PRINTED BUSHSHIRT",
        price:"Rs. 1,490.00",
        img: "https://www.fabindia.com/file/general/celeb-19june21-1.jpg",
      },
      {
        name: "COTTON PRINTED LONG LENGTH KAFTAN",
        price:"Rs. 2,490.00",
        img: "https://www.fabindia.com/file/general/celeb-19june21-2.jpg",
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