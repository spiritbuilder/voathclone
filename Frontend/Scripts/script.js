
const welcome_body  = document.querySelectorAll('.welcome-body')

// welcome_body.forEach((e)=>{
//     if(){

//     }
// })



// Login Code

const login =  document.getElementById('login')
const register = document.getElementById('register')
const regForm =  document.getElementById('reg-form')
const loginForm =  document.getElementById('login-form')
const footer = document.getElementById('footer')

login.addEventListener('click' , (e)=> {
    e.preventDefault()
    loginForm.style.display = 'block'
    regForm.style.display = 'none'
    loginForm.style.transform = 'translateX(-330px)'
})

register.addEventListener('click' , (e)=> {
    e.preventDefault()
    loginForm.style.display = 'none'
    regForm.style.display = 'block'
})


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

// let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//       document.getElementById("header").style.display = "none";
//     } else {
//       document.getElementById("header").style.top = "block";
//     }
//     prevScrollpos = currentScrollPos;
//   }

// var lastScrollTop;
// navbar = document.getElementById('header');
// window.addEventListener('scroll',function(){
// var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// if(scrollTop > lastScrollTop){
// navbar.style.top='-80px';
// }
// else{
// navbar.style.top='0';
// }
// lastScrollTop = scrollTop;
// });