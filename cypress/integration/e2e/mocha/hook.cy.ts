describe('一级套件', function () {
  before(function () {
    cy.log('一级套件的before')
  })

  beforeEach(function () {
    cy.log('一级套件的beforeEach')
  })

  it('一级套件的test1', () => {
    cy.log('一级套件的test1')
  })

  it('一级套件的test2', () => {
    cy.log('一级套件的test2')
  })

  after(function () {
    cy.log('一级套件的after')
  })

  afterEach(function () {
    cy.log('一级套件的afterEach')
  })

  context('二级套件', function () {
    before(function () {
      cy.log('二级套件的before')
    })

    beforeEach(function () {
      cy.log('二级套件的beforeEach')
    })

    it('二级套件的test1', () => {
      cy.log('二级套件的test1')
    })

    it('二级套件的test2', () => {
      cy.log('二级套件的test2')
    })

    after(function () {
      cy.log('二级套件的after')
    })

    afterEach(function () {
      cy.log('二级套件的afterEach')
    })
  })
})
