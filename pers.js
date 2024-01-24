$('#about-titles p').click(function() {
    $('#about-titles p').removeClass('active-link');
    $('#Skills').removeClass('active-tab');
    $('#Experience').removeClass('active-tab');
    $('#Education').removeClass('active-tab');
    $('#' + this.innerText).addClass('active-tab');
    $(this).addClass('active-link');
})

