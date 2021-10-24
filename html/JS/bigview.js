//Scroller hider start
window.onscroll = function () {
    myFunction();
  };
  
  var header = document.getElementById("scroller");
  
  var sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  //scroller hider end
  
  //mouseover start
  let links = document.getElementById(`scroller-b`).querySelectorAll(`p`);
  links[2].addEventListener(`click`, function () {
    window.location.href = "women.html";
  });
  links[3].addEventListener(`click`, function () {
    window.location.href = "men.html";
  });
  links[6].addEventListener(`click`, function () {
    window.location.href = "decorative.html";
  });
  links[1].addEventListener(`click`, function () {
    window.location.href = "products.html";
  });
  
  //input-bar
  var input = document.getElementById(`search`);
  var warning = document.getElementById(`warning`);
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      if (input.value == `men` || input.value == `MEN`) {
        window.location.href = "men.html";
      } else if (input.value == `women` || input.value == `WOMEN`) {
        window.location.href = "women.html";
      } else if (input.value == `decor` || input.value == `DECOR`) {
        window.location.href = "decorative.html";
      } else {
        warning.style.display = `block`;
        input.value = null;
      }
    }
  });


  if(localStorage.getItem('cart') === null){
    localStorage.setItem('cart',JSON.stringify([]));
}
//to show particular product 

    let big = JSON.parse(localStorage.getItem('visible'));

   function showProducts(){

 
big.forEach(function (product){

      
      let img = document.createElement('img');
      
      img.src = product.img;
      
      let product_price = document.createElement('p');
  
      product_price.textContent = product.price;
  
      let product_name = document.createElement('p');  product_name.setAttribute('id','itemname')
  
      product_name.textContent = product.name;

      if(product.size != undefined){

        var selectsize = document.createElement('p');  
        selectsize.innerText = "Select Size";

        let size1 = document.createElement('div');  size1.setAttribute('id','s');
        size1.innerText = product.size[0];

        size1.onclick = function(){
          fat = product.size[0];
          //console.log(fat);
          document.getElementById('s').style.backgroundColor = "#e5cc76";
          document.getElementById('m').style.backgroundColor = '#f4f2e5';
          document.getElementById('l').style.backgroundColor = '#f4f2e5';
          document.getElementById('xl').style.backgroundColor = '#f4f2e5';
          document.getElementById('xxl').style.backgroundColor = '#f4f2e5';
         

        }
  
        let size2 = document.createElement('div');  size2.setAttribute('id','m');
        size2.innerText = product.size[1];

        size2.onclick = function(){
          fat = product.size[1];
        
          document.getElementById('s').style.backgroundColor = '#f4f2e5';
          document.getElementById('m').style.backgroundColor = "#e5cc76";
          document.getElementById('l').style.backgroundColor = '#f4f2e5';
          document.getElementById('xl').style.backgroundColor = '#f4f2e5';
          document.getElementById('xxl').style.backgroundColor = '#f4f2e5';
         
        }
  
        let size3 = document.createElement('div');  size3.setAttribute('id','l');
        size3.innerText = product.size[2];

        size3.onclick = function(){
          fat = product.size[2];
          
          document.getElementById('s').style.backgroundColor = '#f4f2e5';
          document.getElementById('m').style.backgroundColor = "#f4f2e5";
          document.getElementById('l').style.backgroundColor = '#e5cc76';
          document.getElementById('xl').style.backgroundColor = '#f4f2e5';
          document.getElementById('xxl').style.backgroundColor = '#f4f2e5';
         
        }
  
        let size4 = document.createElement('div');  size4.setAttribute('id','xl');
        size4.innerText = product.size[3];

        size4.onclick = function(){
          fat = product.size[3];
          
          document.getElementById('s').style.backgroundColor = '#f4f2e5';
          document.getElementById('m').style.backgroundColor = "#f4f2e5";
          document.getElementById('l').style.backgroundColor = '#f4f2e5';
          document.getElementById('xl').style.backgroundColor = '#e5cc76';
          document.getElementById('xxl').style.backgroundColor = '#f4f2e5';
         
        }
  
        let size5 = document.createElement('div');  size5.setAttribute('id','xxl');
        size5.innerText = product.size[4];

        size5.onclick = function(){
          fat = product.size[4];
          
          document.getElementById('s').style.backgroundColor = '#f4f2e5';
          document.getElementById('m').style.backgroundColor = "#f4f2e5";
          document.getElementById('l').style.backgroundColor = '#f4f2e5';
          document.getElementById('xl').style.backgroundColor = '#f4f2e5';
          document.getElementById('xxl').style.backgroundColor = '#e5cc76';
         
          
        }
  
        

        var sizediv = document.createElement('div');  sizediv.setAttribute('id','sizediv')
        sizediv.append(size1,size2,size3,size4,size5);
  
      }
    


      let hrline1 = document.createElement('hr');
      let hrline2 = document.createElement('hr');
      let hrline3 = document.createElement('hr');
      let hrline4= document.createElement('hr');
      let hrline5= document.createElement('hr');
      let hrline6= document.createElement('hr');
   
    
      
      let addtocartbtn = document.createElement('button'); addtocartbtn.setAttribute('id','goto');
      addtocartbtn.innerText = "Add to Cart";

      let cartstatus = document.createElement('div');  cartstatus.setAttribute('id','cartstat');
      cartstatus.innerText ="";

      let cartitems = JSON.parse(localStorage.getItem('cart'));
      var unique =[]; 

      for(var i=0; i<cartitems.length; i++){
       unique.push(cartitems[i].name);
      }

    if( unique.includes(product.name)){

    addtocartbtn.innerText = 'Go to Cart';
    cartstatus.innerText = '*Item exist'
    }
    
  
     


      addtocartbtn.onclick = function(){
          addtocart(product);
      }
        
      let check = document.createElement('p');
      check.innerText = "Check Delivery Service Availability";
     
       let pindiv = document.createElement('div');
      
      let pincode = document.createElement('input');  pincode.setAttribute('id','pinvalue');
      pincode.placeholder = "Enter Pincode";
      pincode.type = "number";
      

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
      let point2= document.createElement('li'); 
      let point3 = document.createElement('li'); 
      let point4 = document.createElement('li'); 

     if(product.category == "Decorative") {
        
      
       hrline6.style.display = "none";

       point1.innerText = "Classic";
            
      point2.innerText = "Multicolour available";
         
      point3.innerText = "Metal";
      
      point4.innerText = "Glazed";
    }

      else{

        point1.innerText = "Comfort Fit";
           
       point2.innerText = "Dry Clean Only";
          
       point3.innerText = "Dobby Weave";
     
       point4.innerText = "Modal Fabric";

      }




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

    if(product.size == undefined){
      div2.append(product_name,hrline1,product_price,addtocartbtn,cartstatus,hrline2,check,pindiv,hrline3,itemdetail,point1,point2,point3,point4,hrline4,time,timeinfo,hrline5);

    }
    else{
      div2.append(product_name,hrline1,selectsize,sizediv,hrline6,product_price,addtocartbtn,cartstatus,hrline2,check,pindiv,hrline3,itemdetail,point1,point2,point3,point4,hrline4,time,timeinfo,hrline5);
     
    }
     
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

   //adding product to cart
   
    function addtocart(p){

    let way = document.getElementById('goto').innerText;
    if(way == 'Go to Cart'){
      window.location.href = "cart.html"
    }

      else{

        if(checkpin != undefined){

        let cartitems = JSON.parse(localStorage.getItem('cart'));
     
             var fit = {};
             fit.name = p.name;
             fit.price = p.price;
             fit.img = p.img;
             fit.category = p.category;
             fit.cost = p.cost;
             fit.size = fat;

             cartitems.push(fit);
         
        localStorage.setItem('cart',JSON.stringify(cartitems));
        document.getElementById('goto').innerHTML = "Go to Cart";    

    }
        
    if(document.getElementById('goto').innerHTML=='Go to Cart'){
       
        var cartgoing=document.getElementById('goto');
        cartgoing.addEventListener('click',cartgoingf);
    }
        
    else{
        document.getElementById('cartstat').innerText = "*Please enter pincode";
        
    }
  }
}
    
    
    

    function cartgoingf(){
        window.location.href='cart.html';
    }

var fat = 'S';

  