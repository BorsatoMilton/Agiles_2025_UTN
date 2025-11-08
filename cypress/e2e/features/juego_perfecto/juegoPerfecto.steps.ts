/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('la palabra "MANZANA" para juego perfecto', () => {
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

When('ingreso la letra {string} en juego perfecto', (letra: string) => {
  cy.get('input[matInput]').clear().type(letra.toLowerCase());
  cy.get('button').contains('Arriesgar').click();
  cy.contains('strong', 'Letras usadas:').parent().should('contain', letra.toLowerCase());
  cy.wait(300);
});

Then('Deberia mostrarme que gane perfectamente', () => {
  cy.get('.cdk-overlay-container', { timeout: 10000 }).should('exist');
  cy.get('.cdk-overlay-container [mat-dialog-title]', { timeout: 10000 })
    .should('contain.text', '¡ Juego Finalizado !');
  cy.get('.cdk-overlay-container .estado').should('contain.text', 'VICTORIA');
  cy.get('.cdk-overlay-container .palabra-secreta').should('contain.text', 'MANZANA');
});