
const commentInput = document.getElementById('comment-input');
const addCommentButton = document.getElementById('add-comment');
const commentsList = document.getElementById('comments-list');

//agregar un comentario
function addComment() {
    const commentText = commentInput.value.trim();
    if (commentText === "") {
        alert("El comentario no puede estar vacío.");
        return;
    }

    
    const commentItem = document.createElement('li');
    commentItem.classList.add('comment-item');

    // texto y fecha
    const timestamp = new Date().toLocaleString();
    commentItem.innerHTML = `<span>${commentText} <br> <small>${timestamp}</small></span>`;

    // Botón eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function() {
        commentsList.removeChild(commentItem);
    };

    // agregar a la lista
    commentItem.appendChild(deleteButton);
    commentsList.appendChild(commentItem);

    // Limpiar campo texto
    commentInput.value = "";
}

// agregar un comentario con clic
addCommentButton.addEventListener('click', addComment);

// agregar comentario con Enter
commentInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addComment();
    }
});
