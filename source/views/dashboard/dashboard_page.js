RAD.view("view.dashboard_page", RAD.Blanks.View.extend({
    url: 'source/views/dashboard/dashboard_page.html',
    onStartAttach: function(){
        $('#content').css('overflow', 'visible');
        $('#sidebar').hide();
    },
    onEndDetach: function(){
        $('#content').css('overflow', 'hidden');
        $('#sidebar').show();
    }
}));