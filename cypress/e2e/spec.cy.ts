let API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
let batchSize = 20;
let offset = 0;
describe('Simple end to end testing', () => {
  it('Visit the app and check ', () => {
    cy.visit('http://localhost:3000');
    cy.contains('h2', 'Pokimon list');
  })
  it('fetches pokimon items - GET', () => {
    cy.request(`${API_BASE_URL}?limit=${batchSize}&offset=${offset}`).as('pokimonRequest');
    cy.get("@pokimonRequest").then(request => {
        expect(request.status).to.eq(200);
        assert.isArray(request.body.results, 'pokimons Response is an array')
    });
  });
  it('trigger modal - click', () => {
    cy.get('button').first().click();
    cy.contains('div', 'Pokimon details');
  });
})