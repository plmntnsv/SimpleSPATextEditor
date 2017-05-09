var assert = require('assert');
var chai = require('chai');

const registerLogic = require('../register-logic')();

describe('registerLogicTests', function () {
    it('$registerBtn on click should create instance of user with valid properties', function () {
        registerLogic.$registerBtn.click();
        var newUser = new User("Todor", "todor@mail.bg", "Bulgaria");
        expect(newUser.userName).to.equal(registerLogic.$enterUsername.val());
        expect(newUser.email).to.equal(registerLogic.$enterEmail.val());
        expect(newUser.country).to.equal(registerLogic.$chooseCountry.val());
    });
    it('firebase createUserwithEmailandPassword should throw when invalid parameters passed', function () {
        registerLogic.$registerBtn.click();
        let email = "";
        let password = 0;

        expect(firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .to
            .throw(`${error.code} - ${error.message}`));
    });
    it('$registerBtn on click should update user profile and set session storage item', function () {
        registerLogic.$registerBtn.click();
        let displayName = registerLogic.displayName;
        let registerLogic = Logic.displayName;
        expect(registerLogic.user.updateProfile)
            .to
            .have
            .been
            .called
            .with({ displayName: registerLogic });

        expect(registerLogic.sessionStorage.setItem)
            .to.have.been.called
            .with("userLogged", displayName);
    });
    it('validate password should throw when password doesnt contain only latin letters and numbers', function () {
        registerLogic.$enterPasswordField.val() = "ЖЖЖЖЖЖ";
        registerLogic.$registerBtn.click();
        expect(registerLogic.validate).to.throw('Passwords must contain only latin letters.');
    });
    it('validate password should throw when passwords do not match', function () {
        registerLogic.$enterPasswordField.val() = "1234";
        registerLogic.$repeatPasswordField.val() = '123';
        registerLogic.$registerBtn.click();
        expect(registerLogic.validate).to.throw("Passwords are not equal.");
    });
    it('validate password should throw when password empty', function () {
        registerLogic.$enterPasswordField.val() = "";
        registerLogic.$registerBtn.click();
        expect(registerLogic.validate).to.throw("Password cannot be empty.");
    });
    it('validate username should throw if username doesnt contain only latin letters and numbers', function () {
        registerLogic.$enterUsername.val() = "ЖЖЖЖЖ";
        registerLogic.$registerBtn.click();
        expect(registerLogic.validate).to.throw("Username must contain only latin letters.");
    });
});



