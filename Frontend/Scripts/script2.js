

//Code for checking Weather Condition
let inputval = document.querySelector('#cityinput')
const btn = document.getElementById('add')
let city = document.querySelector('#cityoutput')
let descrip = document.querySelector('#description')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')
let humidity = document.querySelector('#humidity')


let apik = "3e2930a606c1c6880391f32a652b3ff0"

function convertion(val){
    return (val - 273).toFixed(2)
}

    btn.addEventListener('click', function(){

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())
        .then(data => {

            let nameval = data['name']
            let descrip = data['weather']['0']['description']
            let tempature = data['main']['temp']
            let wndspd = data['wind']['speed']
            let humid =  data['main']['humidity']
            city.innerHTML=`Weather Condition of <span>${nameval}</span>`
            temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed: <span>${wndspd} km/h </span>`
            humidity.innerHTML = `Humudity : <span>${humid} </span>` 

        })

//Now the condition must be added that what if you do not input anything in the input box.
        .catch(err => alert('You entered Wrong city name'))
    })
//If you click on the submit button without inputting anythi
