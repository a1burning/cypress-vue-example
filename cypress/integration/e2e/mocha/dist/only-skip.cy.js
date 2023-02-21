describe.skip('describe.skip', function () {
    it('test1', function () {
        cy.log('test1');
    });
    it.only('test2.only', function () {
        cy.log('test2.only');
    });
    it.only('test3.only', function () {
        cy.log('test3.only');
    });
    describe.only('describe.only', function () {
        it('describe.only test', function () {
            cy.log('describe.only test');
        });
    });
});
describe.skip('describe.skip2', function () {
    it('test1', function () {
        cy.log('test1');
    });
    it.skip('test2.skip', function () {
        cy.log('test2.skip');
    });
});
describe.skip('describe.skip3', function () {
    it('test1', function () {
        cy.log('test1');
    });
    describe.only('describe.skip3 > describe.only', function () {
        it('describe.skip3 > describe.only > test2', function () {
            cy.log('describe.skip3 > describe.only > test2');
        });
        it.skip('describe.skip3 > describe.only > test3.skip', function () {
            cy.log('describe.skip3 > describe.only > test3.skip');
        });
    });
});
describe.only('describe.only1', function () {
    it('test1', function () {
        cy.log('test1');
    });
    it('test2', function () {
        cy.log('test2');
    });
    it.skip('test3.skip', function () {
        cy.log('test3.skip');
    });
});
describe.only('describe.only2', function () {
    it('test1', function () {
        cy.log('test1');
    });
    it.only('test2.only', function () {
        cy.log('test2.only');
    });
    it.only('test3.only', function () {
        cy.log('test3.only');
    });
    it('test4', function () {
        cy.log('test4');
    });
    it.skip('test5.skip', function () {
        cy.log('test5.skip');
    });
});
