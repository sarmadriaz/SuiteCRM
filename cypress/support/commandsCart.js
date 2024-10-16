// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

import 'cypress-real-events';


require("cypress-real-events")

Cypress.on('uncaught:exception', (err, runnable) => {
    // return false to prevent Cypress from failing the test
    return false;
  });

 
  Cypress.Commands.add('item', () => {
    cy.visit(' https://www.wikipedia.org')
    cy.get('#searchInput').type('Artificial Intelligence') .type('{enter}');
    cy.get('.mw-page-title-main').should('have.text','Artificial intelligence')
    cy.get('.mw-content-ltr')
    .first() 
    .invoke('text') 
    .then((summaryText) => {
        expect(summaryText).to.include('intelligent agents'); 
        expect(summaryText).to.include('machine learning'); 
    
    });
    cy.get('.mw-content-ltr')
    .first() 
    .invoke('text') 
    .then((summary) => {
        expect(summary).to.include('History'); 
        expect(summary).to.include('Applications'); 
    
    });
    cy.screenshot('full-article-page'); 
});
   
 
  




