RAD.view("view.phone_preview", RAD.Blanks.View.extend({
    url: 'source/views/news/add_new/phone_preview/phone_preview.html',
    model: new Backbone.Model(),
    className: 'position-relative',
    onNewExtras: function(extras){
        this.model = extras.model;
        //this.template && this.render();
    },
    formatDate: function(num){
        return $.datepicker.formatDate("yy-mm-dd", new Date(num));
    },
    onEndDetach: function(){
        alert('aaa');
    }
}));