describe('Testing VR site access successfully', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Assert map view successfully', () => {
    cy.get(':nth-child(3) > .vr-quick-navigation__link')
      .scrollIntoView()
      .should('be.visible')
      .click();
    cy.contains('Onde usar meu VR Refeição?').click();
    cy.get('#map').should('be.visible');
  });
});
