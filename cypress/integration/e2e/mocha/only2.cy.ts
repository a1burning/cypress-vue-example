// 测试套件里面有个用例有only，会有skip标识
describe('describe1', function () {
  it('test1', () => {
    cy.log('test1')
  })

  it.only('test2.only', () => {
    cy.log('test2.only')
  })
})

describe.only('describe.only1', function () {
  it('test1', () => {
    cy.log('test1')
  })

  it.only('test2.only', () => {
    cy.log('test2.only')
  })

  it.skip('test5.skip', () => {
    cy.log('test5.skip')
  })
})

// 测试套件里面没有only描述符，直接忽略
describe('describe2', function () {
  it('test1', () => {
    cy.log('test1')
  })

  describe('describe1 > describe2', function () {
    it('test2.only', () => {
      cy.log('test2.only')
    })
  })
})

// 测试套件里面有个测试套件有only，会有跳过标识
describe('describe3', function () {
  it('test1', () => {
    cy.log('test1')
  })

  describe.only('describe3 > describe.only', function () {
    it('test2', () => {
      cy.log('test2')
    })
  })
})

// 测试套件中有深度嵌套的测试用例有only，会有跳过标识
describe('describe4', function () {
  it('test1', () => {
    cy.log('test1')
  })

  describe('describe4 > describe', function () {
    it.only('test2.only', () => {
      cy.log('test2.only')
    })
  })
})

describe.only('describe.only2', function () {
  it('test1', () => {
    cy.log('test1')
  })

  it('test2', () => {
    cy.log('test2')
  })

  it.skip('test3.skip', () => {
    cy.log('test3.skip')
  })
})
