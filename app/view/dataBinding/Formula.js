Ext.define('MyDemo.view.dataBinding.Formula', {
    extend: 'Ext.Container',
    xtype: 'formula',

    viewModel: {
        type: 'formula'
    },

    padding: 20,
    width: 400,
    autoSize: true,
    autoScroll:'y',
    items: [{
        xtype: 'spinnerfield',//有两个增减箭头的输入文本框
        label: 'Number',//在上面显示
        stepValue: 1,//点击箭头每次变化数量  还可以设置 minValue maxValue cycle 循环
        bind: '{x}'//绑定model里的x,改变的同时会使原值发生改变
    }, {
        xtype: 'textfield',
        readOnly: true,//只读
        label: 'Times 2',
        bind: '{x} * 2 = {twice}'
    }, {
        xtype: 'textfield',
        readOnly: true,
        label: 'Times 4',
        bind: '{x} * 4 = {quad}'
    }, {
        xtype: 'component',
        margin: '10 0 0',
        instructions: 'As the field changes, the formula calculates the 2x and 4x values.'
    }]
});