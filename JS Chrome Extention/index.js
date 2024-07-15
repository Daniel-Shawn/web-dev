let inputEl = document.getElementById('input-el')
let ulEl = document.getElementById('ul-el')
let saveBtn = document.getElementById('save-btn')
let saveTabBtn = document.getElementById('save-tab-btn')
let clearBtn = document.getElementById('clear-btn')



defaultLeads = [
    'Welcome', 
    'Building a chrome extention!', 
    'You can delete this by inputing and saving',
    'Or pressing the icons'
]
myLeads = []


function renderList(array_param){
    if (localStorage.getItem(`${array_param}`)){
        array_param = JSON.parse(localStorage.getItem(`${array_param}`))
    }

    ulEl.textContent = ''
    let listItems = ''

    for (i=0; i<array_param.length; i++){
        listItems += `<li>
                        <a href="${array_param[i]}" target="_blank" class="notes">${array_param[i]}</a>

                        <i data-id="${array_param.indexOf(array_param[i])}" class="fa-solid fa-trash delete-btn"></i>
                        
                    </li>`
    }
    ulEl.innerHTML = listItems 

    let deleteBtns = document.querySelectorAll('.delete-btn')
    deleteBtns.forEach(function(eachDelelteBtn){
        eachDelelteBtn.addEventListener('click', function(e){
            index = e.target.getAttribute('data-id')
            array_param.splice(index,1)
            localStorage.setItem(array_param, JSON.stringify(array_param))
            inputEl.value = ''
            renderList(array_param)
        })
    })
}

if (localStorage.getItem('myLeads')){
    renderList(JSON.parse(localStorage.getItem('myLeads')))
}
else{
    renderList(defaultLeads)
}


saveTabBtn.addEventListener('click', function(){
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        inputEl.value = ''
        renderList(myLeads)
    });
})


saveBtn.addEventListener('click', function(){
    value = inputEl.value
    if (value == ''){
        setTimeout(function(){
            inputEl.setAttribute('placeholder', 'PLEASE TYPE SOMETHING!')
        }, 2000)
    }
    else{
        myLeads.push(value)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        inputEl.value = ''
        renderList(myLeads)
    }
})

clearBtn.addEventListener('click', function(){
    localStorage.removeItem('myLeads')
    myLeads = []
    inputEl.value = ''
    renderList(defaultLeads)
})




