RAD.view("view.widget2", RAD.Blanks.View.extend({
    className: "rad-bar",
    url: 'source/views/widget2/widget2.html',
    onInitialize: function () {
        "use strict";
        this.model = RAD.model('message');
    }
}));