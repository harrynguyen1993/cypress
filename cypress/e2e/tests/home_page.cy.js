describe ("The home page should display the correct title", () => {
    beforeEach(() => {
        // reset and seed the database prior to every test
        cy.exec('npm install --version')
      })

    it ("Visits the home page", () => {
        cy.visit ('/');
        cy.get ('h1').should ('have.text', 'Welcome to the home page');
    });
});