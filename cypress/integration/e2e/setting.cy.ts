/**
 * 除了get、contains、find是基本选择器
 */
describe('e2e方法配置选项', () => {
  context('访问网页', () => {
    it('打开网页', () => {
      cy.visit('/')
    })
  })

  context.skip('log配置', () => {
    // log日志，默认是true，设置为false就看不到日志
    it('log: 默认/true', () => {
      cy.get('#setting1')
    })
    it('log: false', () => {
      cy.get('#setting1', {
        log: false
      })
    })
  })

  context.skip('timeout配置', () => {
    context('defaultCommandTimeout', () => {
      // 默认是4000ms
      it('timeout: 默认4000ms', () => {
        cy.get('#setting1-1')
      })
      // 修改为1000ms
      it('timeout: 1000ms', () => {
        cy.get('#setting1-1', {
          timeout: 1000
        })
      })
    })
  })

  // get、find、contains特有配置
  context.skip('includeShadowDom配置', () => {
    // Shadow DOM
    it('includeShadowDom: 默认/false', () => {
      cy.get('#shadow-card').contains('Name')
    })
    it('includeShadowDom: true', () => {
      cy.get('#shadow-card').contains('Name', {
        includeShadowDom: true
      })
    })
  })

  context('withinSubject配置', () => {
    // Shadow DOM
    it('withinSubject: 默认/null', () => {
      cy.get('#setting1')
    })
    it('withinSubject: 有值', () => {
      cy.get('#setting1').within(() => {
        // 获取id为的ul元素
        cy.root()
      })

      // 方法一：
      const $el = Cypress.$('#setting')
      cy.get('#setting1', {
        // withinSubject的值类型：JQuery<HTMLElement>
        withinSubject: $el
      })

      // 方法二：
      cy.get('#setting').within(($eml) => {
        // 获取id为的ul元素
        cy.get('#setting1', {
          withinSubject: $eml
        })
      })
    })
  })
})
