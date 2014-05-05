function realNamePop() {
    var URL ="http://www.siren24.com/siren24/sst/name/jsp/name02p_j01.jsp"; 
    var status = "toolbar=no,directories=no,scrollbars=no,resizable=no,status=no,menubar=no,width= 640, height= 480, top=0,left=20"; 
    var newChild = window.open(URL,"",status); 			
    if (!newChild) {
        alert("안내 페이지가 XP SP2의 팝업 차단으로 인하여 정상적으로 출력되지 못하였습니다. ");
    }		
}
function cal_byte(aquery, objcheck, maxCount, CounterViewer) {
    var tmpStr;
    var temp = 0;
    var tcount;
    tcount = 0;
    tmpStr = new String(aquery);
    tcount = getStringLength(tmpStr);

    try {
        if (CounterViewer != null && CounterViewer != "")
            document.getElementById(CounterViewer).innerHTML = "(" + tcount + "/" + maxCount + ")";
    }
    catch (e) { }
    if (parseInt(tcount) > parseInt(maxCount)) {
        reserve = tcount - maxCount;
        alert("내용은 " + maxCount + "바이트 이상은 저장하실수 없습니다.\r\n 쓰신 내용을 " + reserve + "바이트가 초과되었습니다.\r\n 초과된 부분은 자동으로 삭제됩니다.");
        nets_check(objcheck.value, objcheck, maxCount, CounterViewer);
        return;
    }
    document.getElementById(CounterViewer).innerHTML = "(" + tcount + "/" + maxCount + ")";
}
function nets_check(aquery, objcheck, maxCount, CounterViewer) {
    var tmpStr;
    var tcount;
    tcount = 0;
    tmpStr = new String(aquery);
    tmpStr = cutString(tmpStr, maxCount);
    objcheck.value = tmpStr;
    cal_byte(tmpStr, objcheck, maxCount, CounterViewer);
}
//문자열의 byte 크기 반환 : 김진훈 (2011-02-22)
function getStringLength(val) {
	// 입력받은 문자열을 escape() 를 이용하여 변환한다.
	// 변환한 문자열 중 유니코드(한글 등)는 공통적으로 %uxxxx로 변환된다.
	var temp_estr = escape(val);
	var s_index   = 0;
	var e_index   = 0;
	var temp_str  = "";
	var cnt       = 0;

	// 문자열 중에서 유니코드를 찾아 제거하면서 갯수를 센다.
	while ((e_index = temp_estr.indexOf("%u", s_index)) >= 0)  // 제거할 문자열이 존재한다면
	{
		temp_str += temp_estr.substring(s_index, e_index);
		s_index = e_index + 6;
		cnt ++;
	}

	temp_str += temp_estr.substring(s_index);
	temp_str = unescape(temp_str);  // 원래 문자열로 바꾼다.

	// 유니코드는 2바이트 씩 계산하고 나머지는 1바이트씩 계산한다.
	return ((cnt * 2) + temp_str.length) + "";
}
//문자열을 byte로 자르기 : 김진훈 (2011-02-22)
function cutString(str, len) {
    	var l = 0;
	for (var i=0; i<str.length; i++) {
		l += (str.charCodeAt(i) > 128) ? 2 : 1;
		if (l > len) return str.substring(0,i);
	}
	return str;
}
function GetCookie(name) {
    var nameOfCookie = name + "=";
    var x = 0;
    while (x <= document.cookie.length) {
	    var y = (x+nameOfCookie.length);
	    if ( document.cookie.substring( x, y ) == nameOfCookie ) {
		    if ((endOfCookie=document.cookie.indexOf( ";", y )) == -1) {
			    endOfCookie = document.cookie.length;
            }
		    return unescape( document.cookie.substring( y, endOfCookie ) );
	    }
	    x = document.cookie.indexOf( " ", x ) + 1;
	    if (x == 0) {
		    break; 
        }
    }
    return "";
}
function SetCookie( name, value) {
    document.cookie = name + '=' + escape( value ) + '; path=/; domain=estsoft.co.kr;'
}
function SetCookieOne(name,value) {
    document.cookie = name + "=" + escape(value) +";";
}
function getObject(id) {
    return document.getElementById(id);
}

// Prototype
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
};

/* Checker */
// is null or Empty
String.prototype.IsNullOrEmpty = function() {
    var strText = this.trim();
    for (var i = 0; i < strText.length; i++) {
        if ((strText.charAt(i) != "\t") && (strText.charAt(i) != "\n") && (strText.charAt(i) != "\r")) { return false; }
    }
    return true;
};
String.prototype.remove = function(regix) { return (regix == null) ? this : eval("this.replace(/[" + regix.meta() + "]/g, \"\")"); }
String.prototype.IsPassWord = function() { return (/^[A-Za-z0-9`\-=\\\[\];',\./~!@#\$%\^&\*\(\)_\+|\{\}:"<>\?]{6,13}$/).test(this.remove(arguments[0]));}

// is Email
String.prototype.IsEmail = function() {
    return (/[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*@[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*/).test(this.remove(arguments[0]));
};