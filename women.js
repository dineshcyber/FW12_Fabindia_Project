let parent = document.getElementById("products");

let info = JSON.parse(localStorage.getItem('productinfo'));


function showProducts(){

  
info.forEach(function (product){

  if(product.category == "women")  { 
  
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


      
      div.append(wishlist,img, product_name, product_price);
  
      parent.append(div);
   
     
  
  
 } });
       
   }
  
   showProducts();

   function sort1(){

    parent.innerHTML = null; 
    info.forEach(function (product){
    
     if(Number(product.cost <= 1500) && (product.category == "women")){
     
      
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
    
    
          
          div.append(wishlist,img, product_name, product_price);
      
          parent.append(div);
       
         
      
      
    }});
   
     
  
  }
  
  function sort2(){
  
    parent.innerHTML = null; 
    info.forEach(function (product){
    
     if(Number(product.cost > 1500 ) && (product.category == "women")){
      
      
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
    
         div.append(wishlist,img, product_name, product_price);
      
          parent.append(div);
       
       }});
   
     }