/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('la palabra {string}', (palabra: string) => {
  cy.visit('http://localhost:4200');
  cy.log(`Configurando palabra: ${palabra}`);
});

When('ingreso la letra {string}', (letra: string) => {
  cy.get('input[matInput]').clear().type(letra);
  cy.contains('button', 'Arriesgar').click();
});

Then('Deberia mostrarme que gane', () => {
  cy.get('.cdk-overlay-container [mat-dialog-title]', { timeout: 10000 }).should('contain.text', 'Juego finalizado');
  cy.get('.cdk-overlay-container .estado').should('contain.text', 'VICTORIA');
});

Then('Deberia mostrarme que perdi', () => {
  cy.get('.cdk-overlay-container [mat-dialog-title]', { timeout: 10000 }).should('contain.text', 'Juego finalizado');
  cy.get('.cdk-overlay-container .estado').should('contain.text', 'DERROTA');
});
