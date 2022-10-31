// .Generar una lista y un botón en el sitio web y que cada vez que se haga click en el botón se añada un elemento mas a la lista. Utilizar las funciones DOM para crear nuevos nodos y añadirlos a la lista existente.

// .Usar las funciones que se consideren necesarias del DOM para con el sitio web.

// .Elegir un enlace del sitio web y lograr que cuando se pinche sobre el, se muestre completo el contenido de texto. Además, el enlace debe dejar de mostrarse después de pulsarlo por primera vez.

   

let newTaskBtn = document.querySelector('#btn')
let taskList = document.querySelector('.tarea-lista')
let deleteBtn, addBtn;
let link = document.querySelector('#link');
let linkText = document.querySelector('#link-text')


newTaskBtn.onclick = () =>{
    let newNode = document.createElement('div')
    newNode.setAttribute('class', 'tarea')
    newNode.innerHTML = "<button class='tarea-done'>❌</button><input></input><button class='tarea-add'>✔️</button>";
    taskList.appendChild(newNode)

    deleteBtn = document.querySelectorAll('.tarea-done');
    addBtn = document.querySelectorAll('.tarea-add')

    deleteBtn.forEach( (btn) =>{
        btn.onclick = (e) =>{
            console.log('asd')
            let nodeToRemove = e.target.parentElement;
            taskList.removeChild(nodeToRemove)
        }
    })
    addBtn.forEach( (btn) => {
        btn.onclick = (e) => {
            let input = e.target.previousElementSibling;
            let text = input.value;

            let uneditableTask = document.createElement('span')
            uneditableTask.textContent = text;
            uneditableTask.setAttribute('class', 'tarea-set')
            console.log(e.target.parentElement)

            if(text!== ""){
            e.target.parentElement.replaceChild(uneditableTask, input)
            e.target.parentElement.removeChild(e.target)
            }else{
                input.placeholder = "No puedes guardar una tarea vacía"
            }
        
        }
    })
}

link.onclick = () => {
    link.style.display = "none"
    linkText.style.display = "block"
}





