
function getValueById(Id){
   return document.getElementById(Id).value; 
}

function getTextById(Id){
   return document.getElementById(Id).innerText; 
}

// Noakhali Flood

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
})


    document.getElementById('popup-close').addEventListener('click',function(){
        document.getElementById('notification').classList.add('hidden')
    })


    document.getElementById('blog').addEventListener('click',function(){
        window.location.href = '/blog.html'
    })

    document.getElementById('history-btn').addEventListener('click',function()
    {
        document.getElementById('donation-section').classList.add('hidden')
    })

// Feni Flood
    document.getElementById('btn-flood2').addEventListener('click',function(){
        let balance = parseFloat(getTextById('balance'));
        let inputAmount = parseFloat(getValueById('input-flood2'));
        let donatedBalance = parseFloat(getTextById('flood2-balance'))
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
            document.getElementById('flood2-balance').innerText = addedBalance;
            document.getElementById('popup-amount').innerText = inputAmount;
            document.getElementById('notification').classList.remove('hidden')
        }
        })

// Quota Protest
        document.getElementById('btn-protest').addEventListener('click',function(){
            let balance = parseFloat(getTextById('balance'));
            let inputAmount = parseFloat(getValueById('input-protest'));
            let donatedBalance = parseFloat(getTextById('protest-balance'))
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
                document.getElementById('protest-balance').innerText = addedBalance;
                document.getElementById('popup-amount').innerText = inputAmount;
                document.getElementById('notification').classList.remove('hidden')
            }
            })