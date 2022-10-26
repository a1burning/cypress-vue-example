describe('it测试用例', function () {
  context('正常通过的测试用例', () => {
    it('这是一个测试用例', () => {
      // 关于测试用例的内容都在里面写
      cy.log('it')
    })

    specify('这是specify测试用例', () => {
      // 关于测试用例的内容都在里面写
      cy.log('specify')
    })
  })
})
