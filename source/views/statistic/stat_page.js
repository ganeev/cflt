RAD.view("view.stat_page", RAD.Blanks.ScrollableView.extend({
    url: 'source/views/statistic/stat_page.html',
    className: 'override-scroll position-relative',
    events: {
        'click .orange': 'goToClietns'
    },
    onInitialize: function(){
        this.model = RAD.model('clients');
        this.updateUsers();
    },
    onEndRender: function(){
        this.detachScroll();
        this.attachScroll();
    },
    updateUsers: function(){
        var self = this;
        this.model.inRequest = true;
        this.model.fetch({
            silent: true,
            success: function(){
                self.model.inRequest = false;
                self.template && self.render();
            }
        });
        console.info(this.model);
    },
    goToClietns: function(){
        this.publish('view.main.clients');
    },
    formatDate: function(numeric){
        var date = new Date(numeric);
        return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    }
}));