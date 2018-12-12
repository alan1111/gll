Ext.define('MyDemo.view.data.NestedController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.nestedloading',

    onLoad: function () {
        var dataview = this.lookup('dataview'),//reference 和lookup的使用，用于得到对象
            store = dataview.getStore();//得到store

        store.load();//加载store，使数据显示出来
    },

    onExplain: function () {
        Ext.Msg.alert(
            'Loading Nested Data',

            '<p>The data package can load deeply nested data in a single request. In this example we are loading a fictional ' +
            'dataset containing Users, their Orders, and each Order\'s OrderItems.</p>' +
            '<p>Instead of pulling down each record in turn, we load the full data set in a single request and allow the data ' +
            'package to automatically parse the nested data.</p>' +
            '<p>As one of the more complex examples, it is worth tapping the "Source" button to see how this is set up.</p>'
        );
    }
});