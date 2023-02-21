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
            // 因为nextUntil的类型有写小问题，所以这里重新配置一下
            nextUntil<K extends keyof HTMLElementTagNameMap>(selector: K, filter?: string, options?: Partial<Loggable & Timeoutable>): Chainable<JQuery<HTMLElementTagNameMap[K]>>
            nextUntil<E extends Node = HTMLElement>(selector: string, filter?: string, options?: Partial<Loggable & Timeoutable>): Chainable<JQuery<E>>
            nextUntil<E extends Node = HTMLElement>(element: E | JQuery<E>, filter?: string, options?: Partial<Loggable & Timeoutable>): Chainable<JQuery<E>>
        }
    }
}
// Alternatively you can use CommonJS syntax:
// require('./commands')
