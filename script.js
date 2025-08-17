let userNameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let modal = document.querySelector('.modal')

function data() {
    let userNameValue = userNameInput.value
    let passwordValue = passwordInput.value

    if (userNameValue.length < 5 || passwordValue.length < 5) {
        // alert('Error')
        modal.style.background = 'rgb(223, 28, 28)'
        modal.innerHTML = 'لطفا دوباره سعی کنید'
        modal.style.display = 'inline'
    } else {
        modal.style.background = 'black'
        modal.innerHTML = 'ورود موفقیت آمیز بود'
        modal.style.display = 'inline'
    }

    setTimeout(function () {
        modal.style.display = 'none'
    }, 3000)
}