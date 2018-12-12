/**
 * This example shows simple dynamic data binding. When the data in the underlying view
 * model is modified, the change is relayed back to the panel and the markup is updated.
 */
Ext.define('MyDemo.view.dataBinding.Dynamic', {
    extend: 'Ext.Panel',
    xtype: 'dynamic',
    controller: 'dynamic',

    viewModel: {
        data: {
            title: 'Some Title',
            content: 'asdasdasdaszxczxczxcxzreterrtetrefghfghfghfg'
        }
    },

    bodyPadding: 20,
    width: 400,
    autoSize: true,

    bind: {
        title: 'Info - {title}',
        html: 'Stuff: {content}'
    },

    tbar: [{
        text: 'Change title',
        handler: 'onChangeTitleClick'
    }, {
        text: 'Change content',
        handler: 'onChangeContentClick'
    }]
});