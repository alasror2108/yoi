const form = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');

// Ambil komentar dari LocalStorage
const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
savedComments.forEach(c => addCommentToDOM(c));

form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();
    if(name && comment){
        const newComment = {name, comment, date: new Date().toLocaleString()};
        savedComments.push(newComment);
        localStorage.setItem('comments', JSON.stringify(savedComments));
        addCommentToDOM(newComment);
        form.reset();
    }
});

function addCommentToDOM(comment){
    const div = document.createElement('div');
    div.className = 'comment-item';
    div.innerHTML = `<strong>${comment.name}</strong> <em>${comment.date}</em><p>${comment.comment}</p>`;
    commentsList.appendChild(div);
}