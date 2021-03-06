/*global Electionsbih, Backbone, JST*/

Electionsbih.Views = Electionsbih.Views || {};

(function () {
    'use strict';

    Electionsbih.Views.ElectionSelect = Backbone.View.extend({

        //template: JST['app/scripts/templates/election-select.ejs'],
        template: _.template( $('#election-type-template').html() ),
        //tagName: '',

        id: 'toggle-election',

        className: '',

        events: {},

        initialize: function (options) {
            this.options = options.options[0];
            this.state = options.options[1];
            this.render();
        },

        render: function () {
            this.$el.html(this.template({navs: this.options, state: this.state}));
        }

    });

})();
