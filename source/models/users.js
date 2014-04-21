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
