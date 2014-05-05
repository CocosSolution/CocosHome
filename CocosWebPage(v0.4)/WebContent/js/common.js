var lastEvent;
function SetDivHidden(dvid) {
    document.getElementById(dvid).style.display = "none";
}
function SetDivShow(dvid) {
    
    document.getElementById(dvid).style.display = "block";
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
function getStringLength(str) {
    var len = 0;
    for(var i=0;i<str.length;i++) {
        if(str.charCodeAt(i) > 128)
            len += 2;
        else if(str.charCodeAt(i) == 13)
        {}
        else if(str.charCodeAt(i) == 10)
            len += 2;
        else {
            len += 1;
        }        
        //len += (val.charCodeAt(i) > 128)? 2: 1;
    }
    return len;
}

//문자열을 byte로 자르기 : 김진훈 (2011-02-22)
function cutString(str, maxLen) {
    	var len = 0;
	for (var i=0; i<str.length; i++) {
		if(str.charCodeAt(i) > 128)
            len += 2;
        else if(str.charCodeAt(i) == 13)
        {}
        else if(str.charCodeAt(i) == 10)
            len += 2;
        else {
            len += 1;
        }  
		if (len > maxLen) return str.substring(0,i);
	}
	return str;
}
function addListenerToKeyType(objtextArea, maxTxtinput, counterViewer) {
    // 호환성을 위해 JQuery로 변경 : 김진훈 (2011-02-18)
    if(objtextArea) {
        if($.browser.mozilla) { //파폭 한글 키입력 이벤트 오류...
            $(objtextArea).bind("input", function (event) { lastEvent = event; setTimeout("UpdateCalCheck(lastEvent)",100); });
        }
        else {
            $(objtextArea).bind("keydown", function (event) { UpdateCalCheck(event); });
            $(objtextArea).bind("keyup", function (event) { UpdateCalCheck(event); });
        }
    }
    try {
        objtextArea.setAttribute("MaxCount", maxTxtinput);
        if (counterViewer != null && counterViewer != "")
            objtextArea.setAttribute("CounterViewer", counterViewer);
        else
            objtextArea.setAttribute("CounterViewer", "");
    }
    catch (e) { }
}

String.prototype.trim = function() {
    var str = this.replace(/(\s+$)/g, "");
    return str.replace(/(^\s*)/g, "");
}

function FieldValidationHelper(obj, msg) {
    if (obj.value.trim() == "") {
        obj.focus();
        alert(msg);
        return false;
    }
    return true;
}

//★★★★★★ 마우스 Swap ★★★★★★//	

var sSelect = ""; // 왼쪽메뉴 전역변수
var sSelectHead = ""; // 헤드메뉴 전역변수

function InitialMenu() {
    var sWbsNum = location.search.replace("?wbs=", "");

    var sLeftCode = GetCodeTrans(sWbsNum.substr(0, 5));
    var sHeadCode = GetHeadCodeTrans(sWbsNum);

    // left	
    var sLeftImg = "document.all.btn_" + sLeftCode;
    sLeftImg = eval(sLeftImg);

    // head
    var sHeadImg = "document.all.btn_" + sHeadCode;
    sHeadImg = eval(sHeadImg);

    if (sLeftImg == "[object]") {
        sLeftImg.src = "img/Include/" + sLeftCode + "2.gif";
        sSelect = sLeftCode;
    }

    if (sHeadImg == "[object]") {
        sHeadImg.src = "img/Include/" + sHeadCode + "2.gif";
        sSelectHead = sHeadCode;
    }

}

function GetHeadCodeTrans(sWbsNum) {
    sWbsNum = sWbsNum.substr(0, 3);
    var sWbsName = sWbsNum.substr(0, 3);

    if (sWbsNum == "1.0") {
        sWbsName = "Nav_Intro";
    }
    else if (sWbsNum == "2.0") {
        sWbsName = "Nav_Press";
    }
    else if (sWbsNum == "3.0") {
        sWbsName = "Nav_Product";
    }
    else if (sWbsNum == "4.0") {
        sWbsName = "Nav_IR";
    }
    else if (sWbsNum == "5.0") {
        sWbsName = "Nav_Recruit";
    }
    else if (sWbsNum == "6.0") {
        sWbsName = "Nav_Guide";
    }
    else if (sWbsNum == "6.0") {
        sWbsName = "Nav_ETC";
    }
    else {
        sWbsName = "Nav_Guide";
    }
    return sWbsName;
}
function GetCodeTrans(sWbsNum) {
    var sWbsName = "";

    /* ★★★★★★★★★★ 회사소개 룸 ★★★★★★★★★★ */
    if (sWbsNum == "1.0.1") {
        sWbsName = "Intro_About";
    }
    else if (sWbsNum == "1.0.2") {
        sWbsName = "Intro_CEO";
    }
    else if (sWbsNum == "1.0.3") {
        sWbsName = "Intro_Biz";
    }
    else if (sWbsNum == "1.0.4") {
        sWbsName = "Intro_Company";
    }
    else if (sWbsNum == "1.0.5") {
        sWbsName = "Intro_Prize";
    }
    else if (sWbsNum == "1.0.6") {
        sWbsName = "Intro_Partner";
    }
    else if (sWbsNum == "1.0.7") {
        sWbsName = "Intro_CI";
    }
    else if (sWbsNum == "1.0.8") {
        sWbsName = "Intro_Location";
    }
    /* ★★★★★★★★★★ 프레스 룸 ★★★★★★★★★★ */
    else if (sWbsNum == "2.0.1") {
        sWbsName = "Press_Product";
    }
    else if (sWbsNum == "2.0.2") {
        sWbsName = "Press_Scrap";
    }
    else if (sWbsNum == "2.0.3") {
        sWbsName = "Press_Media";
    }
    else if (sWbsNum == "2.0.4") {
        sWbsName = "Press_Event";
    }
    /*-- ★★★★★★★★★★ 제품소개 ★★★★★★★★★★ */
    else if (sWbsNum == "3.0.1") {
        sWbsName = "Product_AL";
    }
    else if (sWbsNum == "3.0.2") {
        sWbsName = "Product_Indy";
    }
    else if (sWbsNum == "3.0.3") {
        sWbsName = "Product_Cabal";
    }
    else if (sWbsNum == "3.0.4") {
        sWbsName = "Product_Old";
    }
    else if (sWbsNum == "3.0.5") {
        sWbsName = "Product_History";
    }
    else if (sWbsNum == "3.0.6") {
        sWbsName = "Product_ALX";
    }
    else if (sWbsNum == "3.0.8") {
        sWbsName = "Product_Biz";
    }

    /* ★★★★★★★★★★ 투자정보 ★★★★★★★★★★ */
    else if (sWbsNum == "4.0.1") {
        sWbsName = "IR_Finance";
    }
    else if (sWbsNum == "4.0.2") {
        sWbsName = "IR_Quarter";
    }
    else if (sWbsNum == "4.0.3") {
        sWbsName = "IR_Report";
    }
    else if (sWbsNum == "4.0.4") {
        sWbsName = "IR_Notice";
    }
    else if (sWbsNum == "4.0.5") {
        sWbsName = "IR_Stock";
    }
    else if (sWbsNum == "4.0.6") {
        sWbsName = "IR_FAQ";
    }
    else if (sWbsNum == "4.0.7") {
        sWbsName = "IR_QNA";
    }
    /* ★★★★★★★★★★ 인재채용 ★★★★★★★★★★ */
    else if (sWbsNum == "5.0.1") {
        sWbsName = "Recruit_Human";
    }
    else if (sWbsNum == "5.0.2") {
        sWbsName = "Recruit_Welfare";
    }
    else if (sWbsNum == "5.0.3") {
        sWbsName = "Recruit_Notice";
    }
    else if (sWbsNum == "5.0.4") {
        sWbsName = "Recruit_Apply";
    }
    else if (sWbsNum == "5.0.5") {
        sWbsName = "Recruit_Result";
    }
    else if (sWbsNum == "5.0.6") {
        sWbsName = "Recruit_FAQ";
    }
    else if (sWbsNum == "5.0.7") {
        sWbsName = "Recruit_QNA";
    }
    /* ★★★★★★★★★★ 안내데스크 ★★★★★★★★★★ */
    else if (sWbsNum == "6.0.1") {
        sWbsName = "Guide_Center";
    }
    else if (sWbsNum == "6.0.2") {
        sWbsName = "Guide_IR";
    }
    else if (sWbsNum == "6.0.3") {
        sWbsName = "Guide_Recruit";
    }
    else if (sWbsNum == "6.0.4") {
        sWbsName = "Guide_Joint";
    }
    else if (sWbsNum == "6.0.5") {
        sWbsName = "Guide_Mail";
    }
    /* ★★★★★★★★★★ 기타(ETC) ★★★★★★★★★★ */
    else if (sWbsNum == "7.0.1") {
        sWbsName = "ETC_Location";
    }
    else if (sWbsNum == "7.0.2") {
        sWbsName = "ETC_Map";
    }
    /* ★★★★★★★★★★ 관리자(Admin) ★★★★★★★★★★ */
    else {
        sWbsName = "Guide_Mail";
    }

    return sWbsName;
}

function move(id, mode) {
    var sImg = "document.all.btn_" + id;
    sImg = eval(sImg);

    if (mode == "click") {
        document.cookie = "SUB" + "=" + id + "; path=/; domain=" + "estsoft.com";
    }
    else if (mode == 'over') {
        sImg.src = "img/Include/" + id + "2.gif";
    }
    else if (mode == 'out') {
        if (id == sSelect) {
            sImg.src = "img/Include/" + id + "2.gif";
        }
        else {
            sImg.src = "img/Include/" + id + ".gif";
        }
    }
    else {
        //alert("[에러01]관리자에게 문의해 주십시오.");
    }
}

function head_move(id, mode) {
    var sImg = "document.all.btn_" + id;
    sImg = eval(sImg);

    if (mode == "click") {
        document.cookie = "SUB" + "=" + id + "; path=/; domain=" + "estsoft.com";
    }
    else if (mode == 'over') {
        sImg.src = "img/Include/" + id + "2.gif";
    }
    else if (mode == 'out') {
        if (id == sSelectHead) {
            sImg.src = "img/Include/" + id + "2.gif";
        }
        else {
            sImg.src = "img/Include/" + id + ".gif";
        }
    }
    else {
        //alert("[에러01]관리자에게 문의해 주십시오.");
    }
}

function move2(id, mode) {
    var sImg = "document.all.btn_" + id;
    sImg = eval(sImg);

    if (mode == "click") {
        document.cookie = "NAV" + "=" + id + "; path=/; domain=" + "estsoft.com";
    }
    else if (mode == 'over') {
        sImg.src = "img/Include/" + id + "2.gif";
    }
    else if (mode == 'out') {
        if (id == sSelect) {
            sImg.src = "img/Include/" + id + "2.gif";
        }
        else {
            sImg.src = "img/Include/" + id + ".gif";
        }
    }
    else {
        //alert("[에러01]관리자에게 문의해 주십시오.");
    }
}

function Initial_Button() {
    var sButton = "";
    sButton = eval("document.all.btn_1Num");
    sButton.src = "./img/Shop/btn02.gif";

    sButton = eval("document.all.btn_2Num");
    sButton.src = "./img/Shop/btn02.gif";

    sButton = eval("document.all.btn_3Num");
    sButton.src = "./img/Shop/btn02.gif";

    sButton = eval("document.all.btn_4Num");
    sButton.src = "./img/Shop/btn02.gif";
}

function select_BackColor(id) {
    var bgColor = "";
    if (id == "1Num") {
        bgColor = "4EB6B3";
    }
    else if (id == "2Num") {
        bgColor = "B6B64E";
    }
    else if (id == "3Num") {
        bgColor = "5079B3";
    }
    else if (id == "4Num") {
        bgColor = "B64E80";
    }
    else {
        //alert("[에러02]관리자에게 문의해 주십시오.");
        //bgColor = "white"
    }
    return bgColor;
}


//★★★★★★ Old Version 마우스 Swap ★★★★★★//

function MM_swapImgRestore() { //v3.0
    var i, x, a = document.MM_sr; for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}

function MM_preloadImages() { //v3.0
    var d = document; if (d.images) {
        if (!d.MM_p) d.MM_p = new Array();
        var i, j = d.MM_p.length, a = MM_preloadImages.arguments; for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0) { d.MM_p[j] = new Image; d.MM_p[j++].src = a[i]; } 
    }
}

function MM_findObj(n, d) { //v4.01
    var p, i, x; if (!d) d = document; if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document; n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n]; for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
    if (!x && d.getElementById) x = d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
    var i, j = 0, x, a = MM_swapImage.arguments; document.MM_sr = new Array; for (i = 0; i < (a.length - 2); i += 3)
        if ((x = MM_findObj(a[i])) != null) { document.MM_sr[j++] = x; if (!x.oSrc) x.oSrc = x.src; x.src = a[i + 2]; }
}

//★★★★★★ 서브 레이어 ★★★★★★//
/* 
function bluring()
{ 
if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG") document.body.focus();
} 
document.onfocusin=bluring;
*/

//★★★★★★ 서브 레이어 ★★★★★★//


var CurrentMenu = "";
var HideTimerHandle = "";
var MainMenu = ["intro", "Press", "Product", "IR", "Recruit", "Guide"];

function na_hide_layer(lname, JIT) {
    if (JIT == 1) {
        if (document.layers)
            document.layers[lname].visibility = 'hide'
        if (document.all)
            document.all(lname).style.visibility = 'hidden'
    } else {
        HideTimerHandle = setTimeout("na_hide_layer('" + lname + "', 1);", 700);
    }
}

function na_show_layer(lname) {
    if (document.layers)
        document.layers[lname].visibility = 'show'
    if (document.all)
        document.all(lname).style.visibility = 'visible'
}

function NavigateMenu(name) {

    clearInterval(HideTimerHandle);

    for (i = 0; i < MainMenu.length; i++) {
        if (MainMenu[i] != name) {
            na_hide_layer(MainMenu[i], 1);
        }
    }
    na_show_layer(name);
    CurrentMenu = name;
}

//★★★★★★ 쿠키찾기 ★★★★★★//
function GetCookie(name) {
    var nameOfCookie = name + "=";
    var x = 0;
    while (x <= document.cookie.length) {
        var y = (x + nameOfCookie.length);
        if (document.cookie.substring(x, y) == nameOfCookie) {
            if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
                endOfCookie = document.cookie.length;
            return unescape(document.cookie.substring(y, endOfCookie));
        }
        x = document.cookie.indexOf(" ", x) + 1;
        if (x == 0)
            break;
    }
    return "";
}

//★★★★★★ Move Web Site ★★★★★★//
function MoveSite(nation) {
    SetCookie("lang", nation, 90);

    if (nation == "en") {
        top.location.href = "http://www.estsoft.com/en";
    }
    else if (nation == "ko") {
        top.location.href = "http://www.estsoft.com/ko";
    }
    else {
        top.location.href = "http://www.estsoft.com/ko";
    }

}
function SetCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + "; domain=" + "estsoft.co.kr";
}

//★★★★★★ 게시판 마우스 bgcolor 변경 ★★★★★★//
function ChangeOverBgColor(sID, sCategory) {
    if (sCategory != null) {
        sCategory = sCategory.toLowerCase();
        if (sCategory == "guide") {
            sID.style.backgroundColor = "#fdedf6";
        }
        else if (sCategory == "ir") {
            sID.style.backgroundColor = "#fff8f1";
        }
        else if (sCategory == "recruit") {
            sID.style.backgroundColor = "#f6feed";
        }
        else if (sCategory == "press") {
            sID.style.backgroundColor = "#e1fbfe";
        }
        else if (sCategory == "ceo") {
            sID.style.backgroundColor = "#E9EBFE";
        }
        else {
            sID.style.backgroundColor = "#eeeeee";
        }
    }
}

function ChangeOutBgColor(sID) {
    sID.style.backgroundColor = "white";
}


//★★★★★★ 오로지 숫자만 입력가능한 ... ★★★★★★//
function OnlyNumericCheck(thisone) {
    var tempnum = thisone.value;
    for (i = 0; i <= tempnum.length; i++) {
        if (tempnum.charCodeAt(i) < 48 || tempnum.charCodeAt(i) > 57) {
            thisone.value = tempnum.substring(0, i);
            break;
        }
    }
}

//★★★★★★ 날짜 & 숫자 관련 스크립트 ... ★★★★★★//
//YYYY-MM-DD형식의 날짜 유효성 체크 스크립트 function
function DateCheck(thisone) {
    var obj = thisone.value.split("-");

    if (obj.length == 1 && thisone.value.length == 8) {
        var yyyy = thisone.value.substring(0, 4);
        var mm = thisone.value.substring(4, 6);
        var dd = thisone.value.substring(6, 8);

        if (mm > 0 && mm < 13 && dd > 0 && dd < 32) {
            if (dd > get_Day(yyyy, mm)) {
                thisone.value = "";
                return;
            }
            thisone.value = yyyy + "-" + mm + "-" + dd;
        }
        else {
            thisone.value = "";
            return;
        }
    }
    else if (obj.length == 3) {
        if (obj[0] >= 0 && obj[0] < 10000 && obj[0].length == 4 && obj[1] > 0 && obj[1] < 13 && obj[1].length == 2 && obj[2] > 0 && obj[2] < 32 && obj[2].length == 2) {
            if (obj[2] > get_Day(obj[0], obj[1])) {
                thisone.value = "";
                return;
            }
        }
        else {
            thisone.value = "";
        }
    }
    else {
        thisone.value = "";
    }
}

//YYYY-MM형식의 날짜 유효성 체크 스크립트 function
function DateCheck2(thisone) {
    var obj = thisone.value.split("-");
    if (obj.length == 1 && thisone.value.length == 6) {
        var yyyy = thisone.value.substring(0, 4);
        var mm = thisone.value.substring(4, 6);
        if (mm > 0 && mm < 13) {
            thisone.value = yyyy + "-" + mm;
        }
        else {
            thisone.value = "";
            return;
        }
    }
    else if (obj.length == 2) {
        if (obj[0] >= 0 && obj[0] < 10000 && obj[0].length == 4 && obj[1] > 0 && obj[1] < 13 && obj[1].length == 2) {

        }
        else {
            thisone.value = "";
        }
    }
    else {
        thisone.value = "";
    }
}
// 년과 달을 받아서 마지막 일을 리턴 해 주는 함수임		
function get_Day(year, month) {
    var Last_Mon = new Array(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
    var Mon2

    // 윤년인지, 아닌지를 알아 낸다
    if (year % 4 == 0) Mon2 = true
    else Mon2 = false;

    Last_Mon[1] = (Mon2) ? 29 : 28;

    // 마지막 일을 반환합니다.
    return Last_Mon[month - 1];
}


//숫자, ',', '.'만 입력가능한 텍스트 박스 스크립트 function
//숫자외에 다른 문자 입력시 기존의 값은 유지
function NumericCheck(thisone) {
    var tempnum = thisone.value;
    var check = 0;

    for (i = 0; i <= tempnum.length; i++) {
        if (tempnum.charCodeAt(i) == 46) {
            if (check != 0 || i == 0) {
                thisone.value = tempnum.substring(0, i);
                break;
            }
            check = check + 1;
        }
        if (tempnum.charCodeAt(i) != 44 && tempnum.charCodeAt(i) != 46 && tempnum.charCodeAt(i) < 48 || tempnum.charCodeAt(i) > 57) {
            thisone.value = tempnum.substring(0, i);
            break;
        }
    }

    CommaFormat(thisone);
}

//숫자입력박스의 컴마를 찍어주는 스크립트 function
function CommaFormat(thisone) {
    var tempnum = "";

    if (thisone.value.split(",").length == 1) {
        tempnum = thisone.value;
    }
    else {
        for (i = 0; i < thisone.value.split(",").length; i++) {
            tempnum = tempnum + thisone.value.split(",")[i]
        }
    }

    var str = "";
    var count = 0;

    for (i = tempnum.length; i > 0; i--) {
        if (tempnum.charCodeAt(i) == 46) {
            var tempnum2 = "";

            if (str.split(".").length == 1) {
                str = str;
            }
            else {
                for (k = 0; k < str.split(",").length; k++) {
                    tempnum2 = tempnum2 + str.split(",")[k]
                }

                str = tempnum2;
                count = 0;
            }
        }
        if (count == 3) {
            str = "," + str;
            count = 0;
        }
        str = tempnum.substring(i, i - 1) + str;
        count = count + 1;
    }
    thisone.value = str;
}

//오로지 숫자만 입력가능한 ... 
function OnlyNumericCheck(thisone) {
    var tempnum = thisone.value;
    for (i = 0; i <= tempnum.length; i++) {
        if (tempnum.charCodeAt(i) < 48 || tempnum.charCodeAt(i) > 57) {
            thisone.value = tempnum.substring(0, i);
            break;
        }
    }
}
// 페이지 이동

function MovePage(sURL) {
    location.href = sURL;
}

function NewPage(sURL) {
    window.open(sURL, '', '');
}
// 이미지 리사이징
/*
function resizeImg(obj, width, height)
{
var thumb = new Image;
thumb.src = obj.src;
	
var w = (thumb.width != "")		? thumb.width : thumb.style.width;
var h = (thumb.height != "")	? thumb.height : thumb.style.height;
var bModify = false;
	
if(w >= h && w > width){
obj.style.width = width;
bModify = true;
		
}else if(h > w && h > height){
obj.style.height = height;
bModify = true;
}

if(bModify) setTimeout("resizeImg('" + obj + "','" + width + "','" + height + "');", 200);
}
*/

function OnPopImg(obj) {
    var thumb = new Image;
    thumb.src = obj.src;



    var w = (thumb.width != "") ? thumb.width : thumb.style.width;
    var h = (thumb.height != "") ? thumb.height : thumb.style.height;

    if (w == "") {
        alet("asdf");
    }

    if (w == "" || h == "") {
        setTimeout("OnPopImg(" + obj + ");", 200);
        return;
    }


    prev_img(thumb.src, w, h)

}

function OnPopImgUrl(sImgUrl) {
    return OnResizeImgUrl(sImgUrl, 0);
}
function OnResizeImgUrl(sImgUrl, ipos) {
    var thumb = new Image;
    thumb.src = sImgUrl;

    var w = (thumb.width != "") ? thumb.width : 0;
    var h = (thumb.height != "") ? thumb.height : 0;

    if ((w <= 0 || h <= 0) && ipos < 5) {
        ipos++;
        setTimeout("OnResizeImgUrl('" + sImgUrl + "', '" + ipos + "');", 200);
    } else {
        prev_img(sImgUrl, w, h);
    }

    /*
    if( w == "" )
    {
    alert("Reload!");
    return;
    }
    */
}

// 이미지 크기에 맞게 이미지 크기 조절
function prev_img(img_src, pop_w, pop_h) {
    var window_left = (screen.width - 500) / 2;
    var window_top = (screen.height - 500) / 2;

    //img_view = window.open('','img_popup','width=100,height=100,left=0,top=0,scrollbars=no,resizable=no');
    img_view = window.open('', 'img_popup', 'width=100,height=100, top=' + 100 + ',left=' + 100 + ',scrollbars=no,resizable=no');

    img_view.document.focus(); // 팝업창 문서에 포커스
    img_view.document.open(); // 팝업창 문서를 열어서 
    // 페이지를 만든다.
    img_view.document.write('<html>\n' +
	'<head>\n' +
	'<title> :: View :: </title>\n' +
	'<sc' + 'ript language="javascript">\n' +
	'resizeTo(' + pop_w + ',' + pop_h + ');\n' + // 팝업창의 크기를 바꿔주는 소스
	'</sc' + 'ript>\n' +
	'</head>\n' +
	'<body topmargin="0" leftmargin="0">\n' +
	'<a href="#" onclick="window.close();" onfocus="this.blur();">\n' +
	'<img src="' + img_src + '" width="100%" height="100%" galleryimg="no" border="0"></a>\n' +
	'</body>\n' +
	'</html>\n');
    img_view.document.close(); // 팝업창의 문서를 닫는다.
}


// Text 안내문구 
function clearField(field) {
    if (field.value == field.defaultValue) {
        field.value = '';
    }
}

function checkField(field) {
    if (field.value == '') {
        field.value = field.defaultValue;
    }
}


// 이미지 중앙 팝업


function PopViewImg(what) {

    var imgwin = window.open("", 'WIN', 'scrollbars=yes,status=no,toolbar=no, resizable=yes,location=no,menu=no,width=10,height=10 ');

    imgwin.focus();

    imgwin.document.open();

    imgwin.document.write("<html>");

    imgwin.document.write("<head>");

    imgwin.document.write("<title>EST IMAGE</title>");



    imgwin.document.write("<sc" + "ript>\n");

    imgwin.document.write("function resize() {\n");

    imgwin.document.write("pic = document.il;\n");

    //imgwin.document.write("alert(eval(pic).height);\n"); 

    imgwin.document.write("if (eval(pic).height) { var name = navigator.appName\n");

    imgwin.document.write(" if (name == 'Microsoft Internet Explorer') { myHeight = eval(pic).height + 0; myWidth = eval(pic).width + 0;\n"); // 40 12

    imgwin.document.write(" } else { myHeight = eval(pic).height + 0; myWidth = eval(pic).width; }\n"); // 9

    imgwin.document.write(" clearTimeout();\n");

    imgwin.document.write(" var height = screen.height;\n");

    imgwin.document.write(" var width = screen.width;\n");

    imgwin.document.write(" var leftpos = width / 2 - myWidth / 2;\n");

    imgwin.document.write(" var toppos = height / 2 - myHeight / 2; \n");

    imgwin.document.write(" self.moveTo(leftpos, toppos);\n");

    imgwin.document.write(" self.resizeTo(myWidth+10, myHeight+52);\n");

    imgwin.document.write("}else setTimeOut(resize(), 100);}\n");

    imgwin.document.write("</sc" + "ript>");



    imgwin.document.write("</head>");

    imgwin.document.write('<body topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" bgcolor="#FFFFFF">');



    imgwin.document.write("<a href=# onclick=window.close() onfocus=this.blur()><img border=0 src=" + what + " xwidth=100 xheight=9 name=il onload='resize();'></a>");

    imgwin.document.write("</body>");

    imgwin.document.close();
}


function ReSizeImg(imgObj) {
    var imgOriginal = new Image();
    imgOriginal.visibleImgObj = imgObj;
    imgOriginal.onload = function() { resizeImgSub(this); }
    imgOriginal.src = imgObj.src;
}
function resizeImgSub(img) {
    var imgTemp = new Image();
    imgTemp.src = img.src;

    if (imgTemp.width > img.visibleImgObj.width || imgTemp.height > img.visibleImgObj.height) {
        if ((img.width / img.visibleImgObj.width) > (img.height / img.visibleImgObj.height))
            img.visibleImgObj.height = Math.round(img.height * (img.visibleImgObj.width / img.width));
        else
            img.visibleImgObj.width = Math.round(img.width * (img.visibleImgObj.height / img.height));
    }
    else {
        img.visibleImgObj.width = imgTemp.width;
        img.visibleImgObj.height = imgTemp.height;
    }
}

//★★★★★★ 첨부파일 값입력시 에러메세지 출력 ★★★★★★//	

//일회용쿠키...
function SetCookieOne(name, value) {
    document.cookie = name + "=" + escape(value) + ";";
}

function RecruitFaqDivShowHide() {

}



//★★★★★★ 인재채용->자주묻는 질문 DIV 보이기 감추기 ★★★★★★//	

function showAnswerBox(faqName) {

    turnOffVisible(faqName);
    setOnVisible(faqName);


    if (document.getElementById(faqName).style.display == 'none') {
        document.getElementById(faqName).style.display = 'block';
    }
    else {
        document.getElementById(faqName).style.display = 'none';
    }

}
function turnOffVisible(faqName) {
    var cmt = document.getElementById("currentVisible").value;
    if (document.getElementById("currentVisible").value != "" && cmt != faqName) {       //     같은 링크 두번클릭시 모드변경
        document.getElementById(cmt).style.display = 'none';
    }
}

function setOnVisible(faqName) {
    document.getElementById("currentVisible").value = faqName;
} 