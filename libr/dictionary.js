import { home } from '../js/home.js';
import { signin } from '../js/signinForm.js';
import {signup} from '../js/signupForm.js';
import {wall} from '../js/wall.js';
import {logout} from '../js/logout.js';
import { loginCheckelva } from '../js/loginCheck.js';
export const components = {
    inicio: home,
    inicioSesion: signin,
    registro: signup,
    perfil: wall,
    logout: logout,
    pepito: loginCheckelva
};
