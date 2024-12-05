let countbtn = document.getElementById("countButton")
let totalCount = document.getElementById("clickCount")

let Count = 0;

countbtn.addEventListener('click', () =>{
    Count++
    totalCount.textContent=Count
})

