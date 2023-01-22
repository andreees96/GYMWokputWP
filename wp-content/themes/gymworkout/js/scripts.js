// inicializar slicknav en el menú
jQuery(document).ready($ => {
    $('.site-header .menu-principal .menu').slicknav({
        label: '',
        appendTo: '.site-header'
    })
});

//agrega posicion fija en el header
window.onscroll = () =>{
    const scroll = window.scrollY;

    const headerNav = document.querySelector('.barra-navegacion');
    const documentBody = document.querySelector('body');

    if(scroll > 400){
        headerNav.classList.add('fixed-top');
        documentBody.classList.add('ft-activo');
    }else{
        headerNav.classList.remove('fixed-top');
        documentBody.classList.remove('ft-activo');
    }
}