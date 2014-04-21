RAD.view("view.news_page", RAD.Blanks.ScrollableView.extend({
    url: 'source/views/news/news_page.html',
    model: RAD.model('users'),
    onInitialize: function(){
        this.model = RAD.model('news');
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
    formatDate: function(numeric){
        var date = new Date(numeric);
        return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    }
}));