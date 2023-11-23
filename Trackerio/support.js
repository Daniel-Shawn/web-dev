let date_part = document.querySelector('.date')
let home_btn = document.querySelector('.home-btn')
let heroSection = document.querySelector('.hero')
let mobileMenu = document.querySelector('.mobile-menu')
let menuButton = document.querySelector('.menu')
let closeButton = document.querySelector('.close')
let menuLinks = document.querySelector('.ul')
let faqs = document.querySelectorAll('.faq')


now = new Date().getFullYear()
date_part.innerHTML = 'Copyright ' + now


if (__name__== 'login.html'){
    home_btn.classList.add('show')
}


window.addEventListener('scroll', function(e) {
    yHeight = this.window.scrollY
    
    if (yHeight == 542){
        home_btn.classList.add('show')
    }
})


menuButton.addEventListener('click', function() {
    mobileMenu.classList.add('showing')
})

menuLinks.addEventListener('click', function(e){
    mobileMenu.classList.remove('showing')
})


faqs.forEach(function(faq){
    faq.addEventListener('click', function(e) {
        currentElement = e.currentTarget
        currentElement.classList.toggle('faq-show')
    })
})




