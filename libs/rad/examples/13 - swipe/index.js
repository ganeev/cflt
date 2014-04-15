(function (document, window) {
    'use strict';

    var scripts = [
        "../tools/objectpool.js",
        "../tools/utils.js",
        "../tools/gestureadapter.js",
        "../js/iscroll-lite.js",

        "source/application/application.js",

        "source/views/parent_widget/parent_widget.js",
        "source/views/inner/first_widget/first_widget.js",
        "source/views/inner/second_widget/second_widget.js",
        "source/views/inner/third_widget/third_widget.js"
    ];

    function onEndLoad() {

        var core = window.RAD.core,
            application = window.RAD.application,
            coreOptions = {
                defaultBackstack: false,
                defaultAnimation: 'slide',
                animationTimeout: 3000,
                debug: false
            };

        //initialize core by new application object
        core.initialize(application, coreOptions);

        //start
        application.start();
    }

    window.RAD.scriptLoader.loadScripts(scripts, onEndLoad);
}(document, window));