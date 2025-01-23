import LoginPage from "../pages/login-page";
import HeaderPage from "../pages/header-page";
import CommomPage from "../pages/commom-page";


describe("The home page should display the correct title", () => {
    let header = new HeaderPage();
    let loginPage = new LoginPage();
    let commonPage = new CommomPage();

    beforeEach(() => {
        cy.visit('/');

        cy.viewport(1280, 720)
    });

    it.only("Login to the application", () => {
        cy.visit('/');
        header.clickSiginIn();
        cy.url().should('eq', 'https://letcode.in/signin');
        loginPage.fillEmail("luan.nguyenthanh.k1@gmai.com");
        loginPage.fillPassword("tma12Tma");
        loginPage.clickLogIn();
        cy.url().should('eq', 'https://letcode.in/');
        commonPage.verifyToasterContains("Welcome harry")
        header.clickSignOut();
    });

    it('Login with invalid credentials', () => {
        cy.visit('/');
        header.clickSiginIn();
        loginPage.login('invaliduser', 'wrongpassword');
        commonPage.verifyToasterContains("Error: The email address is badly formatted.")
    });

    it('Login with empty email and password', () => {
        cy.visit('/');
        header.clickSiginIn();
        loginPage.login('_', 'tma12Tma');
        commonPage.verifyToasterContains("Error: The email address is badly formatted.")
    });

    let arrayData = [];
    before(() => {
        cy.fixture('invalid_email').then((datas) => {
            arrayData = datas;
        });
    });

    it('Login with valid credentials', () => {
        arrayData.forEach(data => {
            header.clickSiginIn();
            loginPage.login(data.email, "tma12Tma");
            commonPage.verifyToasterContains(data.expectedErrorMessage)
            cy.visit('/');
        });
    });
});