/**
*@description 创建全局对象iUtil
*@author luoaz
*/
var iUtil = {};
/**
@description 根据传入的标示符来获取单个DOM对象
@param {String} id 要获取对象的表示符，是一个对象的id或name
@author luoaz
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
@description 根据传入的标示符来获取多个DOM对象
@param {String} name 要获取对象的name属性
@author luoaz
*/
iUtil.$$ = function(name){
	return document.getElementsByName(name);
}
/**
description:绑定对象事件
@param {String} domObj 要绑定事件的对象
@param {String} evt 要绑定的事件
@param  {String} func 事件的回调函数
@author luoaz
*/
iUtil.attachEvent = function(domObj,evt,func){
	if(domObj.attachEvent){
		/*IE*/
		domObj.attachEvent(evt,func);
	}
}