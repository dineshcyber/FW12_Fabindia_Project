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
         }
  });
  if(count > 0){
   alert("Login successfull");  
     
   if(localStorage.getItem("signin-details") === null){
    localStorage.setItem(("signin-details"), JSON.stringify([]));
    }
    let signin_user ={
      s_in_mail,
      s_in_pass,
  };
  var counter=0;
  let signin_arr=JSON.parse(localStorage.getItem("signin-details"));
  signin_arr.forEach(function(user){
      if((s_in_mail == user.s_in_mail) && (s_in_pass == user.s_in_pass)){
        counter++
      }
  });
  if(counter == 0){
    signin_arr.push(signin_user); // adding new user
    console.log('signin_arr:', signin_arr)
    localStorage.setItem(("signin-details"), JSON.stringify(signin_arr));
    location.href = "index.html"; 
  }

 
  }else{
   alert("Invalid Login Credentials");  
  }
  
 
}

// for sign up-pop up

var item = document.getElementById("removable");
var conti = document.getElementById("workspace");


function sign_up() {
  conti.removeChild(item);
  document.getElementById("change_me").textContent = "Sign Up";
  conti.style.height = "600px";

  let changed_to_signup = document.createElement("div");
  changed_to_signup.style.height = "460px";

  let div1 = document.createElement("div");
  div1.textContent = "First Name:*";

  let div2 = document.createElement("div");
  let inp1 = document.createElement("input");
  inp1.setAttribute("id", "first_name");
  inp1.setAttribute(
    "style",
    "width: 95%; border: 1px solid #cccccc; border-radius: 4px; padding: 8px; background-color: #f4f2e5;"
  );
  let name_mandatory = document.createElement("div");
 name_mandatory.setAttribute("id", "nme_mand");
 name_mandatory.textContent = "";
 div2.append(inp1, name_mandatory);

  let div3 = document.createElement("div");
  div3.textContent = "Last Name:*";

  let div4 = document.createElement("div");
  let inp2 = document.createElement("input");
  inp2.setAttribute("id", "last_name");
  inp2.setAttribute(
    "style",
    "width: 95%; border: 1px solid #cccccc; border-radius: 4px; padding: 8px; background-color: #f4f2e5;"
  );
   let lname_mandatory = document.createElement("div");
 lname_mandatory.setAttribute("id", "lnme_mand");
 lname_mandatory.textContent = "";
 div4.append(inp2, lname_mandatory);

  let div5 = document.createElement("div");
  div5.textContent = "Mobile Number:*";

  let div6 = document.createElement("div");
  let inp3 = document.createElement("input");
  inp3.placeholder = `10 digits Mobile Number`;
  inp3.setAttribute("id", "phne_number");
  inp3.setAttribute(
    "style",
    "width: 95%; border: 1px solid #cccccc; border-radius: 4px; padding: 8px; background-color: #f4f2e5;"
  );
 let phne_mandatory = document.createElement("div");
 phne_mandatory.setAttribute("id", "phne_mand");
 phne_mandatory.textContent = "";
 div6.append(inp3, phne_mandatory);

  let div7 = document.createElement("div");
  div7.textContent = "Email Address:*";

  let div8 = document.createElement("div");
  let inp4 = document.createElement("input");
  inp4.setAttribute("id", "mail_up");
  inp4.setAttribute(
    "style",
    "width: 95%; border: 1px solid #cccccc; border-radius: 4px; padding: 8px; background-color: #f4f2e5;"
  );
  let mail_mandatory = document.createElement("div");
 mail_mandatory.setAttribute("id", "mail_mand");
 mail_mandatory.textContent = "";
 div8.append(inp4, mail_mandatory);

  let div9 = document.createElement("div");
  div9.textContent = "Password:*";

  let div10 = document.createElement("div");
  let inp5 = document.createElement("input");
  inp5.type = `password`;
  inp5.setAttribute("id", "pass_up");
  inp5.setAttribute(
    "style",
    "width: 95%; border: 1px solid #cccccc; border-radius: 4px; padding: 8px; background-color: #f4f2e5; font-family: 'FontAwesome';"
  );
  inp5.placeholder = `Minimum 8 characters`;
  let pass_mandatory = document.createElement("div");
 pass_mandatory.setAttribute("id", "pass_mand");
 pass_mandatory.textContent = "";
 div10.append(inp5, pass_mandatory);

  let div11 = document.createElement("div");
  div11.textContent = "Confirm your password:*";

  let div12 = document.createElement("div");
  let inp6 = document.createElement("input");
  inp6.type = `password`;
  inp6.setAttribute("id", "password_conf");
  inp6.setAttribute(
    "style",
    "width: 95%; border: 1px solid #cccccc; border-radius: 4px; padding: 8px; background-color: #f4f2e5;font-family: 'FontAwesome';"
  );
 let cpass_mandatory = document.createElement("div");
 cpass_mandatory.setAttribute("id", "cpass_mand");
 cpass_mandatory.textContent = "";
 div12.append(inp6, cpass_mandatory);

  let div13 = document.createElement("div");
  div13.setAttribute("style", " height:15px");
  let div14 = document.createElement("div");
  div14.setAttribute("style", "font-size:13px; height:15px");
  div14.textContent = "I wish to receive the newsletter.";

  let div15 = document.createElement("div");
  div15.setAttribute("style", "font-size:12px; height:20px");
  let div16 = document.createElement("div");
  div16.setAttribute("style", " height:13px");
  let sub_btn = document.createElement("button");
  sub_btn.innerText = "Submit";
  sub_btn.setAttribute("id", "signup_submit");
   sub_btn.onclick = function() {
  up_details();
}
  sub_btn.setAttribute(
    "style",
    "margin: 0%; width: 100%;border-radius: 3px; background-color: #EFD06B; font-size:13px; font-weight: 600 "
  );
  div16.append(sub_btn);

  let div17 = document.createElement("div");
  div17.setAttribute("style", "font-size:14px; height:13px");
  let div18 = document.createElement("div");
  div18.setAttribute("style", "font-size:14px; height:13px");
  div18.setAttribute(
    "style",
    "font-size:12px; padding: 15px 80px 15px 0px; font"
  );
  div18.style.fontFamily = "Mulish, sans - serif";
  div18.textContent =
    "By creating an account, you agree to Fabindia's terms of use and privacy policy";

  changed_to_signup.append(
    div1,
    div2,
    div3,
    div4,
    div5,
    div6,
    div7,
    div8,
    div9,
    div10,
    div11,
    div12,
    div13,
    div14,
    div15,
    div16,
    div17,
    div18
  );

  let line = document.createElement("hr");

  let already_user = document.createElement("h2");
  already_user.setAttribute(
    "style",
    "text-align: center; margin-top: 5%; font-size: 16px; font-weight: 600"
  );
  already_user.textContent = "Already Have An Account?";

  let div_Signin = document.createElement("div");
  div_Signin.setAttribute("style", "width:80%; margin:auto; margin-top: 2%");

  let already_btn = document.createElement("button");
  already_btn.setAttribute("id", "already_submit");
  already_btn.innerText = "Sign In";
  already_btn.setAttribute(
    "style",
    "margin: auto;border-radius: 0px; border: 1px solid black; background-color:#F4F2E5; font-size:16px; width: 250px; margin-left: 50px"
  );

  already_btn.onclick = function () {
    back();
  };
  div_Signin.append(already_btn);

  conti.append(changed_to_signup, line, already_user, div_Signin);
}
function back() {
  modal.style.display = "none";
  location.href = "index.html"; 
}


function up_details() {

  // *************validation********* //

   let f_name = document.getElementById("first_name").value;
   if(f_name.length == 0){
    document.getElementById("nme_mand").textContent = "First Name is Mandatory";
   }else{
    document.getElementById("nme_mand").textContent = "";
   }
   console.log('f_name:', f_name);

   let l_name = document.getElementById("last_name").value;
   if(l_name.length == 0){
    document.getElementById("lnme_mand").textContent = "Last Name is Mandatory";
   }else{
    document.getElementById("lnme_mand").textContent = "";
   }
   console.log('l_name:', l_name)

   let contact = document.getElementById("phne_number").value;
   if(contact.length == 0){
    document.getElementById("phne_mand").textContent = "Mobile Number is Mandatory";
   }else if(contact.length < 10){
    document.getElementById("phne_mand").textContent = "Invalid Mobile Number";
   }else{
    document.getElementById("phne_mand").textContent = "";
   }
   console.log('contact:', contact);

   let signup_mail = document.getElementById("mail_up").value;
   console.log('signup_mail:', signup_mail);
   if(signup_mail.length == 0){
    document.getElementById("mail_mand").textContent = "Email Address is Mandatory";
   }else{
    document.getElementById("mail_mand").textContent = "";
   }

   let signup_pass = document.getElementById("pass_up").value;
   if(signup_pass.length == 0){
    document.getElementById("pass_mand").textContent = "Password is Mandatory";
   }else if(signup_pass.length < 8){
    document.getElementById("pass_mand").textContent = "Password is too weak";
   }else{
    document.getElementById("pass_mand").textContent = "";
   }
   console.log('signup_pass:', signup_pass)

   let signup_Cpass = document.getElementById("password_conf").value;
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
   location.href = "index.html"; 
   }

}