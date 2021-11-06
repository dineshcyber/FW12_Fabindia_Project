//Money Workaround - Start
let products = JSON.parse(localStorage.getItem(`cart`));
let total = 0;
products.forEach(function (el) {
  total += Number(el.price.slice(8, el.price.length));
});
let st = document.getElementById(`subTot`);
let tt = document.getElementById(`total`);
let del = document.getElementById(`delivery`);
if (products.length == 0) {
  del.textContent = 0;
} else {
  del.textContent = 150;
}
st.textContent = `Rs ` + total;
tt.textContent = `Rs ` + (total + Number(del.textContent));
//Money Workaround - End

//Shipping-bill panel - Start
let sb = document.getElementById(`ship_bill`);
let sb2 = document.getElementById(`ship_bill2`);
let alert = document.getElementById(`warning`);
sb.onclick = function () {
  if (sb2.style.display !== "none") {
    sb2.style.display = "none";
    alert.style.display = `block`;
  } else {
    sb2.style.display = "block";
    alert.style.display = `none`;
  }
};
//Shipping-bill panel - End

//Make Payment Panel - Start
let form_details = document.getElementById(`form`);
let warning3 = document.getElementById(`warning3`);
let proceed1 = document.getElementById(`proceed`);
let payment = document.getElementById(`pay2`);
proceed1.addEventListener(`click`, function (e) {
  e.preventDefault();
  var validation_counter = 0;
  for (var i = 0; i < form_details.length - 3; i++) {
    if (
      form_details[i].value == `` ||
      form_details[i].value == null ||
      form_details[2].value == `default`
    ) {
      validation_counter++;
    }
  }
  if (validation_counter == 0) {
    if (payment.style.display !== "none") {
      payment.style.display = "none";
    } else {
      sb2.style.display = `none`;
      payment.style.display = "block";
    }
  } else {
    warning3.style.display = `block`;
  }
});
let form_details2 = document.getElementById(`form2`);
let final = document.getElementById(`confirm`);
let warning2 = document.getElementById(`warning2`);
let warning4 = document.getElementById(`warning4`);
let warning5 = document.getElementById(`warning5`);
let warning6 = document.getElementById(`warning6`);
let warning7 = document.getElementById(`warning7`);
final.addEventListener(`click`, function (e) {
  e.preventDefault();
  var validation_counter2 = 0;
  var validation_counter5 = 0;
  var validation_counter6 = 0;
  var validation_counter7 = 0;
  for (var i = 0; i < form_details2.length - 1; i++) {
    if (form_details2[i].value == `` || form_details2[i].value == null) {
      validation_counter2++;
    }
  }

  if (form_details2[0].value.length != 16) {
    validation_counter5++;
  }
  if (form_details2[4].value.length != 3) {
    validation_counter6++;
  }
  if (form_details2[2].value.length != 2) {
    validation_counter7++;
  }
  if (form_details2[3].value.length != 4) {
    validation_counter7++;
  }

  if (
    validation_counter2 == 0 &&
    del.textContent == 150 &&
    validation_counter5 == 0 &&
    validation_counter6 == 0 &&
    validation_counter7 == 0
  ) {
    window.location.href = `thankyou.html`;
    localStorage.removeItem(`cart`);
  } else if (validation_counter2 == 0 && del.textContent == 0) {
    warning4.style.display = `block`;
  } else if (validation_counter2 == 0 && validation_counter5 > 0) {
    warning2.style.display = `none`;
    warning6.style.display = `none`;
    warning7.style.display = `none`;
    warning5.style.display = `block`;
  } else if (validation_counter2 == 0 && validation_counter6 > 0) {
    warning2.style.display = `none`;
    warning5.style.display = `none`;
    warning7.style.display = `none`;
    warning6.style.display = `block`;
  } else if (validation_counter2 == 0 && validation_counter7 > 0) {
    warning2.style.display = `none`;
    warning5.style.display = `none`;
    warning6.style.display = `none`;
    warning7.style.display = `block`;
  } else {
    warning5.style.display = `none`;
    warning6.style.display = `none`;
    warning7.style.display = `none`;
    warning2.style.display = `block`;
  }
});

//Make Payment Panel - End

var logo = document.getElementById(`logo`);
logo.addEventListener(`click`, function () {
  window.location.href = `index.html`;
});

//Current Logged In user - Start
let user = JSON.parse(localStorage.getItem(`signin-details`));
let resetLogin = JSON.parse(localStorage.getItem(`reset`));
let loggedUser = document.getElementById(`loggedUser`);
loggedUser.textContent = user[0].s_in_mail;
//Current Logged In user - End

// Order Summary Start
let mpr_i = document.getElementById(`mpr_i`);
let mpr_q = document.getElementById(`mpr_q`);
var str = ``;
products.forEach(function (el) {
  str += `, ` + el.name;
});
mpr_i.textContent = str.slice(1, str.length) + ` .`;
mpr_q.textContent = `Qty: ` + products.length;
