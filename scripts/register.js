

const form = document.getElementById('registerForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
let users = JSON.parse(localStorage.getItem('users')) || [];
let hasErrinForm = false

emailInput.addEventListener('input', function () {
    if (users.some(user => user.email === emailInput.value.trim())) {
        emailError.classList.remove('d-none');
        hasErrinForm=true
    } else {
        emailError.classList.add('d-none');
        hasErrinForm=false
    }
});


passwordInput.addEventListener('input', function () {
    const password = passwordInput.value.trim();
    const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;

    if (!passRegex.test(password)) {
        passError.classList.remove('d-none');
        hasErrinForm=true
        passError.innerHTML = `Password must be at least 10 characters <br/>1 uppercase <br/>1 lowercase <br/>1 number <br/>1 special character`;
    } else {
        passError.innerHTML = '';
        hasErrinForm=false
        passError.classList.add('d-none');
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }

    if(hasErrinForm){
        return
    }else{
        users.push({
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value.trim()
        });
        localStorage.setItem('users', JSON.stringify(users));
    
        alert('Registration successful! You can now log in.');
        window.location.href = "login.html";
    }
   
});




function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.getElementById("toggleIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}






















// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     const password = passwordInput.value.trim();
//     const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/
//     let hasErr = false
//     if (!form.checkValidity()) {
//         form.classList.add('was-validated');
//         return;
//     }

 
   

//     let users = JSON.parse(localStorage.getItem('users')) || [];

//     if (users.some(user => user.email === emailInput.value.trim())) {
//         emailError.classList.remove('d-none');
//         hasErr=true
//     } else {
//         emailError.classList.add('d-none');
//     }
 

//     if(!passRegex.test(password)){
//         passError.classList.remove('d-none');
//         passError.innerHTML=`Password must be at least 10 characters <br/>1 uppercase <br/>1 lowercase <br/>1 number,<br/>1 special character`
//         hasErr=true
//     }
//     else{
//         passError.innerHTML=''
//         passError.classList.add('d-none');
//     }
//     if(hasErr) return;

//     users.push({
//         name: nameInput.value.trim(),
//         email: emailInput.value.trim(),
//         password: passwordInput.value.trim()
//     });
//     localStorage.setItem('users', JSON.stringify(users));

//     alert('Registration successful! You can now log in.');
//     window.location.href = "login.html";
// });