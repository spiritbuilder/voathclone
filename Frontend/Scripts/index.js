
let firstName = document.getElementById('firstname')
let email =  document.getElementById('email')
let lastname = document.getElementById('lastname')
let num =  document.getElementById('number')
let password =  document.getElementById('password')


function signUp(){
    fetch('https://voathclone.vercel.app/api/v1/auth/signup', {
        method : 'POST',
        body : JSON.stringify(),
        headers: {'Content-type': 'application/json; charset=UTF-8'
    }
    })
    .then(
        res => res.json()
    )
    .then(data =>
         console.log(data))
    .catch(err => console.log(err))
}

let sign_up = document.getElementById('signUp')



