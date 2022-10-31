

let posts, postComments;

let rutaPost = 'https://jsonplaceholder.typicode.com/posts'

let section = document.querySelector('section')

let modal = document.querySelector('.modal');



async function getPosts(){
   await fetch(rutaPost)
        .then( res => res.json())
        .then(data => posts = data)
        posts.forEach((post) =>{
            generateCard(post)
        })
}

    function generateCard(post){
        let card = document.createElement('div');
        let title = document.createElement('span');
        let body = document.createElement('p');
        let btn = document.createElement('button');
        let id = document.createElement('span');
        
        title.textContent = post.title;
        body.textContent = post.body;
        id.textContent = post.id;
        btn.textContent = 'VER COMENTARIOS'
        btn.setAttribute('id', 'comment-btn')
        card.setAttribute('class', 'card');
        id.style.display = "none";

        card.appendChild(id);
        card.appendChild(title);
        card.appendChild(body);
        card.appendChild(btn);

        section.appendChild(card);

        btn.onclick = (e) =>{
            modal.style.display = "flex"
            modal.innerHTML= "";
            let postId = e.target.parentElement.firstChild.textContent;
            getComments(postId);
        }
    }



async function getComments(id){
    await fetch('https://jsonplaceholder.typicode.com/posts/' + id +'/comments')
    .then( res => res.json())
    .then(data => postComments = data)
    postComments.forEach( (comments) =>{
        generateComments(comments)
    })
}

    function generateComments(comments){
        let card = document.createElement('div')
        card.setAttribute("class", 'modal-comentario')
        let email = document.createElement('span')
        let comentario = document.createElement('p')

        email.textContent = comments.email;
        comentario.textContent = comments.body
        console.log(comentario)
        card.appendChild(email);
        card.appendChild(comentario);

        modal.appendChild(card)

    }

    getPosts();

    // setTimeout(()=>{
    //     let btnComment = document.querySelectorAll('#comment-btn');
    //     btnComment.forEach((btn) => {
    //         btn.onclick = (e) =>{
    //             modal.style.display = "flex"
    //             modal.innerHTML= "";
    //             let postId = e.target.parentElement.firstChild.textContent;
    //             getComments(postId);
    //         }
    //     })
    // }, 2500)