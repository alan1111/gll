/**
 * Demonstrates loading data over AJAX.
 */
Ext.define('MyDemo.view.data.Ajax', {
    extend: 'Ext.Panel',
    xtype: 'ajax',
    controller: 'ajax',

    scrollable: true,

    tbar: [{
        text: 'Load using Ajax',
        handler: 'onLoad'
    }, {
        text: 'Format JSON',
        reference: 'formatBtn',
        enableToggle: true,//允许点击下去，再点击上来
        handler: 'onFormat'
    }],

    items: [{
        xtype: 'component',
        reference: 'results'
    }]
});