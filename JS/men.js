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
  window.location.href = "./Pages/women.html";
});
links[3].addEventListener(`click`, function () {
  window.location.href = "./Pages/men.html";
});
links[6].addEventListener(`click`, function () {
  window.location.href = "./Pages/decorative.html";
});
links[1].addEventListener(`click`, function () {
  window.location.href = "./Pages/products.html";
});

//input-bar
var input = document.getElementById(`search`);
var warning = document.getElementById(`warning`);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (input.value == `men` || input.value == `MEN`) {
      window.location.href = "./Pages/men.html";
    } else if (input.value == `women` || input.value == `WOMEN`) {
      window.location.href = "./Pages/women.html";
    } else if (input.value == `decor` || input.value == `DECOR`) {
      window.location.href = "./Pages/decorative.html";
    } else {
      warning.style.display = `block`;
      input.value = null;
    }
  }
});

//to display men product

let parent = document.getElementById("products");

let info = JSON.parse(localStorage.getItem("productinfo"));

function showProducts() {
  info.forEach(function (product) {
    if (product.category == "men") {
      let div = document.createElement("div");

      let img = document.createElement("img");

      img.src = product.img;

      let product_price = document.createElement("p");
      product_price.setAttribute("class", "mrpred");
      product_price.textContent = product.price;

      let product_name = document.createElement("p");

      product_name.textContent = product.name;

      let wishlist = document.createElement("div");

      wishlist.src = "image/icon-heart-black.png";

      wishlist.setAttribute("id", "wishlist");

      div.onclick = function () {
        visible(product);
      };

      div.append(wishlist, img, product_name, product_price);

      parent.append(div);
    }
  });
}

showProducts();

//sorting

function sort1() {
  parent.innerHTML = null;
  info.forEach(function (product) {
    if (Number(product.cost <= 1500) && product.category == "men") {
      let div = document.createElement("div");

      let img = document.createElement("img");

      img.src = product.img;

      let product_price = document.createElement("p");
      product_price.setAttribute("class", "mrpred");

      product_price.textContent = product.price;

      let product_name = document.createElement("p");

      product_name.textContent = product.name;

      let wishlist = document.createElement("div");

      wishlist.src = "image/icon-heart-black.png";

      div.onclick = function () {
        visible(product);
      };

      div.append(wishlist, img, product_name, product_price);

      parent.append(div);
    }
  });
}

//sorting2

function sort2() {
  parent.innerHTML = null;
  info.forEach(function (product) {
    if (Number(product.cost > 1500) && product.category == "men") {
      let div = document.createElement("div");

      let img = document.createElement("img");

      img.src = product.img;

      let product_price = document.createElement("p");
      product_price.setAttribute("class", "mrpred");

      product_price.textContent = product.price;

      let product_name = document.createElement("p");

      product_name.textContent = product.name;

      let wishlist = document.createElement("div");

      wishlist.src = "image/icon-heart-black.png";

      wishlist.setAttribute("id", "wishlist");

      div.onclick = function () {
        visible(product);
      };

      div.append(wishlist, img, product_name, product_price);

      parent.append(div);
    }
  });
}

if (localStorage.getItem("visible") === null) {
  localStorage.setItem("visible", JSON.stringify([]));
}

function visible(pro) {
  let take = JSON.parse(localStorage.getItem("visible"));

  take = [];

  take.push(pro);
  localStorage.setItem("visible", JSON.stringify(take));

  window.location.href = "./Pages/bigview.html";
}

//-----Description and layout sort panel----
var desc_b1 = document.getElementById(`desc-b1`);
var desc_b2 = document.getElementById(`desc-b2`);
var layout = document.getElementById(`products`);
desc_b1.addEventListener(`click`, function () {
  layout.style.gridTemplateColumns = `auto auto auto`;
  desc_b2.style.border = `1px solid gray`;
  desc_b1.style.border = `2px solid black`;
});
desc_b2.addEventListener(`click`, function () {
  layout.style.gridTemplateColumns = `auto auto auto auto`;
  desc_b1.style.border = `1px solid gray`;
  desc_b2.style.border = `2px solid black`;
});
