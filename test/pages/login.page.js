class LoginPage {
    get usernameElem(){
        return $('#user-name');
    }

    get passwordElem(){
        return $('#password');
    }

    get loginButtonElem(){
        return $('input[type=submit]');
    }

    get errorMessageElem(){
        return $('h3[data-test-error]');
    }

    open() {
        browser.url('/');
    }

    isErrorMessagePresent(){
        return this.errorMessageElem.isDisplayed();
    }

    loginWithStandardDriver(){
        this.usernameElem.addValue("standard_user");
        this.passwordElem.addValue("secret_sauce");
        this.loginButtonElem.click();
    }

}

module.exports = new LoginPage();