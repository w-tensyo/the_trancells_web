$(document).ready(function(){
    var menuIcon = document.getElementById("menu-btn");
    var closeIcon = document.getElementById("spMenu-close-icon");

    menuIcon.addEventListener('click',function(){
        $('.header__sp__menuList').css('left', '0px');

    })

    closeIcon.addEventListener('click',function(){
        $('.header__sp__menuList').css('left', '-320px');
    })

     
})