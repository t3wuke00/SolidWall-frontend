import { Posts } from "./class/Posts"

const posts = new Posts('http://localhost:3001')

const posts_div =document.querySelector('div#posts')

const getPosts = () => {
    posts.getPosts().then(messages => {
        messages.forEach(node => {
            const post_article = posts_div.appendChild(document.createElement('article'))
            const post_p = post_article.appendChild(document.createElement('p'))
            post_p.innerHTML = node.message
        });

    }).catch(error => {
        alert(error)
    })
}

getPosts()

