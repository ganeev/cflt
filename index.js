/**
 * Created by kurdt on 09.04.14.
 */
(function (document, window) {
    'use strict';

    var scripts = [
        "source/models/users.js",
        "source/views/main.js",
        "source/views/dashboard/dashboard_page.js",
        "source/views/statistic/stat_page.js",
        "source/views/statistic/clients/clients_page.js",
        "source/views/news/news_page.js",
        "source/views/news/add_new/add_new.js",
        "source/views/sales/sales_page.js",
        "source/views/presents/presents_page.js",
        "source/views/message/message_page.js",
        "source/views/settings/settings_page.js"

    ];

    function onEndLoad() {

        RAD.core.publish('navigation.show', {
            container_id: '#screen',
            content: "view.main",
            animation: 'fade'
        });
    }

    window.RAD.scriptLoader.loadScripts(scripts, onEndLoad);
}(document, window));


