//step 1 first get inpur ammount and set its deposit window  sum with previus ammount
// added function to deposi button 
document.getElementById('deposit-btn').addEventListener('click', function(){

    const depositAmmount = document.getElementById('deposit-input');
    const ammount = depositAmmount.value;

// get deposit total id and set there value
    const depositField = document.getElementById('deposit-window');
    const depositFieldAmount = depositField.innerText;

// get main total balance id and set a value 
    const mainTotalBalance = document.getElementById('main-total-balance');
    const mainBalance = mainTotalBalance.innerText;

    if(ammount >= 100){
        // sum total deposit Ammount with deposit total window 
    const sumTotalOne = parseInt(ammount) + parseInt(depositField.innerText);
    depositField.innerText = sumTotalOne;

// sum total with main balance window
    const sumTotalTwo = parseInt(ammount) + parseInt(mainTotalBalance.innerText);
    mainTotalBalance.innerText = sumTotalTwo;

// clear the value after clicked deposit 
    depositAmmount.value = '';
    }else{
        alert('Minimum deposit ammount is 100')
    }
})
