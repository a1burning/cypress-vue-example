describe('skip测试用例', function () {
  describe.skip('跳过的describe', function () {
    it('describe.skip中的测试用例', () => {
      cy.log('describe.skip中的测试用例')
    })

    context('describe.skip中的测试套件', function () {
      it('describe.skip中的测试套件中的测试用例', () => {
        cy.log('describe.skip中的测试套件中的测试用例')
      })
    })
  })

  context.skip('跳过的context', function () {
    it('context.skip中的测试用例', () => {
      cy.log('context.skip中的测试用例')
    })
  })

  it('没有skip的测试用例', () => {
    cy.log('没有skip的测试用例')
  })

  it.skip('有skip的测试用例', () => {
    cy.log('有skip的测试用例')
  })
})

describe('skip+hook的测试套件', function () {
  beforeEach(() => {
    cy.log('beforeEach')
  })
  it.skip('跳过的测试套件', () => {
    cy.log('跳过的测试套件')
  })

  it('未跳过的测试用例', () => {
    cy.log('未跳过的测试用例')
  })
})

describe('动态跳过测试用例1', function () {
  it('test', function () {
    cy.log('skip函数之前的log方法')
    this.skip()
    cy.log('skip函数之后的log方法')
  })
})

/**
 * npm run test:open
 * npm run test:open_flag1
 * 运行两种不同的结果
 */
describe('动态跳过测试用例2', function () {
  it('env_flag', function () {
    cy.log('用例执行')
    if (Cypress.env('flag') === 1) {
      cy.log('是flag，执行改用例')
    } else {
      cy.log('如果flag不是1则不执行该用例')
      this.skip()
    }
  })
})
