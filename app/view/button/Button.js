/**
 * Demonstrates a range of Button options the framework offers out of the box
 */
Ext.define('MyDemo.view.button.Button', {
    extend: 'Ext.Container',
    xtype: 'mybtns',

    requires: [
        //'Ext.layout.HBox',//垂直排布
        //'Ext.layout.VBox',//水平排布
        //'Ext.Button'
    ],

    scrollable: 'y',//垂直滚动
    width: 530,//
    autoSize: true,//随父元素的大小变化而自动变化

    defaults: {//子项的属性
        margin: '10 20',
        autoSize: true,
        layout: {
            type: 'hbox'//垂直排布，加上以后component和container在一行
        }
    },

    items: [{
        margin: '20 20 10',
        items: [{
            xtype: 'component',
            cls: 'button-group-label button-group-right',
            padding: '25 10 0 0',
            width: 75,
            html: 'Default'
        }, {
            xtype: 'container',
            cls: 'button-group',
            flex: 1,//父width剩余的占一份，如果只有自己，就全占
            minHeight: 55,//最低高度
            //defaultType: 'button',//子类默认
            defaults: {//子类默认
                xtype:'button',
                margin: '0 10'
            },
            layout: {
                type: 'hbox',
                align: 'center',//start左 center中 end右 stretch垂直填满
                pack: 'space-around'//start左 center中 end右 space-between左右占，均分 space-around均分 justify同between
            },
            items: [{
                margin: '0 10 0 20',
                text: 'Normal'
            }, {
                text: 'Badge',
                badgeText: '2'//有个角标，显示2
            }, {
                margin: '0 20 0 10',
                text: 'Disabled',
                disabled: true
            }]
        }]
    }, {
        items: [{
            xtype: 'component',
            cls: 'button-group-label button-group-right',
            padding: '25 10 0 0',
            width: 75,
            html: 'Alt'
        }, {
            xtype: 'container',
            cls: 'button-group alt',
            flex: 1,
            minHeight: 55,
            defaultType: 'button',
            defaults: {
                margin: '0 10',
                ui: 'alt'//null 灰底默认 back forward round plain action decline confirm
                //action-round decline-round confirm-round
            },
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'space-around'
            },
            items: [{
                margin: '0 10 0 20',
                text: 'Normal'
            }, {
                text: 'Badge',
                badgeText: '2'
            }, {
                margin: '0 20 0 10',
                text: 'Disabled',
                disabled: true
            }]
        }]
    }, {
        items: [{
            xtype: 'component',
            cls: 'button-group-label button-group-right',
            padding: '25 10 0 0',
            width: 75,
            html: 'Raised'
        }, {
            xtype: 'container',
            cls: 'button-group',
            flex: 1,
            minHeight: 55,
            defaultType: 'button',
            defaults: {
                margin: '0 10',
                ui: 'raised'//显示突出的
            },
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'space-around'
            },
            items: [{
                margin: '0 10 0 20',
                text: 'Normal'
            }, {
                text: 'Badge',
                badgeText: '2'
            }, {
                margin: '0 20 0 10',
                text: 'Disabled',
                disabled: true
            }]
        }]
    }, {
        items: [{
            xtype: 'component',
            cls: 'button-group-label button-group-right',
            padding: '25 10 0 0',
            width: 75,
            html: 'Menu'
        }, {
            xtype: 'container',
            cls: 'button-group',
            flex: 1,
            minHeight: 55,
            defaults: {
                margin: '0 10'
            },
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'space-around'
            },
            items: [{
                xtype: 'button',
                margin: '0 10 0 20',
                text: 'Normal',
                menu: [{//可以是xtype menu对象的实例 或者配置对象（此处就是）,下拉菜单一样的
                    text: 'Menu Item'
                }]
            }, {
                xtype: 'button',
                text: 'Badge',
                badgeText: '2',
                menu: [{
                    text: 'Menu Item'
                }]
            }, {
                xtype: 'button',
                margin: '0 20 0 10',
                text: 'Disabled',
                disabled: true,
                menu: [{
                    text: 'Menu Item'
                }]
            }]
        }]
    }, {
        margin: '10 20 20',
        items: [{
            xtype: 'component',
            cls: 'button-group-label button-group-right',
            padding: '25 10 0 0',
            width: 75,
            html: 'Icon'
        }, {
            xtype: 'container',
            cls: 'button-group',
            flex: 1,
            minHeight: 55,
            defaultType: 'button',
            defaults: {
                margin: '0 10',
                ui:'round'
            },
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'space-around'
            },
            items: [{
                margin: '0 10 0 20',
                iconCls: 'x-fa fa-home',//没有text，只有一个iconCls，引用头像图标
               // ui: 'round'
            }, {
                iconCls: 'x-fa fa-home',
                badgeText: '2',
              //  ui: 'round'
            }, {
                margin: '0 20 0 10',
                iconCls: 'x-fa fa-home',
              //  ui: 'round',
                disabled: true
            }]
        }]
    }]
});