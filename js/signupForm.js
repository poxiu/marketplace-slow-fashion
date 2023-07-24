import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"
import { auth } from "./firebase.js"        
import { showMessage } from "./showMessage.js"

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    console.log(email, password);
try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredentials);
    // Mnesaje de Bienvenida
    showMessage('Bienvenido' + ' ' + userCredentials.user.email);

    // cerrar el modal cuando se registre un usuario
    const signupModal = document.querySelector('#signupModal')
    const modal = bootstrap.Modal.getInstance(signupModal).hide()
    // modal.hide()

} catch (error) {
        // console.log(error.message)
        // console.log(error.code)
    if (error.code === 'auth/weak-password') {
        showMessage("password debil", "error")
    } else if (error.code === 'auth/invalid-email') {
        showMessage("email invalido", "error")
    } else if (error.code === 'auth/email-already-in-use') {
        showMessage("ese email ya está usado", "error")
    } else if (error.code){
        showMessage("otro error", "error");
    }
}
});