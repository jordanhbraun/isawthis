function initialize() {
  var myLatlng = new google.maps.LatLng(49.496675,-102.65625);
  var mapOptions = {
    zoom: 4,
    draggable: false,
    center: myLatlng
  }

  var map = new google.maps.Map(document.getElementById('map-container'), mapOptions);

  var georssLayer = new google.maps.KmlLayer({
    url: 'http://isawthis.twilio.baugues.com/twitter.rss?q=isawthis'
  });
  georssLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

