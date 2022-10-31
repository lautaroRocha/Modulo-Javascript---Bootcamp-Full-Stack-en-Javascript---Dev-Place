

let posts;

let postId = 6;

let postComments;

let rutaPost = 'https://jsonplaceholder.typicode.com/posts'

let post = 'https://jsonplaceholder.typicode.com/posts/1'

let comments = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`

let section = document.querySelector('section')

fetch(comments)
.then( res => res.json())
.then(data => postComments = data)

async function getPosts(){
   await fetch(rutaPost)
        .then( res => res.json())
        .then(data => posts = data)
        posts.forEach((post) =>{
            generateCard(post)
        })
}

function generateCard(post){
    let card = document.createElement('div')
    let title = document.createElement('span')
    let body = document.createElement('p')
    let btn = document.createElement('button')
    
    title.textContent = post.title;
    body.textContent = post.body;
    btn.textContent = 'VER COMENTARIOS'
    card.setAttribute('class', 'card');

    card.appendChild(title);
    card.appendChild(body);
    card.appendChild(btn);

    section.appendChild(card);
}