
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

