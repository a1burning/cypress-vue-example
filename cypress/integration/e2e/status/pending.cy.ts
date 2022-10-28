/**
 * 执行命令：npm run test:sample "cypress/integration/e2e/status/pending.cy.ts"
 */
describe('Pending测试状态', () => {
  context.skip('跳过测试集', () => {
    it('测试用例1', () => {
      cy.log('/')
    })
  })

  it('跳过测试用例', function () {
    cy.log('/')
    this.skip()
  })

  it('这是一个pending测试用例')
})
