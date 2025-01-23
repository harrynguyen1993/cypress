class CommomPage {
    constructor() {
        this.toaster = 'div[role="alertdialog"]';
    }

    getToaster() {
        return cy.get(this.toaster);
    }
    
    verifyToasterContains(text) {
        this.getToaster().should('contain', text);
    }
}

export default CommomPage