context('context', function () {
  console.log(this)
  this.timeout(500)

  it('箭头函数获取上下文，设置过期时间600成功', () => {
    console.log(this)
    this.timeout(600)
  })

  it('普通函数获取的不是mocha上下文，设置过期时间失败', function () {
    console.log(this)
    this.timeout(400)
  })
})
