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

Cypress.Commands.add('Giftcard', () => {

    cy.visit('https://www.edgewordstraining.co.uk/demo-site/');
    cy.get('#woocommerce-product-search-field-0').type('cap {enter}')
    cy.get('input[type="number"]').clear().type('3')
    cy.get('.single_add_to_cart_button').click()
    cy.wait(5000)
    cy.get('#woocommerce-product-search-field-0').type('belt {enter}')
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    cy.get('#billing_first_name').type('Sarmad')
    cy.get('#billing_last_name').type('Riaz')

    cy.get('#select2-billing_country-container').click(); 
    cy.get('.select2-results__option').contains('Pakistan').click();
    cy.get('#billing_address_1').type('Abbottabad Pakistan')
    cy.get('#billing_city').type('Abbottabad')
    cy.get('#select2-billing_state-container').click()
    cy.get('#select2-billing_state-results').contains('Khyber').click()
    cy.get('#billing_postcode').type('22010')
    cy.get('#billing_phone').type('03165307039')
    cy.get('#billing_email').type('sarmadriaz5@gmail.com')
    cy.get('#account_password').type('Asdfgh123456@asdfg!')
    cy.get('.wc_payment_method.payment_method_cod > label').click();
    cy.get('#place_order').click()
    cy.get('.beta > a').should('have.text','Edgewords Shop')



});
   
 
  




