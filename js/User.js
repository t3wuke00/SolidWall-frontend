class User {
    #id = undefined
    #email = undefined

    constructor() {

    }

    get Id(){
        return this.#id
    }

    get email() {
        return this.#email
    }

    async login(email,password) {
        const data = JSON.stringify({email:email,password:password})
        const response = await fetch('https://localhost:3001/user/login',{
            method: 'post',
            header: {'Content-Type': 'application/json'},
            body: json
        })
        if (response.ok === true) {
            const json = await response.json()
            console.log(json)
            return json
        }else{
            throw response.statusText
        }
    }

}

export {User}