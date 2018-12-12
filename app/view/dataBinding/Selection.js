Ext.define('MyDemo.view.dataBinding.Selection', {
    extend: 'Ext.Container',
    xtype: 'selection',

    viewModel: {
        type: 'selection'
    },

    referenceHolder: true,
    width: 500,
    autoSize: true,

    layout: {
        type: 'hbox',//垂直
        align: 'stretch'
    },

    items: [{
        xtype: 'list',
        flex: 0.7,
        autoSize: true,
        itemTpl: '{lastName}, {firstName}',
        bind: '{people}',
        reference: 'peopleList'
    }, {
        xtype: 'formpanel',//Ext.form.Panel
        bodyPadding: 10,
        flex: 1,
        autoSize: true,
        items: [{
            xtype: 'textfield',
            label: 'First Name',
            bind: '{peopleList.selection.firstName}'//绑定上面选中的数据
        }, {
            xtype: 'textfield',
            label: 'Last Name',
            bind: '{peopleList.selection.lastName}'
        }, {
            xtype: 'component',
            margin: '10 0 0',
            html: 'The form is bound to the selection in the list. As the form ' +
            'fields change, the models in the list are automatically updated ' +
            'with the field input.'
        }]
    }]
});