
describe("dev server", () => {
    it ("has started", () => {
        cy.visit("http://localhost:9000/");
        cy.title().should("include", "angular-seed");
    });
});
