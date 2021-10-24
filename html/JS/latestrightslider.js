let rightimageslider = [
    {
      name: "VISCOSE TUSSAR PLACKET DETAIL LONG KURTA",
     price:"Rs. 2490.00",
      img: "https://www.fabindia.com/file/general/mw-catcr-11aug21-5.jpg",
    },
    {
        name: "VISCOSE TUSSAR KOSI NEHRU JACKETT",
        price:"Rs. 2890.00",
        img: "https://www.fabindia.com/file/general/mw-catcr-11aug21-8.jpg",
      },
      {
        name: "SILK VISCOSE LONG KURTA",
        price:"Rs. 3899.00",
        img: "https://www.fabindia.com/file/general/mw-catcr-1oct21-4.jpg",
      },
     
  ];

  let parentrightslider = document.getElementById('partrightslider');

    function runsliderright(){
    rightimageslider.forEach(function(rightslide){ 
        console.log(rightslide);
       
        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src=rightslide.img;

        let product_content = document.createElement('p');
        product_content.textContent = rightslide.price;

        let product_name = document.createElement('p');
        product_name.textContent = rightslide.name;


        div.append(img,product_name,product_content); //HTML Element
        parentrightslider.append(div);//HTML Element
    });
    }
    runsliderright();

    