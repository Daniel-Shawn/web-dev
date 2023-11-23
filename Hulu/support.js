let dot = document.querySelector('.dot')
let menu = document.querySelector('.menu')
let huluBox = document.querySelector('.box')
let button = document.querySelector('.button')
let container = document.querySelector('.container')


dot.addEventListener('click', function() {
    menu.classList.toggle('show')
})


function swirl(){
    container.classList.toggle('active')
}

huluBox.addEventListener('click', function(){
    huluBox.classList.toggle('show')
    button.classList.toggle('pop')
})

document.addEventListener('click', function(e){
    p = e.target
    if (p != menu) and (menu.classList.contains('show'));{
        menu.classList.remove('show')
        huluBox.classList.remove('show')
        button.classList.remove('pop')
    }

    if (p != huluBox) and (huluBox.classList.contains('show'));{
        menu.classList.remove('show')
        huluBox.classList.remove('show')
        button.classList.remove('pop')
    }

    if (p != button) and (button.classList.contains('pop'));{
        menu.classList.remove('show')
        huluBox.classList.remove('show')
        button.classList.remove('pop')
    }

});