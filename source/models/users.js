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
    }

}));
