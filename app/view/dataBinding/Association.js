Ext.define('MyDemo.view.dataBinding.Association', {
    extend: 'Ext.Container',
    xtype: 'association',

    viewModel: {
        type: 'association'
    },

    height: 400,
    referenceHolder: true,//添加这一条，就变成了reference的容器；默认false
    // 添加了controller会自动变成了holder，此处没有controller，所以添加这一项
    width: 400,

    layout: {
        type: 'vbox',//水平排布
        align: 'stretch'
    },

    items: [{
        xtype: 'list',//Ext.dataview.List  一行一行显示数据的，添加store，并添加grouper可以分组显示
        flex: 2,
        title: 'People',
        itemTpl: '{firstName} {lastName}',//用这个遍历render数据
        reference: 'peopleList',
        bind: '{people}'//将这个数据给itemTpl
    }, {
        xtype: 'list',
        flex: 3,
        itemTpl: 'Created: {created:date("Y-m-d")}, Key: {accountKey}',
        //返回的用户对象里，有这俩字段,created用后面的转换了格式！
        items: [{//在这个list里最上面加了个titleBar
            xtype: 'titlebar',//Ext.TitleBar
            docked: 'top',
            title: 'Accounts',//和toolbar的主要区别就是title，
            //可加入items：里面默认都是按钮，可使用text align：'left'/'right'实现按钮在title的左还是右
            bind: 'Accounts for {person.firstName} {person.lastName}'//标题绑定的数据
        }],
        bind: '{person.accounts}'//数据会给itemTpl  当前选择的那一条的accounts
    }]
});