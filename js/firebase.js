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
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        // const firebaseConfig = {
        //   apiKey: "AIzaSyD9_mTe1t_C34mAEqdG3zXsxbX4jSHDkyk",
        //   authDomain: "unidad4-7e24c.firebaseapp.com",
        //   projectId: "unidad4-7e24c",
        //   storageBucket: "unidad4-7e24c.appspot.com",
        //   messagingSenderId: "1059673990918",
        //   appId: "1:1059673990918:web:8096dde83de017d2c7a087",
        //   measurementId: "G-4W89RT0ZLH"
        // };
        
        /*const firebaseConfig = {
          apiKey: "AIzaSyCOnomYvwI_aIh42er9oVH8oEaGi-j6q5M",
          authDomain: "unidad4-e9868.firebaseapp.com",
          projectId: "unidad4-e9868",
          storageBucket: "unidad4-e9868.appspot.com",
          messagingSenderId: "716027473039",
          appId: "1:716027473039:web:d9176296926d58fccd54fa",
          measurementId: "G-4ZF9F3KNEX"
        };*/

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

        export const saveTask = (title, description) => 
          //console.log(title, description);
        addDoc(collection(db, "tareas"), {title, description})

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