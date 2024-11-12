
function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

document.getElementById('donation-tab-btn')
        .addEventListener('click', function(){{
        showSectionById('donation-section');   
                
}})


document.getElementById('history-tab-btn')
        .addEventListener('click' , function(){
        showSectionById('history-section');
})



function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function textFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}



