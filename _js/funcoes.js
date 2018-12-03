
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
    //alert(id)
    $( ".add" ).remove();
    if (id === 'pan') {
        img = "http://pensenegocios.com.br/wp-content/uploads/2017/05/vendo-mercado-e-padaria.jpg"
        legenda = "<h3 class='add my-4'>Panificadora</h3><p class='add lead'>Venha conhecer nossa maravilhosa panificadora!</p><p class='add lead'>Deliciosas massas, bolos e lanches para você!</p>"
    } else if (id === 'lanc') {
        img = "https://img.elo7.com.br/product/zoom/22B55A2/placa-mdf-decorativa-hamburguer-pao-lanche-hamburgueria-decoracao-para-pizzaria.jpg"
        legenda = "<h3 class='add my-4'>Espaço para Lanches</h3><p class='add lead'>Contamos com um espaço especial para fazer o seu Lanche a vontade!</p>"
    } else if (id === 'acou') {
        img = "https://scontent.ffbe1-1.fna.fbcdn.net/v/t31.0-8/14939487_1130022280379808_3178359524106815583_o.jpg?_nc_cat=105&_nc_ht=scontent.ffbe1-1.fna&oh=a166b5b72db9301f20bc39420eff6e13&oe=5CB204FD"
        legenda = "<h3 class='add my-4'>Açougue</h3><p class='add lead'>Pussuimos uma grande variedade em cortes de carne com um ótimo preço!</p>"
    } else if (id === 'cela') {
        img = "http://wallpaper21.com/wp-content/uploads/2017/09/Cool-display-of-collected-beer-cans-One-of-my-many-collections-as-a-kid-wallpaper-wpt8203480.jpg"
        legenda = "<h3 class='add my-4'>Cervejas Lata</h3><p class='add lead'>Aqui você encontra muitas opções em cerveja lata!</p>"
    } else if (id === 'cglo') {
        img = "https://scontent.ffbe1-1.fna.fbcdn.net/v/t1.0-9/32267182_1712173402164690_6004703715368370176_o.jpg?_nc_cat=102&_nc_ht=scontent.ffbe1-1.fna&oh=1cc92ba7fabd506a42cb335547698efb&oe=5C9CCBED"
        legenda = "<h3 class='add my-4'>Cervejas de Garrafa e Longneck</h3><p class='add lead'>Aqui você encontra muitas opções em cerveja garrafa e longneck!</p>"
    } else if (id === 'gece') {
        img = "http://www.armazemdacerveja.com.br/wp-content/uploads/2016/07/Banner-Cerveja-Gelada.png"
        legenda = "<h3 class='add my-4'>Geladeira de Cervejas</h3><p class='add lead'>Encontre aqui cervejas bem geladas para tomar na hora!</p>"
    } else if (id === 'reli') {
        img = "https://scontent.ffbe1-1.fna.fbcdn.net/v/t31.0-8/13323384_1014526851929352_6936467506339779039_o.jpg?_nc_cat=109&_nc_ht=scontent.ffbe1-1.fna&oh=1e3387bfa96ee9839fa4becb11dda62e&oe=5C6790E9"
        legenda = "<h3 class='add my-4'>Refrigerantes de Litros</h3><p class='add lead'>Temos uma grande variedade em refrigerantes de 1, 2, 2.5 e 3.3 Litros!</p>"
    } else if (id === 'grag') {
        img = "http://www.pipochurros.com.br/wp-content/uploads/2011/11/005.png"
        legenda = "<h3 class='add my-4'>Geladeira de Refrigerantes e Água</h3><p class='add lead'>Encontre aqui refrigerantes e água gelados para tomar na hora!</p>"
    } else if (id === 'rlag') {
        img = "https://scontent.ffbe1-1.fna.fbcdn.net/v/t31.0-8/13765978_1047171835331520_7556550127735807641_o.jpg?_nc_cat=106&_nc_ht=scontent.ffbe1-1.fna&oh=2eacf96a78e2141bdbcdc3db3a9405c8&oe=5CAD5F9A"
        legenda = "<h3 class='add my-4'>Refrigerantes Lata e Água</h3><p class='add lead'>Possuimos muitas opções em refrigerantes lata e águas!</p>"
    } else if (id === 'bede') {
        img = "http://buteconosso.com/wp-content/uploads/2014/12/AVC.jpg"
        legenda = "<h3 class='add my-4'>Bebidas Destiladas</h3><p class='add lead'>Contamos com uma grande variedade em bebidas destiladas!</p>"
    } else if (id === 'vinh') {
        img = "https://scontent.ffbe1-1.fna.fbcdn.net/v/t31.0-8/13340284_1014527248595979_5023675778498577075_o.jpg?_nc_cat=110&_nc_ht=scontent.ffbe1-1.fna&oh=fede579f5e370dbf892dfad2f7048032&oe=5C9B8EAC"
        legenda = "<h3 class='add my-4'>Vinhos e Champanhes</h3><p class='add lead'>Muitas opções em Vinhos e Champanhes para você!</p>"
    } else if (id === 'ener') {
        img = "http://1.bp.blogspot.com/-Eagx3c0uJ_M/VKndFwWZhGI/AAAAAAAAKr0/2gMgdFFBJWs/s1600/IMG-20141221-00840.jpg"
        legenda = "<h3 class='add my-4'>Energéticos e Batidas</h3><p class='add lead'>Encontre aqui vários energéticos e batidas!</p>"
    } else if (id === 'verd') {
        img = "https://scontent.ffbe1-1.fna.fbcdn.net/v/t31.0-8/11728764_861453353903370_6678054959971294679_o.jpg?_nc_cat=108&_nc_ht=scontent.ffbe1-1.fna&oh=34ab436d5bed350fc683717129395c1f&oe=5C9B9BEE"
        legenda = "<h3 class='add my-4'>Verduras e Legumes</h3><p class='add lead'>Disponibilizamos verduras e legumes fresquinhos!</p>"
    } else if (id === 'lati') {
        img = "https://scontent.ffbe1-1.fna.fbcdn.net/v/t31.0-8/14188623_1074690879246282_6004843941585380211_o.jpg?_nc_cat=100&_nc_ht=scontent.ffbe1-1.fna&oh=5d00958444ea4a3a222b660831b08906&oe=5CA1C884"
        legenda = "<h3 class='add my-4'>Laticínios</h3><p class='add lead'>Temos para você muitos produtos Laticínios!</p>"
    } else if (id === 'frut') {
        img = "https://www.proecuador.gob.ec/wp-content/uploads/2018/03/frutasvarias2.jpg"
        legenda = "<h3 class='add my-4'>Frutas</h3><p class='add lead'>Encontre aqui frutas fresquinhas e deliciosas!</p>"
    } else if (id === 'frio') {
        img = "https://lookformedical.com/img/a/ab/Fett-supermarkt.jpg"
        legenda = "<h3 class='add my-4'>Frios</h3><p class='add lead'>Contamos com muitas opções em frios!</p>"
    } else if (id === 'perf') {
        img = "http://4.bp.blogspot.com/-K2HvdUlweU4/TtLmaLDlSBI/AAAAAAAAA30/OaLSv86bniA/s1600/6.JPG"
        legenda = "<h3 class='add my-4'>Perfumaria</h3><p class='add lead'>Disponibilizamos para você grandes linhas em produtos de perfumaria!</p>"
    } else if (id === 'bala') {
        img = "https://www.abgo.com.br/wp-content/uploads/2018/08/doces-importados.jpg"
        legenda = "<h3 class='add my-4'>Doces</h3><p class='add lead'>Os mais variados tipos de doces você encontra aqui!</p>"
    } else if (id === 'enla') {
        img = "http://stocktakingsolutions.com/wp-content/uploads/2015/05/pl450642-easy_assemble_retail_convenience_store_shelf_powder_coating_display_3_4_5_or_6_tiers.jpg"
        legenda = "<h3 class='add my-4'>Enlatados</h3><p class='add lead'>Muitas opções em produtos enlatados!</p>"
    } else if (id === 'limp') {
        img = "https://scontent.ffbe1-1.fna.fbcdn.net/v/t31.0-8/11722481_861472733901432_4425162638694824489_o.jpg?_nc_cat=110&_nc_ht=scontent.ffbe1-1.fna&oh=943df05828167e97b0904eb7cd9778bd&oe=5C6E0FC9"
        legenda = "<h3 class='add my-4'>Limpeza e Higiene</h3><p class='add lead'>Encontre o que procura em materiais de limpeza e higiene!</p>"
    } else if (id === 'sorv') {
        img = "http://www.citynow.it/assets/uploads/2017/02/gelato.jpg"
        legenda = "<h3 class='add my-4'>Sorvetes e Áçai</h3><p class='add lead'>Refresque-se com nossos produtos em Sorvetes e Áçais!</p>"
    } else if (id === 'cere') {
        img = "https://static.noticiasaominuto.com/stockimages/1920/naom_56e55fdbd1894.jpg?1457872905"
        legenda = "<h3 class='add my-4'>Cereais</h3><p class='add lead'>Disponibilizamos uma grande linha de Cereais!</p>"
    } else if (id === 'salg') {
        img = "https://minhamaeenutricionista.files.wordpress.com/2013/11/salgadinhos.jpg"
        legenda = "<h3 class='add my-4'>Salgadinhos</h3><p class='add lead'>Muitas opções de Salgadinhos de variados tamanhos!</p>"
    } else if (id === 'alim') {
        img = "https://scontent.ffbe1-1.fna.fbcdn.net/v/t31.0-8/13661896_1047177151997655_6749059764633536654_o.jpg?_nc_cat=109&_nc_ht=scontent.ffbe1-1.fna&oh=71491c5d67def30d7c39357500670bf4&oe=5C9FF97E"
        legenda = "<h3 class='add my-4'>Alimentos Básicos</h3><p class='add lead'>Grande variedade de alimentos para quem procura o básico!</p>"
    } else if (id === 'cond') {
        img = "http://ebapho.com.br/wp-content/uploads/2017/01/tempero-temperos-spice-spices.png"
        legenda = "<h3 class='add my-4'>Condimentos</h3><p class='add lead'>Muitas opções em condimentos para você utilizar em suas receitas!</p>"
    } else if (id === 'ucc') {
        img = "http://carvaosaojose.com.br/wp-content/uploads/elementor/thumbs/carvao1-ntko10fadvnoi3esfygey60mbt6r87gzm0aws9aqp2.png"
        legenda = "<h3 class='add my-4'>Utilitários para Churrasco e Carvões</h3><p class='add lead'>Disponibilizamos para você tudo o que precisar para fazer aquele churrasco com a galera!</p>"
    } else if (id === 'caix') {
        img = "http://siberiaprojetos.com.br/wp-content/uploads/2014/04/DSC00152.jpg"
        legenda = "<h3 class='add my-4'>Caixas</h3><p class='add lead'>Contamos com 4 caixas para agilizar as suas compras!</p>"
    }
    document.getElementById("img-legenda").src = img
    $( "#legenda" ).append( legenda );

}

//frame

$(document).ready(function() {
    if (window.innerWidth < 601) {
        document.getElementById("foto-legenda").style.width = '395px'
        if (window.innerWidth < 500) {
            document.getElementById("mapa-index").style.marginLeft = '5%'
        }
    } else {
        document.getElementById("foto-legenda").style.width = '595px'
        $("#div-desc").append("<br class='p-desc'><p class='p-desc lead shadow-sm'>Passe o mouse sobre a imagem abaixo para mais detalhes!</p>")
    }
})

window.addEventListener('resize', function(){
    $(".p-desc").remove();
    if (window.innerWidth < 601) {
        document.getElementById("foto-legenda").style.width= '395px'
        if (window.innerWidth < 500) {
            document.getElementById("mapa-index").style.marginLeft = '5%'
        }
    } else {
        document.getElementById("foto-legenda").style.width = '595px'
        $("#div-desc").append("<br class='p-desc'><p class='p-desc lead shadow-sm'>Passe o mouse sobre a imagem abaixo para mais detalhes!</p>")
    }
})