import BasePage from './base-page';

class HeaderPage extends BasePage {
    constructor() {
        super();
        this.signinBtn = 'a[href="/signin"]';
        this.signUpBtn = 'a[href="/signup"]';
        this.singnOutBtn = 'Sign out';
    }

    clickSiginIn() {
        cy.get(this.signinBtn).click();
    }

    clickSignUp() {
        cy.get(this.signUpBtn).click();
    }

    clickSignOut() {
        cy.contains('a', this.singnOutBtn).click({force: true});
    }
}

export default HeaderPage