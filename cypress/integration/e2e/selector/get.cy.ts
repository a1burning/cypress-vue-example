/**
 * Get命令
 */
describe('Get命令', () => {
  context('访问网页', () => {
    it('打开网页', () => {
      cy.visit('/')
    })
  })

  context('用选择器定位', () => {
    it('cy.get(selector)', () => {
      cy.get('[data-cy="get"]')
    })
  })

  context('用别名定位', () => {
    it('cy.get(alias)', () => {
      // 通过as设置别名
      cy.get('[data-cy="get-todos"]').as('todos')
      // 之后就通过@符号获取别名
      cy.get('@todos')
    })
  })

  context('使用within', () => {
    it('within命令缩小范围', () => {
      cy.get('#get').within(() => {
        cy.get('#get-within')
          .should('have.class', 'get-within')
      })
    })
  })

  context('get和find的区别', () => {
    it('使用get', () => {
      cy.get('#get-find')
        // 第二个又扩大了范围，返回一堆数组
        .get('div')
        // 这样找到了两个元素（该用例通过）
        // 一个是get-test-title的div标签
        // 一个是get-test-feature的div标签
        .should('have.class', 'get-test-title')
        .and('have.class', 'get-test-feature')
    })

    it('使用find', () => {
      cy.get('#get-find')
        .find('div')
        // 这个查找只是限制了在 #get-find 里面
        // 所以只能找到get-test-feature这个类元素
        .should('have.length', 1)
        .and('have.class', 'get-test-feature')
    })

    it('使用within可以缩小查找范围，起到了类似于find的作用', () => {
      cy.get('#get-find').within(() => {
        cy.get('div')
          // 不包括get-test-title
          .should('not.have.class', 'get-test-title')
          // 包括get-test-feature
          .and('have.class', 'get-test-feature')
      })
    })
  })
})
