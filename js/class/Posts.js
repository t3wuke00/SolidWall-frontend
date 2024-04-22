import { BACKEND_URL } from "../config.js";
import { Post } from "./Post.js";



class Posts{
    #posts = []

    getPosts = () => {
        return new Promise (async(resolve,reject) => {
            fetch(BACKEND_URL)
        .then(response => response.json())
        .then(json => {
       this.#readJson(json)
       resolve(this.#posts)
    }),(error) => {
        reject(error)
    }
        })
    }

    async addPost(formData,token) {
        console.log(formData)
        const response = await fetch(BACKEND_URL + '/new',{
          method: 'post',
          headers: {'Content-Type':'application/json'},
          //headers: {Authorization: token},
          body: formData
        })
    
        if (response.ok === true) {
          const json = await response.json()
          return this.#addToArray(json.id,json.message)
        } else {
          throw response.statusText
        }
      }

    removePost = (id) => {
        return new Promise(async(resolve, reject) => {
            fetch(BACKEND_URL+ '/delete/'+id,{
                method: 'delete'
            })
            .then(response => response.json())
            .then(json => {
                this.#removeFromArray()
                resolve(id)
            }),(error => {
                reject(error)
            })
        })
    }
    
    #readJson = (json) => {
        json.forEach(node => {
            const post = new Post(node.id,node.message)
            this.#posts.push(post)
        });
    }

    #addToArray = (id,message_text) => {
        const post = new Post(id,message_text)
        this.#posts.push(post)
        return post
    }

    #removeFromArray = (id) => {
        const arrayWithoutRemooved = this.#posts.filter(post => post.id !== id)
        this.#posts = arrayWithoutRemooved
    }
}

export {Posts}