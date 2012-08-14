/**
*attachEvent
*description:绑定对象事件
*@param {String} domObj 要绑定事件的对象
*@param {String} evt 要绑定的事件
*@param  {String} func 事件的回调函数
*@author luoaz
*/
iUtil.attachEvent = function(domObj,evt,func){
	if(domObj.attachEvent){
		/*IE*/
		domObj.attachEvent(evt,func);
	}
}