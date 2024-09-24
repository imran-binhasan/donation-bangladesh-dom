
function getValueById(Id){
   return document.getElementById(Id).value;
  
}

function getTextById(Id){
   return document.getElementById(Id).innerText;
   
}
document.getElementById('btn-flood1').addEventListener('click',function(){
    let balanceStr =getTextById('balance')
    let balance = parseFloat(getTextById('balance'));
    let inputAmount = parseFloat(getValueById('input-flood1'));
    let donatedBalance = parseFloat(getTextById('flood1-balance'))
    if(isNaN(inputAmount)){
        alert('Not a number');
        return
    }else if(balance<inputAmount){
            alert ('Insufficient Balance');
            return
        }
    else{
        const newBalance = balance-inputAmount;
        document.getElementById('balance').innerText = newBalance
        const addedBalance = donatedBalance+inputAmount;
        document.getElementById('flood1-balance').innerText = addedBalance;
        document.getElementById('popup-amount').innerText = inputAmount;
        document.getElementById('notification').classList.remove('hidden')
    }
    }
)

    document.getElementById('popup-close').addEventListener('click',function(){
        document.getElementById('notification').classList.add('hidden')
    })

