
document.getElementById('copy-right').innerHTML = new Date().getFullYear();

document.getElementById('btn-submit').onclick = function () {
    let name = document.getElementById('txt-name').value.trim()
    let email = document.getElementById('txt-email').value.trim()
    let subject = document.getElementById('txt-subject').value.trim()
    let message = document.getElementById('txt-message').value.trim()
    let element = document.getElementsByClassName('error')
    let flag = 0;
    while (element.length > 0) {
        element[0].remove()
    }
    if (name === "") {
        let htmlElement = document.createElement('span')
        htmlElement.style.color = 'red'
        htmlElement.className = 'error'
        htmlElement.textContent = 'Name cannot be empty'
        document.getElementById('txt-name').after(htmlElement)
        flag = 1
    } else if (!isNaN(name)) {
        let htmlElement = document.createElement('span')
        htmlElement.style.color = 'red'
        htmlElement.className = 'error'
        htmlElement.textContent = 'Invalid name'
        document.getElementById('txt-name').after(htmlElement)
        flag = 1
    }
    if (email === "") {
        let htmlElement = document.createElement('span')
        htmlElement.style.color = 'red'
        htmlElement.className = 'error'
        htmlElement.textContent = 'Email cannot be empty'
        document.getElementById('txt-email').after(htmlElement)
        flag = 1
    }
    else if (!email.includes('@') || !email.includes('')) {
        let htmlElement = document.createElement('span')
        htmlElement.style.color = 'red'
        htmlElement.className = 'error'
        htmlElement.textContent = 'Invalid email'
        document.getElementById('txt-email').after(htmlElement)
        flag = 1
    }
    if (subject === "") {
        let htmlElement = document.createElement('span')
        htmlElement.style.color = 'red'
        htmlElement.className = 'error'
        htmlElement.textContent = 'Subject cannot be empty'
        document.getElementById('txt-subject').after(htmlElement)
        flag = 1
    } if (message === "") {
        let htmlElement = document.createElement('span')
        htmlElement.style.color = 'red'
        htmlElement.className = 'error'
        htmlElement.textContent = 'Message cannot be empty'
        document.getElementById('txt-message').after(htmlElement)
        flag = 1
    }

    if (flag === 0) {
        const mailtoLink = `mailto:trsamual@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;
        window.location.href = mailtoLink;
        document.getElementById('txt-name').value = '';
        document.getElementById('txt-email').value = '';
        document.getElementById('txt-subject').value = '';
        document.getElementById('txt-message').value = '';
    }
}

