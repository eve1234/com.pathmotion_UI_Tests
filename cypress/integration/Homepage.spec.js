
describe('Homepage tests',() =>{
    beforeEach(() => {
        cy.visit('/');

      });
    
    it(`should search using the keyword 'team'`,() =>{
        cy.get('.btns').click()
        cy.wait(2000)
        cy.get('#quick-search-bar').type('team')
        cy.get('button > svg').click()
        cy.wait(2000)

        //1. The number of results in the 'Discussions' column is 15
        cy.get('div.SearchResults__results--3vt64 >a').should('have.length',15)

        //2. There is a 'Show more' element on the bottom of the list
        cy.get('div.SearchResults__showMoreButton__wrapper--17N8v > button').should('be.visible')
        //3. There are 8 categories in the 'Filter by category' section
        cy.get('div.Filters__filters--2CzDk > button').should('have.length',8)

    })
})