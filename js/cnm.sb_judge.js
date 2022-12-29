// 正在前往星球 - 页面展示切换
//判断访问设备类型
//$(document).ready(function(){
//	if(window.screen.width > window.screen.height){	
//		$("#pc").show();
//		$("#mp").hide();
//	}else{
//		$("#pc").hide();
//		$("#mp").show();
//	}
//})









// 正在前往星球 - 页面展示切换
//判断访问设备类型
$(document).ready(function(){
	if(window.screen.width > window.screen.height){	
		$("#pc").show();
		$("#mp").hide();
	}else{
		alert("建议使用电脑访问效果更佳！");
		alert("兼容手机端网页制作ing...可能内容与PC端不同步，不是最新内容，请以PC端为准！！！");
		$("#mp").show();
		$("#pc").hide();
	}
})