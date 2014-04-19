/**
 * Created by kurdt on 09.04.14.
 */
RAD.view("view.main", RAD.Blanks.View.extend({
    url: 'source/views/main.html',
    events: {
        'click .stat': 'navToClientsPage',
        'click .news': 'navToNewsPage',
        'click .sales': 'navToSalesPage',
        'click .presents': 'navToPresentsPage',
        'click .message': 'navToMessagePage',
        'click .settings': 'navToSettingsPage',
        'click .logo': 'navToDashboard'
    },
    onInitialize: function () {
        "use strict";
        var self = this;
        this.subscribe('navigation.show', this.onNavigationShowEvent, this);
        this.subscribe('router.back', this.onRouterBackEvent, this);

        this.loader.done(function () {
            var options = {
                container_id: '#content',
                content: 'view.dashboard_page',
                backstack: true,
                animation: 'fade'
            };
            self.publish('navigation.show', options);
        });
    },

    onReceiveMsg: function(message, data){
        var msg = message.split('.')[2];
        switch (msg){
            case 'clients':
                this.navToClientsPage();
                break;
            case 'news':
                this.navToNewsPage();
                break;
        }

    },
    selectMenuItem: function(elem){
        var menu = this.$('.menu');
        menu.find('li').removeClass('active');
        elem && elem.addClass('active') && menu.fadeIn();
    },
    navTo: function(name){
        var options = {
            container_id: '#content',
            content: 'view.' + name + '_page',
            backstack: true,
            animation: 'slide-out'
        };
        this.publish('navigation.show', options);
    },
    navToDashboard: function(){
        this.selectMenuItem();
        this.navTo('dashboard');
    },
    navToClientsPage: function(){
        this.selectMenuItem(this.$('.menu li.stat'));
        this.navTo('clients');
    },
    navToNewsPage: function(){
        this.selectMenuItem(this.$('.menu li.news'));
        this.navTo('news');
    },
    navToSalesPage: function(){
        this.selectMenuItem(this.$('.menu li.sales'));
        this.navTo('sales');
    },
    navToPresentsPage: function(){
        this.selectMenuItem(this.$('.menu li.presents'));
        this.navTo('presents');
    },
    navToMessagePage: function(){
        this.selectMenuItem(this.$('.menu li.message'));
        this.navTo('message');
    },
    navToSettingsPage: function(){
        this.selectMenuItem(this.$('.menu li.settings'));
        this.navTo('settings');
    },




    onNavigationShowEvent: function(){

    },
    onRouterBackEvent: function(){

    }
}));