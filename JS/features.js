
document.getElementById('donation-tab-btn')
        .addEventListener('click', function(event){{
        event.preventDefault();
        showSectionById('donation-section');
                
}})


document.getElementById('history-tab-btn')
        .addEventListener('click' , function(){
        showSectionById('history-section');
})