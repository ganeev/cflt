RAD.view("view.add_new", RAD.Blanks.View.extend({
    url: 'source/views/news/add_new/add_new.html',
    events: {
        'click a.close': 'closeModal'
    },
    onInitialize: function(){

    },
    closeModal: function(){
        this.publish('navigation.popup.close', {
            content: 'view.add_new',
            destroy: true
        });
    }
}));