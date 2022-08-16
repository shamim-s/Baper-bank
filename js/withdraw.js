//step 2 first get inpur ammount and set its deposit window  minus with previus ammount
document.getElementById('withdraw-btn').addEventListener('click', function(){

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValue = parseInt(withdrawField.value);
    
//get withdraw windoe amount id and value
    const withdrawaWindowTotal = document.getElementById('withdraw-amount');
    const withdrawValue = parseInt(withdrawaWindowTotal.innerText);

    const mainTotalBalanceforMinus = document.getElementById('main-total-balance');
    const mainBalanceMinus = parseInt(mainTotalBalanceforMinus.innerText);

    if( withdrawFieldValue > mainBalanceMinus ){
        alert('Tomar Babar Bank e Eto Taka Nei');
    }else if(withdrawFieldValue < 50){
        alert('Minimum Withdraw Ammount is 50')
    }else{
 //sum withdrwal window amoount + iput ammount
    const sumMinusOne = withdrawFieldValue + withdrawValue;

    withdrawaWindowTotal.innerText = sumMinusOne;
    
//minus from main balance
   const minusSum = mainBalanceMinus - withdrawFieldValue;

   mainTotalBalanceforMinus.innerText = minusSum;

// clear the value after clicked withdraw 
    withdrawField.value = '';
    }
})