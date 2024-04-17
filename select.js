var i=0;
document.querySelector('[role="dialog"][aria-label="Invite followers"]').querySelectorAll('div[aria-label]').forEach(async function(e){
    var p = e.parentElement.parentElement.parentElement;
    if(!p.ariaDisabled && p.role=='button' && p.querySelector('i[data-visualcompletion="css-img"') && p.querySelector('circle'))
    {
        i++;
        if(i>50){
            return;
        }
        if(document.querySelector('[role="dialog"][aria-label="Invite followers"]').querySelectorAll('div[aria-label="Remove"]').length>=50)
        {
            return
        }
        p.click();
        
    }
});
