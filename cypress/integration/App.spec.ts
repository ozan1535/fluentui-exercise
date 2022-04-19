describe("Cypress Practices", () => {

    Cypress.config('baseUrl', 'http://localhost:3000')

    it("Should have text id", () => {
        cy.visit('/')
        cy.get("#text").should("exist");
    })

    it("Shouldn't have maincontainer class", () => {
        cy.visit('/contact')
        cy.get(".maincontainer").should('not.exist')
    })

    it("Should have p tag", () => {
        cy.visit('/contact')
        cy.get("p").should('exist')
    })

    it("GET", () => {
        cy.request('GET', '/api').then(response => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.length(2)
        })
    })

    it("POST", () => {
        const item ={"id": 1, "name": "ozan", "email": "ozan@gmail.com", "phone": "12345"}
        cy.request('POST', '/api', item)
        .its('body')
        .should('include', {name: "ozan"})
    })
})