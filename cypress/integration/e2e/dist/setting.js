/**
 * 除了get、contains、find是基本选择器
 */
describe('e2e方法配置选项', function () {
    context('访问网页', function () {
        it('打开网页', function () {
            cy.visit('/');
        });
    });
    context('log', function () {
        // 获取元素
        it('get', function () {
            cy.get('#auxId1');
            cy.get('#auxiliarySelector li');
        });
        // 在元素范围内查找元素，与jQuery的find一致
        it('find', function () {
            cy.get('#auxiliarySelector').find('#auxId1');
            cy.get('#auxiliarySelector').find('.auxClass');
        });
        // 获取包含文本的 DOM 元素
        it('contains', function () {
            // 直接搜索文本content，返回对应DOM，只返回第一个
            cy.contains('辅助选择命令');
            // 可以后面加options
            cy.contains('li1', {
                matchCase: false // 可以检查区分大小写，默认为true
            });
            // 可以传正则，匹配返回第一个元素
            cy.contains(/^Li\d+/);
            // 可以传选择器+文本，返回的对象是第一个参数写的选择器
            cy.contains('#auxiliarySelector', 'Li1');
            // 和get搭配链式调用
            cy.get('#auxiliary').contains('辅助选择命令');
        });
    });
});
