Ext.define('MyDemo.view.dataBinding.State', {
    extend: 'Ext.Container',
    xtype: 'state',

    viewModel: true,//可以自己绑定自己的数据！！！

    padding: 20,
    width: 400,
    autoSize: true,
    scrollable: 'y',
    items: [{
        xtype: 'checkboxfield',
        label: 'Is Admin',
        reference: 'isAdmin'
    }, {
        xtype: 'textfield',
        label: 'Admin Key',
        enforceMaxLength: true,
        bind: {
            disabled: '{!isAdmin.checked}'//绑定了上面的组件的checked值
        }
    }, {
        xtype: 'togglefield',
        label: 'Priority',
        reference: 'priority'
    }, {
        xtype: 'textfield',
        label: 'High Priority Code',
        hidden: true,
        bind: {
            hidden: '{!priority.value}'//绑定tooglefield的值
        }
    }, {
        xtype: 'component',
        margin: '10 0 0',
        html: 'The admin key field is disabled when the admin checkbox is not checked. ' +
        'The high priority field is hidden when the priority is toggled.'
    }]
});