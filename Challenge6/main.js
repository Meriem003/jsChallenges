let btnMontre = document.getElementById('btnmontrer')
let divBtn = document.getElementById('divOne')
let divTow = document.getElementById('divTwo')
let btnClose = document.getElementById('closeBtn')

btnMontre.addEventListener('click', () =>{
    divTow.style.display ='block';
    divBtn.style.display ='none';
})

btnClose.addEventListener('click', () =>{
    divTow.style.display ='none';
    divBtn.style.display ='block';
})
