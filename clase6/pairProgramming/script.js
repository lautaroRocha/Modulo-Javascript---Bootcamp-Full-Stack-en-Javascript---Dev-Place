

let posts;

let postId = 6;

let postComments;

let rutaPost = 'https://jsonplaceholder.typicode.com/posts'

let post = 'https://jsonplaceholder.typicode.com/posts/1'

let comments = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`

fetch(rutaPost)
    .then( res => res.json())
    .then(data => posts = data)


fetch(comments)
.then( res => res.json())
.then(data => postComments = data)