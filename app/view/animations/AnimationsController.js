Ext.define('MyDemo.view.animations.AnimationsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.animations',

    init: function (view) {//这个方法会在视图的初始化时被调用，在视图的initComponent（）调用之后调用
        //参数就是这个视图，即animations
        var me = this,//这个方法是框架自己调用，应该也是当前这个viewController
            anims = view.anims,//得到数组
            items = [];//里面放了一堆对象

        anims.forEach(function (button) {//button是anims里的每一项
            if (Ext.isObject(button)) {
                items.push(
                    me.createButton(button.group + ' Left'),//创建一个对象，方法在下面
                    me.createButton(button.group + ' Right'),
                    me.createButton(button.group + ' Top'),
                    me.createButton(button.group + ' Bottom', {
                        margin: '0 0 10 0'
                    })
                );
            } else {
                items.push(me.createButton(button));
            }
        });

        view.add([{//按数组将两个数组add进去
            items: items
        }, {
            items: items
        }]);//add两个对象进去时，因为是card，就是两页显示了
    },

    createButton: function (name, cfg) {//第二个参数上面没传
        return Ext.apply({//公用方法，将cfg里面的所有赋给第一个对象，返回完成的对象
            text: name,
            handler: 'onButtonTap'
        }, cfg);//创造一组以后会将{margin: '0 0 10 0'}对象的全部属性加到name里面
    },

    getAnimation: function(type) {
        var parts = type.toLowerCase().split(/\s+/);//按空格拆开

        return {//创建了一个animation，根据那个name值
            type: parts[0],
            direction: parts.length > 1 ? parts[1] : undefined,
            duration: 500//持续时间
        };
    },

    onButtonTap: function(button) {//参数为创建的按钮，上面
        var view = this.getView(),//this为viewController  得到视图对象
            activeItem = view.getActiveItem(),//得到显示的那个对象，共两个
            layout = view.getLayout(),//得到layoout对象{ type：‘card’}
            animation = this.getAnimation(button.getText()),//根据参数点击的button的名称，创建一个animation对象！
            currentIdx = view.indexOf(activeItem);//得到当前显示对象的位置

        layout.setAnimation(animation);//给layout设置animation属性，值是一个对象

        view.setActiveItem(currentIdx === 0 ? 1 : 0);//点击完成以后，更改显示的对象，那俩里面的一个
    }
});