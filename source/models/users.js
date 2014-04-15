/**
 * Created by kurdt on 09.04.14.
 */
RAD.model('User', Backbone.Model.extend({
    defaults: {
        name: 'ivan'
    }
}), false);

RAD.model('users', Backbone.Collection.extend({
    model: RAD.model('User'),
    idAttribute: '_id',
    initialize: function(){
        this.set([
            {name: 'pavel'},
            {name: 'sergey'},
            {name: 'vasiliy'}
        ])
    }

}))
