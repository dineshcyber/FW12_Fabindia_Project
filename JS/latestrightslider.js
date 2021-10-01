let rightimageslider = [
    {
      name: "BOY'S SETS",
     price:"Rs. 4500",
      img: "https://www.fabindia.com/file/general/hp-wehave-27ep21-10.jpg",
    },
    {
        name: "BED LINEN",
        price:"Rs. 4500",
        img: "https://www.fabindia.com/file/general/hp-wehave-27ep21-11.jpg",
      },
      {
        name: "TABLE LINEN",
        price:"Rs. 4500",
        img: "https://www.fabindia.com/file/general/hp-wehave-27ep21-13.jpg",
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

    