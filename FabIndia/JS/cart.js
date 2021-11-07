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



  
//cart display

var totalamount = 0;
 let cartinfo = JSON.parse(localStorage.getItem('cart'));

function cartshow(){


cartinfo.forEach(function(c){
 totalamount = totalamount + Number(c.cost);
 
 let cimg = document.createElement('img'); 
   cimg.src=c.img;
   
 let naam = document.createElement('p')  
   naam.textContent = "Name:";
   let cname = document.createElement('div');  
   cname.textContent = c.name;
   let csize = document.createElement('div');  csize.setAttribute('id','csize')
   csize.innerText = "Size: "+c.size;
   let divname = document.createElement('div');

   if(c.category === "Decorative"){
    divname.append(naam,cname);
   }else{
    divname.append(naam,cname,csize);
   }
   


   let pricenaam = document.createElement('p');
   pricenaam.textContent = "Price";
   let cprice = document.createElement('div');  
   cprice.innerText = "₹"+c.cost;
   let divprice = document.createElement('div');    divprice.setAttribute('class','itemprice')
   divprice.append(pricenaam,cprice);

   let cpcn = document.createElement('div');  cpcn.setAttribute('class','cpcn');
   cpcn.append(divname,divprice);

   let hrline1 = document.createElement('hr'); hrline1.setAttribute('id','hrlinee')

   let cpcnhr = document.createElement('div'); cpcnhr.setAttribute('id','cpcnhr')
   cpcnhr.append(cpcn,hrline1);

   let removebtn = document.createElement('img');   removebtn.setAttribute('id','remov')
   removebtn.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeBG83sD_SWbEmVhHOJ_6_E3lkr9ivU1Ybug&usqp=CAU";
   removebtn.onclick = function(){
       remove(c);
   }
 
let c_all = document.createElement('div');  c_all.setAttribute('class','c_all')
c_all.append(cimg,cpcnhr);

let divr = document.createElement('div');  divr.setAttribute('id','divr');
divr.append(c_all,removebtn);



let divmain = document.getElementById('cartimage');
divmain.append(divr);


});
}
cartshow();




//order details display

function ordersummary(){
    let summary = document.createElement('p');
summary.innerText = "Order Summary";



let total = document.createElement('p');
total.innerText ="Total Cart Amount:       "+"₹"+totalamount; total.setAttribute('class','total');

let noofitems = document.createElement('p');
noofitems.innerText = "No. of Items:"+ cartinfo.length;  noofitems.setAttribute('class','total');
let hrline2 = document.createElement('hr');
let hrline3 = document.createElement('hr');


let proceedbtn = document.createElement('button');
proceedbtn.innerText = "Proceed to Checkout";

proceedbtn.onclick = function(){
    paymentpage();
}

let odiv = document.getElementById('orderdetail');
odiv.append(summary,hrline2,noofitems,hrline3,total,proceedbtn);
}

ordersummary();




//to remove cart product

function remove(c){

    var n =[]; 

for(var i=0; i<cartinfo.length; i++){
 n.push(cartinfo[i].name);
}

for(var j=0;j<n.length;j++){
    if(n[j] == c.name){
        
        cartinfo.splice(j,1);


        
    }
}
localStorage.setItem('cart',JSON.stringify(cartinfo));



let divmain = document.getElementById('cartimage');
divmain.innerHTML = "";
totalamount = 0;
cartshow();

let odiv = document.getElementById('orderdetail');
odiv.innerHTML = "";

ordersummary();
empty();

}




//to display if cart is empty

function empty(){
    if(JSON.parse(localStorage.getItem('cart')).length == 0 || null || undefined){

        document.getElementById('empty').innerHTML = "Your current shopping cart is empty";
        document.getElementById("orderdetail").innerHTML = "";
        document.getElementById("orderdetail").style.border = 'none';

    }
}

empty();



//to payment page

function paymentpage(){
    window.location.href = "checkout.html"
}