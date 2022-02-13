const submitBtn=document.querySelector('.submit-btn');
const naam=document.querySelector('#name');
const email=document.querySelector('#email')
const password = document.querySelector('#password')
const number=document.querySelector('#number')
const tac=document.querySelector('#terms-and-cond')
const notification=document.querySelector('#notification')

submitBtn.addEventListener('click',()=>{   
    if(naam.value.length<3){
        showAlert('name must be 3 letters long')
    }
    else if(!email.value.length){             // ! is boolean which means having value true or false
        showAlert('Enter your email');
    }
    else if(password.value.length<8){
        showAlert('Password should be 8 letter long')

    }
    else if(!Number(number.value)||number.value.length<10){
        showAlert('invalid number , please enter valid one')
    }
    else if(!tac.checked){
        showAlert('you must agree to our terms')
    }
})

const showAlert=(msg)=>{
    let alertBox =document.querySelector('.alert-box')
    let alertMsg=document.querySelector('.alert-msg')
    alertMsg.innerHTML=msg;
    alertBox.classList.add('show')
    setTimeout(()=>{
        alertBox.classList.remove('show')
               },3000);
}