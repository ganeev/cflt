/**
 * Created by kurdt on 09.04.14.
 */
(function (document, window) {
    'use strict';

    var scripts = [
        "source/models/users.js",
        "source/views/main.js",
        "source/views/start_page/start_page.js"
    ];

    function onEndLoad() {
        RAD.core.publish('navigation.show', {
            container_id: '#screen',
            content: "view.main",
            animation: 'none'
        });
    }

    window.RAD.scriptLoader.loadScripts(scripts, onEndLoad);
}(document, window));