'use strict';

var app = angular.module('App', [])
app.constant('FIREBASE_URL',{
    ROOT: 'https://vivid-heat-3318.firebaseio.com/',
    LISTS: 'https://vivid-heat-3318.firebaseio.com/lists',
    CARDS: 'https://vivid-heat-3318.firebaseio.com/cards'
});
