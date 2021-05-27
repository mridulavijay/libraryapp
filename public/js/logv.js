let user=document.getElementById("uname");
let password=document.getElementById("pwd");
let pass2=document.getElementById("pwd2");
let error=document.getElementById("error");
let errorp=document.getElementById("errorp");
let errorp1=document.getElementById("errorp1");
let email=document.getElementById("email");
let errore=document.getElementById("errore");
function uvalidate(){

  let regexp=/^(?!.*\.{2})(?=.*[A-Za-z][A-Za-z0-9\-._#]).{4,}$/;
  if(regexp.test(user.value)){
      error.innerText="Username is valid";
      error.style.color="green";
      error.style.backgroundColor="lightcyan";
      return true;
  }
  else{
    error.innerText="Username is invalid";
    error.style.color="red";
    error.style.backgroundColor="lightcyan";
    return false;
  }
}
function evalidate(){

  let regexp=/^(?!.*\.{2})([A-Za-z][A-Za-z0-9\-._#]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})+?$/
  if(regexp.test(email.value)){
      errore.innerText="Email is valid";
      errore.style.color="green";
      errore.style.backgroundColor="lightcyan";
      return true;
  }
  else{
    errore.innerText="Email is invalid";
    errore.style.color="red";
    errore.style.backgroundColor="lightcyan";
    return false;
  }
}
function CheckPassword() 
{ 
let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
let passl=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{0,8}$/;
if(password.value.length<4){
  errorp.innerText="Minimum length is 8 with lowercase,uppercase and a number";
  errorp.style.backgroundColor="lightblue"
  return false;
}
else if(password.value.match(passw)) 
{ 
  errorp.innerHTML="<span style='color:green'><b>Strong</b></span>";
  password.style.border="2px solid green";
  return true;
}
else if(password.value.match(passl))
{ 
  errorp.innerHTML="<span style='color:orange'><b>Medium</b></span>";
  password.style.border="2px solid orange";
  return false;
}
else {
  errorp.innerHTML="<span style='color:red'><b>Weak</b></span>";
  password.style.border="2px solid red";
  return false;
}
}
function logs(){
  let er=uvalidate();
  let pwdr=CheckPassword();
  if(er&&pwdr){
    alert("Login has been successful");
    return true;
  }
  else{
    alert("Username/Password is incorrect");
    return false;
  }
}
function pass_eq(){
  if(pass2.value===password.value){
    errorp1.innerHTML="<span style='color:green'><b>Passwords match!!</b></span>";
    pass2.style.border="2px solid green";
    return true;
  }
  else{
    errorp1.innerHTML="<span style='color:red'><b>Passwords do not match!!</b></span>";
    pass2.style.border="2px solid red";
    return false;
  }
}
function signs(){
  let er=uvalidate();
  let pwdr=CheckPassword();
  let pass2=pass_eq();
  let em=evalidate();
  if(er&&pwdr&&pass2&&em){
    alert("Account has been created");
    return true;
  }
  else{
    alert("Email/Username/Password is incorrect");
    return false;
  }
}