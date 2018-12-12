Ext.define('MyDemo.view.button.Button2Model', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.button2',
    data: {//为了初始化出来时给值
        style: '',
        type: 'text',
        round: false,
        disabled : false
    },

    icons: [
        'fa-home', 'fa-cog',
        'fa-archive', 'fa-heart',
        'fa-trash', 'fa-wrench'
    ],

    getIcon: function () {//定义了一个随机生成的函数
        var icons = this.icons,
            idx = Math.floor(Math.random() * icons.length);

        return 'x-fa ' + icons[idx];
    },

    formulas: {
        type: function(getter) {//等于覆盖了上面的，但上面的必须有，否则显示不出来
            return getter('buttonType.value');//取得style menu里面的menuradioitem的value
        },
        style: function(getter) {
            return  getter('buttonStyle.value');//取得type menu里面的value
        },
        normalText: function (getter) {
            var type = getter('type');//上面的type

            return type.indexOf('text') !== -1 ? 'Normal' : null;
        },
        smallText: function (getter) {
            var type = getter('type');

            return type.indexOf('text') !== -1 ? 'Small' : null;
        },
        mediumText: function (getter) {
            var type = getter('type');

            return type.indexOf('text') !== -1 ? 'Medium' : null;
        },
        largeText: function (getter) {
            var type = getter('type');

            return type.indexOf('text') !== -1 ? 'Large' : null;
        },
        badgeText: function (getter) {
            var type = getter('type');

            return type.indexOf('text') !== -1 ? 'Badge' : null;
        },
        disabledText: function (getter) {
            var type = getter('type');

            return type.indexOf('text') !== -1 ? 'Disabled' : null;
        },
        icon: function (getter) {
            var type = getter('type');

            return type.indexOf('icon') !== -1 ? this.getIcon() : '';
        },



        menu: function (getter) {
            var style = getter('style');//上面的style

            return style === 'menu' ? [{text: 'Menu Item'}] : null;
        }
    }
});