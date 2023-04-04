const password = document.getElementById('password')
const confrirmPassword = document.getElementById('confirm-password')
const signUp = document.getElementById('btn')
const passwordDiv = document.querySelector('#passwords-dont-match')

signUp.addEventListener('click', (e) => {
    if (password.value === confrirmPassword.value) {
        SubmitEvent()
    } else {
        passwordDiv.classList.add('password');
        password.classList.add('error');
        confrirmPassword.classList.add('error');
        e.preventDefault();
        return;
    }
})