/**
*iUtil
*@description 创建全局对象iUtil
*@author luoaz
*/
var iUtil = {
	config:{
	/**
	*isDebugger
	*@descripttion 是否为debugger状态
	*@author luoaz
	*/
		isDebugger:true
	},
	/**
	*loadJS 
	*@description 加载js文件
	*@param {String} src 要加载的js文件的路径
	*@author luoaz
	*/
	loadJS:function(src){
		var jsObj = document.createElement("script");
		jsObj.language = "javascript";
		jsObj.src = src;
		
		var headObj = document.getElementsByTagName("HEAD")[0];
		headObj.appendChild( jsObj)
	}
};
/**$
*@description 根据传入的标示符来获取单个DOM对象
*@param {String} id 要获取对象的表示符，是一个对象的id或name
*@author luoaz
*/
iUtil.$ = function(id){
	var obj = document.getElementById(id);
	if(!obj){
		return obj;
	}else{
		obj = document.getElementsByName(id)[0];
		return obj;
	}
}
/**
*match 
*@description 根据传入的标示符来获取多个DOM对象
*@param {String} expr 要获取对象的属性表达式
*@author luoaz
*/
iUtil.match = function(expr){
	return document.getElementsByName(expr);
}

/*加载iUtil 事件控制对象文件*/
var strDebugger = "";
if(iUtil.config.isDebugger){
	strDebugger = "-debugger";
}
iUtil.loadJS("event/event"+strDebugger+".js");