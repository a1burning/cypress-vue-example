
describe.skip('describe.skip', function () {
  it('test1', () => {
    cy.log('test1')
  })

  it.only('test2.only', () => {
    cy.log('test2.only')
  })

  it.only('test3.only', () => {
    cy.log('test3.only')
  })

  describe.only('describe.only', function () {
    it('describe.only test', () => {
      cy.log('describe.only test')
    })
  })
})

describe.skip('describe.skip2', function () {
  it('test1', () => {
    cy.log('test1')
  })

  it.skip('test2.skip', () => {
    cy.log('test2.skip')
  })
})

describe.skip('describe.skip3', function () {
  it('test1', () => {
    cy.log('test1')
  })

  describe.only('describe.skip3 > describe.only', () => {
    it('describe.skip3 > describe.only > test2', () => {
      cy.log('describe.skip3 > describe.only > test2')
    })

    it.skip('describe.skip3 > describe.only > test3.skip', () => {
      cy.log('describe.skip3 > describe.only > test3.skip')
    })
  })
})

describe.only('describe.only1', function () {
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

describe.only('describe.only2', function () {
  it('test1', () => {
    cy.log('test1')
  })

  it.only('test2.only', () => {
    cy.log('test2.only')
  })

  it.only('test3.only', () => {
    cy.log('test3.only')
  })

  it('test4', () => {
    cy.log('test4')
  })

  it.skip('test5.skip', () => {
    cy.log('test5.skip')
  })
})
