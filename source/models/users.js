/**
 * Created by kurdt on 09.04.14.
 */
RAD.model('Client', Backbone.Model.extend({
    defaults: {
        name: 'ivan'
    }
}), false);

RAD.model('clients', Backbone.Collection.extend({
    model: RAD.model('Client'),
    idAttribute: '_id',
    url: 'api/clients',
    initialize: function(){
        /*var self = this;
        this.on('request', function(){
           self.inRequest = true;
        });
        this.on('sync', function(){
            self.inRequest = false;
        });*/
        /*this.set([
            {name: 'pavel'},
            {name: 'sergey'},
            {name: 'vasiliy'}
        ])*/
    },
    toJSON: function(){
        return _(Backbone.Collection.prototype.toJSON.apply(this)).filter(this.filter);
    },
    filter: function(item){
        return true;
    }

}));


RAD.model('news', Backbone.Collection.extend({
    idAttribute: '_id',
    url: 'api/news',
    initialize: function(){
        /*var self = this;
         this.on('request', function(){
         self.inRequest = true;
         });
         this.on('sync', function(){
         self.inRequest = false;
         });*/
        /*this.set([
         {name: 'pavel'},
         {name: 'sergey'},
         {name: 'vasiliy'}
         ])*/
    },
    toJSON: function(){
        return _(Backbone.Collection.prototype.toJSON.apply(this)).filter(this.filter);
    },
    filter: function(item){
        return true;
    }

}));