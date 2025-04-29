Cypress.Commands.add('cyref', ('/// <reference types="cypress"/>'));

Cypress.SelectorPlayground.defaults
({
    selectorPriority: ['id', 'class', 'attributes', 'data-cy', 'data-test', 'data-testid', 'tag', 'nth-child']
});

import 'cypress-wait-until';