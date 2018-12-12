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
            store: '{ageFiltered}',//�󶨵�ֵ��������
            title: 'People aged {minimumAge} or over'
        },
        items: [{
            xtype: 'singlesliderfield',//Ext.field.SingleSlider ����ѡֵ
            docked: 'top',
            label: 'Minimum Age',
            bind: '{minimumAge}',//��������������ֵ�����������˹�������ֵ��������Ӧ
            margin: '0 10',
            liveUpdate: true//�������̲�ͣ�ز��������¼���falseֻ�н����Ų���һ���¼�
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