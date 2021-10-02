let fabeditimage = [
    {
      name: "Sparkle & shine in handcrafted clothing featuring comfortable fabrics for the upcoming festive season",
      img: "https://www.fabindia.com/file/general/fab1-13aug21.jpg",
    },
    {
        name: "Effective beauty ritual for rosy, glowing, festive-ready skin!",
        img: "https://www.fabindia.com/file/general/fab2-13aug21.jpg",
      },
      {
        name: "Comforting home linens to beautify your space for the festivities",

        img: "https://www.fabindia.com/file/general/fab3-13aug21.jpg",
      },
      
  ];

  let parentfabedit = document.getElementById('partfabeditslider');

    function runsliderfabedit(){
        fabeditimage.forEach(function(fabeditslide){ 
        console.log(fabeditslide);
       
        let fabeditdiv = document.createElement('div');

        let fabeditimg = document.createElement('img');
        fabeditimg.src=fabeditslide.img;

        let fabeditproduct_name = document.createElement('p');
        fabeditproduct_name.textContent = fabeditslide.name;


        fabeditdiv.append(fabeditimg,fabeditproduct_name); //HTML Element
        parentfabedit.append(fabeditdiv);//HTML Element
    });
    }
    runsliderfabedit();