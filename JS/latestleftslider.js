let leftimageslider = [
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

  let parentleftslider = document.getElementById('partleftslider');

    function runsliderleft(){
    leftimageslider.forEach(function(leftslide){ 
        console.log(leftslide);
       
        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src=leftslide.img;

        let product_content = document.createElement('p');
        product_content.textContent = leftslide.price;

        let product_name = document.createElement('p');
        product_name.textContent = leftslide.name;


        div.append(img,product_name,product_content); //HTML Element
        parentleftslider.append(div);//HTML Element
    });
    }
    runsliderleft();

    