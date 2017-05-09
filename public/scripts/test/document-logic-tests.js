var assert = require('assert');
var chai = require('chai');

const documentLogic = require('../document-logic')();

describe('documentLogicTests', function () {
        it('$txtArea.focus() is called', function () {
            expect(documentLogic.$txtArea.focus()).to.have.been.called();
        });
        it('$saveContainer.toggleClass() is called', function () {
            documentLogic.$saveFileBtn.click();
            expect(documentLogic.$saveContainer.toggleClass).to.have.been.called.with("hidden");
        });
        it('$saveContainer.toggleClass() is called', function () {
            documentLogic.$cancelBtn.click();
            expect(documentLogic.$saveContainer.toggleClass).to.have.been.called.with("hidden");
        });
        it('newCategoryName set to $createCategoryName value', function () {
            documentLogic.$createCategoryName.input();
            expect(documentLogic.newCategoryName).to.equal(documentLogic.$createCategoryName.val());
        });
        it('$saveBtn.on("click"... throws if document with empty file name saved', function () {
            documentLogic.name = "";
            documentLogic.$saveBtn.click();
            expect(documentLogic.$saveBtn.on("click", function () { })).to.throw("Name cannot be empty!");
        });
        it('$saveBtn.on("click"... creates a new instance of "DocumentFile" with correct properties and posts to have been called', function () {
            var newCategoryName = "";
            const newDocumentFile = new documentLogic.DocumentFile(documentLogic.name, documentLogic.author, "categoryName", documentLogic.textAreaContent);
            expect(newDocumentFile.name).to.equal(documentLogic.$fileNameInput.val());
            expect(newDocumentFile.author).to.equal(documentLogic.user.displayName);
            expect(newDocumentFile.categoryName).to.equal("categoryName");
            expect(newDocumentFile.textAreaContent).to.equal(documentLogic.$txtArea.html());
            expect(documentLogic.data.postSaveFile).to.have.been.called.with(newDocumentFile.categoryName, newDocumentFile);
        });
        it('$boldBtn clicked calls execCommand bold', function () {
            documentLogic.$boldBtn.click();
            expect(documentLogic.document.execCommand).to.have.been.called.with('bold');
        });
        it('$italicBtn clicked calls execCommand italic', function () {
            documentLogic.$italicBtn.click();
            expect(documentLogic.document.execCommand).to.have.been.called.with('italic');
        });
        it('$underLineBtn clicked calls execCommand underline', function () {
            documentLogic.$underLineBtn.click();
            expect(documentLogic.document.execCommand).to.have.been.called.with('underline');
        });
        it('$fontFamilySelect.change() sets font family to selected value', function () {
            documentLogic.$fontFamilySelect.change();
            expect(documentLogic.$txtArea.css("font-family")).to.equal(documentLogic.$fontFamilySelect.val());
        });
        it('$fontSizeSelect.change() sets font size to selected value', function () {
            documentLogic.$fontSizeSelect.change();
            expect(documentLogic.$txtArea.css("font-size")).to.equal(documentLogic.$fontSizeSelect.val());
        });
});



