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




//to show particular product 

    let big = JSON.parse(localStorage.getItem('visible'));

   function showProducts(){

 
big.forEach(function (product){

      
      let img = document.createElement('img');
      
      img.src = product.img;
      
      let product_price = document.createElement('p');
  
      product_price.textContent = product.price;
  
      let product_name = document.createElement('p');
  
      product_name.textContent = product.name;

      let hrline1 = document.createElement('hr');
      let hrline2 = document.createElement('hr');
      let hrline3 = document.createElement('hr');
      let hrline4= document.createElement('hr');
      let hrline5= document.createElement('hr');
   

      let addtocartbtn = document.createElement('button'); addtocartbtn.setAttribute('id','goto');
      addtocartbtn.innerText = "Add to Cart";

      addtocartbtn.onclick = function(){
          addtocart(product);
      }
      let cartstatus = document.createElement('div');  cartstatus.setAttribute('id','cartstat');
      cartstatus.innerText ="";
         
      let check = document.createElement('p');
      check.innerText = "Check Delivery Service Availability";
     
       let pindiv = document.createElement('div');
      
      let pincode = document.createElement('input');  pincode.setAttribute('id','pinvalue');
      pincode.placeholder = "Enter Pincode";
      

      let checkbtn = document.createElement('button');
      checkbtn.innerText = "Check";
      checkbtn.setAttribute('class','checkbtn');

      checkbtn.onclick = function(){
          shipment();
      }
      

      let pinverify = document.createElement('div'); pinverify.setAttribute('id','pinstatus');
      pinverify.innerText = "";

      let itemdetail = document.createElement('p');
      itemdetail.innerText = "Details";

      let point1= document.createElement('li');  
       point1.innerText = "Comfort Fit";
      let point2= document.createElement('li');       
      point2.innerText = "Dry Clean Only";
      let point3 = document.createElement('li');      
      point3.innerText = "Dobby Weave";
      let point4 = document.createElement('li'); 
      point4.innerText = "Modal Fabric";


      let time = document.createElement('p');
      time.innerText = "Shipping and Dispatching Time";
      let timeinfo = document.createElement('li');
      timeinfo.innerText = "5 Working Days From The Date Of Placing Your Order. Free shipping for all orders above Rs.1000";
    

      time.setAttribute("class","time");
      itemdetail.setAttribute("class","time");
      
let div1 = document.getElementById('imagebox');
div1.append(img);

pindiv.append(pincode , checkbtn,pinverify)

    let div2 = document.getElementById('detailsbox');  
      div2.append(product_name,hrline1,product_price,addtocartbtn,cartstatus,hrline2,check,pindiv,hrline3,itemdetail,point1,point2,point3,point4,hrline4,time,timeinfo,hrline5);
     
  
  
  });
       
   }
   showProducts();
 


   

   //pin verify

var checkpin;
  function shipment(){
       let pinnumber = document.getElementById('pinvalue').value;
       
        let status = document.getElementById('pinstatus');

      
       if(pinnumber.length == 6 && pinnumber!= 000000){
           checkpin=pinnumber;
           document.getElementById('cartstat').innerText ="";
           status.innerHTML = "*Shipment available";
       }else{
        status.innerHTML = "*Please enter valid pincode";
       }
   }



   if(localStorage.getItem('cart') === null){
       localStorage.setItem('cart',JSON.stringify([]));
   }






   //adding product to cart
   
    function addtocart(p){


        if(checkpin != undefined){

        let cartitems = JSON.parse(localStorage.getItem('cart'));
        var unique =[]; 

         for(var i=0; i<cartitems.length; i++){
          unique.push(cartitems[i].name);

     }
            if(!unique.includes(p.name)){

             cartitems.push(p);
         
        localStorage.setItem('cart',JSON.stringify(cartitems));
        document.getElementById('goto').innerHTML = "Go to Cart";

      
        

    }else{
        document.getElementById('goto').innerHTML = "Go to Cart";
        document.getElementById('cartstat').innerText = "*Item exists";

    }
        
    if(document.getElementById('goto').innerHTML=='Go to Cart'){
       
        var cartgoing=document.getElementById('goto');
        cartgoing.addEventListener('click',cartgoingf);
    }
        
    }


    else{
        document.getElementById('cartstat').innerText = "*Please enter pincode";
    }

    }
    

    function cartgoingf(){
        window.location.href='cart.html';
    }