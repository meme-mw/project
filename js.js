function signUp(){
const name1=document.querySelector("#name").value;
const email=document.querySelector("#email").value;
const pass=document.querySelector("#pass").value;
function hasUpperCase(str) {
    return str !== str.toLowerCase();
}
if(name1.length>3&&hasUpperCase(name1)&&email.includes("@")&&pass.length>4){
  fetch('https://66ea7db455ad32cda47915a6.mockapi.io/exam/users', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify({
        name:name1,
        email:email,
        password:pass
    })
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(user => {
    sessionStorage.setItem("user",user.id);
    window.location.assign("logIn.html");
    // do something with the new task
  }).catch(error => {
    // handle error
  })}else{
    alert("user name must be more tha3 letters and includes 1 capital letter and password must bemore than 4 number and enter correct email");
  }

}
document.querySelector("#signUp").addEventListener('click',signUp);