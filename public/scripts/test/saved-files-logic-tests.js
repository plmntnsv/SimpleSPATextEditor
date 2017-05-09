var assert = require('assert');
var chai = require('chai');

const savedFilesLogic = require('../saved-files-logic')();

describe('savedFilesLogicTests', function () {
    it('$categorySelect change calls savedFilesController.get', function () {
        savedFilesLogic.$categorySelect.change();
        expect(savedFilesLogic.savedFilesController.get).to.have.been.called.with(savedFilesLogic.$categorySelect.val());
    });
    it('clicking previewButtons should call getSavedFile with adequate parameters', function () {
        savedFilesLogic.$previewButtons.click();
        expect(savedFilesLogic.data.getSavedFile).to.have.been.called.with(savedFilesLogic.$previewButtons.attr("name"), savedFilesLogic.$categorySelect.val());
    });
    it('clicking "make public" button should publish file', function () {
        savedFilesLogic.$makePublicButtons.click();
        expect(savedFilesLogic.file.isPublic).to.be.true;
        expect(savedFilesLogic.data.postPublicFile).to.have.been.called.with(savedFilesLogic.file);;
        expect(console.log).to.have.been.called.with('successfully posted to public.');
    });
    it('clicking $deleteButton should call removeClass', function () {
        savedFilesLogic.$deleteButtons.click();
        expect(savedFilesLogic.$selectedConformationForm.removeClass).to.have.been.called.with("hidden");
    });
    it('clicking $yesBtn should delete file', function () {
        savedFilesLogic.$yesBtn.click();
        expect(savedFilesLogic.data.deleteFile).to.have.been.called.with(savedFilesLogic.$yesBtn.attr('name'), savedFilesLogic.$categorySelect.val());
    });
    it('clicking $noBtn should re-enable delete button', function () {
        savedFilesLogic.$noBtn.click();
        expect(savedFilesLogic.$deleteBtn.removeAttr).to.have.been.called.with('disabled');
    });
});



