/**
 * Find命令
 */
describe('Find命令', () => {
  context('访问网页', () => {
    it('打开网页', () => {
      cy.visit('/')
    })
  })

  context('find使用正确的用例', () => {
    it('find使用正确的用例', () => {
      cy.get('[data-cy="find-head"]')
        .find('.block')
        .should('have.length', 1)
    })
  })
})
