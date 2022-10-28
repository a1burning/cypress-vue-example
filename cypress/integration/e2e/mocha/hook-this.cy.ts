/**
 * ps: 因为before和after都是hook，所以里面的this一致，
 * 这里使用两个before无法执行，所以用一个before一个after
 */
describe('before', function () {
  before(function () {
    // before的this
    console.log(this)
    console.log(this.skip())
  })

  after(() => {
    // describe的this
    console.log(this)
    // 以下代码报错
    // console.log(this.skip())
  })

  it('test', () => {
    cy.log('test')
  })
})
