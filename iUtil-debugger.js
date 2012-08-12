/**
*创建全局对象iUtil
*/
var iUtil = {};
/*操作DOM对象*/
/**
description:根据传入的标示符来获取单个DOM对象
paras:id：要获取对象的表示符，是一个对象的id或name
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
description:根据传入的标示符来获取多个DOM对象
paras:name:要获取对象的name属性
*/
iUtil.$$ = function(name){
	return document.getElementsByName(name);
}
/**
description:绑定对象事件
paras:domObj:要绑定事件的对象
	  evt:要绑定的事件
	  func:事件的回调函数
*/
iUtil.attachEvent = function(domObj,evt,func){
	if(domObj.attachEvent){
		/*IE*/
		domObj.attachEvent(evt,func);
	}
}