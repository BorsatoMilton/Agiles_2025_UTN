/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('la palabra "LIMON" 2', () => {
  cy.visit('http://localhost:4200');
  cy.get('mat-select[formControlName="idioma"]').click();
  cy.get('mat-option').contains('spanish').click();
  cy.get('mat-select[formControlName="dificultad"]').click();
  cy.get('mat-option').contains('easy').click();
  cy.get('button').contains('Jugar').click();
  cy.url().should('include', '/juego');
  cy.visit('http://localhost:4200/juego?idioma=spanish&dificultad=easy&palabraForzada=LIMON');
  cy.contains('Juego del Ahorcado');
});

When('ingreso la letra {string} con errores', (letra: string) => {
  cy.get('input[matInput]').clear().type(letra.toLowerCase());
  cy.get('button').contains('Arriesgar').click();
  cy.contains('strong', 'Letras usadas:').parent().should('contain', letra.toLowerCase());
  cy.wait(300);
});

Then('deberia tener {int} intentos restantes en victoria', (intentosEsperados: number) => {
  cy.contains('strong', 'Intentos restantes:')
    .parent()
    .then(($element) => {
      const text = $element.text();
      const match = text.match(/\d+/);
      const intentosRestantes = match ? parseInt(match[0], 10) : NaN;
      expect(intentosRestantes).to.equal(intentosEsperados);
    });
});

Then('Deberia mostrarme que gane con errores', () => {
  cy.get('.cdk-overlay-container', { timeout: 10000 }).should('exist');
  cy.get('.cdk-overlay-container [mat-dialog-title]', { timeout: 10000 })
    .should('contain.text', 'Juego finalizado');
  cy.get('.cdk-overlay-container .estado').should('contain.text', 'VICTORIA');
  cy.get('.cdk-overlay-container .palabra-secreta').should('contain.text', 'LIMON');
});