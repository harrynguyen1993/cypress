import BasePage from './base-page';
class LoginPage extends BasePage {
    constructor() {
        super();
        this.emailField = 'input[name="email"]';
        this.passwordField = 'input[name="password"]';
        this.loginBtn = 'LOGIN';
    }

    fillEmail(email) {
        cy.get(this.emailField).type(email);
    }

    fillPassword(password) {
        cy.get(this.passwordField).type(password);
    }

    clickLogIn() {
        cy.contains('button', this.loginBtn).click();
    }

    login(email, password) {
        this.fillEmail(email);
        this.fillPassword(password);
        this.clickLogIn();
    }
}

export default LoginPage