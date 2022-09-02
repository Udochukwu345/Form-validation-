const form= document.getElementById('form');
const fullName=document.getElementById('.fullName');
const Gmail=document.getElementById('Gmail');
const Password=document.getElementById('Password ');
const Password2=document.getElementById('Password2');
const messages=[];
const errorElement =document.getElementById('error');
function showError(input){
const formcontrol=input.parentElement;
formcontrol.className='form-control error';


}

form.addEventListener('submit',function(e) {
    if(fullName.value ==='' ||fullName.value==null){
        setErrorFor('fullName is required ');
        messages.push('fullName is required ');
        }
        if(Password.value.length <= 6) {
            messages.push('Password must be longer than 6 characters')
        }
        if(messages.length >0){
            errorElement.innerText =messages.join(',')
            e.preventDefault();    
        }


console.log('clicked');

});