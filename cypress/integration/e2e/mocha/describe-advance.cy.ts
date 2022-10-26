describe('d', function () {
  it('d > t1', () => {
    cy.log('d > t1')
  })

  context('d > c1', () => {
    it('d > c1 > t1', () => {
      cy.log('d > c1 > t1')
    })
    describe('d > c1 > d', () => {
      it('d > c1 > d > t', () => {
        cy.log('d > c1 > d > t')
      })

      context('d > c1 > d > c', () => {
        it('d > c1 > d > c > t', () => {
          cy.log('d > c1 > d > c > t')
        })
      })
    })

    context('d > c1 > c', () => {
      it('d > c1 > c > t', () => {
        cy.log('d > c1 > c > t')
      })
    })

    it('d > c1 > t2', () => {
      cy.log('d > c1 > t2')
    })
  })
  describe('d > d', () => {
    it('d > d > t1', () => {
      cy.log('d > d > t1')
    })
    describe('d > d > d', () => {
      it('d > d > d > t', () => {
        cy.log('d > d > d > t')
      })
    })
    it('d > d > t2', () => {
      cy.log('d > d > t2')
    })
  })

  context('d > c2', () => {
    it('d > c2 > t', () => {
      cy.log('d > c2 > t')
    })
  })

  describe('d > d2', () => {
    it('d > d2 > t', () => {
      cy.log('d > d2 > t')
    })
  })

  it('d > t2', () => {
    cy.log('d > t2')
  })
})

it('t', () => {
  cy.log('t')
})
