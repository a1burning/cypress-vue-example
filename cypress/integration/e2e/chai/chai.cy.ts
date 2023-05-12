/* eslint-disable no-unused-expressions */
describe('chai相关命令', () => {
  context('访问网页', () => {
    it('打开网页', () => {
      cy.visit('/#/chai')
    })
  })
  context('书写测试用例', () => {
    const obj = {
      name: 'Tom',
      sex: 'male',
      age: 18,
      other: {
        hobbys: ['唱歌', '跳舞', '旅游'],
        work: '学生',
        teacher: [
          { primary: 'Jone' }
        ]
      }
    }
    const obj1 = obj
    const objDeep = Cypress._.cloneDeep(obj)

    it('equal', () => {
      cy.wrap(obj.name).should('equal', 'Tom')
      expect(obj.name).to.equal('Tom')
      cy.wrap(obj.name).should('not.equal', 'Anne')
      expect(obj.name).not.to.equal('Anne')
      expect(obj.name).to.not.equal('Anne')
      // 严格相等
      cy.wrap(obj).should('equal', obj1)
      cy.wrap(obj).should('not.equal', objDeep)
    })

    // 本身：对象本身的属性，不包括继承属性
    it('own', () => {
      // 判断自身属性可以用own
      cy.wrap(obj).should('have.own.property', 'name')
      expect(obj).to.have.own.property('name')
      // 判断继承的属性不能用own
      cy.wrap(obj).should('have.property', 'toString')
      expect(obj).to.have.property('toString')
      cy.wrap(obj).should('not.have.own.property', 'toString')
      expect(obj).not.to.have.own.property('toString')
    })

    // 深度：断言深度相等，但不是严格相等。
    it('deep', () => {
      // 无论是不是指向同一地址，都会相等通过
      cy.wrap(obj).should('deep.equal', obj1)
      cy.wrap(obj).should('deep.equal', objDeep).then(() => {
        // 这段代码只能在then中写，因为异步，所以会报错
        // 修改name
        objDeep.name = 'Jane'
        cy.wrap(obj).should('not.deep.equal', objDeep)
        expect(obj).not.to.deep.equal(objDeep)
      })
    })

    // 嵌套：链中启用点和括号表示法
    it('nested', () => {
      // 判断有么有这个属性
      cy.wrap(obj).should('have.nested.property', 'other.hobbys[0]')
      expect(obj).to.have.nested.property('other.work')
      cy.wrap(obj).should('not.have.nested.property', 'other.size')
      expect(obj).to.not.have.nested.property('other.size')
      // 判断值
      cy.wrap(obj).should('nested.include', { 'other.hobbys[0]': '唱歌' })
      expect(obj).to.have.nested.include({ 'other.hobbys[0]': '唱歌' })
      cy.wrap(obj).should('not.nested.include', { 'other.hobbys[0]': '唱歌1' })
      expect(obj).to.not.have.nested.include({ 'other.hobbys[0]': '唱歌1' })
      // 如果属性本身有. 或者 [] ，需要用双斜杠 \\ 进行转义
      expect({ '.a': { '[b]': 'x' } }).to.have.nested.property('\\.a.\\[b\\]')
    })

    // 排序：要求链中的成员具有相同的顺序
    it('ordered', () => {
      // 顺序和内容必须完全一致
      cy.wrap(obj.other.hobbys).should('have.ordered.members', ['唱歌', '跳舞', '旅游'])
      expect(obj.other.hobbys).to.have.ordered.members(['唱歌', '跳舞', '旅游'])
      // not.ordered
      // 内容缺少，顺序不对
      cy.wrap(obj.other.hobbys).should('not.have.ordered.members', ['唱歌', '跳舞'])
      expect(obj.other.hobbys).not.to.have.ordered.members(['唱歌', '跳舞'])
      // 内容一样，顺序不对
      expect(obj.other.hobbys).not.to.have.ordered.members(['跳舞', '唱歌', '旅游'])
    })

    // 任何：只要命中一个键即可
    it('any', () => {
      // 参数可以是1个也可以是多个，只要有一个命中即可
      cy.wrap(obj).should('have.any.keys', 'age')
      expect(obj).to.have.any.keys('age')
      cy.wrap(obj).should('have.any.keys', 'age', 'friends')
      expect(obj).to.have.any.keys('age', 'friends')
      // 数组的key是索引值
      cy.wrap(obj.other.hobbys).should('have.any.keys', 0, 1)
      expect(obj.other.hobbys).to.have.any.keys(1)

      // not.any 没有一个命中才行
      cy.wrap(obj).should('not.have.any.keys', 'friends', 'happy')
      expect(obj).to.not.have.any.keys('friends', 'happy')
    })

    // 全部：必须断言命中所有键
    it('all', () => {
      // 参数可以是1个也可以是多个，对象有多少key这里必须都有
      const keys = Object.keys(obj)
      cy.wrap(obj).should('have.all.keys', ...keys)
      expect(obj).to.have.all.keys('name', 'age', 'sex', 'other')
      // 数组的key是索引值
      const arrKeys = Object.keys(obj.other.hobbys)
      cy.wrap(obj.other.hobbys).should('have.all.keys', ...arrKeys)
      expect(obj.other.hobbys).to.have.all.keys(...arrKeys)

      // not.all 不必全部命中，没有意义
      cy.wrap(obj).should('not.have.all.keys', 'friends')
      expect(obj).to.not.have.all.keys('friends')
      cy.wrap(obj).should('not.have.all.keys', 'age')
      expect(obj).to.not.have.all.keys('age')
    })

    // 类型：判断类型，等同于type
    it('a/an', () => {
      cy.wrap(obj.name).should('be.a', 'string')
      cy.wrap(obj.name).should('be.an', 'string')
      expect(obj.name).to.be.a('string')
      expect(obj.name).to.be.an('string')
      expect(obj.name).to.not.be.a('array') // 无意义
      // https://github.com/chaijs/type-detect 这里有全部的类型判断

      // 支持自定义类型 Symbol.toStringTag
      const myObj = {
        [Symbol.toStringTag]: 'myCustomType'
      }
      expect(myObj).to.be.a('myCustomType').but.not.an('object')
      // 最好是先对目标进行类型断言，为了避免出意外
      expect([]).to.be.an('array').that.is.empty

      // 接受第二个参数是msg，断言失败的时候报错信息
      // cy.wrap(obj.name).should('be.a', 'number', '必须要是number')
      // expect(obj.name, '必须要是number').to.be.a('number')
      cy.wrap(obj.name).should('be.a', 'string', '必须要是string')
      expect(obj.name, '必须要是string').to.be.a('string')
    })

    // 成员：断言目标数组具有给定的相同的成员，不需要顺序相同
    it('memebers', () => {
      // 默认数组的大小必须一样，但是顺序可以不一样
      cy.wrap(obj.other.hobbys).should('have.members', ['跳舞', '唱歌', '旅游'])
      expect(obj.other.hobbys).to.have.members(['跳舞', '唱歌', '旅游'])
      cy.wrap(obj.other.hobbys).should('not.have.members', ['旅游'])
      expect(obj.other.hobbys).to.not.have.members(['旅游'])
      // 第二个参数是错误信息
      // cy.wrap(obj.other.hobbys).should('have.members', ['跳舞'], '数组内容不对')

      // 和deep组合，判断深度相等成员
      cy.wrap(obj.other.teacher).should('have.deep.members', [{ primary: 'Jone' }])
      expect(obj.other.teacher).to.have.deep.members([{ primary: 'Jone' }])
      cy.wrap(obj.other.teacher).should('not.have.members', [{ primary: 'Jone' }])
      expect(obj.other.teacher).to.not.have.members([{ primary: 'Jone' }])

      // 和ordered组合，判断顺序相同成员
      cy.wrap(obj.other.hobbys).should('have.ordered.members', ['唱歌', '跳舞', '旅游'])
      expect(obj.other.hobbys).to.have.ordered.members(['唱歌', '跳舞', '旅游'])
      cy.wrap(obj.other.hobbys)
        .should('have.members', ['跳舞', '唱歌', '旅游'])
        .and('not.have.ordered.members', ['跳舞', '唱歌', '旅游'])
      expect(obj.other.hobbys)
        .to.have.members(['跳舞', '唱歌', '旅游'])
        .but.not.ordered.members(['跳舞', '唱歌', '旅游'])

      // 与include组合（在include部分查看）
    })

    // 包含：断言的内容的子集
    it('include', () => {
      cy.wrap(obj.name).should('include', 'T')
      expect(obj).to.include({ name: 'Tom' })
      expect(obj.other.hobbys).to.include('跳舞')
      expect(obj.other.hobbys).to.include('跳舞', '唱歌')
      // 别名是includes，contain，contains
      expect(obj.other.hobbys).to.includes('跳舞')
      expect(obj.other.hobbys).to.contain('跳舞')
      expect(obj.other.hobbys).to.contains('跳舞')
      // 第二个参数是msg，抛出错误信息
      // expect(obj.other.hobbys).to.includes('跳舞1', '请检查未包含的元素')

      // 不包含not.include
      expect(obj.name).to.not.include('J')
      expect(obj.other.hobbys).to.not.include('滑冰')
      // 如果是对象，比较不建议去用include判断，还是建议用any.keys
      expect(obj.other).to.include({ work: '学生' })

      // map是目标值
      expect(new Map([['a', 1], ['b', 2]])).to.include(2)
      // set是目标成员
      expect(new Set([1, 2])).to.include(2)

      // 一般使用的时候可以先判断类型再判断子集
      expect(obj.other.hobbys).to.be.an('array').that.includes('跳舞')

      // 如果是嵌套引用类型需要使用deep+include
      expect([{ a: 1 }, { b: 2 }]).not.to.include({ a: 1 })
      expect([{ a: 1 }, { b: 2 }]).to.deep.include({ a: 1 })
      expect({ a: { b: 2 }, c: 3 }).not.to.include({ a: { b: 2 } })
      expect({ a: { b: 2 }, c: 3 }).to.deep.include({ a: { b: 2 } })

      // include可以包含继承的子集，如果想判断本身的自己可以用own+include
      expect(obj)
        .to.include({ toString: obj.toString })
        .but.not.own.include({ toString: obj.toString })

      // 判断自身的深度相等的子集可以用deep+own+include
      expect(obj.other).not.to.include(objDeep.other)
      expect(obj.other).to.deep.own.include(objDeep.other)

      // 与nested组合(见nested)
      // 与deep+nested+include组合
      expect(obj).to.deep.nested.include({ 'other.teacher[0]': { primary: 'Jone' } })

      // include如果在members，keys前面，可以要求目标是预期值的超集，而不是相同的集
      // 添加时忽略子集中的重复项
      expect(obj).to.include.all.keys('name', 'sex')
      expect(obj).to.not.have.all.keys('name', 'sex')

      // 被忽略的断言  any keys
    })
  })
})
