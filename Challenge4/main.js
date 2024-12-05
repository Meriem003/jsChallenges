var btnClose = document.getElementById('close');
var btnOpen = document.getElementById('open');
var Two = document.getElementById('divTow');

btnOpen.addEventListener('click',()=>{
    divTow.style.display = 'block';
})

btnClose.addEventListener('click', () => {
    divTow.style.display = 'none';
});