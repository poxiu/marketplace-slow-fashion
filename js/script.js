import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import {auth} from './firebase.js';
import {loginCheck} from './loginCheck.js';
import { 
        saveTask,
        getTasks,
        onGetTasks,
        deleteTask,
        getTask,
        updateTask,

} from "./firebase.js";
import './signupForm.js';
import './logout.js';
import './signinForm.js';
import './googleLogin.js';


const taskForm = document.getElementById("task-form");
// Llamamos al contenedor de tareas
const taskContainer = document.getElementById("task-container");

// Crear una variable para el cambio de estado
let editStatus = false;

// Crear una variable para el id de la tarea

let id = '';

window.addEventListener("DOMContentLoaded", async () => {
  //getTasks();
   // const querySnapshot = await getTasks();
    onGetTasks((querySnapshot) => {
    
    // Inicializamos nuestro html vacio     
     let html = "";
     //console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
 
     // console.log(doc)
    //console.log(doc.data());
     //console.log(taskContainer);
         const task = doc.data()
    
    // Para ver los idS de cada tarea de los botones
         console.log(doc.id)

             html += `
                  <div class="card card-body pt-2">
                       <h2>${task.title}</h2>
                       <h3>${task.price}</h3>
                        <p>${task.description}</p>
                        <p>${task.contact}</p>
                        <div>
                            <button class='btn btn-danger btn-delete' data-id="${doc.id}"><i class="fa-solid fa-trash-can" style="color: #061228;"></i></button>
                            <button class='btn btn-warning btn-edit' data-id="${doc.id}"><i class="fa-solid fa-pen" style="color: #061228;"></i></button>
                        </div>
                        
                 </div>
                 `;
        });
        taskContainer.innerHTML = html;

    const btnsDelete = document.querySelectorAll('.btn-delete')
    //Probamos los botones
    //console.log(btnsDelete)

    btnsDelete.forEach(btn => {
    btn.addEventListener('click', ({target: {dataset}}) => {
    //console.log('borrando')
    //console.log(e)
    //console.log(dataset.id)

    deleteTask(dataset.id)

    });

});
    const btnsEdit = document.querySelectorAll('.btn-edit')

    btnsEdit.forEach(btn => {
        //console.log(btn)
        btn.addEventListener('click', async(e) => {
        
            e.preventDefault();
        //console.log(e.target.dataset.id)
        const doc = await getTask(e.target.dataset.id)
        //console.log(doc.data())
        const task = doc.data(); 
        taskForm['task-title'].value = task.title;
        taskForm['task-description'].value = task.description;
        taskForm['task-price'].value = task.price;
        taskForm['task-contact'].value = task.contact;
        
        editStatus = true;
        id = doc.id;
        taskForm['btn-task-save'].innerText = 'Actualizar';
        });


});

});

});

taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

   // console.log('enviado')

    const title = taskForm['task-title']
    const description = taskForm['task-description']
    const price = taskForm['task-price']
    const contact = taskForm['task-contact']
    //console.log(title.value, description.value, price.value, contact.value);

    // Vamos a crear una condicional para cambiar el status de editar o guardar
    if (!editStatus) {
        //console.log('updating')
        saveTask(title.value, description.value, price.value, contact.value);
    } else {
        updateTask(id, {
            title: title.value,
            description: description.value,
            price: price.value,
            contact: contact.value
        });
        
        editStatus = false;
        id = "";
        taskForm["btn-task-save"].innerText = "Publicar";
    }

    taskForm.reset();

});

onAuthStateChanged(auth, (user) => {
    if (user) {
        loginCheck(user)
        try {
            console.log("sesión iniciada");
        } catch (error) {
            console.log(error);
        }
    } else {
        loginCheck(user)
    }

});

