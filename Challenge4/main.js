var btnClose = document.getElementById('close');
var btnOpen = document.getElementById('open');
var Two = document.getElementById('divTow');
var divOne = document.getElementById('divOne')

btnOpen.addEventListener('click',()=>{
    divTow.style.display = 'block';
    divOne.style.display = 'none'
})

btnClose.addEventListener('click', () => {
    divTow.style.display = 'none';
    divOne.style.display = 'block'
});