
describe.only('only', function () {
  it('only里面的测试用例', () => {
    cy.log('only里面的测试用例')
  })

  it.only('only里面的only测试用例', () => {
    cy.log('only里面的only测试用例')
  })
})

describe('only之后的测试套件', function () {
  it('only之后的测试用例', () => {
    cy.log('only之后的测试用例')
  })
})
