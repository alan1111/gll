Ext.define('MyDemo.view.dataBinding.DynamicController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dynamic',

    contentSwitch: true,//自己定义的
    titleCount: 0,//定义一个要自增的变量！

    onChangeTitleClick: function() {
        this.getViewModel().set('title', 'New Title ' + ++this.titleCount);
        //得到viewModel 给其中的title设置新的值 set方法
    },

    onChangeContentClick: function() {
        var content;

        if (this.contentSwitch) {
            content = 'hahaha';

            this.contentSwitch = false;
        } else {
            content = 'kukuku';

            this.contentSwitch = true;
        }

        this.getViewModel().set('content', content);//将viewModel中的内容换掉
    }
});