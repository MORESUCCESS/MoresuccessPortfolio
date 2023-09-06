let menu = document.getElementById('bars');
let header = document.querySelector('.header');
let themetoggler = document.getElementById('themes');
menu.onclick =() =>{
    menu.classList.toggle('fa-xmark');
    header.classList.toggle('active');
}

themetoggler.onclick =() =>{
    themetoggler.classList.toggle('fa-times');
    if( themetoggler.classList.toggle('fa-')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}