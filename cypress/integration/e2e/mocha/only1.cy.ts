
describe('only进阶1', function () {
  it('test1', () => {
    cy.log('test1')
  })

  it.only('test2.only', () => {
    cy.log('test2.only')
  })

  describe.only('describe.only', function () {
    it('describe.only test', () => {
      cy.log('describe.only test')
    })
  })
})

describe('only进阶2', function () {
  it('test1', () => {
    cy.log('test1')
  })

  describe.only('describe.only', function () {
    it('describe.only test', () => {
      cy.log('describe.only test')
    })
  })
})

describe('only进阶3', function () {
  it('进阶3test1', () => {
    cy.log('进阶2test1')
  })

  it.only('进阶3test2.only', () => {
    cy.log('进阶3test2.only')
  })

  it.only('进阶3test3.only', () => {
    cy.log('进阶3test3.only')
  })
})

describe('only进阶4', function () {
  it('进阶4test1', () => {
    cy.log('进阶4test1')
  })

  describe.only('进阶4describe1.only', () => {
    it('进阶4describe1.only test1', () => {
      cy.log('进阶4describe1.only test1')
    })
  })

  describe.only('进阶4describe2.only', () => {
    it('进阶4describe2.only test1', () => {
      cy.log('进阶4describe2.only test1')
    })
  })
})
