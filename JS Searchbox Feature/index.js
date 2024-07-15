let usernameInput = document.getElementById('usernameInput')

usernameInput.addEventListener('keyup', function(event){
    let username = event.target.value.toLowerCase()
    let allNamesDOMCollection = document.getElementsByClassName('name')

    for (counter=0; counter<allNamesDOMCollection.length; counter++){
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase()

        if (event.target.value != '' && currentName.includes(username)){
            match = true
            allNamesDOMCollection[counter].style.display = 'block'
        }
        else{
            allNamesDOMCollection[counter].style.display = 'none'
        }
    }

})