document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === 'admin' && password === 'admin') {
        alert('Login successful!');
        // Redirect to dashboard.html
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials!');
    }
});
