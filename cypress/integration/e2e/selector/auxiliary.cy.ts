/**
 * 24个方法
 */
describe('e2e辅助选择方法', () => {
  context('访问网页', () => {
    it('打开网页', () => {
      cy.visit('/')
    })
  })

  context.skip('关于对象的问题', () => {
    it('获取jQuery对象', () => {
      // JQuery<HTMLElement>
      const $el = Cypress.$('#auxId3')
      const classAttr = $el.attr('class') || ''
      cy.log(classAttr)
    })
    it('获取DOM对象', () => {
      // HTMLElement
      const el = Cypress.$('#auxId3')[0]
      const classAttr = el.getAttribute('class') || ''
      cy.log(classAttr)
    })
    it('获取Cypress封装的DOM对象', () => {
      // get<E extends Node = HTMLElement>(selector: string, options?: Partial<Loggable & Timeoutable & Withinable & Shadow>): Chainable<JQuery<E>>
      cy.get('#auxiliarySelector')
    })
  })

  context.skip('基础选择方法', () => {
    // 获取符合条件的DOM元素
    it('get', () => {
      // 默认都是从根目录进行查找，除非给限制条件
      cy.get('#auxId1')
      cy.get('#auxiliarySelector li')
        .get('#auxiliary')
    })

    // 在元素范围内查找元素，与jQuery的find一致
    it('find', () => {
      // 不能直接用cy调用
      cy.get('#auxiliarySelector').find('#auxId1')
      cy.get('#auxiliarySelector').find('.auxClass')
    })

    it('get 和 find 的区别', () => {
      // 用get返回所有含auxClass类的元素
      cy.get('#auxiliarySelector')
        .get('.auxClass')
      // 用find只返回ul里面含auxClass类的元素
      cy.get('#auxiliarySelector')
        .find('.auxClass')
        // .get('#auxiliary')
    })

    // 获取包含文本的 DOM 元素，每次只返回第一个匹配到的元素
    it('contains', () => {
      // 直接搜索文本content，返回对应DOM，只返回第一个
      cy.contains('选择元素命令')
      // 可以后面加options
      cy.contains('li1', {
        matchCase: false // 可以检查区分大小写，默认为true
      })
      // 可以传正则，匹配返回第一个元素
      cy.contains(/^Li\d+/)
      // 可以传选择器+文本，返回的对象是第一个参数写的选择器
      cy.contains('#auxiliarySelector', 'Li1')
      // 可以链式调用
      cy.contains('#auxiliarySelector', 'Li1')
        .contains('Li2')
      // 和get搭配链式调用
      cy.dataCy('auxiliary-head').contains('选择元素命令')
    })
  })

  context.skip('父子关系选择方法', () => {
    // 获取DOM元素的子元素
    it('children', () => {
      // 所有的li标签，返回的是长度为4的数组
      cy.get('#auxiliarySelector').children()
      // 单独id是auxId1的li标签，返回的是DOM元素
      cy.get('#auxiliarySelector').children('#auxId1')
    })

    // 沿DOM树移动一个级别，获取第一层的父元素
    it('parent', () => {
      // 返回父元素ul DOM元素
      cy.get('#auxId1').parent()
      // 如果里面写的不是第一个父元素的选择器，就会报错
      // cy.get('#auxId1').parent('#auxiliary')   报错
      cy.get('#auxId1').parent('#auxiliarySelector')
    })

    // 沿DOM树向上移动，获取所有父元素
    it('parents', () => {
      // 所有的父元素，到html结束，返回的是长度为8的数组
      cy.get('#auxId1').parents()
      // 所有div的父元素，返回长度为5的数组
      cy.get('#auxId1').parents('div')
    })

    // 沿DOM树向上移动，返回符合选择器范围内的所有父元素
    it('parentsUntil', () => {
      // 必须加参数，不然会报错
      // 选择器的内容不包含，返回到body的长度为7的数组
      cy.get('#auxId1').parentsUntil('html')
      // 如果选择器不在父元素上，则返回所有父元素（长度为8的数组）
      cy.get('#auxId1').parentsUntil('#id')
    })

    // 获取DOM的根元素
    it('root', () => {
      // 获取到html元素
      cy.root()
      // 获取到html元素
      cy.get('#auxId1').root()
      // 获取到html元素
      cy.get('#auxiliarySelector').find('li').root()
      // within可以缩小root范围
      cy.get('#auxiliarySelector').within(() => {
        // 获取id为的ul元素
        cy.root()
      })
    })

    // 获取与选择器匹配的第一个 DOM 元素（无论是它本身还是它的祖先之一）
    it('closest', () => {
      // 子元素和同级元素不行 error
      // cy.get('#auxiliarySelector').closest('li')
      // 自己
      cy.get('#auxId1').closest('li')
      // 父级
      cy.get('#auxId1').closest('#auxiliarySelector')
      // 祖先
      cy.get('#auxId1').closest('#auxiliary')
    })
  })

  context.skip('兄弟关系选择方法', () => {
    // 获取除自己之外的所有兄弟元素
    it('siblings', () => {
      // 除自己外所有兄弟元素
      cy.get('#auxId1').siblings()
      // 除自己外所有符合条件的兄弟元素
      cy.get('#auxId1').siblings('#auxId2')
      cy.get('#auxId1').siblings('.auxClass')
    })

    // 获取下一个紧跟着的兄弟元素
    it('next', () => {
      // 不加参数返回下一个元素，没有下一个元素会报错
      cy.get('#auxId1').next()
      cy.get('#auxiliarySelector li').next('.auxClass')
      // cy.get('#auxId1').next('#auxId2') // 不是相邻就会error
    })

    // 获取给定DOM之后的所有同级元素
    it('nextAll', () => {
      cy.get('#auxId1').nextAll()
      cy.get('#auxId1').nextAll('.auxClass')
    })

    // 获取给定DOM之后的同级元素直到Until里的元素为止
    it('nextUntil', () => {
      // #auxId1 同级的所有3个元素 因为类型问题不建议使用，直接使用nextAll可以解决问题
      // cy.get('#auxId1').nextUntil()
      // 不包括#auxId2
      cy.get('#auxId1').nextUntil('#auxId2')
      // 虽然文档有说有filter，实际可用，但是TS类型并不支持，需要去e2e.ts中配置
      cy.get('#auxId1').nextUntil('#auxId3', '#auxId2')
      // https://github.com/cypress-io/cypress-documentation/issues/5078
      // 参数可以传jQuery Object
      const $el = Cypress.$('#auxId3')
      cy.get('#auxId1').nextUntil($el)
      // 参数可以用 DOM 对象
      const el = Cypress.$('#auxId3')[0]
      cy.get('#auxId1').nextUntil(el)
    })

    // 获取上一个紧跟着的兄弟元素
    it('prev', () => {
      cy.get('#auxId2').prev()
      cy.get('#auxiliarySelector li').prev('.auxClass')
    })

    // 获取给定DOM之前的所有同级元素
    it('prevAll', () => {
      cy.get('#auxId2').prevAll()
      cy.get('#auxId2').prevAll('.auxClass')
    })

    // 获取给定DOM之前的同级元素直到Until里的元素为止
    it('prevUntil', () => {
      // 类型约束只能传1-3个参数
      // 不包括#auxId1
      cy.get('#auxId3').prevUntil('#auxId1')
      cy.get('#auxId3').prevUntil('#auxId1', '.auxClass')
    })
  })

  context.skip('精准选择方法', () => {
    // 获取给定DOM对象的第一个元素
    it('first', () => {
      cy.get('#auxiliarySelector li').first()
      cy.get('#auxiliarySelector').children('li').first()
    })

    // 获取给定DOM对象的最后一个元素
    it('last', () => {
      cy.get('#auxiliarySelector li').last()
      cy.get('#auxiliarySelector').children('li').last()
    })

    // 获取元素数组中特定索引处的 DOM 元素
    it('eq', () => {
      // 正数
      cy.get('#auxiliarySelector').children('li').eq(2)
      // 倒数
      cy.get('#auxiliarySelector').children('li').eq(-2)
    })

    // 获取与特定选择器匹配的 DOM 元素，与 not 相反
    it('filter', () => {
      cy.get('#auxiliarySelector li').filter('.auxClass')
      cy.get('#auxiliarySelector li').filter('#auxId2')
      cy.get('#auxiliarySelector li').filter(':contains("Li2")')
    })

    // 从一组 DOM 元素中过滤 DOM 元素，与 filter 相反
    it('not', () => {
      cy.get('#auxiliarySelector li').not('.auxClass')
      cy.get('#auxiliarySelector li').not('#auxId2')
      cy.get('#auxiliarySelector li').not(':contains("Li2")')
    })

    // 获取获得焦点的元素
    it('focused', () => {
      cy.get('#auxiliary-input').focus()
      cy.focused().blur()
    })

    // Shawdow DOM的获取
    // https://blog.csdn.net/qq_44376306/article/details/128552574
    it.skip('shadow', () => {
      cy.get('#shadow-card')
        .shadow()
        .find('div').contains('Name')
    })
  })
  // 对元素进行遍历
  context.skip('元素遍历方法', () => {
    it('jQuery-each', () => {
      const $lis = Cypress.$('#auxiliarySelector li')
      $lis.each((index, el) => {
        cy.log(Cypress.$(el).text())
      })
    })

    it('each', () => {
      cy.get('#auxiliarySelector li').first().each($el => {
        cy.log($el.text())
      })
      cy.get('#auxiliarySelector').children('li').each($el => {
        cy.log($el.text())
      })
    })
  })
})
