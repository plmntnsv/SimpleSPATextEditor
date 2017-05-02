import { templateLoader } from 'templateLoader';
import * as data from 'data';
import * as savedFilesController from 'savedFilesController';

export function init() {
    
        let $categorySelect = $("#show-category");
        $categorySelect.change(function (params) {
            let category = $(this).val();
            savedFilesController.get(category);
        });
}