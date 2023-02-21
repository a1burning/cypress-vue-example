/**
 * Contains命令
 */
describe('Contains命令', () => {
  context('访问网页', () => {
    it('打开网页', () => {
      cy.visit('/')
    })
  })

  context('cy.contains使用的用例', () => {
    it('cy.contains(content)', () => {
      cy.contains('Testing with')
    })

    it('cy.contains(content, options)', () => {
      cy.contains('testing with', {
        // 可以检查区分大小写，默认为true
        matchCase: false
      })
    })

    it('cy.contains(selector, content)', () => {
      cy.contains('[data-cy=contains-head]', 'Testing with')
    })

    it('cy.contains(selector, content, options)', () => {
      cy.contains('[data-cy=contains-head]', 'testing with', {
        // 可以检查区分大小写，默认为true
        matchCase: false
      })
    })

    it('cy.contains(pattern)', () => {
      // 写正则
      cy.contains(/^T\w+/)
    })
  })

  context('.contains使用的用例', () => {
    it('.contains(content)', () => {
      // 可以在get，find等方法后面
      cy.get('[data-cy=contains-head]').contains('Testing with')
      cy.get('[data-cy=contains-head]').find('.block').contains('Testing with')
    })
  })

  context('进阶1-1：如何不返回最深匹配的元素', () => {
    it('不加selector的用例', () => {
      // content
      cy.contains('Testing with')
    })

    it('加selector的用例', () => {
      // selector，content
      cy.contains('[data-cy=contains-head]', 'Testing with')
    })
  })

  context('进阶1-2：表单链式调用', () => {
    it('不加selector的用例', () => {
      cy.get('[data-cy=contains-form]') // yields <form>...</form>
        .contains('[data-cy=contains-form]', 'Proceed') // yields <form>...</form>
        .submit() // yields <form>...</form>
    })
  })

  context('进阶2：区分匹配文本大小写', () => {
    it('matchCase为false', () => {
      // cy.get('[data-cy=contains-head]').contains('testing with') // fail
      cy.get('[data-cy=contains-head]').contains('testing with', { matchCase: false }) // pass
    })
  })

  context('进阶3：pre的格式不会忽略', () => {
    context('pre标签内有格式', () => {
      // it('pre-fail', () => {
      //   cy.get('[data-cy=contains-pre]').find('pre').contains('hello ,world')
      // })

      it('pre-pass', () => {
        cy.get('[data-cy=contains-pre]').find('pre').contains('   hello   ,world')
      })
    })

    context('普通标签内有格式', () => {
      // 普通标签写格式会fail
      // it('p-fail', () => {
      //   cy.get('[data-cy=contains-pre]').find('.hello').contains('   hello   ,world')
      //   cy.get('[data-cy=contains-pre]').find('.hello').contains('hello   ,world')
      // })

      it('p-pass', () => {
        // 中间就算有多个空格，也要合并成一个才会pass
        cy.get('[data-cy=contains-pre]').find('.hello').contains(' hello ,world')
        cy.get('[data-cy=contains-pre]').find('.hello').contains('hello ,world')
      })
    })
  })

  context('进阶4：&nbsp;空格匹配写', () => {
    // it('&nbsp-fail', () => {
    //   cy.get('[data-cy=contains-nbsp]').contains('hello&nbsp;world')
    // })

    it('&nbsp-pass', () => {
      cy.get('[data-cy=contains-nbsp]').contains('hello world')
    })
  })
})
