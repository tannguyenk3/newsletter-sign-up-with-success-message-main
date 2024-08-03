const containerEl = document.getElementById('container')
const leftEl = document.getElementById('left-side')
const rightEl = document.getElementById('right-side')

const userEmail = document.getElementById('user-email')
const invalidEmail = document.getElementById('invalid-email')
const emailInput = document.getElementById('email')
const submitBtn = document.getElementById('submit-btn')

const  confirmMessage = document.getElementById('confirmed-message')
const dismissMessage = document.getElementById('dismiss-message')

function formSuccess() {
    confirmMessage.classList.add('active')
    containerEl.classList.add('success')
    leftEl.style.display = 'none'
    rightEl.style.display = 'none'
}

function validateEmail(email) {
    const emailRegex = /^(?=[a-zA-Z0-9._%+-]*[a-zA-Z])[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const email = emailInput.value.trim()
    
    if(validateEmail(email)) {
        formSuccess()
        userEmail.innerText = email
        emailInput.value = ''

        invalidEmail.classList.remove('active')
        emailInput.classList.remove('active')
    } else {
        invalidEmail.classList.add('active')
        emailInput.classList.add('active')
    }
})

dismissMessage.addEventListener('click', () => {
    confirmMessage.classList.remove('active')
    containerEl.classList.remove('success')
    leftEl.style.display = 'block'
    rightEl.style.display = 'block'
})
