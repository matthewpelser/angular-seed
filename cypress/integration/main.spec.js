describe('Kitchen Sink', function () {
	it('.should() - assert that <title> is correct', function () {
		cy.visit('http://localhost:9000/');
		cy.title().should('include', 'angular-seed');
	})
});
