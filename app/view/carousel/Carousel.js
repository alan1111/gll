/**
 * Demonstrates how to use an Ext.Carousel in vertical and horizontal configurations
 */
Ext.define('MyDemo.view.carousel.Carousel', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'mycarousel',

    defaults: {
        layout: 'center'//居中显示，上下左右
    },
    items: [{
        html: '<p>Swipe left to show the next card&hellip;</p>',//省略号
        cls: 'stock-image stock-one-background',
        style: 'background-color: blue'
    }, {
        html: '<p>You can also tap on either side of the indicators.</p>',
        cls: 'stock-image stock-two-background',
        style: 'background-color: green'
    }, {
        html: 'Card #3',
        cls: 'stock-image stock-three-background',
        style: 'background-color: purple'
    }]
});