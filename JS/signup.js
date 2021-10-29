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
   alert("Login successfull");  
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