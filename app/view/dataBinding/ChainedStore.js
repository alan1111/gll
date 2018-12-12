Ext.define('MyDemo.view.dataBinding.ChainedStore', {
    extend: 'Ext.Container',
    xtype: 'chained',

    viewModel: {
        type: 'chained'
    },

    height: 600,
    referenceHolder: true,
    width: 500,

    layout: {
        type: 'vbox'
    },

    items: [{
        xtype: 'grid',
        flex: 3,
        title: 'All People',
        bind: '{everyone}',
        columns: [{
            text: 'First Name',
            width: 200,
            dataIndex: 'firstName'
        }, {
            text: 'Last Name',
            width: 200,
            dataIndex: 'lastName'
        }, {
            text: 'Age',
            width: 100,
            dataIndex: 'age'
        }]
    }, {
        xtype: 'grid',
        flex: 4,
        bind: {
            store: '{ageFiltered}',//绑定的值！！！！
            title: 'People aged {minimumAge} or over'
        },
        items: [{
            xtype: 'singlesliderfield',//Ext.field.SingleSlider 滑块选值
            docked: 'top',
            label: 'Minimum Age',
            bind: '{minimumAge}',//滑块更改了这个的值，进而更改了过滤器的值，连锁反应
            margin: '0 10',
            liveUpdate: true//滑动过程不停地产生更改事件，false只有结束才产生一次事件
        }],
        columns: [{
            text: 'First Name',
            width: 200,
            dataIndex: 'firstName'
        }, {
            text: 'Last Name',
            width: 200,
            dataIndex: 'lastName'
        }, {
            text: 'Age',
            width: 100,
            dataIndex: 'age'
        }]
    }]
});