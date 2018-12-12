/**
 * Demonstrates a range of Button options the framework offers out of the box
 */
Ext.define('MyDemo.view.button.Button2', {
    extend: 'Ext.Container',
    xtype: 'mybtns2',

    viewModel: {
        type: 'button2'
    },

    /*requires: [
        'Ext.layout.HBox',
        'Ext.layout.VBox',
        'Ext.Button'
    ],*/

    scrollable: 'y',
    width: 600,
    autoSize: true,//填满屏幕，modern要有

    defaults: {
        autoSize: true//子项也要有
    },
    items: [{
        cls: 'demo-solid-background',
        shadow: 'true',//true 允许阴影 默认  false则取消阴影
        defaults: {
            flex: '1 1 auto', //this allows auto-height in vbox
            margin: '10 20 20 20',
            layout: {
                type: 'hbox'//每一行按钮内部垂直排（其实是container和component垂直排）
            },
            autoSize: true
        },
        layout: {
            type: 'vbox'//每行按钮水平排
        },
        items: [{
            //里面第一行
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
                flex: 1,
                minHeight: 55,
                autoSize: true,
                defaults: {//
                    xtype: 'button',
                    margin: '0 10',
                    bind: {//绑定viewMoodel里的数据
                        ui: '{style} {round ? "round" : ""}',
                        //滑块绑定了round，这个也绑了round，滑块值发生改变0/1，viewModel值也会变化，此时ui属性就变化
                        //绑定了style，取得工具栏里style的值，可能为“”，action，decline。。。。
                        iconCls: '{icon}',//看type下拉value里面有没有icon字样，有就随机生成一个返回
                        menu: '{menu}'//看style里值是不是menu，是就返回一个[{text: 'Menu Item'}]对象集合，否则null
                    }
                },
                layout: {
                    type: 'hbox',//component内部按钮垂直排
                    align: 'middle',//
                    pack: 'space-around'//全部均分
                },
                items: [{
                    margin: '0 10 0 20',
                    bind: {
                        text: '{normalText}'//根据type的value，若含有text，返回normal
                    }
                }, {
                    bind: {
                        text: '{badgeText}'//根据type的value，若含有text，返回badge
                    },
                    badgeText: '2'
                }, {
                    margin: '0 20 0 10',
                    bind: {
                        text: '{disabledText}'//根据type的value，若含有text，返回disable
                    },
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
                autoSize: true,
                defaults: {
                    xtype: 'button',
                    margin: '0 10',
                    bind: {
                        ui: 'alt {style} {round ? "round" : ""}',//有个alt，反着的？？？
                        iconCls: '{icon}',
                        menu: '{menu}'
                    }
                },
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    margin: '0 10 0 20',
                    bind: {
                        text: '{normalText}'
                    }
                }, {
                    bind: {
                        text: '{badgeText}'
                    },
                    badgeText: '2'
                }, {
                    margin: '0 20 0 10',
                    bind: {
                        text: '{disabledText}'
                    },
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
                autoSize: true,
                defaults: {
                    xtype: 'button',
                    margin: '0 10',
                    bind: {
                        ui: 'raised {style} {round ? "round" : ""}',//凸起啦
                        iconCls: '{icon}',
                        menu: '{menu}'
                    }
                },
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    margin: '0 10 0 20',
                    bind: {
                        text: '{normalText}'
                    }
                }, {
                    bind: {
                        text: '{badgeText}'
                    },
                    badgeText: '2'
                }, {
                    margin: '0 20 0 10',
                    bind: {
                        text: '{disabledText}'
                    },
                    disabled: true
                }]
            }]
        }, {
            items: [{
                xtype: 'component',
                cls: 'button-group-label button-group-right',
                padding: '25 10 0 0',
                width: 75,
                html: 'Alt Raised',
                autoSize: true
            }, {
                xtype: 'container',
                cls: 'button-group alt',
                flex: 1,
                minHeight: 55,
                defaults: {
                    xtype: 'button',
                    margin: '0 10',
                    bind: {
                        ui: 'raised alt {style} {round ? "round" : ""}',//raised alt 凸起，反着·
                        iconCls: '{icon}',
                        menu: '{menu}'
                    }
                },
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    margin: '0 10 0 20',
                    bind: {
                        text: '{normalText}'
                    }
                }, {
                    bind: {
                        text: '{badgeText}'
                    },
                    badgeText: '2'
                }, {
                    margin: '0 20 0 10',
                    bind: {
                        text: '{disabledText}'
                    },
                    disabled: true
                }]
            }]
        }]
    }, {
        xtype: 'toolbar',//工具条，里面可以放置按钮等操作用的东西
        docked: 'top',//还有‘bottom’,显示在上面或者下面
        ui: 'transparent',//透明的？？？？
        padding: '5 8',
        layout: {
            type: 'hbox',//纵向垂直排布
            align: 'stretch'//上下伸展
        },
        defaults: {
            margin: '0 10 0 0',
            shadow: 'true',//子项阴影
            ui: 'action'//变成蓝色了
        },
        items: [{
            text: 'Style',
            menu: {//下拉
                bind: {
                    groups: '{buttonStyle}'
                },
                defaults: {
                    xtype: 'menuradioitem',//放置在menu里的，menu绑定groups，
                    // items里每项绑定group，有这个group配置，会自动创建menuradioitem，单选互斥
                    group: 'value'//可以在里面写，但是值要一致
                },
                //通过buttonStyle.value 可以取到group？？？？
                items: [
                    { text: 'None', value: '', checked: true },//menuradioitem
                    { text: 'Action', value: 'action' },
                    { text: 'Decline', value: 'decline' },
                    { text: 'Confirm', value: 'confirm' },
                    { text: 'Menu', value: 'menu' }
                ]
            }
        }, {
            text: 'Type',
            menu: {
                bind: {
                    groups: '{buttonType}'
                },
                defaults: {
                    xtype: 'menuradioitem',
                    group: 'value'
                },
                items: [
                    { text: 'Text', value: 'text', checked: true },
                    { text: 'Icon', value: 'icon' },
                    { text: 'Text & Icon', value: 'text-icon' }
                ]
            }
        }, {
            xtype: 'component',
            shadow: false,
            flex: 1
        }, {
            xtype: 'togglefield',//有两个值的单滑块  value=1时激活
            bind: '{round}',//绑定了round，用于改变viewModel里面的值！
            boxLabel: 'Round',//标签
            cls: 'demo-solid-background',
            margin: null,
            padding: '0 10'
        }]
    }]
});