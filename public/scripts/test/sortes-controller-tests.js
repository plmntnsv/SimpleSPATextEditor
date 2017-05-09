var assert = require('assert');
var chai = require('chai');

const sortesController = require('../controllers/sortes-controller')();

describe('sortesControllerTests', function () {
    it('text array should have length of 19000', function () {
        expect(sortesController.textArr).to.have.length(19000);
    });
    it('clicking submit question button should display question', function () {
        sortesController.questionBtn.click();
        expect(sortesController.$("#questionP").text).to.equal(sortesController.inputField.val());
        expect(sortesController.generateNumBtn.style.display).to.equal('block');
    });
    it('prophecy should not contain brackets or numbers or unnecessary spaces', function () {
        sortesController.$randomNumBtn.click();
        expect(sortesController.prophecy).to.not.contain(/[0-9]/g);
        expect(sortesController.prophecy).to.not.contain(/\s{2,}/g);
        expect(sortesController.prophecy).to.not.contain(/[{()}]/g);
        expect(sortesController.prophecy).to.not.contain(/[[\]]/g);
    });
});



