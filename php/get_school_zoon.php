<?
<script>
$(document).ready(function() {
  var myLatlng = new google.maps.LatLng(35.143874, 129.010651); // 위치값 위도 경도
  var Y_point			= 35.143874;		// Y 좌표
  var X_point			= 129.010651;		// X 좌표
  var zoomLevel		= 18;				// 지도의 확대 레벨 : 숫자가 클수록 확대정도가 큼
  var markerTitle		= "부산";		// 현재 위치 마커에 마우스를 오버을때 나타나는 정보
  var markerMaxWidth	= 300;				// 마커를 클릭했을때 나타나는 말풍선의 최대 크기

  // 말풍선 내용
  var contentString	= '<div>' +
            '<h2>동서대학교</h2>'+
            '<p>안녕하세요. 구글지도입니다.</p>' +
      '</div>';
  var myLatlng = new google.maps.LatLng(Y_point, X_point);
  var mapOptions = {
        zoom: zoomLevel,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
  var map = new google.maps.Map(document.getElementById('map_ma'), mapOptions);
  var marker = new google.maps.Marker({
                  position: myLatlng,
                  map: map,
                  title: markerTitle
                });
  var infowindow = new google.maps.InfoWindow(
                    {
                      content: contentString,
                      maxWizzzdth: markerMaxWidth
                    }
  );

  var top_bottom = google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map, marker);
  });

     google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
      var rectangle = new google.maps.Rectangle({
       bounds: map.getBounds()
      })

      var bounds = rectangle.getBounds();
      var NE = bounds.getNorthEast();
      var SW = bounds.getSouthWest();
      // North West
      var NW = new google.maps.LatLng(NE.lat(), SW.lng());
      // South East
      var SE = new google.maps.LatLng(SW.lat(), NE.lng());

     console.log("SE" + SE) //all undefined
     console.log("NW" + NW)
   })
});
</script>

?>
