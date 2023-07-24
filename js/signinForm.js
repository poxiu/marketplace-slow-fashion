import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector('#login-form');

signInForm.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = signInForm['signin-email'].value;
    const password = signInForm['signin-password'].value;
    try{
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredentials);
        // cerra modal del logeo del usuario
        const modal = bootstrap.Modal.getInstance(signInForm.closest('.modal'));
        modal.hide();
        // Mensaje de Bienvenida
        showMessage('Bienvenido ' + userCredentials.user.email);

    } catch(error) {
        //console.log(error)
        if(error.code === 'auth/wrong-password')
        {
            showMessage('Contraseña incorrecta', 'error')
        }else if (error.code === 'auth/user-not-found'){
            showMessage("Usuario no encontrado", "error")
        }else if (error.code === 'auth/invalid-email'){
            showMessage('correo electronico no valido', 'error')
        } else {
            showMessage('otro tipo de error', 'error')
        }
    }
});