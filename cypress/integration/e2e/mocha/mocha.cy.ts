describe('整个页面的测试用例描述', () => {
  before(() => {
    // 所有测试用例执行之前，只执行一次
    cy.log('before')
  })

  beforeEach(() => {
    // 每个测试用例执行前，都执行一次
    cy.log('beforeEach')
  })

  context('测试集，也等同于describe，一组测试用例的描述', () => {
    it('测试用例', () => {
      cy.log('describe > context > it')
    })

    context('嵌套在contxt中的测试集', () => {
      it('嵌套在两个contxt的测试用例', () => {
        cy.log('describe > content > context > it')
      })
    })
  })

  specify('测试用例，也等同于it', () => {
    cy.log('specify')
  })

  it('测试用例，没有回调的会标记为待处理')

  it.skip('加上.skip是会被跳过的用例', () => {
    cy.log('skip')
  })

  // it.only('加上.only是标记只执行这一个用例', () => {
  //   cy.log('only')
  // })

  describe('嵌套在describe中的描述', () => {
    it('嵌套在两个describe测试用例', () => {
      cy.log('describe > describe > it')
    })

    context('嵌套在两个describe中的测试集', () => {
      it('嵌套在describe > contxt的测试用例', () => {
        cy.log('describe > describe > context > it')
      })
    })
  })

  afterEach(() => {
    // 每次用例执行之后都执行
    cy.log('afterEach')
  })

  after(() => {
    // 所有用例执行完毕之后执行
    cy.log('after')
  })
})
