describe('describe', function () {
  it('describe > it1', () => {
    cy.log('describe > it1')
  })
  describe('describe > describe1', () => {
    it('describe > describe1 > it1', () => {
      cy.log('describe > describe1 > it1')
    })
    describe('describe > describe1 > describe1', () => {
      it('describe > describe1 > describe1 > it1', () => {
        cy.log('describe > describe1 > describe1 > it1')
      })
    })
    it('describe > describe1 > it2', () => {
      cy.log('describe > describe1 > it2')
    })
  })

  describe('describe > describe2', () => {
    it('describe > describe2 > it1', () => {
      cy.log('describe > describe2 > it1')
    })
  })
  it('describe > it2', () => {
    cy.log('describe > it2')
  })
})

it('不在测试套件中的it', () => {
  cy.log('it')
})
