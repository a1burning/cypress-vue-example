/* eslint-disable no-unused-expressions */
describe('chai-jquery相关命令', function () {
    context('访问网页', function () {
        it('打开网页', function () {
            cy.visit('/#/chai');
        });
    });
    context('书写测试用例', function () {
        it('attr', function () {
            cy.get('[data-test=chai-jquery-cover]').should('have.attr', 'alt', '主题');
            cy.get('[data-test=chai-jquery-cover]').then(function ($el) {
                expect($el).to.have.attr('alt', '主题');
                expect($el).to.have.attr('alt').match(/主题/);
            });
        });
        it('not.attr', function () {
            // 如果判断的属性不存在不写值可以
            cy.get('[data-test=chai-jquery-cover]').should('not.have.attr', 'href');
            cy.get('[data-test=chai-jquery-cover]').then(function ($el) {
                expect($el).not.to.have.attr('href');
            });
            // 如果判断的属性不存在写值也可以
            cy.get('[data-test=chai-jquery-cover]').should('not.have.attr', 'href', '/#/chai');
            cy.get('[data-test=chai-jquery-cover]').then(function ($el) {
                expect($el).not.to.have.attr('href', '/#/chai');
            });
            // 如果判断的属性存在只是值不同必须写值
            cy.get('[data-test=chai-jquery-cover]').should('not.have.attr', 'alt', '主题1');
            cy.get('[data-test=chai-jquery-cover]').then(function ($el) {
                expect($el).not.to.have.attr('alt', '主题1');
            });
        });
        it('prop', function () {
            cy.get('[data-test=chai-jquery-cover]').should('have.prop', 'alt', '主题');
            cy.get('[data-test=chai-jquery-cover]').then(function ($el) {
                expect($el).to.have.prop('alt', '主题');
                expect($el).to.have.prop('alt').match(/主题/);
            });
        });
        it('not.prop', function () {
            cy.get('[data-test=chai-jquery-cover]').should('not.have.prop', 'alt', '主题1');
            cy.get('[data-test=chai-jquery-cover]').then(function ($el) {
                expect($el).not.to.have.prop('alt', '主题1');
            });
        });
        it('style/css', function () {
            cy.get('[data-test=chai-jquery-cover]').should('have.css', 'width', '150px');
            cy.get('[data-test=chai-jquery-cover]').then(function ($el) {
                expect($el).to.have.css('width', '150px');
                expect($el).to.have.css('width').match(/150px/);
            });
        });
        it('not.style/css', function () {
            cy.get('[data-test=chai-jquery-cover]').should('not.have.css', 'width', '153px');
            cy.get('[data-test=chai-jquery-cover]').then(function ($el) {
                expect($el).not.to.have.css('width', '153px');
            });
        });
        it('data', function () {
            cy.get('[data-test=chai-jquery-cover]').should('have.data', 'test', 'chai-jquery-cover');
            cy.get('[data-test=chai-jquery-cover]').then(function ($el) {
                expect($el).to.have.data('test', 'chai-jquery-cover');
                expect($el).to.have.data('test').match(/chai-jquery-cover/);
            });
        });
        it('not.data', function () {
            cy.get('[data-test=chai-jquery-cover]').should('not.have.data', 'cy');
            cy.get('[data-test=chai-jquery-cover]').then(function ($el) {
                expect($el).not.to.have.data('cy');
            });
        });
        it('class', function () {
            cy.get('[data-test=chai-jquery-cover]').should('have.class', 'cover');
            cy.get('[data-test=chai-jquery-cover]').then(function ($el) {
                expect($el).to.have["class"]('cover');
            });
        });
        it('not.class', function () {
            cy.get('[data-test=chai-jquery-cover]').should('not.have.class', 'url');
            cy.get('[data-test=chai-jquery-cover]').then(function ($el) {
                expect($el).not.to.have["class"]('url');
            });
        });
        it('id', function () {
            cy.get('[data-test=chai-jquery-cover]').should('have.id', 'chai-jquery-cover');
            cy.get('[data-test=chai-jquery-cover]').then(function ($el) {
                expect($el).to.have.id('chai-jquery-cover');
            });
        });
        it('not.id', function () {
            cy.get('[data-test=chai-jquery-cover]').should('not.have.id', 'chai-jquery-url');
            cy.get('[data-test=chai-jquery-cover]').then(function ($el) {
                expect($el).not.to.have.id('chai-jquery-url');
            });
        });
        it('match', function () {
            cy.get('[data-test=chai-jquery-cover]').should('match', '#chai-jquery-cover');
            cy.get('[data-test=chai-jquery-cover]').then(function ($el) {
                expect($el).to.be.match('#chai-jquery-cover');
            });
        });
        it('not.match', function () {
            cy.get('[data-test=chai-jquery-cover]').should('not.match', '.url');
            cy.get('[data-test=chai-jquery-cover]').then(function ($el) {
                expect($el).not.to.be.match('.url');
            });
        });
        it('text', function () {
            cy.get('[data-test=chai-jquery-title]').should('have.text', '主题');
            cy.get('[data-test=chai-jquery-title]').then(function ($el) {
                expect($el).to.have.text('主题');
            });
        });
        it('not.text', function () {
            cy.get('[data-test=chai-jquery-title]').should('not.have.text', '主题1');
            cy.get('[data-test=chai-jquery-title]').then(function ($el) {
                expect($el).not.to.have.text('主题1');
            });
        });
        it('contain', function () {
            cy.get('[data-test=chai-jquery-title]').should('have.contain', '主');
            cy.get('[data-test=chai-jquery-title]').then(function ($el) {
                expect($el).to.have.contain('主');
            });
            // 可以判断，但是不是断言语句
            cy.get('[data-test=chai-jquery-title]').contains('主');
        });
        it('not.contain', function () {
            cy.get('[data-test=chai-jquery-title]').should('not.have.contain', '主题1');
            cy.get('[data-test=chai-jquery-title]').then(function ($el) {
                expect($el).not.to.have.contain('主题1');
            });
        });
        it('html', function () {
            cy.get('[data-test=chai-jquery-desc]').should('have.html', '<span class="desc">简介</span>');
            cy.get('[data-test=chai-jquery-desc]').then(function ($el) {
                expect($el).to.have.html('<span class="desc">简介</span>');
            });
        });
        it('not.html', function () {
            cy.get('[data-test=chai-jquery-desc]').should('not.have.html', '<span>简介</span>');
            cy.get('[data-test=chai-jquery-desc]').then(function ($el) {
                expect($el).not.to.have.html('<span>简介</span>');
            });
        });
        it('descendants', function () {
            cy.get('[data-test=chai-jquery-desc]').should('have.descendants', 'span.desc');
            cy.get('[data-test=chai-jquery-desc]').then(function ($el) {
                expect($el).to.have.descendants('span.desc');
            });
        });
        it('not.descendants', function () {
            cy.get('[data-test=chai-jquery-desc]').should('not.have.descendants', 'div');
            cy.get('[data-test=chai-jquery-desc]').then(function ($el) {
                expect($el).not.to.have.descendants('div');
            });
        });
        it('empty', function () {
            cy.get('[data-test=chai-jquery-empty]').should('be.empty');
            cy.get('[data-test=chai-jquery-empty]').then(function ($el) {
                expect($el).to.be.empty;
            });
        });
        it('not.empty', function () {
            // 内容是文本不算空内容
            cy.get('[data-test=chai-jquery-title]').should('not.be.empty');
            cy.get('[data-test=chai-jquery-title]').then(function ($el) {
                expect($el).not.to.be.empty;
            });
            // 内容是标签不算空内容
            cy.get('[data-test=chai-jquery-desc]').should('not.be.empty');
            cy.get('[data-test=chai-jquery-desc]').then(function ($el) {
                expect($el).not.to.be.empty;
            });
        });
        it('visible/not.visible', function () {
            cy.get('[data-test=chai-jquery-visible] p').as('visibleList');
            // 1. 标签存在但是没有内容为不可见
            cy.get('@visibleList').eq(0).should('not.be.visible');
            // 2. 有内容但是长宽有一个为0px也为不可见
            cy.get('@visibleList').eq(1).should('not.be.visible');
            cy.get('@visibleList').eq(2).should('not.be.visible');
            // 3. 有内容，style是display: none为不可见
            cy.get('@visibleList').eq(3).should('not.be.visible');
            // 有内容，长宽没有0px，style不是display: none为可见
            cy.get('@visibleList').eq(4).should('be.visible');
            cy.get('@visibleList').eq(5).should('not.be.visible');
            // 4. 有内容，style是visibility: hidden为不可见
            cy.get('@visibleList').eq(6).should('not.be.visible');
            cy.get('@visibleList').eq(7).should('be.visible');
            // expects写法
            cy.get('@visibleList').then(function ($el) {
                expect($el.eq(0)).not.to.be.visible;
                expect($el.eq(1)).not.to.be.visible;
                expect($el.eq(2)).not.to.be.visible;
                expect($el.eq(3)).not.to.be.visible;
                expect($el.eq(4)).to.be.visible;
                expect($el.eq(5)).not.to.be.visible;
                expect($el.eq(6)).not.to.be.visible;
                expect($el.eq(7)).to.be.visible;
            });
        });
        it('hidden/not.hidden', function () {
            cy.get('[data-test=chai-jquery-visible] p').as('visibleList');
            // 1. 标签存在但是没有内容为不可见
            cy.get('@visibleList').eq(0).should('be.hidden');
            // 2. 有内容但是长宽有一个为0px也为不可见
            cy.get('@visibleList').eq(1).should('be.hidden');
            cy.get('@visibleList').eq(2).should('be.hidden');
            // 3. 有内容，style是display: none为不可见
            cy.get('@visibleList').eq(3).should('be.hidden');
            // 有内容，长宽没有0px，style不是display: none为可见
            cy.get('@visibleList').eq(4).should('not.be.hidden');
            cy.get('@visibleList').eq(5).should('be.hidden');
            // 4. 有内容，style是visibility: hidden为不可见
            cy.get('@visibleList').eq(6).should('be.hidden');
            cy.get('@visibleList').eq(7).should('not.be.hidden');
            // expects写法
            cy.get('@visibleList').then(function ($el) {
                expect($el.eq(0)).to.be.hidden;
                expect($el.eq(1)).to.be.hidden;
                expect($el.eq(2)).to.be.hidden;
                expect($el.eq(3)).to.be.hidden;
                expect($el.eq(4)).not.to.be.hidden;
                expect($el.eq(5)).to.be.hidden;
                expect($el.eq(6)).to.be.hidden;
                expect($el.eq(7)).not.to.be.hidden;
            });
        });
        it('exist/not.exist', function () {
            cy.get('[data-test=chai-jquery-exist] p').should('be.exist');
            cy.get('[data-test=chai-jquery-exist] div').should('not.be.exist');
            cy.get('[data-test=chai-jquery-exist]').then(function ($el) {
                expect($el.find('p')).to.be.exist;
                expect($el.find('div')).not.to.be.exist;
            });
        });
        it('value/not.value', function () {
            cy.get('[data-test=chai-jquery-input]').should('not.have.value');
            cy.get('[data-test=chai-jquery-input]').type('abc');
            cy.get('[data-test=chai-jquery-input]').should('have.value', 'abc');
            cy.get('[data-test=chai-jquery-input]').then(function ($el) {
                expect($el).to.have.value('abc');
            });
        });
        it('focus/not.focus', function () {
            cy.get('[data-test=chai-jquery-input]').should('have.focus');
            cy.get('[data-test=chai-jquery-input]').blur();
            cy.get('[data-test=chai-jquery-input]').should('not.have.focus');
            // 下面的写法虽然是官方有文档，但是实践会报错
            // cy.get('[data-test=chai-jquery-input]').then($el => {
            //   expect($el).not.to.have.focus
            // })
        });
        it('enabled/not.disabled', function () {
            // input框处于可用状态
            cy.get('[data-test=chai-jquery-input]').should('be.enabled');
            cy.get('[data-test=chai-jquery-input]').should('not.be.disabled');
            cy.get('[data-test=chai-jquery-input]').then(function ($el) {
                expect($el).to.be.enabled;
                expect($el).not.to.be.disabled;
            });
        });
        it('disabled/not.enabled', function () {
            // 点击禁用按钮
            cy.get('[data-test=chai-jquery-btn]').click();
            // input框处于禁用状态
            cy.get('[data-test=chai-jquery-input]').should('be.disabled');
            cy.get('[data-test=chai-jquery-input]').should('not.be.enabled');
            cy.get('[data-test=chai-jquery-input]').then(function ($el) {
                expect($el).to.be.disabled;
                expect($el).not.to.be.enabled;
            });
        });
        it('checked/not.checked', function () {
            cy.get('[data-test=chai-jquery-check]').find('#chai-left').as('chai-left');
            cy.get('[data-test=chai-jquery-check]').find('#chai-right').as('chai-right');
            // 左选中，右未选中
            cy.get('@chai-left').should('be.checked');
            cy.get('@chai-right').should('not.be.checked');
            cy.get('@chai-left').then(function ($el) {
                expect($el).to.be.checked;
            });
            cy.get('@chai-right').then(function ($el) {
                expect($el).not.to.be.checked;
            });
            // 右边单选选中
            cy.get('@chai-right').check();
            // 左未选中，右选中
            cy.get('@chai-left').should('not.be.checked');
            cy.get('@chai-right').should('be.checked');
            cy.get('@chai-left').then(function ($el) {
                expect($el).not.to.be.checked;
            });
            cy.get('@chai-right').then(function ($el) {
                expect($el).to.be.checked;
            });
        });
        it('selected/not.selected', function () {
            // 一开始下拉框值为空
            cy.get('[data-test=chai-jquery-select]').should('have.value', '');
            // 选中了值为1的
            cy.get('[data-test=chai-jquery-select]')
                .select('1')
                .should('have.value', '1');
            // 判断选中的那个文本是北京
            cy.get('[data-test=chai-jquery-select] option:selected').should('have.text', '北京');
            // 选中的是第二个
            cy.get('[data-test=chai-jquery-select] option').eq(1).should('be.selected').siblings().should('not.be.selected');
            // 选中了上海
            cy.get('[data-test=chai-jquery-select]')
                .select('上海')
                .should('have.value', '2');
            // 选中的是第三个
            cy.get('[data-test=chai-jquery-select] option').eq(2).should('be.selected').siblings().should('not.be.selected');
        });
    });
});
