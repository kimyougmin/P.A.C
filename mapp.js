var locations = [
    //부산광역시
   ['부산', 35.143874, 129.010651],
    //대구광역시
   ['대구', 35.836601, 128.587640],
    //울산광역시
   ['울산', 35.550578, 129.271503],
    //광주광역시
   ['광주', 35.163209, 126.848604],
    //대전광역시
   ['대전', 36.345689, 127.411526],
    //세종특별자치시
   ['세종', 36.564345, 127.280500],
    //서울특별시
   ['서울', 37.555173, 127.007618],
    //인천광역시
   ['인천', 37.459439, 126.715686],
    //경상남도
   ['양산', 35.399421, 129.055767],
   ['김해', 35.274577, 128.863053],
   ['밀양', 35.474456, 128.771257],
   ['창원', 35.195105, 128.668851],
   ['거제', 34.875891, 128.624388],
   ['창녕', 35.543476, 128.503073],
   ['함안', 35.277023, 128.420706],
   ['의령', 35.387071, 128.279024],
   ['합천', 35.570500, 128.150227],
   ['거창', 35.721961, 127.905800],
   ['함양', 35.540827, 127.721125],
   ['산청', 35.360709, 127.834193],
   ['진주', 35.179719, 128.107187],
   ['하동', 35.110222, 127.788325],
   ['남해', 34.823890, 127.866176],
   ['사천', 35.037609, 128.047149],
   ['고성', 34.999832, 128.281835],
   ['통영', 34.858440, 128.426817],
   //경상북도
   ['청도', 35.676790, 128.792751],
   ['경주', 35.828625, 129.245195],
   ['경산', 35.838728, 128.793389],
   ['영천', 36.010080, 128.931745],
   ['포항', 36.091741, 129.377557],
   ['청송', 36.359128, 129.068602],
   ['영덕', 36.471437, 129.387836],
   ['영양', 36.693145, 129.129430],
   ['울진', 36.888838, 129.363352],
   ['봉화', 36.938230, 128.914395],
   ['안동', 36.577606, 128.772622],
   ['의성', 36.364603, 128.618786],
   ['군위', 36.176758, 128.660231],
   ['칠곡', 36.017692, 128.474507],
   ['구미', 36.213429, 128.369489],
   ['성주', 35.914407, 128.243964],
   ['고령', 35.736974, 128.311387],
   ['김천', 36.061224, 128.080751],
   ['상주', 36.432273, 128.070215],
   ['문경', 36.695238, 128.137825],
   ['영주', 36.875767, 128.602532],
   ['예천', 36.651897, 128.433391],
   //전라남도
   ['광양', 35.014439, 127.666150],
   ['여수', 34.762226, 127.667473],
   ['순천', 34.990270, 127.398776],
   ['구례', 35.221574, 127.523293],
   ['곡성', 35.223805, 127.276892],
   ['고흥', 34.608456, 127.290212],
   ['보성', 34.802540, 127.172029],
   ['화순', 35.014903, 127.012175],
   ['장흥', 34.683338, 126.911352],
   ['강진', 34.636110, 126.771483],
   ['완도', 34.311761, 126.750020],
   ['해남', 34.570284, 126.602502],
   ['진도', 34.484558, 126.269620],
   ['목포', 34.810539, 126.397728],
   ['신안', 34.831080, 126.110420],
   ['무안', 34.989715, 126.477755],
   ['영암', 34.778733, 126.604158],
   ['나주', 34.991487, 126.716557],
   ['함평', 35.110403, 126.520923],
   ['영광', 35.274281, 126.510262],
   ['장성', 35.302907, 126.780565],
   ['담양', 35.299674, 126.982472],
   //전라북도
   ['무주', 35.947425, 127.725462],
   ['진안', 35.831247, 127.440084],
   ['장수', 35.653352, 127.523801],
   ['남원', 35.423305, 127.406921],
   ['순창', 35.435788, 127.100972],
   ['임실', 35.600230, 127.244145],
   ['정읍', 35.605735, 126.913957],
   ['고창', 35.435114, 126.712737],
   ['부안', 35.725915, 126.739849],
   ['김제', 35.806735, 126.886232],
   ['군산', 35.970314, 126.733033],
   ['익산', 36.030921, 126.997668],
   ['전주', 35.831602, 127.120523],
   ['완주', 35.924782, 127.206104],
   //충청남도
   ['천안', 36.818528, 127.195562],
   ['아산', 36.792739, 127.000488],
   ['당진', 36.905197, 126.645301],
   ['태안', 36.750447, 126.302617],
   ['서산', 36.784900, 126.446784],
   ['예산', 36.657639, 126.771945],
   ['홍성', 36.597849, 126.661495],
   ['보령', 36.347499, 126.606447],
   ['청양', 36.445906, 126.804772],
   ['서천', 36.078969, 126.690395],
   ['부여', 36.262599, 126.846925],
   ['공주', 36.461173, 127.121340],
   ['계룡', 36.290381, 127.239746],
   ['논산', 36.188499, 127.148128],
   ['금산', 36.111569, 127.485464],
   //충청북도
   ['영동', 36.169326, 127.788945],
   ['옥천', 36.313871, 127.579807],
   ['보은', 36.486549, 127.719533],
   ['청주', 36.626397, 127.503362],
   ['증평', 36.786317, 127.588841],
   ['괴산', 36.808400, 127.793118],
   ['증평', 36.785407, 127.587868],
   ['진천', 36.860363, 127.443621],
   ['음성', 36.989028, 127.600408],
   ['충주', 37.003320, 127.923003],
   ['제천', 37.067424, 128.157087],
   ['단양', 36.985043, 128.367819],
   //강원도
   ['태백', 37.173294, 128.989382],
   ['삼척', 37.276975, 129.065136],
   ['동해', 37.524441, 129.108168],
   ['정선', 37.381373, 128.672094],
   ['영월', 37.206611, 128.504866],
   ['평창', 37.537851, 128.457718],
   ['원주', 37.319631, 127.950499],
   ['횡성', 37.505250, 128.102296],
   ['강릉', 37.751082, 128.884545],
   ['홍천', 37.756229, 127.979156],
   ['춘천', 37.881893, 127.737641],
   ['화천', 38.108641, 127.704994],
   ['철원', 38.243141, 127.438371],
   ['양구', 38.217273, 127.950437],
   ['인제', 38.068367, 128.176601],
   ['고성', 38.382819, 128.466274],
   ['속초', 38.192402, 128.571627],
   ['양양', 38.036208, 128.649104],
   //경기도
   ['평택', 37.006863, 126.988430],
   ['안성', 37.013320, 127.273240],
   ['여주', 37.296805, 127.630022],
   ['이천', 37.213837, 127.484784],
   ['용인', 37.235399, 127.207728],
   ['오산', 37.163398, 127.060804],
   ['화성', 37.163516, 126.814070],
   ['안산', 37.319975, 126.839230],
   ['수원', 37.277585, 127.020782],
   ['군포', 37.353165, 126.929549],
   ['시흥', 37.377865, 126.781788],
   ['부천', 37.506031, 126.783701],
   ['광명', 37.446466, 126.883435],
   ['안양', 37.398618, 126.929343],
   ['의왕', 37.354019, 126.974407],
   ['과천', 37.436273, 126.998080],
   ['광주', 37.409172, 127.311477],
   ['성남', 37.407093, 127.126449],
   ['하남', 37.537071, 127.205480],
   ['구리', 37.604450, 127.139166],
   ['양평', 37.516651, 127.601443],
   ['가평', 37.828192, 127.508907],
   ['포천', 37.955943, 127.314583],
   ['연천', 38.100319, 127.078016],
   ['양주', 37.799389, 126.994401],
   ['파주', 37.859481, 126.782045],
   ['고양', 37.652363, 126.837479],
   ['김포', 37.716141, 126.616516],
   ['남양주', 37.654228, 127.245200],
   ['의정부', 37.741664, 127.060578],
   ['동두천', 37.905176, 127.055038],
   //제주도
   ['서귀포', 33.255144, 126.572419],
   ['제주', 33.499299, 126.513027],
 ];

 function foundlocation(){
   var location = document.getElementById("search_box").value;
   console.log(location);
  if(locations[0][0] == location){
    var audio = new Audio('vosound/대표시/부산.mp3');
    audio.play();
   }else if(locations[1][0] == location){
    var audio = new Audio('vosound/대표시/대구.mp3');
    audio.play();
   }else if(locations[2][0] == location){
    var audio = new Audio('vosound/대표시/울산.mp3');
    audio.play();
   }else if(locations[3][0] == location){
    var audio = new Audio('vosound/대표시/광주.mp3');
    audio.play();
   }else if(locations[4][0] == location){
    var audio = new Audio('vosound/대표시/대전.mp3');
    audio.play();
   }else if(locations[5][0] == location){
    var audio = new Audio('vosound/대표시/세종.mp3');
    audio.play();
   }else if(locations[6][0] == location){
    var audio = new Audio('vosound/대표시/서울.mp3');
    audio.play();
   }else if(locations[7][0] == location){
    var audio = new Audio('vosound/대표시/인천.mp3');
    audio.play();  //대표시
   }else if(locations[8][0] == location){
    var audio = new Audio('vosound/경상남도/양산.mp3');
    audio.play();
   }else if(locations[9][0] == location){
    var audio = new Audio('vosound/경상남도/김해.mp3');
    audio.play();
   }else if(locations[10][0] == location){
    var audio = new Audio('vosound/경상남도/밀양.mp3');
    audio.play();
   }else if(locations[11][0] == location){
    var audio = new Audio('vosound/경상남도/창원.mp3');
    audio.play();
   }else if(locations[12][0] == location){
    var audio = new Audio('vosound/경상남도/거제.mp3');
    audio.play();
   }else if(locations[13][0] == location){
    var audio = new Audio('vosound/경상남도/창녕.mp3');
    audio.play();
   }else if(locations[14][0] == location){
    var audio = new Audio('vosound/경상남도/함안.mp3');
    audio.play();
   }else if(locations[15][0] == location){
    var audio = new Audio('vosound/경상남도/의령.mp3');
    audio.play();
   }else if(locations[16][0] == location){
    var audio = new Audio('vosound/경상남도/합천.mp3');
    audio.play();
   }else if(locations[17][0] == location){
    var audio = new Audio('vosound/경상남도/거창.mp3');
    audio.play();
   }else if(locations[18][0] == location){
    var audio = new Audio('vosound/경상남도/함양.mp3');
    audio.play();
   }else if(locations[19][0] == location){
    var audio = new Audio('vosound/경상남도/산청.mp3');
    audio.play();
   }else if(locations[20][0] == location){
    var audio = new Audio('vosound/경상남도/진주.mp3');
    audio.play();
   }else if(locations[21][0] == location){
    var audio = new Audio('vosound/경상남도/하동.mp3');
    audio.play();
   }else if(locations[22][0] == location){
    var audio = new Audio('vosound/경상남도/남해.mp3');
    audio.play();
   }else if(locations[23][0] == location){
    var audio = new Audio('vosound/경상남도/사천.mp3');
    audio.play();
   }else if(locations[24][0] == location){
    var audio = new Audio('vosound/경상남도/고성.mp3');
    audio.play();
   }else if(locations[25][0] == location){
    var audio = new Audio('vosound/경상남도/통영.mp3');
    audio.play();                   //경상남도
   }else if(locations[26][0] == location){
    var audio = new Audio('vosound/경상북도/청도.mp3');
    audio.play();
   }else if(locations[27][0] == location){
    var audio = new Audio('vosound/경상북도/경주.mp3');
    audio.play();
   }else if(locations[28][0] == location){
    var audio = new Audio('vosound/경상북도/경산.mp3');
    audio.play();
   }else if(locations[29][0] == location){
    var audio = new Audio('vosound/경상북도/영천.mp3');
    audio.play();
   }else if(locations[30][0] == location){
    var audio = new Audio('vosound/경상북도/포항.mp3');
    audio.play();
   }else if(locations[31][0] == location){
    var audio = new Audio('vosound/경상북도/청송.mp3');
    audio.play();
   }else if(locations[32][0] == location){
    var audio = new Audio('vosound/경상북도/영덕.mp3');
    audio.play();
   }else if(locations[33][0] == location){
    var audio = new Audio('vosound/경상북도/영양.mp3');
    audio.play();
   }else if(locations[34][0] == location){
    var audio = new Audio('vosound/경상북도/울진.mp3');
    audio.play();
   }else if(locations[35][0] == location){
    var audio = new Audio('vosound/경상북도/봉화.mp3');
    audio.play();
   }else if(locations[36][0] == location){
    var audio = new Audio('vosound/경상북도/안동.mp3');
    audio.play();
   }else if(locations[37][0] == location){
    var audio = new Audio('vosound/경상북도/의성.mp3');
    audio.play();
   }else if(locations[38][0] == location){
    var audio = new Audio('vosound/경상북도/군위.mp3');
    audio.play();
   }else if(locations[39][0] == location){
    var audio = new Audio('vosound/경상북도/칠곡.mp3');
    audio.play();
   }else if(locations[40][0] == location){
    var audio = new Audio('vosound/경상북도/구미.mp3');
    audio.play();
   }else if(locations[41][0] == location){
    var audio = new Audio('vosound/경상북도/성주.mp3');
    audio.play();
   }else if(locations[42][0] == location){
    var audio = new Audio('vosound/경상북도/고령.mp3');
    audio.play();
   }else if(locations[43][0] == location){
    var audio = new Audio('vosound/경상북도/김천.mp3');
    audio.play();
   }else if(locations[44][0] == location){
    var audio = new Audio('vosound/경상북도/상주.mp3');
    audio.play();
   }else if(locations[45][0] == location){
    var audio = new Audio('vosound/경상북도/문경.mp3');
    audio.play();
   }else if(locations[46][0] == location){
    var audio = new Audio('vosound/경상북도/영주.mp3');
    audio.play();
   }else if(locations[47][0] == location){
    var audio = new Audio('vosound/경상북도/예천.mp3');
    audio.play();                 //경상북도
   }else if(locations[48][0] == location){
    var audio = new Audio('vosound/전라남도/광양.mp3');
    audio.play();
   }else if(locations[49][0] == location){
    var audio = new Audio('vosound/전라남도/여수.mp3');
    audio.play();
   }else if(locations[50][0] == location){
    var audio = new Audio('vosound/전라남도/순천.mp3');
    audio.play();
   }else if(locations[51][0] == location){
    var audio = new Audio('vosound/전라남도/구례.mp3');
    audio.play();
   }else if(locations[52][0] == location){
    var audio = new Audio('vosound/전라남도/곡성.mp3');
    audio.play();
   }else if(locations[53][0] == location){
    var audio = new Audio('vosound/전라남도/고흥.mp3');
    audio.play();
   }else if(locations[54][0] == location){
    var audio = new Audio('vosound/전라남도/보성.mp3');
    audio.play();
   }else if(locations[55][0] == location){
    var audio = new Audio('vosound/전라남도/화순.mp3');
    audio.play();
   }else if(locations[56][0] == location){
    var audio = new Audio('vosound/전라남도/장흥.mp3');
    audio.play();
   }else if(locations[57][0] == location){
    var audio = new Audio('vosound/전라남도/강진.mp3');
    audio.play();
   }else if(locations[58][0] == location){
    var audio = new Audio('vosound/전라남도/완도.mp3');
    audio.play();
   }else if(locations[59][0] == location){
    var audio = new Audio('vosound/전라남도/해남.mp3');
    audio.play();
   }else if(locations[60][0] == location){
    var audio = new Audio('vosound/전라남도/진도.mp3');
    audio.play();
   }else if(locations[61][0] == location){
    var audio = new Audio('vosound/전라남도/목포.mp3');
    audio.play();
   }else if(locations[62][0] == location){
    var audio = new Audio('vosound/전라남도/신안.mp3');
    audio.play();
   }else if(locations[53][0] == location){
    var audio = new Audio('vosound/전라남도/무안.mp3');
    audio.play();
   }else if(locations[54][0] == location){
    var audio = new Audio('vosound/전라남도/영암.mp3');
    audio.play();
   }else if(locations[55][0] == location){
    var audio = new Audio('vosound/전라남도/나주.mp3');
    audio.play();
   }else if(locations[56][0] == location){
    var audio = new Audio('vosound/전라남도/함평.mp3');
    audio.play();
   }else if(locations[57][0] == location){
    var audio = new Audio('vosound/전라남도/영광.mp3');
    audio.play();
   }else if(locations[58][0] == location){
    var audio = new Audio('vosound/전라남도/장성.mp3');
    audio.play();
   }else if(locations[59][0] == location){
    var audio = new Audio('vosound/전라남도/담양.mp3');
    audio.play();                      //전라남도
   }else if(locations[60][0] == location){
    var audio = new Audio('vosound/전라북도/무주.mp3');
    audio.play();                    
   }else if(locations[61][0] == location){
    var audio = new Audio('vosound/전라북도/진안.mp3');
    audio.play();                    
   }else if(locations[62][0] == location){
    var audio = new Audio('vosound/전라북도/장수.mp3');
    audio.play();                    
   }else if(locations[63][0] == location){
    var audio = new Audio('vosound/전라북도/남원.mp3');
    audio.play();                    
   }else if(locations[64][0] == location){
    var audio = new Audio('vosound/전라북도/순창.mp3');
    audio.play();                    
   }else if(locations[65][0] == location){
    var audio = new Audio('vosound/전라북도/임실.mp3');
    audio.play();                    
   }else if(locations[66][0] == location){
    var audio = new Audio('vosound/전라북도/정읍.mp3');
    audio.play();                    
   }else if(locations[67][0] == location){
    var audio = new Audio('vosound/전라북도/고창.mp3');
    audio.play();                    
   }else if(locations[68][0] == location){
    var audio = new Audio('vosound/전라북도/부안.mp3');
    audio.play();                    
   }else if(locations[69][0] == location){
    var audio = new Audio('vosound/전라북도/남원.mp3');
    audio.play();                    
   }else if(locations[70][0] == location){
    var audio = new Audio('vosound/전라북도/군산.mp3');
    audio.play();                    
   }else if(locations[71][0] == location){
    var audio = new Audio('vosound/전라북도/익산.mp3');
    audio.play();                    
   }else if(locations[72][0] == location){
    var audio = new Audio('vosound/전라북도/전주.mp3');
    audio.play();                    
   }else if(locations[73][0] == location){
    var audio = new Audio('vosound/전라북도/완주.mp3');
    audio.play();                    //전라북도
   }else if(locations[74][0] == location){
    var audio = new Audio('vosound/충청남도/천안.mp3');
    audio.play();                    
   }else if(locations[75][0] == location){
    var audio = new Audio('vosound/충청남도/아산.mp3');
    audio.play();                    
   }else if(locations[76][0] == location){
    var audio = new Audio('vosound/충청남도/당진.mp3');
    audio.play();                    
   }else if(locations[77][0] == location){
    var audio = new Audio('vosound/충청남도/태안.mp3');
    audio.play();                    
   }else if(locations[78][0] == location){
    var audio = new Audio('vosound/충청남도/서산.mp3');
    audio.play();                    
   }else if(locations[79][0] == location){
    var audio = new Audio('vosound/충청남도/예산.mp3');
    audio.play();                    
   }else if(locations[80][0] == location){
    var audio = new Audio('vosound/충청남도/홍성.mp3');
    audio.play();                    
   }else if(locations[81][0] == location){
    var audio = new Audio('vosound/충청남도/보령.mp3');
    audio.play();                    
   }else if(locations[82][0] == location){
    var audio = new Audio('vosound/충청남도/청양.mp3');
    audio.play();                    
   }else if(locations[83][0] == location){
    var audio = new Audio('vosound/충청남도/서천.mp3');
    audio.play();                    
   }else if(locations[84][0] == location){
    var audio = new Audio('vosound/충청남도/부여.mp3');
    audio.play();                    
   }else if(locations[85][0] == location){
    var audio = new Audio('vosound/충청남도/공주.mp3');
    audio.play();                    
   }else if(locations[86][0] == location){
    var audio = new Audio('vosound/충청남도/계룡.mp3');
    audio.play();                    
   }else if(locations[87][0] == location){
    var audio = new Audio('vosound/충청남도/논산.mp3');
    audio.play();                    
   }else if(locations[88][0] == location){
    var audio = new Audio('vosound/충청남도/금산.mp3');
    audio.play();               //충청남도             
   }else if(locations[89][0] == location){
    var audio = new Audio('vosound/충청북도/영동.mp3');
    audio.play();                    
   }else if(locations[90][0] == location){
    var audio = new Audio('vosound/충청북도/옥천.mp3');
    audio.play();                    
   }else if(locations[91][0] == location){
    var audio = new Audio('vosound/충청북도/보은.mp3');
    audio.play();                    
   }else if(locations[92][0] == location){
    var audio = new Audio('vosound/충청북도/청주.mp3');
    audio.play();                    
   }else if(locations[93][0] == location){
    var audio = new Audio('vosound/충청북도/증평.mp3');
    audio.play();                    
   }else if(locations[94][0] == location){
    var audio = new Audio('vosound/충청북도/괴산.mp3');
    audio.play();                    
   }else if(locations[95][0] == location){
    var audio = new Audio('vosound/충청북도/증평.mp3');
    audio.play();                    
   }else if(locations[96][0] == location){
    var audio = new Audio('vosound/충청북도/진천.mp3');
    audio.play();                    
   }else if(locations[97][0] == location){
    var audio = new Audio('vosound/충청북도/음성.mp3');
    audio.play();                    
   }else if(locations[98][0] == location){
    var audio = new Audio('vosound/충청북도/충주.mp3');
    audio.play();                    
   }else if(locations[99][0] == location){
    var audio = new Audio('vosound/충청북도/제천.mp3');
    audio.play();                    
   }else if(locations[100][0] == location){
    var audio = new Audio('vosound/충청북도/단양.mp3');
    audio.play();                         //충청북도
   }else if(locations[101][0] == location){
    var audio = new Audio('vosound/강원도/태백.mp3');
    audio.play();                    
   }else if(locations[102][0] == location){
    var audio = new Audio('vosound/강원도/삼척.mp3');
    audio.play();                    
   }else if(locations[103][0] == location){
    var audio = new Audio('vosound/강원도/동해.mp3');
    audio.play();                    
   }else if(locations[104][0] == location){
    var audio = new Audio('vosound/강원도/정선.mp3');
    audio.play();                    
   }else if(locations[105][0] == location){
    var audio = new Audio('vosound/강원도/영월.mp3');
    audio.play();                    
   }else if(locations[106][0] == location){
    var audio = new Audio('vosound/강원도/평창.mp3');
    audio.play();                    
   }else if(locations[107][0] == location){
    var audio = new Audio('vosound/강원도/원주.mp3');
    audio.play();                    
   }else if(locations[108][0] == location){
    var audio = new Audio('vosound/강원도/횡성.mp3');
    audio.play();                    
   }else if(locations[109][0] == location){
    var audio = new Audio('vosound/강원도/강릉.mp3');
    audio.play();                    
   }else if(locations[110][0] == location){
    var audio = new Audio('vosound/강원도/홍천.mp3');
    audio.play();                    
   }else if(locations[111][0] == location){
    var audio = new Audio('vosound/강원도/춘천.mp3');
    audio.play();                    
   }else if(locations[112][0] == location){
    var audio = new Audio('vosound/강원도/화천.mp3');
    audio.play();                    
   }else if(locations[113][0] == location){
    var audio = new Audio('vosound/강원도/철원.mp3');
    audio.play();                    
   }else if(locations[114][0] == location){
    var audio = new Audio('vosound/강원도/양구.mp3');
    audio.play();                    
   }else if(locations[115][0] == location){
    var audio = new Audio('vosound/강원도/인제.mp3');
    audio.play();                    
   }else if(locations[116][0] == location){
    var audio = new Audio('vosound/강원도/고성.mp3');
    audio.play();                    
   }else if(locations[117][0] == location){
    var audio = new Audio('vosound/강원도/속초.mp3');
    audio.play();                    
   }else if(locations[118][0] == location){
    var audio = new Audio('vosound/강원도/양양.mp3');
    audio.play();                        //강원도
   }else if(locations[119][0] == location){
    var audio = new Audio('vosound/경기도/평택.mp3');
    audio.play();                    
   }else if(locations[120][0] == location){
    var audio = new Audio('vosound/경기도/안성.mp3');
    audio.play();                    
   }else if(locations[121][0] == location){
    var audio = new Audio('vosound/경기도/여주.mp3');
    audio.play();                    
   }else if(locations[122][0] == location){
    var audio = new Audio('vosound/경기도/이천.mp3');
    audio.play();                    
   }else if(locations[123][0] == location){
    var audio = new Audio('vosound/경기도/용인.mp3');
    audio.play();                    
   }else if(locations[124][0] == location){
    var audio = new Audio('vosound/경기도/오산.mp3');
    audio.play();                    
   }else if(locations[125][0] == location){
    var audio = new Audio('vosound/경기도/화성.mp3');
    audio.play();                    
   }else if(locations[126][0] == location){
    var audio = new Audio('vosound/경기도/안산.mp3');
    audio.play();                    
   }else if(locations[127][0] == location){
    var audio = new Audio('vosound/경기도/수원.mp3');
    audio.play();                    
   }else if(locations[128][0] == location){
    var audio = new Audio('vosound/경기도/군포.mp3');
    audio.play();                    
   }else if(locations[129][0] == location){
    var audio = new Audio('vosound/경기도/시흥.mp3');
    audio.play();                    
   }else if(locations[130][0] == location){
    var audio = new Audio('vosound/경기도/부천.mp3');
    audio.play();                    
   }else if(locations[131][0] == location){
    var audio = new Audio('vosound/경기도/광명.mp3');
    audio.play();                    
   }else if(locations[132][0] == location){
    var audio = new Audio('vosound/경기도/안양.mp3');
    audio.play();                    
   }else if(locations[133][0] == location){
    var audio = new Audio('vosound/경기도/의왕.mp3');
    audio.play();                    
   }else if(locations[134][0] == location){
    var audio = new Audio('vosound/경기도/과천.mp3');
    audio.play();                    
   }else if(locations[135][0] == location){
    var audio = new Audio('vosound/경기도/광주.mp3');
    audio.play();                    
   }else if(locations[136][0] == location){
    var audio = new Audio('vosound/경기도/성남.mp3');
    audio.play();                    
   }else if(locations[137][0] == location){
    var audio = new Audio('vosound/경기도/하남.mp3');
    audio.play();                    
   }else if(locations[138][0] == location){
    var audio = new Audio('vosound/경기도/구리.mp3');
    audio.play();                    
   }else if(locations[139][0] == location){
    var audio = new Audio('vosound/경기도/양평.mp3');
    audio.play();                    
   }else if(locations[140][0] == location){
    var audio = new Audio('vosound/경기도/가평.mp3');
    audio.play();                    
   }else if(locations[141][0] == location){
    var audio = new Audio('vosound/경기도/포천.mp3');
    audio.play();                    
   }else if(locations[142][0] == location){
    var audio = new Audio('vosound/경기도/연천.mp3');
    audio.play();                    
   }else if(locations[143][0] == location){
    var audio = new Audio('vosound/경기도/양주.mp3');
    audio.play();                    
   }else if(locations[144][0] == location){
    var audio = new Audio('vosound/경기도/파주.mp3');
    audio.play();                    
   }else if(locations[145][0] == location){
    var audio = new Audio('vosound/경기도/고양.mp3');
    audio.play();                    
   }else if(locations[146][0] == location){
    var audio = new Audio('vosound/경기도/김포.mp3');
    audio.play();                    
   }else if(locations[147][0] == location){
    var audio = new Audio('vosound/경기도/남양주.mp3');
    audio.play();                    
   }else if(locations[148][0] == location){
    var audio = new Audio('vosound/경기도/의정부.mp3');
    audio.play();                    
   }else if(locations[149][0] == location){
    var audio = new Audio('vosound/경기도/동두천.mp3');
    audio.play();                             //경기도            
   }else if(locations[150][0] == location){
    var audio = new Audio('vosound/제주도/서귀포.mp3');
    audio.play();                    
   }else if(locations[151][0] == location){
    var audio = new Audio('vosound/제주도/제주.mp3');
    audio.play();                             //제주도         
   }                           
}

 
