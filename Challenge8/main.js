let inputText = document.getElementById('input')
let click = document.getElementById('ici')

click.addEventListener('click', () =>{
    if(inputText.value.length >= 5){
        alert('merci value +5')
    }else{
        alert('-5')
    }
})