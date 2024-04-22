import { Posts } from "./class/Posts.js"
import {User} from "./class/User.js"


const posts = new Posts()
const user = new User()


const posts_div =document.querySelector('div#posts')
const add_new_post_link = document.querySelector('a#add-new-post-link')
//const message_input = document.querySelector('input')

if(user.isLoggedIn) {
    add_new_post_link.style.display= "block"
}

const render_post_article = (post) => {
    const post_article = posts_div.appendChild(document.createElement('article'))
    post_article.setAttribute('data-key',post.id.toString())
    render_post_p(post_article,post)
}

const render_post_p = (parent_element,post) => {
    const post_p = parent_element.appendChild(document.createElement('p'))
    post_p.innerHTML = post.message
    render_post_span(post_p,post)
}

const render_post_span = (parent_element,post) => {
    const post_span = parent_element.appendChild(document.createElement('span'))
    render_post_link(post_span,post)
}

const render_post_link = (parent_element,post) => {
    const post_a = parent_element.appendChild(document.createElement('a'))
    post_a.innerHTML = "delete"
    post_a.addEventListener('click', (event) => {
        posts.removePost(post.id).then(remove_id => {
            
        const article_to_remove = document.querySelector(`[data-key='${remove_id}']`)
          
            
            if(article_to_remove){
                posts_div.removeChild(article_to_remove)
            } 
        }).catch(error => {
            alert(error)
        })
    })
}

const getPosts = () => {
    posts.getPosts().then(messages => {
        messages.forEach(node => {
           render_post_article(node)
        });
    }).catch(error => {
        alert(error)
    })
}
/*
message_input.addEventListener('keypress',(event) =>{
    if(event.key === "Enter"){
        event.preventDefault()
        const message_text = message_input.value.trim()
        if(message_text !== ' '){
            posts.addPost(message_text).then(post=> {
                render_post_article(post)
                message_input.value = ''
                message_input.focus()
            })
        }
    }
})*/

getPosts()