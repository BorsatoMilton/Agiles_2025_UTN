/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('la palabra "MANZANA" 1', () => {
  cy.visit('https://ahorcadoagiles.vercel.app/');
  cy.get('mat-select[formControlName="idioma"]').click();
  cy.get('mat-option').contains('SPANISH').click();
  cy.get('mat-select[formControlName="dificultad"]').click();
  cy.get('mat-option').contains('EASY').click();
  cy.get('button').contains('Jugar').click();
  cy.url().should('include', '/juego');
  cy.visit('https://ahorcadoagiles.vercel.app/juego?idioma=spanish&dificultad=easy&palabraForzada=MANZANA');
  cy.contains('Juego del Ahorcado');
});

When('ingreso la letra {string} en el peor juego', (letra: string) => {
  cy.get('input[matInput]').clear().type(letra.toLowerCase());
  cy.get('button').contains('Arriesgar').click();
  cy.contains('strong', 'Letras usadas:').parent().should('contain', letra.toLowerCase());
  cy.wait(300);
});

Then('Deberia mostrarme que perdi en el peor juego', () => {
  cy.get('.cdk-overlay-container', { timeout: 10000 }).should('exist');
  cy.get('.cdk-overlay-container [mat-dialog-title]', { timeout: 10000 })
    .should('contain.text', 'Juego finalizado');
  cy.get('.cdk-overlay-container .estado').should('contain.text', 'DERROTA');
  cy.get('.cdk-overlay-container .palabra-secreta').should('contain.text', 'MANZANA');
});