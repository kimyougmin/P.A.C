var locations = [
    //부산광역시
   ['부산광역시', 35.143874, 129.010651],
    //대구광역시
   ['대구광역시', 35.836601, 128.587640],
    //울산광역시
   ['울산광역시', 35.550578, 129.271503],
    //광주광역시
   ['광주광역시', 35.163209, 126.848604],
    //대전광역시
   ['대전광역시', 36.345689, 127.411526],
    //세종특별자치시
   ['세종특별자치시', 36.564345, 127.280500],
    //서울특별시
   ['서울특별시', 37.555173, 127.007618],
    //인천광역시
   ['인천광역시', 37.459439, 126.715686],
    //경상남도
   ['경상남도 양산', 35.399421, 129.055767],
   ['경상남도 김해', 35.274577, 128.863053],
   ['경상남도 밀양', 35.474456, 128.771257],
   ['경상남도 창원', 35.195105, 128.668851],
   ['경상남도 거제', 34.875891, 128.624388],
   ['경상남도 창녕', 35.543476, 128.503073],
   ['경상남도 함안', 35.277023, 128.420706],
   ['경상남도 의령', 35.387071, 128.279024],
   ['경상남도 합천', 35.570500, 128.150227],
   ['경상남도 거창', 35.721961, 127.905800],
   ['경상남도 함양', 35.540827, 127.721125],
   ['경상남도 산청', 35.360709, 127.834193],
   ['경상남도 진주', 35.179719, 128.107187],
   ['경상남도 하동', 35.110222, 127.788325],
   ['경상남도 남해', 34.823890, 127.866176],
   ['경상남도 사천', 35.037609, 128.047149],
   ['경상남도 고성', 34.999832, 128.281835],
   ['경상남도 통영', 34.858440, 128.426817],
   //경상북도
   ['경상북도 청도', 35.676790, 128.792751],
   ['경상북도 경주', 35.828625, 129.245195],
   ['경상북도 경산', 35.838728, 128.793389],
   ['경상북도 영천', 36.010080, 128.931745],
   ['경상북도 포항', 36.091741, 129.377557],
   ['경상북도 청송', 36.359128, 129.068602],
   ['경상북도 영덕', 36.471437, 129.387836],
   ['경상북도 영양', 36.693145, 129.129430],
   ['경상북도 울진', 36.888838, 129.363352],
   ['경상북도 봉화', 36.938230, 128.914395],
   ['경상북도 안동', 36.577606, 128.772622],
   ['경상북도 의성', 36.364603, 128.618786],
   ['경상북도 군위', 36.176758, 128.660231],
   ['경상북도 칠곡', 36.017692, 128.474507],
   ['경상북도 구미', 36.213429, 128.369489],
   ['경상북도 성주', 35.914407, 128.243964],
   ['경상북도 고령', 35.736974, 128.311387],
   ['경상북도 김천', 36.061224, 128.080751],
   ['경상북도 상주', 36.432273, 128.070215],
   ['경상북도 문경', 36.695238, 128.137825],
   ['경상북도 영주', 36.875767, 128.602532],
   ['경상북도 예천', 36.651897, 128.433391],
   //전라남도
   ['전라남도 광양', 35.014439, 127.666150],
   ['전라남도 여수', 34.762226, 127.667473],
   ['전라남도 순천', 34.990270, 127.398776],
   ['전라남도 구례', 35.221574, 127.523293],
   ['전라남도 곡성', 35.223805, 127.276892],
   ['전라남도 고흥', 34.608456, 127.290212],
   ['전라남도 보성', 34.802540, 127.172029],
   ['전라남도 화순', 35.014903, 127.012175],
   ['전라남도 장흥', 34.683338, 126.911352],
   ['전라남도 강진', 34.636110, 126.771483],
   ['전라남도 완도', 34.311761, 126.750020],
   ['전라남도 해남', 34.570284, 126.602502],
   ['전라남도 진도', 34.484558, 126.269620],
   ['전라남도 목포', 34.810539, 126.397728],
   ['전라남도 신안', 34.831080, 126.110420],
   ['전라남도 무안', 34.989715, 126.477755],
   ['전라남도 영암', 34.778733, 126.604158],
   ['전라남도 나주', 34.991487, 126.716557],
   ['전라남도 함평', 35.110403, 126.520923],
   ['전라남도 영광', 35.274281, 126.510262],
   ['전라남도 장성', 35.302907, 126.780565],
   ['전라남도 담양', 35.299674, 126.982472],
   //전라북도
   ['전라북도 무주', 35.947425, 127.725462],
   ['전라북도 진안', 35.831247, 127.440084],
   ['전라북도 장수', 35.653352, 127.523801],
   ['전라북도 남원', 35.423305, 127.406921],
   ['전라북도 순창', 35.435788, 127.100972],
   ['전라북도 임실', 35.600230, 127.244145],
   ['전라북도 정읍', 35.605735, 126.913957],
   ['전라북도 고창', 35.435114, 126.712737],
   ['전라북도 부안', 35.725915, 126.739849],
   ['전라북도 김제', 35.806735, 126.886232],
   ['전라북도 군산', 35.970314, 126.733033],
   ['전라북도 익산', 36.030921, 126.997668],
   ['전라북도 전주', 35.831602, 127.120523],
   ['전라북도 완주', 35.924782, 127.206104],
   //충청남도
   ['충청남도 천안', 36.818528, 127.195562],
   ['충청남도 아산', 36.792739, 127.000488],
   ['충청남도 당진', 36.905197, 126.645301],
   ['충청남도 태안', 36.750447, 126.302617],
   ['충청남도 서산', 36.784900, 126.446784],
   ['충청남도 예산', 36.657639, 126.771945],
   ['충청남도 홍성', 36.597849, 126.661495],
   ['충청남도 보령', 36.347499, 126.606447],
   ['충청남도 청양', 36.445906, 126.804772],
   ['충청남도 서천', 36.078969, 126.690395],
   ['충청남도 부여', 36.262599, 126.846925],
   ['충청남도 공주', 36.461173, 127.121340],
   ['충청남도 계룡', 36.290381, 127.239746],
   ['충청남도 논산', 36.188499, 127.148128],
   ['충청남도 금산', 36.111569, 127.485464],
   //충청북도
   ['충청북도 영동', 36.169326, 127.788945],
   ['충청북도 옥천', 36.313871, 127.579807],
   ['충청북도 보은', 36.486549, 127.719533],
   ['충청북도 청주', 36.626397, 127.503362],
   ['충청북도 증평', 36.786317, 127.588841],
   ['충청북도 괴산', 36.808400, 127.793118],
   ['충청북도 증평', 36.785407, 127.587868],
   ['충청북도 진천', 36.860363, 127.443621],
   ['충청북도 음성', 36.989028, 127.600408],
   ['충청북도 충주', 37.003320, 127.923003],
   ['충청북도 제천', 37.067424, 128.157087],
   ['충청북도 단양', 36.985043, 128.367819],
   //강원도
   ['강원도 태백', 37.173294, 128.989382],
   ['강원도 삼척', 37.276975, 129.065136],
   ['강원도 동해', 37.524441, 129.108168],
   ['강원도 정선', 37.381373, 128.672094],
   ['강원도 영월', 37.206611, 128.504866],
   ['강원도 평창', 37.537851, 128.457718],
   ['강원도 원주', 37.319631, 127.950499],
   ['강원도 횡성', 37.505250, 128.102296],
   ['강원도 강릉', 37.751082, 128.884545],
   ['강원도 홍천', 37.756229, 127.979156],
   ['강원도 춘천', 37.881893, 127.737641],
   ['강원도 화천', 38.108641, 127.704994],
   ['강원도 철원', 38.243141, 127.438371],
   ['강원도 양구', 38.217273, 127.950437],
   ['강원도 인제', 38.068367, 128.176601],
   ['강원도 고성', 38.382819, 128.466274],
   ['강원도 속초', 38.192402, 128.571627],
   ['강원도 양양', 38.036208, 128.649104],
   //경기도
   ['경기도 평택', 37.006863, 126.988430],
   ['경기도 안성', 37.013320, 127.273240],
   ['경기도 여주', 37.296805, 127.630022],
   ['경기도 이천', 37.213837, 127.484784],
   ['경기도 용인', 37.235399, 127.207728],
   ['경기도 오산', 37.163398, 127.060804],
   ['경기도 화성', 37.163516, 126.814070],
   ['경기도 안산', 37.319975, 126.839230],
   ['경기도 수원', 37.277585, 127.020782],
   ['경기도 군포', 37.353165, 126.929549],
   ['경기도 시흥', 37.377865, 126.781788],
   ['경기도 부천', 37.506031, 126.783701],
   ['경기도 광명', 37.446466, 126.883435],
   ['경기도 안양', 37.398618, 126.929343],
   ['경기도 의왕', 37.354019, 126.974407],
   ['경기도 과천', 37.436273, 126.998080],
   ['경기도 광주', 37.409172, 127.311477],
   ['경기도 성남', 37.407093, 127.126449],
   ['경기도 하남', 37.537071, 127.205480],
   ['경기도 구리', 37.604450, 127.139166],
   ['경기도 양평', 37.516651, 127.601443],
   ['경기도 가평', 37.828192, 127.508907],
   ['경기도 포천', 37.955943, 127.314583],
   ['경기도 연천', 38.100319, 127.078016],
   ['경기도 양주', 37.799389, 126.994401],
   ['경기도 파주', 37.859481, 126.782045],
   ['경기도 고양', 37.652363, 126.837479],
   ['경기도 김포', 37.716141, 126.616516],
   ['경기도 남양주', 37.654228, 127.245200],
   ['경기도 의정부', 37.741664, 127.060578],
   ['경기도 동두천', 37.905176, 127.055038],
   //제주도
   ['제주 서귀포', 33.255144, 126.572419],
   ['제주', 33.499299, 126.513027],
 ];

 var global_var;

 function getlocations(){
  
  var i = 0;
  while(global_var){
    if(locations[i][0] == global_var){
     var X_point = locations[i][1];
     var Y_point = locations[i][2];
     break;
    }
    i++;
  }

  var zoomLevel		= 15;				// 지도의 확대 레벨 : 숫자가 클수록 확대정도가 큼
  var markerMaxWidth	= 200;

  var myLatlng = new google.maps.LatLng(X_point, Y_point);

  var mapOptions = {
        zoom: zoomLevel,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

   var map = new google.maps.Map(document.getElementById('map_ma'), mapOptions);
}
var ti = document.getElementById("ibtn")
ti.addListener('click', function(e){
  var X_point;
  var Y_point;
  var i = 0;
  while(global_var){
    if(locations[i][0] == global_var){
     X_point = locations[i][1];
     Y_point = locations[i][2];
     break;
    }
    i++;
  }

  var zoomLevel		= 15;		
  var markerMaxWidth	= 200;

  var myLatlng = new google.maps.LatLng(X_point, Y_point);

  var mapOptions = {
        zoom: zoomLevel,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

   var map = new google.maps.Map(document.getElementById('map_ma'), mapOptions);
})

 function foundlocation(){
   var locatione = document.getElementById("search_box").value;
   console.log(locatione);
   global_var = document.getElementById("search_box").value;
   console.log(global_var);
   
    if(locations[0][0] == locatione){
      var audio = new Audio('vosound/대표시/부산.mp3');
      audio.play();
      setTimeout(function(){
        location.href="main.html";
        }, 3300);
        
      }else if(locations[1][0] == locatione){
        var audio = new Audio('vosound/대표시/대구.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[1][0] == locatione){
        var audio = new Audio('vosound/대표시/대구.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[2][0] == locatione){
        var audio = new Audio('vosound/대표시/울산.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[3][0] == locatione){
        var audio = new Audio('vosound/대표시/광주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[4][0] == locatione){
        var audio = new Audio('vosound/대표시/대전.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[5][0] == locatione){
        var audio = new Audio('vosound/대표시/세종.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[6][0] == locatione){
        var audio = new Audio('vosound/대표시/서울.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[7][0] == locatione){
        var audio = new Audio('vosound/대표시/인천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);  //대표시

      }else if(locations[8][0] == locatione){
        var audio = new Audio('vosound/경상남도/양산.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[9][0] == locatione){
        var audio = new Audio('vosound/경상남도/김해.mp3');
        audio.play();setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[10][0] == locatione){
        var audio = new Audio('vosound/경상남도/밀양.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[11][0] == locatione){
        var audio = new Audio('vosound/경상남도/창원.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[12][0] == locatione){
        var audio = new Audio('vosound/경상남도/거제.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[13][0] == locatione){
        var audio = new Audio('vosound/경상남도/창녕.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[14][0] == locatione){
        var audio = new Audio('vosound/경상남도/함안.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[15][0] == locatione){
        var audio = new Audio('vosound/경상남도/의령.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[16][0] == locatione){
        var audio = new Audio('vosound/경상남도/합천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[17][0] == locatione){
        var audio = new Audio('vosound/경상남도/거창.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[18][0] == locatione){
        var audio = new Audio('vosound/경상남도/함양.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[19][0] == locatione){
        var audio = new Audio('vosound/경상남도/산청.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[20][0] == locatione){
        var audio = new Audio('vosound/경상남도/진주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[21][0] == locatione){
        var audio = new Audio('vosound/경상남도/하동.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[22][0] == locatione){
        var audio = new Audio('vosound/경상남도/남해.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[23][0] == locatione){
        var audio = new Audio('vosound/경상남도/사천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[24][0] == locatione){
        var audio = new Audio('vosound/경상남도/고성.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[25][0] == locatione){
        var audio = new Audio('vosound/경상남도/통영.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);                  //경상남도

      }else if(locations[26][0] == locatione){
        var audio = new Audio('vosound/경상북도/청도.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[27][0] == locatione){
        var audio = new Audio('vosound/경상북도/경주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[28][0] == locatione){
        var audio = new Audio('vosound/경상북도/경산.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[29][0] == locatione){
        var audio = new Audio('vosound/경상북도/영천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);
          
      }else if(locations[30][0] == locatione){
        var audio = new Audio('vosound/경상북도/포항.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[31][0] == locatione){
        var audio = new Audio('vosound/경상북도/청송.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[32][0] == locatione){
        var audio = new Audio('vosound/경상북도/영덕.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[33][0] == locatione){
        var audio = new Audio('vosound/경상북도/영양.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[34][0] == locatione){
        var audio = new Audio('vosound/경상북도/울진.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[35][0] == locatione){
        var audio = new Audio('vosound/경상북도/봉화.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[36][0] == locatione){
        var audio = new Audio('vosound/경상북도/안동.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[37][0] == locatione){
        var audio = new Audio('vosound/경상북도/의성.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[38][0] == locatione){
        var audio = new Audio('vosound/경상북도/군위.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[39][0] == locatione){
        var audio = new Audio('vosound/경상북도/칠곡.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[40][0] == locatione){
        var audio = new Audio('vosound/경상북도/구미.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[41][0] == locatione){
        var audio = new Audio('vosound/경상북도/성주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[42][0] == locatione){
        var audio = new Audio('vosound/경상북도/고령.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[43][0] == locatione){
        var audio = new Audio('vosound/경상북도/김천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[44][0] == locatione){
        var audio = new Audio('vosound/경상북도/상주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[45][0] == locatione){
        var audio = new Audio('vosound/경상북도/문경.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[46][0] == locatione){
        var audio = new Audio('vosound/경상북도/영주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[47][0] == locatione){
        var audio = new Audio('vosound/경상북도/예천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);                 //경상북도

      }else if(locations[48][0] == locatione){
        var audio = new Audio('vosound/전라남도/광양.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[49][0] == locatione){
        var audio = new Audio('vosound/전라남도/여수.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[50][0] == locatione){
        var audio = new Audio('vosound/전라남도/순천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[51][0] == locatione){
        var audio = new Audio('vosound/전라남도/구례.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[52][0] == locatione){
        var audio = new Audio('vosound/전라남도/곡성.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[53][0] == locatione){
        var audio = new Audio('vosound/전라남도/고흥.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[54][0] == locatione){
        var audio = new Audio('vosound/전라남도/보성.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[55][0] == locatione){
        var audio = new Audio('vosound/전라남도/화순.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[56][0] == locatione){
        var audio = new Audio('vosound/전라남도/장흥.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[57][0] == locatione){
        var audio = new Audio('vosound/전라남도/강진.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[58][0] == locatione){
        var audio = new Audio('vosound/전라남도/완도.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[59][0] == locatione){
        var audio = new Audio('vosound/전라남도/해남.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[60][0] == locatione){
        var audio = new Audio('vosound/전라남도/진도.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[61][0] == locatione){
        var audio = new Audio('vosound/전라남도/목포.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[62][0] == locatione){
        var audio = new Audio('vosound/전라남도/신안.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[63][0] == locatione){
        var audio = new Audio('vosound/전라남도/무안.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[64][0] == locatione){
        var audio = new Audio('vosound/전라남도/영암.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[65][0] == locatione){
        var audio = new Audio('vosound/전라남도/나주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[66][0] == locatione){
        var audio = new Audio('vosound/전라남도/함평.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[67][0] == locatione){
        var audio = new Audio('vosound/전라남도/영광.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[68][0] == locatione){
        var audio = new Audio('vosound/전라남도/장성.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[69][0] == locatione){
        var audio = new Audio('vosound/전라남도/담양.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);                      //전라남도

      }else if(locations[70][0] == locatione){
        var audio = new Audio('vosound/전라북도/무주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[71][0] == locatione){
        var audio = new Audio('vosound/전라북도/진안.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[72][0] == locatione){
        var audio = new Audio('vosound/전라북도/장수.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[73][0] == locatione){
        var audio = new Audio('vosound/전라북도/남원.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[74][0] == locatione){
        var audio = new Audio('vosound/전라북도/순창.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[75][0] == locatione){
        var audio = new Audio('vosound/전라북도/임실.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[76][0] == locatione){
        var audio = new Audio('vosound/전라북도/정읍.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[77][0] == locatione){
        var audio = new Audio('vosound/전라북도/고창.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[78][0] == locatione){
        var audio = new Audio('vosound/전라북도/부안.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[79][0] == locatione){
        var audio = new Audio('vosound/전라북도/남원.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[80][0] == locatione){
        var audio = new Audio('vosound/전라북도/군산.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[81][0] == locatione){
        var audio = new Audio('vosound/전라북도/익산.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[82][0] == locatione){
        var audio = new Audio('vosound/전라북도/전주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[83][0] == locatione){
        var audio = new Audio('vosound/전라북도/완주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);                    //전라북도

      }else if(locations[84][0] == locatione){
        var audio = new Audio('vosound/충청남도/천안.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[85][0] == locatione){
        var audio = new Audio('vosound/충청남도/아산.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[86][0] == locatione){
        var audio = new Audio('vosound/충청남도/당진.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[87][0] == locatione){
        var audio = new Audio('vosound/충청남도/태안.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[88][0] == locatione){
        var audio = new Audio('vosound/충청남도/서산.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[89][0] == locatione){
        var audio = new Audio('vosound/충청남도/예산.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[90][0] == locatione){
        var audio = new Audio('vosound/충청남도/홍성.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[91][0] == locatione){
        var audio = new Audio('vosound/충청남도/보령.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[92][0] == locatione){
        var audio = new Audio('vosound/충청남도/청양.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[93][0] == locatione){
        var audio = new Audio('vosound/충청남도/서천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[94][0] == locatione){
        var audio = new Audio('vosound/충청남도/부여.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[95][0] == locatione){
        var audio = new Audio('vosound/충청남도/공주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[96][0] == locatione){
        var audio = new Audio('vosound/충청남도/계룡.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[97][0] == locatione){
        var audio = new Audio('vosound/충청남도/논산.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[98][0] == locatione){
        var audio = new Audio('vosound/충청남도/금산.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);               //충청남도

      }else if(locations[99][0] == locatione){
        var audio = new Audio('vosound/충청북도/영동.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[100][0] == locatione){
        var audio = new Audio('vosound/충청북도/옥천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[101][0] == locatione){
        var audio = new Audio('vosound/충청북도/보은.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[102][0] == locatione){
        var audio = new Audio('vosound/충청북도/청주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[103][0] == locatione){
        var audio = new Audio('vosound/충청북도/증평.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[104][0] == locatione){
        var audio = new Audio('vosound/충청북도/괴산.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[105][0] == locatione){
        var audio = new Audio('vosound/충청북도/증평.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[106][0] == locatione){
        var audio = new Audio('vosound/충청북도/진천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[107][0] == locatione){
        var audio = new Audio('vosound/충청북도/음성.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[108][0] == locatione){
        var audio = new Audio('vosound/충청북도/충주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[109][0] == locatione){
        var audio = new Audio('vosound/충청북도/제천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[110][0] == locatione){
        var audio = new Audio('vosound/충청북도/단양.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);                         //충청북도

      }else if(locations[111][0] == locatione){
        var audio = new Audio('vosound/강원도/태백.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[112][0] == locatione){
        var audio = new Audio('vosound/강원도/삼척.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[113][0] == locatione){
        var audio = new Audio('vosound/강원도/동해.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[114][0] == locatione){
        var audio = new Audio('vosound/강원도/정선.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[115][0] == locatione){
        var audio = new Audio('vosound/강원도/영월.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[116][0] == locatione){
        var audio = new Audio('vosound/강원도/평창.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[117][0] == locatione){
        var audio = new Audio('vosound/강원도/원주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[118][0] == locatione){
        var audio = new Audio('vosound/강원도/횡성.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[119][0] == locatione){
        var audio = new Audio('vosound/강원도/강릉.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[120][0] == locatione){
        var audio = new Audio('vosound/강원도/홍천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[121][0] == locatione){
        var audio = new Audio('vosound/강원도/춘천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[122][0] == locatione){
        var audio = new Audio('vosound/강원도/화천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[123][0] == locatione){
        var audio = new Audio('vosound/강원도/철원.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[124][0] == locatione){
        var audio = new Audio('vosound/강원도/양구.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[125][0] == locatione){
        var audio = new Audio('vosound/강원도/인제.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[126][0] == locatione){
        var audio = new Audio('vosound/강원도/고성.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[127][0] == locatione){
        var audio = new Audio('vosound/강원도/속초.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[128][0] == locatione){
        var audio = new Audio('vosound/강원도/양양.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);                        //강원도

      }else if(locations[129][0] == locatione){
        var audio = new Audio('vosound/경기도/평택.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[130][0] == locatione){
        var audio = new Audio('vosound/경기도/안성.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[131][0] == locatione){
        var audio = new Audio('vosound/경기도/여주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[132][0] == locatione){
        var audio = new Audio('vosound/경기도/이천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[133][0] == locatione){
        var audio = new Audio('vosound/경기도/용인.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[134][0] == locatione){
        var audio = new Audio('vosound/경기도/오산.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[135][0] == locatione){
        var audio = new Audio('vosound/경기도/화성.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[136][0] == locatione){
        var audio = new Audio('vosound/경기도/안산.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[137][0] == locatione){
        var audio = new Audio('vosound/경기도/수원.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[138][0] == locatione){
        var audio = new Audio('vosound/경기도/군포.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[139][0] == locatione){
        var audio = new Audio('vosound/경기도/시흥.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[140][0] == locatione){
        var audio = new Audio('vosound/경기도/부천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[141][0] == locatione){
        var audio = new Audio('vosound/경기도/광명.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[142][0] == locatione){
        var audio = new Audio('vosound/경기도/안양.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[143][0] == locatione){
        var audio = new Audio('vosound/경기도/의왕.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[144][0] == locatione){
        var audio = new Audio('vosound/경기도/과천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[145][0] == locatione){
        var audio = new Audio('vosound/경기도/광주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[146][0] == locatione){
        var audio = new Audio('vosound/경기도/성남.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[147][0] == locatione){
        var audio = new Audio('vosound/경기도/하남.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[148][0] == locatione){
        var audio = new Audio('vosound/경기도/구리.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[149][0] == locatione){
        var audio = new Audio('vosound/경기도/양평.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[150][0] == locatione){
        var audio = new Audio('vosound/경기도/가평.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[151][0] == locatione){
        var audio = new Audio('vosound/경기도/포천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[152][0] == locatione){
        var audio = new Audio('vosound/경기도/연천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[153][0] == locatione){
        var audio = new Audio('vosound/경기도/양주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[154][0] == locatione){
        var audio = new Audio('vosound/경기도/파주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[155][0] == locatione){
        var audio = new Audio('vosound/경기도/고양.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[156][0] == locatione){
        var audio = new Audio('vosound/경기도/김포.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[157][0] == locatione){
        var audio = new Audio('vosound/경기도/남양주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[158][0] == locatione){
        var audio = new Audio('vosound/경기도/의정부.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[159][0] == locatione){
        var audio = new Audio('vosound/경기도/동두천.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);                             //경기도

      }else if(locations[160][0] == locatione){
        var audio = new Audio('vosound/제주도/서귀포.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);

      }else if(locations[161][0] == locatione){
        var audio = new Audio('vosound/제주도/제주.mp3');
        audio.play();
        setTimeout(function(){
          location.href="main.html";
          }, 3300);                             //제주도         
      } 
    }