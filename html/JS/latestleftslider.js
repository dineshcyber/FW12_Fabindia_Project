let leftimageslider = [
    {
      name: "COTTON SILK PRINTED KURTA SET",
     price:"Rs. 4,599.00",
      img: "https://www.fabindia.com/file/general/wm-cat-1oct21-6.jpg",
    },
    {
        name: "COTTON SILK IKAT LONG KURTA",
        price:"Rs. 4890.00",
        img: "https://www.fabindia.com/file/general/wm-cat-11aug21-3.jpg",
      },
      {
        name: "COTTON SILK MAHESHWARI SARI",
        price:"Rs. 4590.00",
        img: "https://www.fabindia.com/file/general/wm-cat-11aug21-11.jpg",
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

    