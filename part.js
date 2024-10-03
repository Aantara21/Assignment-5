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
    // blog
    const blog = give('blog');

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
            const items = createHistoryElememnt(donationAmount, place.innerText, new Date());
            hiddenHistry.appendChild(items);



        }
        nInput.value = '';
    })


    // 2nd card 
    const secondInput = give('second-input');
    const secondButton = give('second-button');
    const secondTk = give('second-tk');
    const rFeni = give('feni');

    secondButton.addEventListener('click', function () {
        let sectk = parseFloat(secondTk.innerText);
        let secinput = parseFloat(secondInput.value);

        if (isNaN(secinput) === true) {
            alert('Invalid Input');
        }
        else if (secinput < 0) {
            alert('Negetive Amount');
        }
        else if (secinput > amount) {
            alert('Insufficient Balance');
        }
        else {
            sectk = sectk + secinput;
            secondTk.innerText = sectk;

            const newBalance = amount - secinput;
            myblnc.innerText = newBalance;

            modal.showModal();
            const items = createHistoryElememnt(secinput, rFeni.innerText, new Date());
            hiddenHistry.appendChild(items);
        }
        secondInput.value = '';
    })

    // 3rd card 
    const quotainput = give('quota-input');
    const quotaButton = give('quota-button');
    const quotaTk = give('quotaBlnce');
    const hQuota = give('quota-histry');

    quotaButton.addEventListener('click', function () {
        let quotatk = parseFloat(quotaBlnce.innerText);
        let quotaInput = parseFloat(quotainput.value);

        if (isNaN(quotaInput) === true) {
            alert('Invalid Input');
        }
        else if (quotaInput < 0) {
            alert('Negetive Amount');
        }
        else if (quotaInput > amount) {
            alert('Insufficient Balance');
        }
        else {
            quotatk = quotatk + quotaInput;
            quotaTk.innerText = quotatk;

            const newBalance = amount - quotaInput;
            myblnc.innerText = newBalance;

            modal.showModal();
            const items = createHistoryElememnt(quotaInput, hQuota.innerText, new Date());
            hiddenHistry.appendChild(items);
        }
        quotaInput.value = '';
    })

    blog.addEventListener('click', function () {
        document.location.href = 'blog.html';
    })







