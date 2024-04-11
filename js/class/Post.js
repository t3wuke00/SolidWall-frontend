class Post {
    #id 
    #message

    constructor(id,message) {
        this.#id = id
        this.#message = message
    }

    get id(){
        return this.#id
    }

    get message(){
        return this.#message
    }
}

export {Post}