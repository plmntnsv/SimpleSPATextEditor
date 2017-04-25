const templateLoader = (() => {

    function get(templateName) {
        return new Promise ((resolve, reject) => {
            
            $.get(`../templates/${templateName}.handlebars`)
            .done((source) => {
                let template = Handlebars.compile(source);
                resolve(template);
            })
            .fail(reject);
        });
        
    }

    return {
        get
    }
})();

export { templateLoader };