const loginPage = require('../pages/login.page');
const expect = require('chai').expect;

describe('Login', () => {
    beforeEach(() => {
        browser.url('/')
    });

    it('should be able to login with the standard user', () => {
        loginPage.loginWithStandardDriver();

        expect(browser.getUrl()).to.include('/inventory.html')
    });
});