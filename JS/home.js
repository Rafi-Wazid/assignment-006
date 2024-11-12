
document.getElementById('donate-btn')
        .addEventListener('click' , function(event){
      event.preventDefault();
        const addMoney = getInputFieldValueById('input-money');
        

        if(!isNaN(addMoney)){
            const balance = textFieldValueById('account-balance');
            const funds = textFieldValueById('total-funds');

            if(addMoney > balance){
                alert('You do not have enough money to donate , please cash in first');
                return;
            }
            const newBalance = balance - addMoney;
            const newFunds =  funds + addMoney;
            document.getElementById('account-balance').innerText = newBalance;
            document.getElementById('total-funds').innerText = newFunds ;

                const div = document.createElement('div');
                const currentDate = new Date().toString();
                div.innerHTML = `
                <div class="flex flex-col space-y-6 items-center">
                <div class="mx-10 border w-full max-w-2xl p-4 space-y-2">
                <h4 class="font-semibold text-gray-700">${addMoney} Taka is Donated for Flood at Noakhali, Bangladesh</h4>
                <p class="text-sm text-gray-500">Date : ${currentDate}</p>
                </div>
                `
                document.getElementById('transaction-container').appendChild(div);

                my_modal_1.showModal();

        }
          else {
                alert('Please enter a valid donation amount.')
          }  
})

