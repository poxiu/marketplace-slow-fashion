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
                  <div>
                       <h3>${task.title}</h3>
                        <p>${task.description}</p>
                        <button class='btn btn-delete btn-danger' data-id="${doc.id}">Borrar</button>
                        <button class='btn btn-edit btn-success' data-id="${doc.id}">Editar</button>
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
    // console.log(title.value, description.value) 

    // Vamos a crear una condicional para cambiar el status de editar o guardar
    if (!editStatus) {
        //console.log('updating')
        saveTask(title.value, description.value);
    }
    else {
        updateTask(id, {
            title: title.value,
            description: description.value
        } );
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

