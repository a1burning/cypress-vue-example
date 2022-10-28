/**
 * 为了保证用例正常，所以添加了跳过机制，执行的时候：
 * 1. 把describe.skip的skip去掉再执行
 * 2. 执行命令：npm run test:sample "cypress/integration/e2e/status/Skipped.cy.ts"
 */
describe.skip('Skipped测试状态', () => {
  beforeEach('访问网页', () => {
    cy.visit('http://localhost:8084/')
  })

  it('测试用例1', () => {
    cy.log('/')
  })

  it('测试用例2', () => {
    cy.log('/')
  })
})
