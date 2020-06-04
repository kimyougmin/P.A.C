$(document).ready(function() {

  function getloction(position){
    var X_point = position.coords.latitude;
    var Y_point = position.coords.longitude;
    var zoomLevel		= 15;				// 지도의 확대 레벨 : 숫자가 클수록 확대정도가 큼
    var markerMaxWidth	= 200;



    var myLatlng = new google.maps.LatLng(X_point, Y_point);

    var mapOptions = {
          zoom: zoomLevel,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

     var map = new google.maps.Map(document.getElementById('map_ma'), mapOptions);
     map.addListener('click', function(e){
       GetSchoolLatLng()
     });
     function GetSchoolLatLng(){
       google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
        var rectangle = new google.maps.Rectangle({
         bounds: map.getBounds()
        })
        var bounds = rectangle.getBounds();
        var NE = bounds.getNorthEast();
        var SW = bounds.getSouthWest();

        var NW = new google.maps.LatLng(NE.lat(), SW.lng());

        var SE = new google.maps.LatLng(SW.lat(), NE.lng());

        var nelat = NE.lat();
        var swlat = SW.lat();
        var nelng = NE.lng();
        var swlng = SW.lng();

       console.log("SE" + SE) //all undefined
       console.log("NW" + NW)

       $.ajax({
        url: "https://api.schoolzone.vhd.kr/v2/school/zone/square?",
        data: {
            "top_left_latitude": NE.lat(),
            "top_left_longitude": SW.lng(),
            "bottom_right_latitude": SW.lat(),
            "bottom_right_longitude": NE.lng()
        },
        cache: false,
        type: "GET",
        success: function(response) {
          console.log(response);
          for(let i = 0; i < response.school_zones.length; ++i) {
            const schoolZone = response.school_zones[i];
            var image = new google.maps.MarkerImage(
              'marker.png',
              null,
              null,
              null,
              new google.maps.Size(28,40)
            )

            const marker = new google.maps.Marker({
              position: new google.maps.LatLng(schoolZone.latitude, schoolZone.longitude),
              map: map,
              title: schoolZone.name,
              icon : image
            });

            const infoWindow = new google.maps.InfoWindow(
                              {
                                content: `<div><h3>${schoolZone.name}</h3></div>`,
                                maxWizzzdth: markerMaxWidth
                              }
            );

            google.maps.event.addListener(marker, 'click', function() {
              infoWindow.open(map, marker);
            });
          }
        },
        error: function(xhr) {

        }
     })


 });
 }
}
    if (navigator.geolocation) { // GPS를 지원하면
       navigator.geolocation.getCurrentPosition(getloction, function(error){

          console.log(X_point+', '+Y_point)
       }),{
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity
      };
    } else {
      alert('GPS를 지원하지 않습니다');
    }


});
