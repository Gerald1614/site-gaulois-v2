
//Add Google Map
function myMap()
{   var Gaulois= {lat: 45.5480088,lng: -73.6512243}
    var mapOptions =  {
        zoom: 11,
        center: new google.maps.LatLng(Gaulois),
        mapTypeId: 'terrain'
      };
    var infowindow = new google.maps.InfoWindow({
        content:"<p><b>Terrain de Rugby des Gaulois</b></p> <p>Parc Henri-Julien</p><p>9300 Rue Saint-Denis, Montréal, QC H2M 1P1</p>"
      });
    var map = new google.maps.Map(document.getElementById("googleMap"),mapOptions)
    var marker = new google.maps.Marker({position: Gaulois, map: map})
    infowindow.open(map,marker);
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });
    google.maps.event.addDomListener(window, 'resize', function() {
    });
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}


// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// active navbar item
var linkContainer = document.getElementById("myNavbar");
var links = linkContainer.getElementsByClassName("a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = linkContainer.getElementsByClassName("w3-black");
    current[0].className = current[0].className.replace(" w3-black", "");
    this.className += " w3-black";
  });
}

let previousBtn;
let nextBtn;
let saison_select;
let contenu;
let NextPrev;

function initSaison() {
    previousBtn = document.getElementById("previous");
    nextBtn = document.getElementById("next");
    saison_select = document.getElementById("saison");
    contenu = document.getElementById("contenu");
    NextPrev = 0;
    saison_select.innerHTML = Descriptif_Saison[0].saison;
    contenu.innerHTML = Descriptif_Saison[0].contenu;
    previousBtn.innerHTML = Descriptif_Saison[3].saison
    nextBtn.innerHTML = Descriptif_Saison[1].saison;
}


function previousDay() {
    if(NextPrev === 0) { NextPrev = 3 } else {  NextPrev-- };
    saison_select.innerHTML = Descriptif_Saison[NextPrev].saison;
    contenu.innerHTML = Descriptif_Saison[NextPrev].contenu;
    previousBtn.innerHTML = (NextPrev === 0) ?  Descriptif_Saison[3].saison : Descriptif_Saison[NextPrev-1].saison
    nextBtn.innerHTML = (NextPrev === 3) ?  Descriptif_Saison[0].saison : Descriptif_Saison[NextPrev+1].saison

}

function nextDay() {
    console.log(NextPrev)
    if(NextPrev === 3) { NextPrev = 0 } else { NextPrev++};
    saison_select.innerHTML = Descriptif_Saison[NextPrev].saison;
    contenu.innerHTML = Descriptif_Saison[NextPrev].contenu;
    previousBtn.innerHTML = (NextPrev === 0) ?  Descriptif_Saison[3].saison : Descriptif_Saison[NextPrev-1].saison
    nextBtn.innerHTML = (NextPrev === 3) ?  Descriptif_Saison[0].saison : Descriptif_Saison[NextPrev+1].saison
}

