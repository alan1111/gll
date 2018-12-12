Ext.define('MyDemo.view.data.AjaxController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ajax',

    onLoad: function () {
        this.getView().setMasked({//设置一个载入的遮盖面板
            xtype: 'loadmask',
            message: 'Loading...'
        });

        Ext.Ajax.request({
            url: 'data/test.json',//params:里面的参数用逗号隔开，就是我们要发出请求带的参数
            //若服务器端返回是“text/json”类型时，客户端需要使用obj= Ext.util.JSON.decode(result.responseText);进行构造json对象
            //method :get post
            //callback（options,success,response）：回调函数  op请求所调用的参数
            scope: this,//执行回调函数的范围，默认值为浏览器窗口
            failure: this.failureCallback,
            success: this.successCallback//响应成功后的回调函数
        });
    },

    onFormat: function (btn) {//btn为本身点击事件就有的参数，所以可以用
        var results = this.lookup('results'),
            data = this.lastResponse;//在成功的时候定义了一个this.lastResponse，所以里面存了值！！！

        if (data) {
            this.render(data, btn.isPressed());//即点击按钮改变样式
        }
    },

    failureCallback: function () {
        Ext.Msg.alert('Ajax Load Error', 'There was an error while loading the data.');
    },

    successCallback: function (response) {//response为success本身就有的参数，所以可以用
        var formatBtn = this.lookup('formatBtn'),
            results = this.lookup('results'),
            data = this.lastResponse = response.responseText;//成功后返回的数据，同时定义一个lastResponse，将值存进去，以便使用！

        this.render(data, formatBtn.isPressed());//第二个参数为按钮是否按下，返回按下为true

        this.getView().unmask();//成功移除mask，都是通过view来set un
    },

    render: function (data, format) {//将数据放到页面上，第二个参数用于判断要不要给pre
        var results = this.lookup('results');

        if (format) {//true就有pre
            results.setHtml('<pre>' + data + '</pre>');//pre保留空格换行符，源码全部输出
        } else {
            results.setHtml(data);//压缩后的
        }
    }
});