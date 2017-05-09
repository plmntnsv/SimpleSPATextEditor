var assert = require('assert');
var chai = require('chai');

const profileLogic = require('../profile-logic')();

describe('profileLogicTests', function () {
    it('getUser sets username email and date created appropriately', function () {
        expect(profileLogic.$profileUsername.html).to.equal(profileLogic.user._name);
        expect(profileLogic.$profileEmail.html).to.equal(profileLogic.user._email);
        expect(profileLogic.$profileCreation.html).to.equal(profileLogic.user.createdOn);
    });
});



