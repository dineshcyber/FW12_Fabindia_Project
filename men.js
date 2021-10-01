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





//to display men product

let parent = document.getElementById("products");

let info = JSON.parse(localStorage.getItem('productinfo'));


function showProducts(){

  
info.forEach(function (product){

  if(product.category == "men")  { 
  
      let div = document.createElement('div');
      
      let img = document.createElement('img');
      
      img.src = product.img;
      
      let product_price = document.createElement('p');
      product_price.setAttribute('class','mrpred');
      product_price.textContent = product.price;
  
      let product_name = document.createElement('p');
  
      product_name.textContent = product.name;
  
      let wishlist = document.createElement('img');

      wishlist.src ="file:///C:/Users/hgaut/Documents/GitHub/FW12_Fabindia_Project/image/icon-heart-black.png" ;

      wishlist.setAttribute('id','wishlist');

      div.onclick = function(){
        visible(product);
      }
      
      div.append(wishlist,img, product_name, product_price);
  
      parent.append(div);
   
     
  
  
 } });
       
   }
  
   showProducts();





   //sorting

   function sort1(){

    parent.innerHTML = null; 
    info.forEach(function (product){
    
     if(Number(product.cost <= 1500) && (product.category == "men")){
       
      
          let div = document.createElement('div');
          
          let img = document.createElement('img');
          
          img.src = product.img;
          
          let product_price = document.createElement('p');
         
      
          product_price.textContent = product.price;
      
          let product_name = document.createElement('p');
      
          product_name.textContent = product.name;
      
          let wishlist = document.createElement('img');
    
          wishlist.src ="file:///C:/Users/hgaut/Documents/GitHub/FW12_Fabindia_Project/image/icon-heart-black.png" ;
    
          wishlist.setAttribute('id','wishlist');
    
          div.onclick = function(){
            visible(product);
          }
          
          div.append(wishlist,img, product_name, product_price);
      
          parent.append(div);
          
    }});  
  
  }
  



  //sorting2

  function sort2(){
  
    parent.innerHTML = null; 
    info.forEach(function (product){
    
     if(Number(product.cost > 1500 ) && (product.category == "men")){
      
      
          let div = document.createElement('div');
          
          let img = document.createElement('img');
          
          img.src = product.img;
          
          let product_price = document.createElement('p');
      
          product_price.textContent = product.price;
      
          let product_name = document.createElement('p');
      
          product_name.textContent = product.name;
      
          let wishlist = document.createElement('img');
    
          wishlist.src ="file:///C:/Users/hgaut/Documents/GitHub/FW12_Fabindia_Project/image/icon-heart-black.png" ;
    
          wishlist.setAttribute('id','wishlist');

          div.onclick = function(){
            visible(product);
          }
    
         div.append(wishlist,img, product_name, product_price);
      
          parent.append(div);
       
       }});
   
     }

     if(localStorage.getItem('visible') === null){
      localStorage.setItem('visible',JSON.stringify([]));
    }
       
      function visible(pro){
        let take = JSON.parse(localStorage.getItem('visible'));
    
       take=[];
    
       take.push(pro);
       localStorage.setItem('visible',JSON.stringify(take));
       
       window.location.href = "bigview.html";
    
      }