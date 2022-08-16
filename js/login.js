//step-1 add click event in submit btn
document.getElementById('submit-btn').addEventListener('click', function(){
    // seap-2 get user email value 
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    // step-3 get user password value 
    const userPass = document.getElementById('user-pass');
    const pass = userPass.value;
    // step-4 if email and password is same 
    if(email === 'iloveyou@girlfriend.com' && pass === 'iLoveYouSona'){
        window.location.href = 'bank.html';
    }else{
        alert('Please enter valid email and password')
    }
})