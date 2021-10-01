





//cart display

var totalamount = 0;
 let cartinfo = JSON.parse(localStorage.getItem('cart'));

function cartshow(){


cartinfo.forEach(function(c){
 totalamount = totalamount + Number(c.cost);
 
 let cimg = document.createElement('img'); 
   cimg.src=c.img;
   
 let naam = document.createElement('p')
   naam.textContent = "Name";
   let cname = document.createElement('div');
   cname.textContent = c.name;
   let divname = document.createElement('div');
   divname.append(naam,cname);


   let pricenaam = document.createElement('p');
   pricenaam.textContent = "Price";
   let cprice = document.createElement('div');  
   cprice.innerText = "₹"+c.cost;
   let divprice = document.createElement('div');    divprice.setAttribute('class','itemprice')
   divprice.append(pricenaam,cprice);

   let cpcn = document.createElement('div');  cpcn.setAttribute('class','cpcn');
   cpcn.append(divname,divprice);

   let hrline1 = document.createElement('hr');

   let cpcnhr = document.createElement('div');
   cpcnhr.append(cpcn,hrline1);

   let removebtn = document.createElement('img');   removebtn.setAttribute('id','remov')
   removebtn.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeBG83sD_SWbEmVhHOJ_6_E3lkr9ivU1Ybug&usqp=CAU";
   removebtn.onclick = function(){
       remove(c);
   }
 
let c_all = document.createElement('div');  c_all.setAttribute('class','c_all')
c_all.append(cimg,cpcnhr);

let divr = document.createElement('div');  divr.setAttribute('id','divr');
divr.append(c_all,removebtn)

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

let coupon = document.createElement('input');
coupon.type = "text";

let applybtn = document.createElement('button');
applybtn.innerText = "Apply";



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
    if(JSON.parse(localStorage.getItem('cart')).length == 0){

        document.getElementById('empty').innerHTML = "Your current shopping cart is empty";
        document.getElementById("orderdetail").innerHTML = "";

    }
}

empty();