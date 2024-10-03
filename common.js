function give(id) {
       const ssss = document.getElementById(id);
       return ssss;
}



function createHistoryElememnt(userInput,name,time) {
       const items = document.createElement('div');
       items.className = 'border rounded-2xl bg-white p-2';
       items.innerHTML = `
        <h2 class="font-bold text-lg">
     ${userInput}Taka is Donated for ${name} 
</h2>
<p>Date : ${time} </p>
        `
        return items;
}

