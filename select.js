var i=0;
var dialog = document.querySelector('[role="dialog"][aria-label="Invite followers"]');
if(!dialog)
{
    dialog =document.querySelector('[role="dialog"][aria-label="Invite people"]')
}
dialog.querySelectorAll('div[aria-label]').forEach(async function(e){
    var p = e.parentElement.parentElement.parentElement;
    if(!p.ariaDisabled && p.role=='button' && p.querySelector('i[data-visualcompletion="css-img"') && p.querySelector('circle'))
    {
        i++;
        if(i>50){
            return;
        }
        p.click();
        
    }
});
