import {
    addPostCollection, getPosts, onGetPosts,
    deletePost,getPost, updatePost, 
} from '..js/firebase.js';

export const wall = () => {
    const html = `
    <div class="container">
    <div class="row">
        <div class="col md-6 offset-md-3">
            <div class="card">
                <div class="card-body">
                    <h1 class="h4">Que vas a vender?</h1>
                    <form id="task-form">
                        <input type="text" id="task-title" class="form-control mb-3" placeholder="Titulo tarea"
                            autofocus>
                        <label for="description">Descripcion: </label>
                        <textarea id="task-description" rows="3" class="form-control mb-3" placeholder="Descripcion"></textarea>
                        
                        
                        <div class="input-group mb-3">
                            <span class="input-group-text">$</span>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                            <span class="input-group-text">.00</span>
                        </div>


                        <button class="btn btn btn-success" type="submit" id="btn-task-save">Publicar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col md-6 offset-md-3" id="task-container"></div>

    `;
    const divElement = document.createElement('div');
    divElement.innerHTML = html;
    window.location.hash = '#/perfil'
    return divElement;
}
