
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

function mudaFoto(foto) {
    document.getElementById("mapa-index").src = foto;

}