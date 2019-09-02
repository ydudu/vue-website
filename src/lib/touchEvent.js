// 由于移动端是触摸事件，所以要用到H5的属性touchstart/touchmove/touched,但是PC端只支持鼠标事件，所以此时可以这样转换

var touchEvents = {
    touchstart:"touchstart",
    touchmove:"touchmove",
    touchend:"touchend",
    initTouchEvents:function () {
        var self = this;
        if (self.isPC()) {
            self.touchstart = "mousedown";
            self.touchmove = "mousemove";
            self.touchend = "mouseup";
        }
    },
    isPC:function(){  //判断pc端与移动端

        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  //判断用户代理头信息
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) != -1) { flag = false; break; }
        }
        return flag;   //true为pc端，false为非pc端
    }
};