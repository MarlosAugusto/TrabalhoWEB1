
var value;

function incrementaValor(valorMaximo, id){
    value = parseInt(document.getElementById(id).value,10);
    value = isNaN(value) ? 0 : value;
    if(value >= valorMaximo) {
        value = valorMaximo;
    }else{
        value++;
    }
    document.getElementById(id).value = value;
}

function decrementaValor(valorMinimo, id){
    value = parseInt(document.getElementById(id).value,10);
    value = isNaN(value) ? 0 : value;
    if(value <= valorMinimo) {
        value = 0;
    }else{
        value--;
    }
    document.getElementById(id).value = value;
}

// alert mapa
/*
$('area').on('click', function() {
    alert($(this).attr('alt') + ' clicked');
});*/


//mapa

function mudaFoto(foto, id) {
    document.getElementById("mapa-index").src = foto;
    alert(id)
    $( ".add" ).remove();
    if (id = 'pan') {
        img = "http://pensenegocios.com.br/wp-content/uploads/2017/05/vendo-mercado-e-padaria.jpg"
        legenda = "<h3 class='add'>Panificadora</h3><p class='add'>Venha conhecer nossa maravilhosa panificadora!</p>"
    }
    document.getElementById("img-legenda").src = img
    $( "#legenda" ).append( legenda );

}

//frame

$(document).ready(function() {
    if (window.innerWidth < 600) {
        document.getElementById("foto-legenda").style.width= '395px'
    } else {
        document.getElementById("foto-legenda").style.width = '595px'
    }
})

window.addEventListener('resize', function(){
    if (window.innerWidth < 600) {
        document.getElementById("foto-legenda").style.width= '395px'
    } else {
        document.getElementById("foto-legenda").style.width = '595px'
    }
})