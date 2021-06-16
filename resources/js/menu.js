/*Seleciona o documento html e quando ele tiver 
totalmente carregado será executado uma função*/

$(document).ready(function(){
    /*Quando for clicado no ícone do hamburger, vai executar esse algoritmo*/
    /*Seleciona o elemento do html com a classe mobile-nav-icon*/
    /*O método slideToggle(tempo de duração em ms) serve para abrir e fechar boxes*/
    $(".checkbox-menu").click(function(){
        var nav = $(".main-nav")
        nav.slideToggle(200);
    });
}
    
);
