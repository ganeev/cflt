RAD.view("view.clients_page", RAD.Blanks.ScrollableView.extend({
    url: 'source/views/statistic/clients/clients_page.html',

    onInitialize: function(){
        this.model = RAD.model('clients');
        this.updateUsers();
    },
    onEndAttach: function(){
       //this.model.fetch();
    },
    updateUsers: function(){
        this.model.fetch();
    },
    formatDate: function(numeric){
        var date = new Date(numeric);
        return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    }
}));