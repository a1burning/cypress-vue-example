describe('beforeEach的简单用法', function () {
  beforeEach(function () {
    cy.log('测试前的数据准备')
  })
  it('测试用例1', () => {
    cy.log('执行测试用例1')
  })

  it('测试用例2', () => {
    cy.log('执行测试用例2')
  })
})
