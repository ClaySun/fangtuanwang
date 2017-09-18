//点击下拉子栏目

$(".data-box-ul").click(function(){
	 $(this).find("span").toggleClass("arrow-span-90");
     $(this).siblings(".child-box-all").toggleClass("child-box-0");
})


//分类更多
$(function() {
$(".more_box").click(function() {
		$(this).toggleClass("more_icon");
		$(".screen_con dl").eq($(".more_box").index($(this))).toggleClass("auto_height");
	});
	$('.select-all').click(function(){
	   $(this).addClass("selected").siblings().removeClass("selected");
	   $(this).next().children().removeClass("selected");
    });  
	$('.screen_con li dl dd').click(function(){
	   $(this).addClass("selected").siblings().removeClass("selected");
	   $(this).parent().prev().removeClass("selected");
     }); 
 })

//获取前台功能的导航高度
var frontBody = $(document).height();
$(".front-box-left").css("height",frontBody);


//导航下拉
$(".first-nav").click(function(){
	$(this).next().toggleClass('child-none');	
    $(this).children().toggleClass('child-icon');
})
$(".second-nav").click(function(){
	$(this).find(".children-div").toggleClass('child-none');
	$(this).find(".iconaaaa-second").toggleClass('child-icon');
})

//点击导航		
		$(".nav-box").click(function(){
			$(".next-nav").toggleClass("next-nav-block");
			$(".nav-arrow").toggleClass("nav-arrow-down");
		})
		
//banner图切换
$(function(){
 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay:5000,
        speed:1000,
  });	
})

//center modal 模态框居中
$(function() {
	function centerModals() {
		$('.modal').each(function(i) {
			var $clone = $(this).clone().css('display', 'block').appendTo('body');
			var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
			top = top > 0 ? top : 0;
			$clone.remove();
			$(this).find('.modal-content').css("margin-top", top);

		});
	}
	$('.modal').on('show.bs.modal', centerModals);
	$(window).on('resize', centerModals);
});

//搜索框点击切换
$(".search-box-change i").click(function(){
	$(this).addClass('search-active').siblings().removeClass('search-active');
});

//动态box滚动
$(document).ready(function(){
	$('.list_lh li:even').addClass('lieven');
})
$(function(){
	$(".ziyuan-box-2 .list_lh").myScroll({
		speed:60, 
		rowHeight:42
	});
});
//商铺里面热门产品滚动
$(function(){
	$(".shops-box-content-bottom .list_lh").myScroll({
		speed:60, 
		rowHeight:113
	});
});

//购物车
$(".quick_links a").click(function(){
  $(".quick_links_wrap").toggleClass("widthPx");  
})
$("body").click(function(){
	$(".quick_links_wrap").removeClass("widthPx");  
})

	$(".quick_links_panel li").mouseenter(function(){
		$(this).children(".mp_tooltip").animate({left:-92,queue:true});
		$(this).children(".mp_tooltip").css("visibility","visible");
		$(this).children(".ibar_login_box").css("display","block");
	});
	$(".quick_links_panel li").mouseleave(function(){
		$(this).children(".mp_tooltip").css("visibility","hidden");
		$(this).children(".mp_tooltip").animate({left:-121,queue:true});
		$(this).children(".ibar_login_box").css("display","none");
	});
	$(".quick_toggle li").mouseover(function(){
		$(this).children(".mp_qrcode").show();
	});
	$(".quick_toggle li").mouseleave(function(){
		$(this).children(".mp_qrcode").hide();
	});



//购物车结束




	

