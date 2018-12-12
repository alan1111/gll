Ext.define('MyDemo.view.dataBinding.HelloWorld', {
    extend: 'Ext.Panel',
    xtype: 'helloWorld',

    viewModel: {
        data: {
            title: 'A Title',
            html: 'HELLO WORLD',
            buttonText: 'A button'
        }
    },

    bodyPadding: 20,
    width: 400,
    autoSize: true,

    bind: {
        title: '{title}',//title值回将main。js里面的title覆盖！！！
        html: '{html}'
    },

    tbar: [{
        bind: '{buttonText}'
    }]
});