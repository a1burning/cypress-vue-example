const data = Cypress._.defaults({ a: 1 }, { a: 3, b: 2 })
console.log(data)
describe('浏览器相关命令', () => {
  context('访问网页', () => {
    it('打开网页', () => {
      cy.visit('/#/about?a=1')
    })
  })

  context('window', () => {
    it('window直接调用', () => {
      cy.window()
    })

    it('window访问全局变量', () => {
      // 方法一
      cy.window().its('hello').its('foo').should('equal', 'bar')
      // 方法二
      cy.window().then(win => {
        expect(win.hello.foo).to.equal('bar')
        cy.wrap(win).its('hello').its('foo').should('equal', 'bar')
      })
    })
  })

  context('document', () => {
    it('document直接调用', () => {
      cy.document()
    })

    it('document访问变量', () => {
      // 方法一
      cy.document().its('contentType')
      // 方法二
      cy.document().then(doc => {
        expect(doc.contentType).to.equal('text/html')
      })
    })
  })

  context('title', () => {
    it('title使用', () => {
      // 返回string
      cy.title()
      // 等价于
      cy.document().its('title')
    })
  })

  context('location', () => {
    it('location使用', () => {
      // cy.location是普通对象，并不是location对象，只是规范化了去除了一些不用的方法
      // 当更改真实window.location对象的属性时，它会强制浏览器离开。在 Cypress 中，生成的对象是普通对象，因此更改其属性不会影响导航。
      cy.location() // Cypress封装的location对象
      // 不等价于
      cy.document().its('location') // 浏览器的真实location对象
    })

    it('location获取属性', () => {
      cy.location().then(loc => {
        expect(loc.hash).to.eq('#/about?a=1')
      })
      // 等价于
      cy.location('hash') // 加了参数之后返回的都是string类型
      cy.location().its('hash')
    })
  })

  context('url', () => {
    it('url使用', () => {
      // 当前页面url
      cy.url()
      // 等价于
      cy.location('href')
      cy.document({ log: false }).its('location.href')
    })

    it('url解码配置', () => {
      cy.visit('/#/about?a=사랑&b=你好啊')
      // 对url是否进行解码，默认是false，不解码；设置为true，则会对非ASCII码值进行解码
      cy.url({ decode: true }).should('contain', '사랑').should('contain', '你好')
    })

    it('不建议进行url硬编码', () => {
      // 不建议进行硬编码，如果要取域名，建议进行配置的选择
      cy.visit('/#/about')
      cy.url().should('eq', 'http://localhost:8080/#/about')
      cy.url().should('eq', Cypress.config().baseUrl + '/#/about')
    })
  })

  context('hash', () => {
    it('hash使用', () => {
      cy.hash()
      // 等价于
      cy.location('hash')
      cy.document({ log: false }).its('location.hash')
    })
  })
})
