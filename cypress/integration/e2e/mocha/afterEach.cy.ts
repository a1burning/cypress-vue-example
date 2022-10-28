describe('afterEach的简单用法', function () {
  it('测试用例1', () => {
    cy.log('执行测试用例1')
  })

  it('测试用例2', () => {
    cy.log('执行测试用例2')
  })

  afterEach(function () {
    cy.log('测试后的数据清理')
  })
})
