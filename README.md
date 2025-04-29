# Cypress_Portfolio

1. Instalação do cypress:
   1. npm init --yes
   2. npm install cypress@latest --save-dev
   3. npm i cypress --save

2. Abrir o cypress:
    1. npx cypress open
    2. Fechar para adicionar outras configuirações.

3. Instalação das dependências:
    1. WaitUntil
       1. npm install -D cypress-wait-until
       2. Add this line to your project's cypress/support/commands.js: import 'cypress-wait-until';
       3. Add in cypress/support/e2e.js: require('cypress-wait-until')
    2. Faker
       1. npm install @faker-js/faker --save-dev
    3. Report
       1. npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
       2. No arquivo package.json, adicionar a seguinte linha:
        "scripts": {
            "test": "cypress run --reporter mochawesome",
            "merge-reports": "mochawesome-merge --reportDir cypress/reports/mocha > cypress/reports/mochawesome-merged.json",
            "generate-report": "marge cypress/reports/mochawesome-merged.json -f report -o cypress/reports",
            "cy:run": "npm run test && npm run merge-reports && npm run generate-report"
        },

4. Adição dos comandos cyref e selectorPlayground em commands:
   1. Cypress.Commands.add('cyref', ('/// <reference types="cypress"/>'))
   2. Comandos de prioridades para seletores do cypress:
   
        Cypress.SelectorPlayground.defaults
        ({
            selectorPriority: ['id', 'class', 'attributes', 'data-cy', 'data-test', 'data-testid', 'tag', 'nth-child']
        })

5.  Configurar no arquivo cypress.config.js
    1.  viewport entre outras configurações