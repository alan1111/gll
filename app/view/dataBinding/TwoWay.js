Ext.define('MyDemo.view.dataBinding.TwoWay', {
    extend: 'Ext.Container',
    xtype: 'twoway',
    controller: 'twoway',

    viewModel: {
        data: {
            title: 'Default Title'
        }
    },

    padding: 10,
    width: 400,
    autoSize: true,

    items: [{
        xtype: 'titlebar',
        docked: 'top',
        bind: '{title}',//
        items: [{
            align: 'right',
            text: 'Random Title',
            handler: 'makeRandomTitle'
        }]
    }, {
        xtype: 'textfield',
        label: 'Title',
        bind: '{title}'//两者都绑定同一个title，所以改变其中一个另一个就跟着改变！
    }, {
        xtype: 'component',
        margin: '10 0 0',
        html: 'Change the text field which will alter the title bar text using binding. ' +
        'The random title button sets the title on the ViewModel, which is propagated to ' +
        'both the field and the title bar text.'
    }]
});