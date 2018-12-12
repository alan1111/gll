/*
 * Demonstrates all the animations
 */
Ext.define('MyDemo.view.animations.Animations', {
    extend: 'Ext.Container',
    xtype: 'animations',
    controller: 'animations',

   /* requires: [
        'MyDemo.view.animations.AnimationsController'
    ],
*/
    height: 430,
    width: 300,

    layout: {
        type: 'card'//card 布局，多个页面都要显示时，用这个布局，tabpanel就是这个布局
        //将当前card里面显示的那一项将整个container填满，其余的隐藏！
        //可使用animation配置进行设置当前card每一页动画属性，值为对象或string
        //type：'cover', 'cube', 'fade', 'flip', 'pop', 'reveal', 'scroll', or 'slide'
        //direction: 'up', 'down', 'left', or 'right'
        //对象.setActiveItem(index) index为从0开始的页数 将该位置设置为当前显示的
        //对象.setAnimation()
    },

    anims: [{
        group: 'Slide'
    }, {
        group: 'Cover'
    }, {
        group: 'Reveal'
    },
        'Fade',
        'Pop',
        'Flip'
    ],

    defaults: {
        defaultType: 'button',//add进来称为子项的子项，都默认成了button
        layout: 'vbox',//横向 子项的子项
        padding: 20,
        scrollable: 'y'//纵向滚动
    }
});