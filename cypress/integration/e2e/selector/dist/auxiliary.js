/**
 * 1. 除了get、contains、find是基本选择器
 */
describe('e2e辅助选择器', function () {
    context('访问网页', function () {
        it('打开网页', function () {
            cy.visit('/');
        });
    });
    context('基础选择器', function () {
        it('id选择器', function () {
            cy.get('#app');
        });
        it('类选择器', function () {
            cy.get('.home');
        });
        it('通配符', function () {
            cy.get('*');
        });
        it('标签选择器', function () {
            cy.get('p');
        });
    });
    context('多层选择器', function () {
        it('分组选择器', function () {
            cy.get('div, img');
        });
        it('后端选择器', function () {
            cy.get('#selector div');
        });
        it('子元素选择器', function () {
            cy.get('#selector > div');
        });
        it('相邻选择器', function () {
            cy.get('#selector + .next');
        });
    });
    context('属性选择器', function () {
        it('[target]', function () {
            cy.get('[id]');
        });
        it('[target=_blank]', function () {
            cy.get('[data-cy=selector]');
            cy.get('[data-cy="selector"]');
        });
        it('[title~=flower]', function () {
            cy.get('[id~=selector]');
        });
        it('[id^=sel]', function () {
            cy.get('[id^=sel]');
        });
        it('[id$=tor]', function () {
            cy.get('[id$=tor]');
        });
        it('[id*=ele]', function () {
            cy.get('[id*=ele]');
        });
    });
    context('伪类选择器', function () {
        it('#selector .name:first-child', function () {
            cy.get('#selector .name:first-child');
        });
        it('#selector .name:nth-child(2)', function () {
            cy.get('#selector .name:nth-child(2)');
        });
        it('#selector .name:nth-last-child(2)', function () {
            cy.get('#selector .name:nth-last-child(2)');
        });
        it('#selector .name:nth-of-type(2)', function () {
            cy.get('#selector .name:nth-of-type(2)');
        });
        it('#selector .name:nth-last-of-type(2)', function () {
            cy.get('#selector .name:nth-last-of-type(2)');
        });
        it('#selector .name:last-child', function () {
            cy.get('#selector .name:last-child');
        });
    });
    context('input相关', function () {
        it(':checked', function () {
            cy.get(':checked');
        });
    });
    context('Cypress.$定位器', function () {
        it('Cypress.$(selector)', function () {
            var $selector = Cypress.$('#selector'); // 等价于 cy.get('#selector')
            cy.wrap($selector)
                .should('have.class', 'selector');
        });
    });
});
