/**
*attachEvent
*description:�󶨶����¼�
*@param {String} domObj Ҫ���¼��Ķ���
*@param {String} evt Ҫ�󶨵��¼�
*@param  {String} func �¼��Ļص�����
*@author luoaz
*/
iUtil.attachEvent = function(domObj,evt,func){
	if(domObj.attachEvent){
		/*IE*/
		domObj.attachEvent(evt,func);
	}
}