


function getValueById(Id){
   return document.getElementById(Id).value; 
}

function getTextById(Id){
   return document.getElementById(Id).innerText; 
}

// Noakhali Flood

document.getElementById('btn-flood1').addEventListener('click',function(){
    const date = new Date()
    let balance = parseFloat(getTextById('balance'));
    let inputAmount = parseFloat(getValueById('input-flood1'));
    let donatedBalance = parseFloat(getTextById('flood1-balance'));
    const eventName = 'Flood Relif in Noakhali, Bangladesh';
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
        document.getElementById('notification').classList.remove('hidden');
        const historyItem = document.createElement('div');
        historyItem.classList.add('border', 'p-4', 'rounded-xl', 'px-4', 'space-y-2');
        historyItem.innerHTML=` <h3 class='font-bold'> ${inputAmount} is Donated at ${eventName} </h3>
        <p>Date : ${date}</p>`
        document.getElementById('history-section').appendChild(historyItem);
        

    }
})


// Feni Flood
    document.getElementById('btn-flood2').addEventListener('click',function(){
        const date = new Date()
        let balance = parseFloat(getTextById('balance'));
        let inputAmount = parseFloat(getValueById('input-flood2'));
        let donatedBalance = parseFloat(getTextById('flood2-balance'));
        const eventName = 'Flood Relif in Feni, Bangladesh';
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
            document.getElementById('notification').classList.remove('hidden');

            
            const historyItem = document.createElement('div');
            historyItem.classList.add('border', 'p-4', 'rounded-xl', 'px-4', 'space-y-2');
            historyItem.innerHTML=` <h3 class='font-bold'> ${inputAmount} is Donated at ${eventName} </h3>
            <p>Date : ${date}</p>`
            document.getElementById('history-section').appendChild(historyItem);

        }
})


// Quota Protest
        document.getElementById('btn-protest').addEventListener('click',function(){
            const date = new Date()
            let balance = parseFloat(getTextById('balance'));
            let inputAmount = parseFloat(getValueById('input-protest'));
            let donatedBalance = parseFloat(getTextById('protest-balance'));
            const eventName = 'Aid for Injured in the Quota Movement';
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
                document.getElementById('notification').classList.remove('hidden');
               
                const historyItem = document.createElement('div');
                historyItem.classList.add('border', 'p-4', 'rounded-xl', 'px-4', 'space-y-2');
                historyItem.innerHTML=` <h3 class='font-bold'> ${inputAmount} is Donated at ${eventName} </h3>
                <p>Date : ${date}</p>`
                document.getElementById('history-section').appendChild(historyItem);
            }
})


// Donation Success Popup
document.getElementById('popup-close').addEventListener('click',function(){
    document.getElementById('notification').classList.add('hidden')
})

// Blog Section
document.getElementById('blog').addEventListener('click',function(){
    window.location.href = '/blog.html'
})
//Donation History
document.getElementById('history-btn').addEventListener('click',function()
{
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('history-btn').classList.add('bg-[#B4F461]');
    console.log('hello')
    

})



// Back to Donation
document.getElementById('donation-btn').addEventListener('click',function()
{
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('donation-btn').classList.add('bg-[#B4F461]')

    
})

