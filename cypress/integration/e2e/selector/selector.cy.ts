/**
 * 1. 所有cypress文档中带有selector的，都可以使用这里面的选择器
 * 2. 选择器与我们平时使用的一致，下面是一些简单的例子
 */
describe('e2e选择器', () => {
  context('访问网页', () => {
    it('打开网页', () => {
      cy.visit('/')
    })
  })

  context('基础选择器', () => {
    it('id选择器', () => {
      cy.get('#app')
    })
    it('类选择器', () => {
      cy.get('.home')
    })
    it('通配符', () => {
      cy.get('*')
    })
    it('标签选择器', () => {
      cy.get('p')
    })
  })

  context('多层选择器', () => {
    it('分组选择器', () => {
      cy.get('div, img')
    })
    it('后端选择器', () => {
      cy.get('#selector div')
    })
    it('子元素选择器', () => {
      cy.get('#selector > div')
    })
    it('相邻选择器', () => {
      cy.get('#selector + .next')
    })
  })

  context('属性选择器', () => {
    it('[target]', () => {
      cy.get('[id]')
    })
    it('[target=_blank]', () => {
      cy.get('[data-cy=selector]')
      cy.get('[data-cy="selector"]')
    })
    it('[title~=flower]', () => {
      cy.get('[id~=selector]')
    })
    it('[id^=sel]', () => {
      cy.get('[id^=sel]')
    })
    it('[id$=tor]', () => {
      cy.get('[id$=tor]')
    })
    it('[id*=ele]', () => {
      cy.get('[id*=ele]')
    })
  })

  context('伪类选择器', () => {
    it('#selector .name:first-child', () => {
      cy.get('#selector .name:first-child')
    })
    it('#selector .name:nth-child(2)', () => {
      cy.get('#selector .name:nth-child(2)')
    })
    it('#selector .name:nth-last-child(2)', () => {
      cy.get('#selector .name:nth-last-child(2)')
    })
    it('#selector .name:nth-of-type(2)', () => {
      cy.get('#selector .name:nth-of-type(2)')
    })
    it('#selector .name:nth-last-of-type(2)', () => {
      cy.get('#selector .name:nth-last-of-type(2)')
    })
    it('#selector .name:last-child', () => {
      cy.get('#selector .name:last-child')
    })
  })

  context('input相关', () => {
    it(':checked', () => {
      cy.get(':checked')
    })
  })

  context('Cypress.$定位器', () => {
    it('Cypress.$(selector)', () => {
      const $selector = Cypress.$('#selector') // 等价于 cy.get('#selector')
      cy.wrap($selector)
        .should('have.class', 'selector')
    })
  })
})
