$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active')
        $('body').toggleClass('lock')
    })
    $('.block__title-1').click(function(event){
        $('.block__text-1').toggleClass('active')
    })
    $('.block__title-2').click(function(event){
        $('.block__text-2').toggleClass('active')
    })
    $('.block__title-3').click(function(event){
        $('.block__text-3').toggleClass('active')
    })
})