$('#about-titles p').click(function() {
    $('#about-titles p').removeClass('active-link');
    $('#Skills').removeClass('active-tab');
    $('#Experience').removeClass('active-tab');
    $('#Education').removeClass('active-tab');
    $('#' + this.innerText).addClass('active-tab');
    $(this).addClass('active-link');
})


function openmenu() {
    $('nav ul').css('right','0px');
}


function closemenu() {
    $('nav ul').css('right','-200px');
}


$(document).scroll(function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('#backToTop').css('display','block');
    }
    else {
        $('#backToTop').css('display','none')
    }
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbx1dpKlrdkkKt5HrOZmK_PGps9CJD-4NFt58kU5PW8PUXewHGDXgQrObIGA669YyNAaTw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = 'Message sent successfully';
        setTimeout(function() {
            msg.innerHTML = ''
        }, 5000);
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})