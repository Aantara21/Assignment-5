// button 
const dontn = give('donation');
const histry = give('history');

// section 
const hiddenHistry = give('hhstry');
const card = give('card');

// noyakhali donation 
const myblnc = give('balance');
const nJoma = give ('noyakhali-joma');
const nbtn = give ('noyakhali-btn');
const nInput = give ('noyakhali-input');

let amount = parseFloat (myblnc.innerText) ;
console.log (typeof amount);

nbtn.addEventListener('click', function(){
    let noyabtnf = parseFloat (nJoma.innerText);
const noyainputbtn = parseFloat(nInput.value);
    noyabtnf = noyabtnf + noyainputbtn  ;
})



histry.addEventListener('click', function () {
    histry.classList.add('font-bold','bg-green-200');
    dontn.classList.remove('font-bold', 'bg-green-200');
    card.classList.add('hidden');
    hiddenHistry.classList.remove('hidden');

})

dontn.addEventListener('click', function () {
    dontn.classList.add('font-bold','bg-green-200');
    histry.classList.remove('font-bold', 'bg-green-200');
    card.classList.remove('hidden');
    hiddenHistry.classList.add ('hidden');
})

