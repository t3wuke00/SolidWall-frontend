class Post {
    #id 
    #title
    #message
    #date
    #author


    constructor(id,title,message,date,author) {
        this.#id = id
        this.#title = title
        this.#message = message
        this.#date = date
        this.#author = author
    }

    get id(){
        return this.#id
    }

    get title(){
        return this.#title
    }

    get message(){
        return this.#message
    }

    get date(){
        return this.#date
    }

    get formattedDate(){
        const date_from_database = new Date(this.#date)
        const day = date_from_database.getDay()
        const month = date_from_database.getMonth()
        const year = date_from_database.getFullYear()
        return `${day}.${month}.${year}`
    }

    get author(){
        return this.#author
    }
}

export {Post}