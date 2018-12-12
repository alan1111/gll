Ext.define('MyDemo.view.button.Button5', {
    extend: 'Ext.Container',
    xtype: 'mybtns5',

 /*   requires: [
        'Ext.SegmentedButton'
    ],*/

    cls: 'demo-solid-background',
    height: 60,
    layout: 'center',
    width: 300,

    items: [
        {
            xtype: 'segmentedbutton',//分隔开的按钮
            items: [{
                text: 'Option 1'
            }, {
                text: 'Option 2',
                pressed: true//按下去的
            }, {
                text: 'Option 3'
            }]
        }
    ]
});