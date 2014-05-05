//���ڿ� '-' �� �Է°����� �ؽ�Ʈ �ڽ� ��ũ��Ʈ function
//���� ���ڿܿ� �ٸ� ���� �Է½� �׽�Ʈ�ڽ� Clear

function UP_Color(sender)
{		
	sender.style.backgroundColor= "White";	
}

function DateNumericCheck(thisone)
{ 
    var tempnum = thisone.value;
    
    for ( i = 0; i <= tempnum.length; i++ )
    { 
        if( tempnum.charCodeAt(i) != 45 && tempnum.charCodeAt(i) < 48 || tempnum.charCodeAt(i) > 57 )
        {
            thisone.value = tempnum.substring( 0, i );
            break ;
        }
    }
}

//YYYY-MM-DD������ ��¥ ��ȿ�� üũ ��ũ��Ʈ function
function DateCheck(thisone)
{
    var obj = thisone.value.split("-");
	
    if(obj.length == 1 && thisone.value.length == 8)
    {
        var yyyy = thisone.value.substring(0,4);
        var mm = thisone.value.substring(4,6);
        var dd = thisone.value.substring(6,8);
        
        if(mm > 0 && mm < 13 && dd > 0 && dd < 32 )
        {
        	  if ( dd > get_Day( yyyy, mm ) )
        	  {
        	      thisone.value = "";
        	      return;
        	  }
            thisone.value = yyyy + "-" + mm + "-" + dd;
        }
        else
        {
            thisone.value = "";
            return;
        }
    }
    else if(obj.length == 3)
    {
        if(obj[0] >= 0 && obj[0] < 10000 && obj[0].length == 4 && obj[1] > 0 && obj[1] < 13 && obj[1].length == 2 && obj[2] > 0 && obj[2] < 32 && obj[2].length == 2)
				{
        	  if ( obj[2] > get_Day( obj[0], obj[1] ) )
            {
                thisone.value = "";
                return;
            }
        }
        else
        {
            thisone.value ="";
        }
    }
    else
    {
        thisone.value = "";
    }
}

// ���� ���� �޾Ƽ� ������ ���� ���� �� �ִ� �Լ���		
function get_Day(year, month)
{
    var Last_Mon = new Array( 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
    var Mon2
    
    // ��������, �ƴ����� �˾� ����
    if ( year % 4 == 0 ) Mon2 = true
    else Mon2 = false;
	
    Last_Mon[1] = (Mon2) ? 29 : 28;

    // ������ ���� ��ȯ�մϴ�.
    return Last_Mon[month-1];
}
		
//����, ',', '.'�� �Է°����� �ؽ�Ʈ �ڽ� ��ũ��Ʈ function
//���ڿܿ� �ٸ� ���� �Է½� ������ ���� ����
function NumericCheck(thisone)
{ 
    var tempnum=thisone.value;
    var check = 0;
    
    for (i=0;i<=tempnum.length;i++)
    { 
        if(tempnum.charCodeAt(i) == 46)
        {
            if(check != 0 || i == 0)
            {
                thisone.value = tempnum.substring(0,i);
                break;
            }
            check = check + 1;
        }
        if(tempnum.charCodeAt(i) != 44 && tempnum.charCodeAt(i) != 46 && tempnum.charCodeAt(i) < 48 || tempnum.charCodeAt(i) > 57)
        {
            thisone.value = tempnum.substring(0,i);
            break ;
        }
    }
			
    CommaFormat(thisone);
}

//�����Է¹ڽ��� �ĸ��� �����ִ� ��ũ��Ʈ function
function CommaFormat(thisone)
{ 
    var tempnum = "";
    
    if(thisone.value.split(",").length ==1)
    {
        tempnum=thisone.value;
    }
    else
    {
        for(i = 0; i < thisone.value.split(",").length ; i++)
        {
            tempnum = tempnum + thisone.value.split(",")[i]
				}
    }
    
    var str = "";
    var count = 0;
    
    for (i = tempnum.length; i > 0; i--)
    { 
        if(tempnum.charCodeAt(i) == 46)
        {
            var tempnum2 = "";
            
            if(str.split(".").length == 1)
            {
                str = str;
            }
            else
            {
                for(k = 0; k < str.split(",").length; k++)
                {
                    tempnum2 = tempnum2 +  str.split(",")[k]
                }
                
                str = tempnum2;
                count = 0;
            }
        }
        if(count == 3)
        {
            str = "," + str;
            count = 0;
				}
        str = tempnum.substring(i,i-1) +str;
        count = count + 1 ;
    }
    thisone.value = str;
}

		//������ ��ũ��Ʈ ������ ���� ','��'.'�� �������ִ� function
function CommaRemove(thisbox)
{
    var tempnum = thisbox.value;
    
    if(tempnum == "")
    {
        return 0;
    }
    
    var value = "";
    
    for(i = 0; i < tempnum.split(",").length; i++)
    {
				value = value + tempnum.split(",")[i]
    }
    
    return parseFloat(value);
}

///
//������ ���ڸ� �Է°����� ... 
function OnlyNumericCheck(thisone)
{ 
    var tempnum=thisone.value;
    for (i = 0; i <= tempnum.length; i++)
    { 
        if(tempnum.charCodeAt(i) < 48 || tempnum.charCodeAt(i) > 57)
        {
            thisone.value = tempnum.substring(0,i);
            break ;
        }
    }
}

//YYYY-MM������ ��¥ ��ȿ�� üũ ��ũ��Ʈ function
function DateCheck2(thisone)
{
    var obj = thisone.value.split("-");
    if(obj.length == 1 && thisone.value.length == 6)
    {
        var yyyy = thisone.value.substring(0,4);
        var mm = thisone.value.substring(4,6);
        if(mm > 0 && mm < 13)
        {
            thisone.value = yyyy + "-" + mm;
				}
        else
        {
            thisone.value = "";
            return;
        }
    }
    else if(obj.length == 2)
    {
        if(obj[0] >= 0 && obj[0] < 10000 && obj[0].length == 4 && obj[1] > 0 && obj[1] < 13 && obj[1].length == 2)
        {
					
				}
				else
				{
            thisone.value ="";
        }
    }
    else
    {
        thisone.value = "";
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// �˾�â�� �ϳ��� �����ϱ� ���� �����ϴ� ��ũ��Ʈ
var parUrlObj = null;

function ControlPop(page, w, h, status, resize, scroll) {
	parUrlObj = OpenWindow(page, w, h, status, resize, scroll);
	//parUrlObj.resizeTo(w, h);
	//parUrlObj.focus();
		
	return false;			
		
	try
	{
		if(parUrlObj != null) 	{ parUrlObj.location.href = page; }
		else					{ parUrlObj = OpenWindow(page, w, h, status, resize, scroll); }
		
		var winl = (screen.width - w) / 2;
		var wint = (screen.height - h) / 2;	
	
//		parUrlObj.resizeTo(w, h);
//		parUrlObj.moveTo(winl, wint);
		
//		parUrlObj.focus();
		
		return false;
	}
	catch(e)
	{
		parUrlObj = OpenWindow(page, w, h, status, resize, scroll);
		parUrlObj.resizeTo(w, h);
		parUrlObj.focus();
		
		return false;			
	}
}

function CloseWindow()
{
	if(parUrlObj != null) {
		parUrlObj.close();
	}
}

function OpenWindow(str, w, h, s, r, c) {
	var url  = str;
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;	
	var opt  = 'width=' + w + ',height=' + h + ',status=' + s + ',toolbar=no,titlebar=no,menubar=no,location=no,resizable=' + r + ',scrollbars=' + c + ',';
		opt += 'top=' + wint + ',left=' + winl;
	var name = 'Design';
	
	return window.open(url,name,opt);
	if (parseInt(navigator.appVersion) >= 4) { pop.window.focus(); }
}

////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//---------------------------------------------------------------------------------------------------------------------
// date        :  2003-05-16
// Description :  div Scorll��ġ ���� �ϴ� �����̴�. 
//                ������ Text box �� ���� �÷� ���� �ٸ� ��Ʈ�Ѱ� ���� ������ �ʰ� �Ѵ�. 
//                ��  �߰���  textbox id = TxtScroll�� ���� �Ѵ�.                 
//                ������ form�� html�� ���� �ش� textbox id�� ã�Ƽ� style="Z-INDEX: 0;���� ���� �ϸ� ������ �ʴ´�.(visible = false ���� ���� �ȵ�)
//                �׷��� <body  onload="lockupscrolling(����,pnlBase_Layer)">
//                       <DIV id="grdMaster_Layer" onscroll="amendscrolltop(����,this)
// (exe) amendscrolltop(����,this)
//       lockupscrolling(����,pnlBase_Layer))
//---------------------------------------------------------------------------------------------------------------------

function amendscrolltop(a,sc)
{
      a.TxtScroll.value = sc.scrollTop;

}

//div��ġ�� �ٽý� textbox��ġ�� ���� 
function lockupscrolling(a,div)
{
  div.scrollTop = a.TxtScroll.value;
}

//�ڵ����� ' ��  function (���۽�Ʈ���� ����)
function ApostropheRemove(thisbox)
{
    var tempnum = thisbox.value;
    
    if(tempnum == "")
    {
        return "";
    }
    
    var value = "";
    
    for(i = 0; i < tempnum.split("'").length; i++)
    {
				value = value + tempnum.split("'")[i]
    }
    
    return value;
}


// ��¥ �����ϱ� : ������ => onblur="comparedatetime(txtDaysSDate, this)"
/*
function comparedatetime(val1, val2) {
    try
    {
		if(val1.value != "" && val2.value != "") {
			var indate1 = val1.value;
			var indate2 = val2.value;
	            
			if (indate1.indexOf("-")!=-1){
				var sdate1 = indate1.split("-");
			}
	        
			if (indate2.indexOf("-")!=-1){
				var sdate2 = indate2.split("-");
			}
	        
			indate1 = sdate1[1]+"-"+sdate1[2]+"-"+sdate1[0];
			indate2 = sdate2[1]+"-"+sdate2[2]+"-"+sdate2[0];
			var chkDate1 = new Date(Date.parse(indate1));
			var chkDate2 = new Date(Date.parse(indate2));
	        
			if(chkDate1 > chkDate2) {
				alert("�Ⱓ�� �ùٸ��� �Է��ϼ���.");
				val2.value = "";
				val2.focus();
				
				return false;
			}
		}
		else {
			if(val1.value == "" && val2.value != "") { 
				alert("�Ⱓ�� �ùٸ��� �Է��ϼ���."); 
				val2.value = ""; 
				val1.focus(); 
				return false;
			}
		}		
    }
    catch(e) {
		alert("�Ⱓ�� �ùٸ��� �Է��ϼ���.");
		val1.value = "";
		val2.value = "";
		
		val1.focus();
		
		return false;
    }
}
*/

// ������ ������ ��ȣ ���� üũ ������ : onblur="saupja_check(this);"
function saupja_check(field) {
	if(field.value != "") {
		var tmp = field.value.replace(/\$|\-/g, "");
		
		if(tmp.length != 10) {
			alert("�߸��� ������ ��ȣ�Դϴ�.");
			field.value = "";
			return false;
		}
		else {
			var sa1 = tmp.substr(0,3);
			var sa2 = tmp.substr(3,2);
			var sa3 = tmp.substr(5,5);
			
			if(!isNaN(sa1) && !isNaN(sa2) && !isNaN(sa3)) {
				field.value = sa1 + "-" + sa2 + "-" + sa3;
			}
			else {
				alert("�߸��� ������ ��ȣ�Դϴ�.");
				field.value = "";
				return false;
			}
		}
	}
}


function MM_findObj(n, d) { //v3.0

  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;


}

function SSN_chk(jumin) // �ֹε��Ϲ�ȣ üũ
{
	var jumin;
	var check=0;
	
	var IDtot = 0;
	var IDAdd = "234567892345";
	for(i=0;i<12;i++)
	IDtot=IDtot+parseInt(jumin.substring(i,i+1))*parseInt(IDAdd.substring(i,i+1));
	
	IDtot = 11 - (IDtot%11);
	if(IDtot == 10) IDtot=0;
	else if(IDtot == 11) IDtot=1;
	
	check = parseInt(jumin.substring(2,4));
	check2 = parseInt(jumin.substring(4,6));
	
	if(check<0 || check>12 || check2<0 || check2>31) {
		return false;
	}

	if(parseInt(jumin.substring(12,13)) != IDtot) {
		return false;
	}
		
	return true;
}
