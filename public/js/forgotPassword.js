document.getElementById('resetPasswordButton').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    
    if (email) {
        alert('If an account exists with this email, a password reset link will be sent.');
        // Buat Implementasi kirim email nanti
    } else {
        alert('Please enter your email address.');
    }
});
