jQuery(document).ready(function( $ ){

    console.log('map js firing')

    /*
    *  new_map
    *
    *  This function will render a Google Map onto the selected jQuery element
    *
    *  @type	function
    *  @date	8/11/2013
    *  @since	4.3.0
    *
    *  @param	$el (jQuery element)
    *  @return	n/a
    */
    
    function new_map( $el ) {
        
        // var
        var $markers = $el.find('.marker');
        
        
        // vars
        var args = {
            zoom		: 16,
            center		: new google.maps.LatLng(0, 0),
            mapTypeId	: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                }
            ]
            // styles       : [
            //     {
            //         "featureType": "all",
            //         "elementType": "geometry",
            //         "stylers": [
            //             {
            //                 "saturation": "100"
            //             },
            //             {
            //                 "hue": "#ff00e4"
            //             },
            //             {
            //                 "lightness": "32"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "all",
            //         "elementType": "labels",
            //         "stylers": [
            //             {
            //                 "saturation": "0"
            //             },
            //             {
            //                 "weight": "0.55"
            //             },
            //             {
            //                 "visibility": "simplified"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "all",
            //         "elementType": "labels.text",
            //         "stylers": [
            //             {
            //                 "color": "#000000"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "all",
            //         "elementType": "labels.icon",
            //         "stylers": [
            //             {
            //                 "visibility": "simplified"
            //             },
            //             {
            //                 "saturation": "100"
            //             },
            //             {
            //                 "hue": "#ff00e4"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "poi",
            //         "elementType": "labels",
            //         "stylers": [
            //             {
            //                 "visibility": "simplified"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "poi.attraction",
            //         "elementType": "all",
            //         "stylers": [
            //             {
            //                 "visibility": "off"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "poi.business",
            //         "elementType": "all",
            //         "stylers": [
            //             {
            //                 "visibility": "off"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "poi.park",
            //         "elementType": "geometry",
            //         "stylers": [
            //             {
            //                 "visibility": "simplified"
            //             },
            //             {
            //                 "lightness": "52"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "poi.place_of_worship",
            //         "elementType": "all",
            //         "stylers": [
            //             {
            //                 "visibility": "off"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "poi.sports_complex",
            //         "elementType": "all",
            //         "stylers": [
            //             {
            //                 "visibility": "off"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road",
            //         "elementType": "geometry",
            //         "stylers": [
            //             {
            //                 "saturation": "2"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road",
            //         "elementType": "geometry.stroke",
            //         "stylers": [
            //             {
            //                 "visibility": "on"
            //             },
            //             {
            //                 "color": "#e6e6e6"
            //             },
            //             {
            //                 "weight": "1"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road",
            //         "elementType": "labels.text",
            //         "stylers": [
            //             {
            //                 "color": "#000000"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road.highway",
            //         "elementType": "geometry",
            //         "stylers": [
            //             {
            //                 "lightness": "100"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road.local",
            //         "elementType": "all",
            //         "stylers": [
            //             {
            //                 "visibility": "simplified"
            //             },
            //             {
            //                 "lightness": "44"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road.local",
            //         "elementType": "geometry.stroke",
            //         "stylers": [
            //             {
            //                 "lightness": "75"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "transit",
            //         "elementType": "labels.text.fill",
            //         "stylers": [
            //             {
            //                 "color": "#a30093"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "transit",
            //         "elementType": "labels.icon",
            //         "stylers": [
            //             {
            //                 "saturation": "100"
            //             },
            //             {
            //                 "hue": "#ff00e6"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "water",
            //         "elementType": "geometry.fill",
            //         "stylers": [
            //             {
            //                 "lightness": "-8"
            //             },
            //             {
            //                 "saturation": "100"
            //             },
            //             {
            //                 "color": "#ff00e4"
            //             }
            //         ]
            //     }
            // ]
        };
        
        
        // create map	        	
        var map = new google.maps.Map( $el[0], args);
        
        
        // add a markers reference
        map.markers = [];
        
        
        // add markers
        $markers.each(function(){
            
            add_marker( $(this), map );
            
        });
        
        
        // center map
        center_map( map );
        
        
        // return
        return map;
        
    }
    
    /*
    *  add_marker
    *
    *  This function will add a marker to the selected Google Map
    *
    *  @type	function
    *  @date	8/11/2013
    *  @since	4.3.0
    *
    *  @param	$marker (jQuery element)
    *  @param	map (Google Map object)
    *  @return	n/a
    */
    
    function add_marker( $marker, map ) {
    
        // var
        var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );
    
        // create marker
        var marker = new google.maps.Marker({
            position	: latlng,
            map			: map,
            icon       : {
                // url: 'map-marker.ca531c5d.png',
                url: 'map-marker.7d3d2c16.svg',
                scaledSize: new google.maps.Size(35, 48), // scaled size
            }
        });

        console.log(marker)
    
        // add to array
        map.markers.push( marker );
    
        // if marker contains HTML, add it to an infoWindow
        if( $marker.html() )
        {
            // create info window
            var infowindow = new google.maps.InfoWindow({
                content		: $marker.html()
            });
    
            // show info window when marker is clicked
            google.maps.event.addListener(marker, 'click', function() {
    
                infowindow.open( map, marker );
    
            });
        }
    
    }
    
    /*
    *  center_map
    *
    *  This function will center the map, showing all markers attached to this map
    *
    *  @type	function
    *  @date	8/11/2013
    *  @since	4.3.0
    *
    *  @param	map (Google Map object)
    *  @return	n/a
    */
    
    function center_map( map ) {
    
        // vars
        var bounds = new google.maps.LatLngBounds();
    
        // loop through all markers and create bounds
        $.each( map.markers, function( i, marker ){
    
            var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );
    
            bounds.extend( latlng );
    
        });
    
        // only 1 marker?
        if( map.markers.length == 1 )
        {
            // set center of map
            map.setCenter( bounds.getCenter() );
            map.setZoom( 16 );
        }
        else
        {
            // fit to bounds
            map.fitBounds( bounds );
        }
    
    }
    
    /*
    *  document ready
    *
    *  This function will render each map when the document is ready (page has loaded)
    *
    *  @type	function
    *  @date	8/11/2013
    *  @since	5.0.0
    *
    *  @param	n/a
    *  @return	n/a
    */
    // global var
    var map = null;
    
    $(document).ready(function(){

        if (typeof google === 'object' && typeof google.maps === 'object') {
            $('.acf-map').each(function(){
        
                // create map
                map = new_map( $(this) );
        
            });
        }
    
    
    });
    
});