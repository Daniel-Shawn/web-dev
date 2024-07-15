let count = 0
let countEl = document.getElementById('count-el')
let incrementBtn = document.getElementById('increment-btn')
let saveBtn = document.getElementById('save-btn')
let reduceBtn = document.getElementById('reduce-btn')
let saveEl = document.getElementById('save-el')


function saveFunc(){
    saveEl.innerHTML += count + '- '
    count = 0
    countEl.innerHTML = count
}


function increment(){
    count += 1
    countEl.innerHTML = count
}


function reducing(){
    if (count >= 1){
        count -= 1
        countEl.innerHTML = count
    }
}



incrementBtn.addEventListener('click', increment)
reduceBtn.addEventListener('click', reducing)
saveBtn.addEventListener('click', saveFunc)

