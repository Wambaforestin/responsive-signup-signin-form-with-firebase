
// This code is to switch between the sign up and sign in forms

// get the elements

const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')

// add the event listeners

signUp.addEventListener('click', () => {
    // remove the classes
    loginIn.classList.remove('block');
    loginUp.classList.remove('none');

    // add the classes
    loginIn.classList.add('none');
    loginUp.classList.add('block');
});

signIn.addEventListener('click', () => {
    // remove the classes
    loginIn.classList.remove('none');
    loginUp.classList.remove('block');

    // add the classes
    loginIn.classList.add('block');
    loginUp.classList.add('none');
});