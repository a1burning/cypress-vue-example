// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

declare global {
    namespace Cypress {
        interface Chainable {
            // 里面是自定义指令的名称，参数和返回值
            dataCy(value: string): Chainable<JQuery<HTMLElement>>
        }
    }
}
// Alternatively you can use CommonJS syntax:
// require('./commands')
