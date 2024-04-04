import { User } from "./user";

const user = User()
const email_input = document.querySelector('#user-email')
const password_input = document.querySelector('#password')

document.querySelector('#login-button').addEventListener('click',() =>{
    event.preventDefault()
    const email = email_input.value
    const password = password_input.value

    user.login(email, password).then(json => {
        alert("Login ok")
        console.log(json)
    }).catch(error => {
        alert(error)
    })
})