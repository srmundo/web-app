let passwordInput = null;
document.getElementById('btn-show-hide').addEventListener('click', e => {
    passwordInput = document.getElementById('password');
    if (e.target.classList.contains('show')) {
        e.target.classList.remove('show');

        passwordInput.type = 'text';
    } else {
        e.target.classList.add('show');
        passwordInput.type = 'password';

    }

});


