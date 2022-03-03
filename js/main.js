// let cnfrm = confirm("you must be a College student or +18");

// if (cnfrm === true) {

// }else{
//     document.getElementById("bdy").innerHTML = `
//     <div class="container">
//         <h1 class="text-center" id="under18">
//             <i class="fa-solid fa-exclamation text-danger"></i>
//             <i class="fa-solid fa-exclamation text-danger"></i>
//             <i class="fa-solid fa-exclamation text-danger"></i>
//          <span>You must be a College Student or +18 to access this page </span>
//             <i class="fa-solid fa-exclamation text-danger"></i>
//             <i class="fa-solid fa-exclamation text-danger"></i>
//             <i class="fa-solid fa-exclamation text-danger"></i>
//          </h1>
//     </div>`
// }




let registerBtn = document.getElementById("sign_up");

registerBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
  let emailDom = document.getElementById("email").value;
  let passwordDom = document.getElementById("password").value;

  let l = users.length;
  let userId = (l === 0) ? 0 : users.find((item) => item.id == l).id;
  if (emailDom === "" || passwordDom === "") {
    alert("Please fill in the data");
  } else {
    let user = users.some((item) => item.email == emailDom);
    if (user) {
      alert("This email is already exist");
    } else {
      let newId = ++userId;
      let newUser = {
        id: newId,
        email: emailDom,
        password: passwordDom,
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
    };
  }
}

let loginBtn = document.getElementById("sign-in");

loginBtn.addEventListener("click", login);


function login(e) {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem('users'));
  let emailDom = document.getElementById("login-email").value;
  let passwordDom = document.getElementById("login-password").value;

  if (users) {
    let loger = users.some((item) => item.email === emailDom);
    if (loger) {
      let logger = users.find((item) => item.email === emailDom);
      if (logger.password === passwordDom) {
        setTimeout(() => {
          window.location = "index.html";
        }, 1500);
      } else {
        alert("Please check your password");
      };
    } else {
      alert("Please register first");
    };
  } else {
    alert("Please register first");
  };
}


























// var asidebutton = document.getElementById("aside-button"),
//     asideMmenu  = document.getElementById("aside-menu"),
//     fff = document.getElementById("adell"),   
//     gg = document.getElementById("add");    

// asidebutton.onclick= function(){
//     asideMmenu.classList.toggle("active");
//     fff.classList.toggle("dd");
// }

// gg.onclick= function(){
//     asideMmenu.classList.remove("active");
//     fff.classList.remove("dd");
// }