// button 
const dontn = give('donation');
const histry = give('history');

// section 
const hiddenHistry = give('hhstry');
const card = give('card');

// noyakhali donation 
const myblnc = give('balance');
const nJoma = give('noyakhali-joma');
const nbtn = give('noyakhali-btn');
const nInput = give('noyakhali-input');

// modal
const modal = give('my_modal_5');

// place
const place = give('noyakhali')

let amount = parseFloat(myblnc.innerText);
console.log(typeof amount);

nbtn.addEventListener('click', function () {

    let noyakhaliAmount = parseFloat(nJoma.innerText);
    const donationAmount = parseFloat(nInput.value);
    if (isNaN(donationAmount) === true) {
        alert('Invalid Input');
    }
    else if (donationAmount < 0) {
        alert('Negetive Amount');
    }
    else if (donationAmount > amount) {
        alert('Insufficient Balance');
    }
    else {
        noyakhaliAmount = noyakhaliAmount + donationAmount;
        nJoma.innerText = noyakhaliAmount;

        const newBalance = amount - donationAmount;
        myblnc.innerText = newBalance;

        modal.showModal();
        const items = document.createElement('div');
        items.className = 'border rounded-2xl bg-white p-2';
        items.innerHTML = `
        <h2 class="font-bold text-lg">
     ${donationAmount}Taka is Donated for ${place.innerText} 
</h2>
<p>Date : ${new Date()} </p>
        `
    hiddenHistry.appendChild(items);

    
    
    }
    nInput.value = '';
})









histry.addEventListener('click', function () {
    histry.classList.add('font-bold', 'bg-green-200');
    dontn.classList.remove('font-bold', 'bg-green-200');
    card.classList.add('hidden');
    hiddenHistry.classList.remove('hidden');

})

dontn.addEventListener('click', function () {
    dontn.classList.add('font-bold', 'bg-green-200');
    histry.classList.remove('font-bold', 'bg-green-200');
    card.classList.remove('hidden');
    hiddenHistry.classList.add('hidden');
})

