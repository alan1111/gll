/**
 * Demonstrates a range of split button options the framework offers out of the box
 */
Ext.define('MyDemo.view.button.Button4', {
    extend: 'Ext.Container',
    xtype: 'mybtns4',

    viewModel: {
        type: 'button4'
    },

  /*  requires: [
        'Ext.layout.HBox',
        'Ext.layout.VBox',
        'Ext.Button',
        'Ext.SplitButton'
    ],*/

    scrollable: 'y',
    width: 650,
    autoSize: true,

    defaults: {
        autoSize: true
    },

    items: [{
        cls: 'demo-solid-background',
        shadow: 'true',
        defaults: {
            flex: '1 1 auto', //this allows auto-height in vbox  在vbox里是高度自动？？？
            margin: '10 20 20 20',
            layout: {
                type: 'hbox'
            },
            autoSize: true
        },
        layout: {
            type: 'vbox'
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
                flex: 1,
                minHeight: 65,
                autoSize: true,
                defaults: {
                    xtype: 'splitbutton',//分裂按钮
                    margin: '0 10',
                    arrowAlign: 'bottom',//还有一个right（默认） 箭头的位置！arrowHandler
                    menu: [{
                        text: 'Menu Item 1'
                    }, {
                        text: 'Menu Item 2'
                    }, {
                        text: 'Menu Item 3'
                    }],
                    bind: {
                        ui: '{style} {round ? "round" : ""}',
                        iconCls: '{icon}'
                    }
                },
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    margin: '0 10 0 20',
                    disabled: false,
                    bind: {
                        text: '{normalText}'
                    }
                }, {
                    margin: '0 10 0 20',
                    disabled: true,
                    bind: {
                        text: '{normalText}'
                    }
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
                minHeight: 65,
                autoSize: true,
                defaults: {
                    xtype: 'splitbutton',
                    margin: '0 10',
                    arrowAlign: 'bottom',
                    menu: [{
                        text: 'Menu Item 1'
                    }, {
                        text: 'Menu Item 2'
                    }, {
                        text: 'Menu Item 3'
                    }],
                    bind: {
                        ui: 'alt {style} {round ? "round" : ""}',
                        iconCls: '{icon}'
                    }
                },
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    margin: '0 10 0 20',
                    disabled: false,
                    bind: {
                        text: '{normalText}'
                    }
                }, {
                    margin: '0 10 0 20',
                    disabled: true,
                    bind: {
                        text: '{normalText}'
                    }
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
                minHeight: 65,
                autoSize: true,
                defaults: {
                    xtype: 'splitbutton',
                    margin: '0 10',
                    arrowAlign: 'bottom',
                    menu: [{
                        text: 'Menu Item 1'
                    }, {
                        text: 'Menu Item 2'
                    }, {
                        text: 'Menu Item 3'
                    }],
                    bind: {
                        ui: 'raised {style} {round ? "round" : ""}',
                        iconCls: '{icon}'
                    }
                },
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    margin: '0 10 0 20',
                    disabled: false,
                    bind: {
                        text: '{normalText}'
                    }
                }, {
                    margin: '0 10 0 20',
                    disabled: true,
                    bind: {
                        text: '{normalText}'
                    }
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
                minHeight: 65,
                defaults: {
                    xtype: 'splitbutton',
                    margin: '0 10',
                    arrowAlign: 'bottom',
                    menu: [{
                        text: 'Menu Item 1'
                    }, {
                        text: 'Menu Item 2'
                    }, {
                        text: 'Menu Item 3'
                    }],
                    bind: {
                        ui: 'raised alt {style} {round ? "round" : ""}',
                        iconCls: '{icon}'
                    }
                },
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    margin: '0 10 0 20',
                    disabled: false,
                    bind: {
                        text: '{normalText}'
                    }
                }, {
                    margin: '0 10 0 20',
                    disabled: true,
                    bind: {
                        text: '{normalText}'
                    }
                }]
            }]
        }]
    }, {
        xtype: 'toolbar',
        docked: 'top',//工具栏停泊位置
        ui: 'transparent',
        padding: '5 8',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        defaults: {
            margin: '0 10 0 0',
            shadow: 'true',//字符串也会自动转为布尔值
            ui: 'action'
        },
        items: [{
            text: 'Style',
            menu: {
                bind: {
                    groups: '{buttonStyle}'
                },
                defaults: {
                    xtype: 'menuradioitem',
                    group: 'value'
                },
                items: [{
                        text: 'None',
                        value: '',
                        checked: true
                    },
                    {
                        text: 'Action',
                        value: 'action'
                    },
                    {
                        text: 'Decline',
                        value: 'decline'
                    },
                    {
                        text: 'Confirm',
                        value: 'confirm'
                    }
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
                items: [{
                        text: 'Text',
                        value: 'text',
                        checked: true
                    },
                    {
                        text: 'Icon',
                        value: 'icon'
                    },
                    {
                        text: 'Text & Icon',
                        value: 'text-icon'
                    }
                ]
            }
        }, {
            xtype: 'component',
            shadow: false,
            flex: 1//其他的都有宽度，剩下的全是他的
        }, {
            xtype: 'togglefield',
            bind: '{round}',
            boxLabel: 'Round',
            cls: 'demo-solid-background',//默认就是这个
            margin: '0 20 0 0',
            padding: '0 10'
        },{
            xtype:'mybtns5'//添加一个segmentedbutton
        }]
    }]
});