


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

