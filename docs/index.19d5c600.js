jQuery(document).ready((function(e){function t(t){var o=t.find(".marker"),s={zoom:16,center:new google.maps.LatLng(0,0),mapTypeId:google.maps.MapTypeId.ROADMAP,styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}]},l=new google.maps.Map(t[0],s);return l.markers=[],o.each((function(){!function(e,t){var o=new google.maps.LatLng(e.attr("data-lat"),e.attr("data-lng")),s=new google.maps.Marker({position:o,map:t,icon:{url:"map-marker.7d3d2c16.svg",scaledSize:new google.maps.Size(35,48)}});if(console.log(s),t.markers.push(s),e.html()){var l=new google.maps.InfoWindow({content:e.html()});google.maps.event.addListener(s,"click",(function(){l.open(t,s)}))}}(e(this),l)})),function(t){var o=new google.maps.LatLngBounds;e.each(t.markers,(function(e,t){var s=new google.maps.LatLng(t.position.lat(),t.position.lng());o.extend(s)})),1==t.markers.length?(t.setCenter(o.getCenter()),t.setZoom(16)):t.fitBounds(o)}(l),l}console.log("map js firing");e(document).ready((function(){"object"==typeof google&&"object"==typeof google.maps&&e(".acf-map").each((function(){t(e(this))}))}))}));