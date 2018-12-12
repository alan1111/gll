Ext.define('MyDemo.view.dataBinding.FormulaModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.formula',

    formulas: {
        quad: function (get) {
            return get('twice') * 2;
        },

        // This accomplishes the same thing as above but using object syntax.
        twice: {
            get: function (get) {
                return get('x') * 2;
            }
        }
    },

    data: {
        x: 1
    }
});