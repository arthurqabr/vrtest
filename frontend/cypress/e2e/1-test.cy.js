describe('Testing VR site access successfully', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Assert map view successfully', () => {
    cy.get(':nth-child(3) > .vr-quick-navigation__link') // select button "Pra Você"
      .scrollIntoView()
      .should('be.visible') // The button should be visible
      .click(); // Click in the button
    cy.url().should('eq', 'https://www.vr.com.br/onde-aceita.htm'); // Validation URL should be declareted
    cy.contains('Onde usar meu VR Refeição?').click(); // undefined ID, selected by text
    cy.get('#map').should('be.visible'); // Map ID selected and must be visible
  });
});
