describe('Cypress集成应用', function () {
  it('打开页面', () => {
    cy.visit('/')
  })
  context('lodash', function () {
    it('直接Cypress._使用', () => {
      const data = Cypress._.defaults({ a: 1 }, { a: 3, b: 2 })
      cy.wrap(data).its('a').should('eq', 1)
    })

    it('将lodash解构出来使用', () => {
      const { _ } = Cypress
      const arr = _.partition([1, 2, 3, 4], n => n % 2)
      cy.wrap(arr).should('have.length', 2)
    })

    it('_.each', () => {
      const { _, $ } = Cypress
      cy.get('[data-cy="lodash-list"]').find('li').then(($li) => {
        _.each($li.get(), (el, i) => {
          expect($(el).parent()).to.match('ul')
        })
      })
    })
  })

  context('jQuery', function () {
    it('Cypress.$(selector)', () => {
      const $selector = Cypress.$('#selector') // 等价于 cy.get('#selector')
      cy.wrap($selector)
        .should('have.class', 'selector')
    })

    it('Cypress.$.method', () => {
      Cypress.$.each([1, 2, 3], (index, value) => {
        expect(index).to.eq(value - 1)
      })
    })
  })

  context('Blob', function () {
    // it('使用图像夹具进行jQuery插件上传', () => {
    //   cy.fixture('images/logo.png').as('logo')
    //   cy.get('[data-cy="blob-head"]').find('input[type=file]').then(function ($input) {
    //     console.log($input)
    //     // convert the logo base64 string to a blob
    //     const blob = Cypress.Blob.base64StringToBlob(this.logo, 'image/png')
    //     console.log(blob)

    //     // pass the blob to the fileupload jQuery plugin
    //     // https://github.com/blueimp/jQuery-File-Upload
    //     // used in your application's code
    //     // which initiates a programmatic upload
    //     $($input).fileupload('add', { files: blob })
    //   })
    // })
    // it('使用图像夹具进行jQuery插件上传', () => {
    //   cy.fixture('images/logo.png').as('logo')
    //   const blob = Cypress.Blob.base64StringToBlob('@logo', 'image/png')
    //   const newImg = document.createElement('img')
    //   newImg.src = blob

    //   cy.get('[data-cy="blob-head"]').find('input[type=file]').then(function ($input) {
    //     console.log($input)
    //     // convert the logo base64 string to a blob
    //     const blob = Cypress.Blob.base64StringToBlob(this.logo, 'image/png')
    //     console.log(blob)

    //     // pass the blob to the fileupload jQuery plugin
    //     // https://github.com/blueimp/jQuery-File-Upload
    //     // used in your application's code
    //     // which initiates a programmatic upload
    //     $($input).fileupload('add', { files: blob })
    //   })
    // })
  })
})
