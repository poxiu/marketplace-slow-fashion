        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
        import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
        // import { } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
        import { getFirestore,
        addDoc,
        getDocs,
        collection,
        onSnapshot,
        deleteDoc,
        doc,
        getDoc,
        updateDoc
        } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDLATWBUP4UL8MmiBH_B2G-GpCd7fJZjlQ",
    authDomain: "red-social-c2de8.firebaseapp.com",
    projectId: "red-social-c2de8",
    storageBucket: "red-social-c2de8.appspot.com",
    messagingSenderId: "812387927145",
    appId: "1:812387927145:web:e2f926c6ee4ea3c2c84ef8"
  };

        // Initialize Firebase
        export const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        export const auth = getAuth(app);
        
        // Conexion a la base de datos
        export const db = getFirestore();

        export const saveTask = (title, description, price, contact) => 
          //console.log(title, description);
        addDoc(collection(db, "tareas"), {title, description, price, contact})

        // Listar datos
        //export const getTasks = () => console.log('tasks-list');
        export const getTasks = () => getDocs(collection(db, "tareas"))


       // generando la nueva funcion
        export const onGetTasks =  (callback) => onSnapshot(collection(db, "tareas"), callback);

      // export {
       //   onSnapshot,
       //   collection
        //}

        export const deleteTask = (id) => deleteDoc(doc(db,"tareas", id));

        // Se crea una funcion que traiga o que obtenga una tarea individual
        export const getTask = (id) => getDoc(doc(db, "tareas", id))

        // Crear una funcion que actualice una tarea

        export const updateTask = (id, NewFieldsTask) => updateDoc(doc(db, "tareas", id), NewFieldsTask);