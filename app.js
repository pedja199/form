// html elements
const name = document.getElementById('firs-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmePassword = document.getElementById('confirme-password');

// button html element
const btn = document.getElementById('btn');

// add click button form
btn.addEventListener('click', validateForm);


// create function validate
function validateForm(e) {
    e.preventDefault()

    //name
    if (name.value.length < 3) {
        name.style.border = '2px solid red';
        document.getElementById('error-name').innerText = 'Pleace fill in the form!'
    } else {
        name.style.border = 'none'
        document.getElementById('error-name').innerText = ''
    }

    //last name
    if (lastName.value.length < 3) {
        lastName.style.border = '2px solid red';
        document.getElementById('error-last').innerText = 'Pleace fill in the form!'
    } else {
        lastName.style.border = 'none'
        document.getElementById('error-last').innerText = '';
    }

    //email
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.value.match(regEmail)) {
        email.style.border = '2px solid red';
        document.getElementById('error-email').innerText = 'Pleace fill in the form!'
    } else {
        email.style.border = 'none'
        document.getElementById('error-email').innerText = '';
    }

    //pass
    let regPass = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
    if (!password.value.match(regPass)) {
        password.style.border = '2px solid red'
        document.getElementById('error-pass').innerText = 'Pleace fill in the form!'
    } else {
        password.style.border = 'none'
        document.getElementById('error-pass').innerText = '';
    }

    //confirmed pass
    if (confirmePassword.value === password.value) {
        confirmePassword.style.border = 'none'
        document.getElementById('error-conPas').innerText = '';
    } else {
        confirmePassword.style.border = '2px solid red'
        document.getElementById('error-conPas').innerText = 'The password must be the same!'
    }

    // valid display
    if (name.value === '' || lastName.value === '' || !email.value.match(regEmail) || !password.value.match(regPass) || confirmePassword.value !== password.value) {
        console.error('FORM INVALID - DISPLA REEOR MESSAGE');
        return
    } else {
        console.log({
            name: name.value,
            last: lastName.value,
            email: email.value,
            pass: password.value
        })
    }
    saveLocalStorage()
    const inputs = document.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.value = '';
    }
    document.getElementById('forma').style.display = 'none';
    displaySuccses()
}

// display succses
function displaySuccses() {
    const displaySuccses = `<h1 class='succses'>Succses!</h1>`;

    document.querySelector('.container-form').innerHTML = displaySuccses;
}


function saveLocalStorage() {

    const person = {
        email: email.value,
        password: password.value
    }
    var user = []
    user.push(localStorage.setItem(user, JSON.stringify(person)));

}
