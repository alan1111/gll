Ext.define('MyDemo.view.dataBinding.ChainedStoreModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.chained',

    stores: {
        everyone: {
            model: 'MyDemo.model.Person',
            data: MyDemo.model.Person.generateData(15, 10)//�������15����
        },
        ageFiltered: {
            source: '{everyone}',
            filters: [{
                property: 'age',
                value: '{minimumAge}',
                operator: '>='
            }],
            sorters: [{//���������Զ��ź����
                property: 'age',
                direction: 'ASC'
            }]
        }
    },
    data: {
        minimumAge: 18
    }
});