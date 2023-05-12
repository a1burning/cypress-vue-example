
describe('浏览器相关命令', () => {
  context('访问网页', () => {
    it('打开网页', () => {
      cy.visit('/')
    })
  })

  context('浏览器相关命令测试用例', () => {
    it('window', () => {
      cy.window().its('hello').its('foo').should('equal', 'bar')
    })

    it('document', () => {
      cy.document().its('contentType').should('eq', 'text/html')
      cy.document().then(doc => {
        expect(doc.contentType).to.equal('text/html')
      })
    })

    it('title', () => {
      cy.title().should('include', 'cypress')
    })

    it('location', () => {
      // 搜索查询
      // cy.get('#search').type('niklas{enter}')
      // cy.location().should((loc) => {
      //   expect(loc.search).to.eq('?search=niklas')
      //   expect(loc.pathname).to.eq('/users')
      // })

      // 断言重定向
      cy.visit('http://localhost:3000/admin')
      cy.location('pathname').should('eq', '/login')
    })

    it('hash', () => {
      // <a href="#/users/8fc45b67-d2e5-465a-b822-b281d9c8e4d1">Fred</a>
      // cy.get('#users li').find('a').click()
      // cy.hash().should('match', /users\/.+$/) // => true
    })
  })
})
