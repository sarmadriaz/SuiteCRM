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

  Cypress.Commands.add('login', () => {
    cy.visit('https://suite8demo.suiteondemand.com/#/Login');
    cy.wait(10000)
    cy.get("input[placeholder='Username']").type('will')
    cy.get("input[placeholder='Password']").type('will')
    cy.get('#login-button').click()
  });

  
  Cypress.Commands.add('NewLead', () => {
    cy.login(); 
    cy.wait(10000)
    cy.get('.top-nav > .nav-link-nongrouped').click()
    cy.contains('a', 'Leads').click();
    
    cy.contains('a', 'Leads').click({ force: true });
    cy.contains('a', 'Create Lead').click({ force: true });
    cy.get('.dynamic-label').should('have.text','Create')
    cy.get('.custom-select').select('Mr.')
    cy.get("scrm-dynamic-field.dynamic-field-name-first_name input[type='text']").eq(0).should('exist').type('Sarmad');
    cy.get('scrm-varchar-edit.ng-star-inserted .form-control').eq(1).should('exist').type('Riaz');
    cy.get('.field-column-bordered .dynamic-field .form-control').eq(2).should('exist').type('SQA')
    cy.get('scrm-dynamic-field.dynamic-field-name-phone_work input[type="text"]').type('03165307039'); 
    cy.get('scrm-button.ng-star-inserted > .btn').click()
    cy.get('scrm-dynamic-field.dynamic-field-name-email_address input[type="text"]')
  .type('sarmadriaz385@gmail.com'); 
  cy.get('.button-group-button').first()
  .click(); 
  });

  Cypress.Commands.add('Contact', () => {
    cy.login(); 
    cy.wait(10000)
    cy.contains('a', 'Contacts').click();
    cy.contains('a','Contacts').click({force: true})
    cy.contains('a', 'Create Contact').click({ force: true });
    cy.get('.custom-select').select('Mr.')
    cy.get("scrm-dynamic-field.dynamic-field-name-first_name input[type='text']").type('Sarmad')
    cy.get("input.form-control.form-control-sm").eq(1).type('Riaz')
    cy.get("scrm-dynamic-field.dynamic-field-name-phone_mobile input[type='text']").type('03165307039')
    cy.contains('Save').click()
    cy.contains('a', 'Contacts').click();
    //cy.get('.form-control').type('Sarmad')


  })
  Cypress.Commands.add('login1', () => {
    cy.visit('https://buffer.com/');
    cy.get('.style__LoginLink-sc-1s2wc26-6').click()
    cy.get('#email').type('sarmadriaz924@gmail.com')
    cy.get('#password').type('Asdf1234@')
    cy.get('#login-form-submit').click()
  });

  Cypress.Commands.add('Account', () => {
   cy.login1();
cy.get('.publish_itemList_92NBS > :nth-child(4) > .publish_base_GTmOA').click()
    //cy.contains('button', 'TikTok').click();
    
    
// cy.session('sessionName', () => {
//   cy.login1();
  
//   cy.get('.publish_itemList_92NBS > :nth-child(4) > .publish_base_GTmOA').click();
// });

// cy.visit('https://www.tiktok.com');
cy.window().then((win) => {
  cy.stub(win, 'open').callsFake((url) => {
      expect(url).to.include('facebook.com');      
      win.location.href = url; 
  });
});

cy.contains('button', 'Facebook').click() 

cy.get('#start-connecting').click()
});


Cypress.Commands.add('SearchMovie', () => {
  cy.visit('https://www.imdb.com/');
  cy.get('#suggestion-search').type('Inception')
  cy.get('#suggestion-search-button').click()
  cy.wait(5000)
  cy.contains('Inception').click()
  cy.get('[data-testid="hero__primary-text"]').should('have.text','Inception')
  cy.get('.sc-70a366cc-0 > .ipc-inline-list > :nth-child(1) > .ipc-link').should('be.visible').invoke('text').then((year) => {
    cy.log('Year',year);
  });
  cy.get('[data-testid="hero-rating-bar__aggregate-rating"]').should('be.visible').invoke('text').then((rating) => {
    cy.log('Rating:', rating);
    //console.log('Rating:', rating);
});
cy.get('[data-testid="plot-xs_to_m"]').scrollIntoView()

//cy.get('.ipc-metadata-list-item__content-container .ipc-metadata-list-item__list-content-item').eq(0).click()
cy.get('.sc-70a366cc-2 > div[role="presentation"] > .ipc-metadata-list > .ipc-metadata-list-item--link > .ipc-metadata-list-item__content-container > .ipc-inline-list > :nth-child(1) > .ipc-metadata-list-item__list-content-item').should('be.visible').click({ force: true });

cy.get('[data-testid="hero__primary-text"]').should('be.visible').invoke('text').then((Name)=>{

  cy.log('Name', Name);
})

cy.get('[data-testid="birth-and-death-birthdate"]').should('be.visible').invoke('text').then((DOB)=>{

  cy.log('DOB', DOB);
})
});








