RAD.view("view.start_page", RAD.Blanks.View.extend({
    url: 'source/views/dashboard_page/dashboard_page.html',
    model: RAD.model('users'),
    events: {
        'click .stat': 'navToClientsPage'
    },
    onStartAttach: function(){
        $('#sidebar').hide();
    },

    onEndDetach: function(){
        $('#sidebar').show();
    },

    navToClientsPage: function(){
        var options = {
            container_id: '#content',
            content: 'view.clients_page'
        };
        this.publish('navigation.show', options);
    }
}));