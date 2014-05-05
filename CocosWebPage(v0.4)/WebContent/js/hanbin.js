// lnb
$(function() {
	if(!IsMobileBrowser())
{
	$(".nav").mouseenter(function(){
	 	$(".nav_depth").slideDown(220);
		$(".nav_bg").slideDown(190);	
	}).mouseleave(function(){
		$('.nav_depth').stop();
	  	$(".nav_depth").slideUp(200);
	  	$('.nav_bg').stop();
		$(".nav_bg").slideUp(220);
	});
}
});
function IsMobileBrowser(){
		var ua = navigator.userAgent.toLowerCase();
		return ua.match(/.*(android.+mobile|ipad.*mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino).*/) ||
			ua.substring(0, 4).match(
				/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/);
}

$(function() {
	$(".lang_depth").hide();
	// language 선택
	$(".account > .lang").mouseenter(function(){
     	$(".lang_depth").show();
		$(this).css("color","#788092");  
		$(this).css("padding-left","15px");  
		$(this).addClass('on');  
    }).mouseleave(function(){
      	$(".lang_depth").hide();
		$(this).css("color","#c2c6cb"); 
		$(this).removeClass('on');  
    });
    $(".account > .lang").focusin(function(){
     	$(".lang_depth").show();
		$(this).css("color","#788092");  
		$(this).css("padding-left","15px");  
		$(this).addClass('on');  
    });

	//탭 여닫기
	var $tablist = $('#tabcontents > .tablist_warp > .tablist > li');
	var $tabanchor = $('#tabcontents > .tablist_warp > .tablist > li >a');
	var $tabcnt = $('#tabcontents > .tabcnt');
	$tabanchor.click(function () {
		$tabcnt.hide();
		$tablist.removeClass('active');
		$($(this).attr('href')).toggle();
		$(this).parent('li').addClass('active');
		return false;
	});
	
	//개인정보취급방침
	var $tablist_p = $('#tabcontents_p > .tablist_warp > .tablist > li');
	var $tabanchor_p = $('#tabcontents_p > .tablist_warp > .tablist > li >a');
	var $tabcnt_p = $('#tabcontents_p > .tabcnt');
	$tabanchor_p.click(function () {
		$tabcnt_p.hide();
		$tablist_p.removeClass('active');
		$($(this).attr('href')).toggle();
		$(this).parent('li').addClass('active');
		return false;
	});
	
	/* 하위 탭 여닫기 */
	parentTabShow = function(obj){
		$(".ptCont").hide();
		$(".ptCont div").hide();
		$(obj).next().show();
		$(".tap_depth1").removeClass("on");
		$(obj).addClass("on");
		$(obj).next().find("li:eq(0) a").addClass("on");
		$(obj).next().find("li:eq(0) div").show();
	};
	$(".tap_depth1").click(function(event) {
		event.preventDefault();	
		parentTabShow($(this));
	});
	$(".tap_depth2").click(function(event){		// innerTab 
		event.preventDefault();	
		$(".ptCont div").hide();
		$(".tap_depth2").removeClass("on");
		$(this).addClass("on");
		$(this).next().show();
	});
	parentTabShow($(".tap_depth1:eq(0)"));

});

// 리스트 여닫기
$(function(){
	var faqlist = $('.faq>.faq_list');
	var faqlist_q = $('.faq>.faq_list>dt');
	var faqlist_a = $('.faq>.faq_list>dd');
	faqlist_a.addClass('hide');
	faqlist_q.removeClass('on');
	faqlist_a.hide();
	// faqlist_a.eq(0).removeClass('hide');
	// faqlist_q.eq(0).addClass('on');
	// faqlist_a.eq(0).show();
	faqlist_q.click(function(){
		var myArticle = $(this).next('dd');
		if(myArticle.hasClass('hide')){
			faqlist_q.removeClass('on');
			faqlist_a.addClass('hide').removeClass('show');
			faqlist_a.slideUp(100);
			myArticle.prev('dt').addClass('on');
			myArticle.removeClass('hide').addClass('show');
			myArticle.slideDown(100);
		} else {
			myArticle.prev('dt').removeClass('on');
			myArticle.removeClass('show').addClass('hide');
			myArticle.slideUp(100);
		}
		return false;
	});
});


// 선배들의 이야기
$(function(){
    $('.view_box').hide();
    $('.btn_talk').hide();
    $(".talk_li .list_box").toggle(function(){
		$(this).siblings('.view_box').show();
		$(this).addClass('on');
		$(this).children('.btn_talk').show();
	},function(){
		$(this).siblings('.view_box').hide();
		$(this).removeClass('on');
		$(this).children('.btn_talk').hide();
	});

	$(".talk_li .list_box").hover(function(){
		$(this).css("border","1px solid #006cb8");  
	},function(){
		$(this).css("border","1px solid #aaabad");  
	});
	$(".talk_li li").hover(function(){
		$(this).css("background","url(./images/btn_talk_on.gif) no-repeat right bottom");  
	},function(){
		$(this).css("background","");  
	});
	
});

// ie6
$(function(){
	$('.product_list li:first-child').css("border-top","0");  
	$('.tbl_ir.black tr td').css("border-right","0");  
});

// popup 창닫기
function exits(){
	window.close();
}

