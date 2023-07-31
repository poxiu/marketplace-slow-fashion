import {components} from '../lib/dictionary.js';

export const changeViews = (hash) => {
    const contentElement = document.getElementById('content');
    if (contentElement)
    {contentElement.innerHTML = "";
 
    switch (hash) {
        case '':
        case '#':
        case '#/':
        case '#/home':
            contentElement.appendChild(components.pepito);
            return contentElement.appendChild(components.inicio());
        case '#/signinForm':
            return contentElement.appendChild(components.inicioSesion());
        case '#/signupForm': 
            return contentElement.appendChild(components.registro());
        case '#/logout':
            return contentElement.appendChild(components.logout());
        case '#/perfil':
            return contentElement.appendChild(components.perfil());
   }}
   else {
         return contentElement.appendChild(components.inicio());
   }
    

};