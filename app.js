const theme = document.getElementsByClassName('theme')[0];
const body = document.getElementsByTagName('body')[0]

theme.classList.add('sun')
theme.addEventListener('click', ()=>{
    theme.classList.toggle('moon')
    if(theme.classList.contains('moon'))
    {
        body.classList.add('night')
    
    }
    else{
        body.classList.remove('night')
    }
})