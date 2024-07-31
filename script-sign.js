document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const db = JSON.parse(localStorage.getItem('db'));
        if (db) {
            const user = db.find(user => user.username === username && user.password === password);
            if (user) {
                errorMessage.textContent = 'Login successful!';
                window.location.href = 'food.html';
            }  errorMessage.textContent = 'wrong username or password!'
        } else {
            errorMessage.textContent = 'No user data found.';
        }
    });
});
