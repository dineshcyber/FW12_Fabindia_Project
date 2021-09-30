let data = [
    {
      name: "BOY'S SETS",
     detail:"Smart choices to let your little champs dress to the occasion",
      img: "https://www.fabindia.com/file/general/hp-wehave-27ep21-10.jpg",
    },
    {
        name: "BED LINEN",
       detail:"In vivid shades & patterns for a home bathed in the festive spirit",
        img: "https://www.fabindia.com/file/general/hp-wehave-27ep21-11.jpg",
      },
      {
        name: "TABLE LINEN",
       detail:"To dress up warm, celebratory tablescapes",
        img: "https://www.fabindia.com/file/general/hp-wehave-27ep21-13.jpg",
      },
      {
        name: "DRINKWARE",
       detail:"Finely crafted pieces to delight guests with sherbets, tea or traditional beverages",
        img: "https://www.fabindia.com/file/general/hp-wehave-27ep21-14.jpg",
      },
  ];

  let parent = document.getElementById('slider');

    function runslider(){
    data.forEach(function(slide){ 
        console.log(slide);
       
        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src=slide.img;

        let product_content = document.createElement('p');
        product_content.textContent = slide.detail;

        let product_name = document.createElement('p');
        product_name.textContent = slide.name;


        div.append(img,product_name,product_content); //HTML Element
        parent.append(div);//HTML Element
    });
    }
    runslider();

    
    