Ext.define('MyDemo.view.carousel.Vertical', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'mycarousel2',
    fullScreen:true,
    direction: 'vertical',//垂直的排布
    ui: 'light', //默认dark，显示效果  看不出
    indicator:false,//指示球，默认显示true
    defaults: {
        layout: 'center'
    },

    items: [{
        html: '<p>Carousels can also be vertical <em>(swipe up)</em></p>',
        cls: 'dark stock-image stock-six-background',
        style: 'background-color: blue'
    }, {
        html: 'And can also use <code>ui:light</code>.',
        cls: 'dark stock-image stock-ten-background',
        style: 'background-color: yellow'
    }, {
        html: 'Card #3',
        cls: 'dark stock-image stock-nine-background',
        style: 'background-color: red'
    }]
});