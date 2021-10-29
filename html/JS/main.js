//------------------left slide-------------------
const open_btn = document.querySelector('#menu_btn');
const close_btn = document.querySelector('.close-btn');
const popup = document.querySelector('.popup');
const main_popup = document.querySelector('.main-popup');

open_btn.addEventListener('click', () => {
	popup.style.display = 'flex';
	main_popup.style.cssText = 'animation:slide-in .5s ease; animation-fill-mode: forwards;';
});

close_btn.addEventListener('click', () => {
	main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
	setTimeout(() => {
		popup.style.display = 'none';
	}, 500);
});

window.addEventListener('click', (e) => {
	if (e.target == document.querySelector('.popup-overlay')) {
		main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
		setTimeout(() => {
			popup.style.display = 'none';
		}, 500);
	}
});



//------------------left slide-----------------

window.onscroll = function() {myFunction()};


var header = document.getElementById("myHeader");

var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


let images = [
    "https://www.fabindia.com/file/general/hp-mb-14sep21-1.jpg",
    "https://www.fabindia.com/file/general/hp-mb-27sep21-4.jpg",
    "https://www.fabindia.com/file/general/hp-mb-27sep21-5.jpg",
  ];


    let container=document.getElementById("mySlideshow");
    let interval;

    function startSlideshow(){
        //1.
        let counter=0;
        interval = setInterval( function() {
            container.innerHTML = null;
            if(counter === images.length){
                counter=0;
            }
            let img = document.createElement("img");
        img.src=images[counter];
        container.append(img);
        counter = counter+1;
    }, 3000);
    }
    startSlideshow();

//--------------------------------------index---------------------------

//  for sign-in pop up
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    }else if(event.target == modal2){
      modal2.style.display = "none";
  }
}

//  for sign-up pop up
var modal2 = document.getElementById("myModal2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];


// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
};


function  go_to_cart() {
  location.href = "cart.html"; 
}
function  go_to_products() {
  location.href = "products.html"; 
}
function  go_to_women() {
  location.href = "women.html"; 
}
function  go_to_men() {
  location.href = "men.html"; 
}

function  go_to_decor() {

  location.href = "decorative.html"; 
}

function signinpage(){
  modal.style.display = "block";
}
function signupppage(){
  modal.style.display = "none";
  modal2.style.display = "block";
}
function already_si(){
  modal2.style.display = "none";
  modal.style.display = "block";
}

//--------------------------------------index---------------------------


//  trending section

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

  
  
 //----------------START------sign-in and sign up-----------------------------//

 var name_nav = "";
 function sign_in(){
   let s_in_mail = document.getElementById("mail").value;
    console.log('s_in_mail:', s_in_mail);
    if(s_in_mail.length == 0){
     document.getElementById("signin_mail").textContent = "Email Address is Mandatory";
    }else{
     document.getElementById("signin_mail").textContent = "";
    }
 
    let s_in_pass = document.getElementById("password").value;
    console.log('s_in_pass:', s_in_pass);
    if(s_in_pass == 0){
     document.getElementById("signin_pass").textContent = "Password is Mandatory";
    }else{
     document.getElementById("signin_pass").textContent = "";
    }  
    
 
   let all_users =JSON.parse(localStorage.getItem("signup-details"));
     //console.log('all_users mail:', user.signup_mail);
     var count =0;
   all_users.forEach(function(user){
         if((s_in_mail == user.signup_mail) && (s_in_pass == user.signup_pass)){
              count++;
              name_nav = name_nav + user.f_name;
          }
   });
   document.getElementById("note_con").innerText = name_nav;
 
   if(count > 0){
    modal.style.display = "none";
   }else{
    alert("Invalid Login Credentials");  
   }
 }
 
 
 
 function sign_up() {
 
   // *************validation********* //
 
    let f_name = document.getElementById("name").value;
    if(f_name.length == 0){
     document.getElementById("nme_mand").textContent = "First Name is Mandatory";
    }else{
     document.getElementById("nme_mand").textContent = "";
    }
    console.log('f_name:', f_name);
 
    let l_name = document.getElementById("l_name").value;
    if(l_name.length == 0){
     document.getElementById("lnme_mand").textContent = "Last Name is Mandatory";
    }else{
     document.getElementById("lnme_mand").textContent = "";
    }
    console.log('l_name:', l_name)
 
    let contact = document.getElementById("phne_nmbr").value;
    if(contact.length == 0){
     document.getElementById("phne_mand").textContent = "Mobile Number is Mandatory";
    }else if(contact.length < 10){
     document.getElementById("phne_mand").textContent = "Invalid Mobile Number";
    }else{
     document.getElementById("phne_mand").textContent = "";
    }
    console.log('contact:', contact);
 
    let signup_mail = document.getElementById("su_mail").value;
    console.log('signup_mail:', signup_mail);
    if(signup_mail.length == 0){
     document.getElementById("mail_mand").textContent = "Email Address is Mandatory";
    }else{
     document.getElementById("mail_mand").textContent = "";
    }
 
    let signup_pass = document.getElementById("su_pass").value;
    if(signup_pass.length == 0){
     document.getElementById("pass_mand").textContent = "Password is Mandatory";
    }else if(signup_pass.length < 8){
     document.getElementById("pass_mand").textContent = "Password is too weak";
    }else{
     document.getElementById("pass_mand").textContent = "";
    }
    console.log('signup_pass:', signup_pass)
 
    let signup_Cpass = document.getElementById("su_cpass").value;
    if(signup_Cpass.length == 0){
     document.getElementById("cpass_mand").textContent = "Please enter your password again";
    }else if(signup_Cpass !==  signup_pass){
     document.getElementById("cpass_mand").textContent = "Password Mismatch";
    }else{
     document.getElementById("cpass_mand").textContent = "";
    }
    console.log('signup_Cpass:', signup_Cpass)
   
     // *************validation********* //
 
     if(localStorage.getItem("signup-details") === null){
       localStorage.setItem(("signup-details"), JSON.stringify([]));
       }
    if((f_name.length != 0) && (l_name.length != 0) && (contact.length == 10) && (signup_mail.length !=0) && (signup_pass.length >= 8) && (signup_pass == signup_Cpass)){
     let user ={
       f_name,
       l_name,
       contact,
       signup_mail,
       signup_pass,
   };
   
    // get array from localstorage
    let arr=JSON.parse(localStorage.getItem("signup-details"));
    //push new user to array
    arr.push(user); // adding new user
    console.log('arr:', arr);
    localStorage.setItem(("signup-details"), JSON.stringify(arr));
 
    }
 
 }

 //----------------END-----sign-in and sign up-----------------------------//
  // latest left 

  let imageslatest = [
    "https://www.fabindia.com/file/general/wmn-hp-lfts-27sep-2.jpg",
    "https://www.fabindia.com/file/general/hp-latestfr-30jul21-1.jpg",
    "https://www.fabindia.com/file/general/ww-hp-tfts1-1july21.jpg",
    "https://www.fabindia.com/file/general/wmn-hp-lfts-9aug21-1.jpg",
  ];

  let detaillatest = [
      "EXQUISITE HANDCRAFTED STYLES TO GIFT THE SPECIAL WOMEN IN YOUR LIFE",
      "SHOW THE WORLD YOUR OWN #OOTD STYLE WITH CROP TOPS, TUNICS, DRESSES,  JUMPSUITS, PANTS AND CO-ORD SETS.",
      "HIT YOUR FAVOURITE GLAMPING SPOT & UNWIND IN BEST OF OUR KAFTANS, DRESSES, & TOPS",
      "FROM HANDWOVEN SARIS TO EMBROIDERED SUIT SETS,GET READY TO DRESS THE BEST!",
  ];


    let containerlatest=document.getElementById("partleft");
    let intervallatest;

    function startSlideleft(){
        
        let counter=0;
        intervallatest = setInterval( function() {
            containerlatest.innerHTML = null;
            if(counter === images.length){
                counter=0;
            }
            let img = document.createElement("img");

            let detaillatestdiv = document.createElement("p");
            detaillatestdiv.textContent = detaillatest[counter];
        img.src=imageslatest[counter];
        containerlatest.append(img,detaillatestdiv);
        detaillatestdiv.setAttribute("id","styledetaillatest");
        
        counter = counter+1;
    }, 3000);
    }
    startSlideleft();

// latest right

let imageslatestright = [
  "https://www.fabindia.com/file/general/mn-hp-lfts1-21july21.jpg",
  "https://www.fabindia.com/file/general/mn-hp-tfts1-1july21.jpg",
  "https://www.fabindia.com/file/general/mn-hp-lfts-9aug21-1.jpg",
  "https://www.fabindia.com/file/general/mn-hp-lfts-27sep-2.jpg",
];

let detaillatestright = [
    "GET IN BACK TO WORK MODE WITH A RANGE OF SHIRTS MADE WITH FINEST QUALITY FABRICS",
    "AWAY FROM THE DAILY WHIRL OF ACTIVITIES, GIVE YOURSELF A BREAK & GET COMFORTABLE IN OUR KURTAS & SHIRTS",
    "REJUVENATE YOUR FESTIVE WARDROBE WITH OUR MUST-HAVE KURTAS, SHIRTS, NEHRU JACKETS FOR YOU",
    "Unique festive finds to surprise the men in your life",
];


  let containerlatestright=document.getElementById("partright");
  let intervallatestright;

  function startSlideright(){
      
      let counter=0;
      intervallatestright = setInterval( function() {
          containerlatestright.innerHTML = null;
          if(counter === images.length){
              counter=0;
          }
          let img = document.createElement("img");

          let detaillatestrightdiv = document.createElement("p");
          detaillatestrightdiv.textContent = detaillatestright[counter];
      img.src=imageslatestright[counter];
      containerlatestright.append(img,detaillatestrightdiv);
      detaillatestrightdiv.setAttribute("id","styledetaillatestright");
      
      counter = counter+1;
  }, 3000);
  }
  startSlideright();

  // latest left slider  

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

    // latest right slider   

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
  
      // home decore

      let imagesdecor = [
        "https://www.fabindia.com/file/general/hp-hdf-28sep21-1.jpg",
        "https://www.fabindia.com/file/general/hp-hld-30jul21-2.jpg",
        "https://www.fabindia.com/file/general/hp-hdf-27sep21-1.jpg",
      ];
    
    
        let containerdecor=document.getElementById("mySlideshowdecor");
        let intervaldecor;
    
        function decorSlideshow(){
            //1.
            let counter=0;
            intervaldecor = setInterval( function() {
                containerdecor.innerHTML = null;
                if(counter === imagesdecor.length){
                    counter=0;
                }
                let imgdecor = document.createElement("img");
            imgdecor.src=imagesdecor[counter];
            containerdecor.append(imgdecor);
            counter = counter+1;
        }, 3000);
        }
        decorSlideshow();



        // home decoreitem

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


// celebrity closet

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


  // suggested section

  let suggestedimage = [
    {
      name: "COTTON SILK EMBROIDERY GOTTAPATTI DUPATTA",
     price:"Rs. 3,990.00",
      img: "https://www.fabindia.com/file/general/hp-sfu1-13aug21.jpg",
    },
    {
        name: "COTTON SLUB PRINTED TOP",
        price:"Rs. 690.00",
        img: "https://www.fabindia.com/file/general/hp-sfu2-13aug21.jpg",
      },
      {
        name: "VISCOSE TUSSAR KOSI NEHRU JACKET",
        price:"Rs. 2,890.00",
        img: "https://www.fabindia.com/file/general/hp-sfu3-13aug21.jpg",
      },
      {
        name: "FLOWER POWER COTTON SLUB CUSHION COVER",
        price:"Rs. 690.00",
        img: "https://www.fabindia.com/file/general/hp-sfu4-13aug21.jpg",
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


// fabedit section

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