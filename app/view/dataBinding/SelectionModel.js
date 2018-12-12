Ext.define('MyDemo.view.dataBinding.SelectionModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.selection',

    stores: {
        people: {
            model: 'Person',
            data: [{
                firstName: 'Gareth',
                lastName: 'Keenan'
            }, {
                firstName: 'Tim',
                lastName: 'Canterbury'
            }, {
                firstName: 'Dawn',
                lastName: 'Tinsley'
            }, {
                firstName: 'Neil',
                lastName: 'Godwin'
            }, {
                firstName: 'David',
                lastName: 'Brent'
            }]
        }
    }
});