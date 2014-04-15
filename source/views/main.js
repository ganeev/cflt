/**
 * Created by kurdt on 09.04.14.
 */
RAD.view("view.main", RAD.Blanks.View.extend({
    url: 'source/views/main.html',
    onInitialize: function () {
        "use strict";
        var self = this;
        this.subscribe('navigation.show', this.onNavigationShowEvent, this);
        this.subscribe('router.back', this.onRouterBackEvent, this);

        this.loader.done(function () {
            self.navToDashboard();
        });
    },
    navToDashboard: function(){
        var options = {
            container_id: '#content',
            content: 'view.start_page'
        };
        this.publish('navigation.show', options);
    },
    onNavigationShowEvent: function(){

    },
    onRouterBackEvent: function(){

    }
}));