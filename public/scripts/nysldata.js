var nysldata = [{
    "nombre": "San Jose Earthquakes"
    , "img": "quakes.png"
    , "url": "https://www.sjearthquakes.com"
    , "año": "1974"
    }, {
    "nombre": "Tennessee Soccer Club"
    , "img": "tennessee.png"
    , "url": "http://www.tennesseesoccerclub.org"
    , "año": "1978"
    }, {
    "nombre": "Rock Run Soccer Club"
    , "img": "rockrun.png"
    , "url": "http://www.rockrun.org"
    , "año": "1983"
    }, {
    "nombre": "Chicago Mustangs"
    , "img": "mustangs.png"
    , "url": "http://www.chicagomustangspro.com"
    , "año": "2012"
    }, {
    "nombre": "Discoveries Soccer Club"
    , "img": "discoveries.png"
    , "url": "http://discoveriessoccerclub.org"
    , "año": "1999"
    }, {
    "nombre": "Evolution Soccer Club"
    , "img": "evolution.png"
    , "url": "http://www.evolutionsoccer.us"
    , "año": "2014"
    }]
console.log(nysldata);
$.each(nysldata, function (key, value) {
    var nombre = nysldata[key].nombre;
    var nombreup = nombre.toUpperCase();
    var img = nysldata[key].img;
    var url = nysldata[key].url;
    var año = "(" + nysldata[key].año + ")";
    var divescudo = $("<div/>").addClass("escudo");
    var divnombre = $("<div/>").addClass("nombre");
    var h2tag = $("<h2/>");
    var imgtag = $("<img/>").attr("src", "media/" + img);
    var divaño = $("<div/>").addClass("año");
    var ptag = $("<p/>");
    var divurl = $("<div/>").addClass("url");
    var atag = $("<a/>").attr('href', url);
    $('.escuts').append(divescudo);
    $(divescudo).append(imgtag);
    $('.escuts').append(divnombre);
    $(divnombre).append(h2tag);
    $(h2tag).append(nombreup);
    $('.escuts').append(divaño);
    $(divaño).append(ptag);
    $(ptag).append(año);
    $('.escuts').append(atag);
    $(atag).append(url);
});
var partidos = [{
    "team1": "Mustangs"
    , "img1": "mustangs.png"
    , "team2": "Evolution"
    , "img2": "evolution.png"
    , "field": "South Stadium"
    , "mapurl": "https://www.google.com/maps/place/2101+N+Fremont+St,+Chicago,+IL+60614/@41.919751,-87.651357,15z/data=!4m5!3m4!1s0x880fd3196fb41dc7:0x970be7f7d6336df5!8m2!3d41.9197513!4d-87.6513566?hl=es-ES"
    , "iframe": '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11874.996599376489!2d-87.651357!3d41.919751!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101+N+Fremont+St%2C+Chicago%2C+IL+60614!5e0!3m2!1ses!2ses!4v1492543567592" width="200" height="150" frameborder="0" style="border:0" allowfullscreen></iframe>'
    , "date": "Today at 9.30am"
    }, {
    "team1": "Quakes"
    , "img1": "quakes.png"
    , "team2": "Tennessee"
    , "img2": "tennessee.png"
    , "field": "Greenbay Stadium"
    , "mapurl": "https://www.google.com/maps?ll=41.913817,-87.638043&z=15&t=m&hl=es-ES&gl=ES&mapclient=embed&q=1734+N+Orleans+St+Chicago,+IL+60614+EE.+UU."
    , "iframe": '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11876.100798390235!2d-87.63804300000001!3d41.913817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614!5e0!3m2!1ses!2ses!4v1492541768164" width="200" height="150" frameborder="0" style="border:0" allowfullscreen></iframe>'
    , "date": "Today at 1pm"
    }, {
    "team1": "Rock Run"
    , "img1": "rockrun.png"
    , "team2": "Mustangs"
    , "img2": "mustangs.png"
    , "field": "Howard A. Yeager"
    , "mapurl": "https://www.google.com/maps?ll=41.923265,-87.662926&z=15&t=m&hl=es-ES&gl=ES&mapclient=embed&q=2245+N+Southport+Ave+Chicago,+IL+60614+EE.+UU."
    , "iframe": '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11874.342654033595!2d-87.662926!3d41.923265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614!5e0!3m2!1ses!2ses!4v1492542303288" width="200" height="150" frameborder="0" style="border:0" allowfullscreen></iframe>'
    , "date": "9/08 at 9.30am"
    }, {
    "team1": "Discoveries"
    , "img1": "discoveries.png"
    , "team2": "Evolution"
    , "img2": "evolution.png"
    , "field": "Marjorie P. Hart"
    , "mapurl": "https://www.google.com/maps?ll=41.929648,-87.645971&z=15&t=m&hl=es-ES&gl=ES&mapclient=embed&q=2625+N+Orchard+St+Chicago,+IL+60614+EE.+UU."
    , "iframe": '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11873.154681751792!2d-87.645971!3d41.929648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614!5e0!3m2!1ses!2ses!4v1492542376831" width="200" height="150" frameborder="0" style="border:0" allowfullscreen></iframe>'
    , "date": "9/08 at 1pm"
    }, {
    "team1": "Quakes"
    , "img1": "quakes.png"
    , "team2": "Rock Run"
    , "img2": "rockrun.png"
    , "field": "North Stadium"
    , "mapurl": "https://www.google.com/maps?ll=41.907126,-87.64617&z=15&t=m&hl=es-ES&gl=ES&mapclient=embed&q=1409+N+Ogden+Ave+Chicago,+IL+60610+EE.+UU."
    , "iframe": '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11873.154681751792!2d-87.645971!3d41.929648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614!5e0!3m2!1ses!2ses!4v1492542376831" width="200" height="150" frameborder="0" style="border:0" allowfullscreen></iframe>'
    , "date": "10/08 at 9.30am"
    }];
console.log(partidos);
/*
var x = document.getElementsByClassName(".gmap");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
    
function showPosition(position) {
currLat = position.coords.latitude;
currLong = position.coords.longitude; 
    
}
    
 

var currLat;
var currLong;*/
$.each(partidos, function (key, value) {
    var divnextmatch = $("<div/>").addClass("nextmatch").attr("data-key", key);
    var divteams = $("<div/>").addClass("teams");
    var divhiden = $("<div/>").addClass("hiden");
    var text = $("<h4/>");
    var text2 = $("<h4/>");
    var field = partidos[key].field;
    var date = partidos[key].date;
    var divgothere = $("<div/>").addClass("gothere");
    var iconmap = $("<img/>").attr("src", "media/location-icon.png");
    var url = partidos[key].mapurl;
    var alink = $("<a/>").attr("href", url);
    var divteam1 = $("<div/>").attr("id", "team1");
    var partimg1 = partidos[key].img1;
    var divimg1 = $("<img/>").attr("src", "media/" + partimg1);
    var divteam2 = $("<div/>").attr("id", "team2");
    var partimg2 = partidos[key].img2;
    var divimg2 = $("<img/>").attr("src", "media/" + partimg2);
    $(".matches").append(divnextmatch);
    $(divnextmatch).append(divteams);
    $(divnextmatch).append(divhiden);
    $(divnextmatch).append(divgothere);
    $(divteams).append(divteam1);
    $(divteam1).append(divimg1);
    $(divteams).append(divteam2);
    $(divteam2).append(divimg2);
    $(divhiden).append(text);
    $(text).append(field);
    $(divhiden).append(text2);
    $(text2).append(date);
    $(divgothere).append(alink);
    $(alink).append(iconmap);
});

function listeners() {
    $(".nextmatch").click(function () {
        var dataKeyValue = $(this).data("key");
        console.log(dataKeyValue);
        var partido = partidos[dataKeyValue];
        console.log(partido);
        addPartido(partido);
    });
    $(".livenow").click(function () {
        var equipos = " Tennessee - Mustangs";
        var fecha = "Live now (76')";
        var campo = "Katzenmaier Stadium";
        var mapa = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11878.627286102215!2d-87.629072!3d41.900237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610!5e0!3m2!1ses!2ses!4v1492541662277" width="200" height="150" frameborder="0" style="border:0" allowfullscreen></iframe>';
        var result = "Result: 3-0";
        var text = $("<h4/>");
        var text2 = $("<h4/>");
        var text3 = $("<h4/>");
        var text4 = $("<h4/>");
        var divgmap = $("<div/>").addClass("gmap");
        $(".highmatch").empty();
        $(".highmatch").append(text);
        $(text).append(equipos);
        $(".highmatch").append(text2);
        $(text2).append(result);
        $(".highmatch").append(text3);
        $(text3).append(fecha);
        $(".highmatch").append(text4);
        $(text4).append(campo);
        $(".highmatch").append(divgmap);
        $(divgmap).append(mapa);
    });
}
listeners();

function addPartido(value) {
    $(".highmatch").empty();
    var equipo1 = value.team1;
    var equipo2 = value.team2;
    var equipos = equipo1 + " - " + equipo2;
    var fecha = value.date;
    var campo = value.field;
    var mapa = value.iframe;
    var text = $("<h4/>");
    var text2 = $("<h4/>");
    var text3 = $("<h4/>");
    var divgmap = $("<div/>").addClass("gmap");
    $(".highmatch").append(text);
    $(text).append(equipos);
    $(".highmatch").append(text2);
    $(text2).append(fecha);
    $(".highmatch").append(text3);
    $(text3).append(campo);
    $(".highmatch").append(divgmap);
    $(divgmap).append(mapa);
}

