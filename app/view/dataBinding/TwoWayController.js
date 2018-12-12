Ext.define('MyDemo.view.dataBinding.TwoWayController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.twoway',

    onClearIconTap: function() {
        this.getViewModel().set('title', '');
    },

    makeRandomTitle: function() {
        var num = Ext.Number.randomInt(0, 1000);//生成随机数！！！
        this.getViewModel().set('title', 'Title ' + num);
    }
});