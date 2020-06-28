$(document).ready(function() {

  function getloction(position){
    var X_point = localStorage.lat;
    var Y_point = localStorage.lng;
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
       GetSchoolLatLng(map)
     });

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
