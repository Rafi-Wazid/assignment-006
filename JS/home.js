
document.getElementById('btn-donate')
        .addEventListener('click' , function(event){
      event.preventDefault();
        const addMoney = getInputFieldValueById('input-money');
        

        if(isNaN){
            const balance = textFieldValueById('account-balance');
            const newBalance = balance - addMoney; 
            
            document.getElementById('account-balance').innerText = newBalance;

        }
          else {
                alert('not working bro')
          }  
})