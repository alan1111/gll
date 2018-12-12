Ext.define('MyDemo.view.dataBinding.ChainedStoreModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.chained',

    stores: {
        everyone: {
            model: 'MyDemo.model.Person',
            data: MyDemo.model.Person.generateData(15, 10)//结果生成15个人
        },
        ageFiltered: {
            source: '{everyone}',
            filters: [{
                property: 'age',
                value: '{minimumAge}',
                operator: '>='
            }],
            sorters: [{//出来就是自动排好序的
                property: 'age',
                direction: 'ASC'
            }]
        }
    },
    data: {
        minimumAge: 18
    }
});