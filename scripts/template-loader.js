const templateLoader = (() => {
    const cache = {};

    function get(templateName) {
        return new Promise((resolve, reject) => {
            if (cache[templateName]) {
                resolve(cache[templateName]);
            } else {
                $.get(`../templates/${templateName}.handlebars`)
                    .done((source) => {
                        let template = Handlebars.compile(source);
                        cache[templateName] = template;
                        resolve(template);
                    })
                    .fail(reject);
            }

        });

    }

    return {
        get
    }
})();

export {
    templateLoader
};