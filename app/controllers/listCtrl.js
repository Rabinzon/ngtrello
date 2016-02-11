angular.module('App').controller('listCtrl', listCtrl);

function listCtrl(listFactory, cardFactory) {
    this.removeList = function(list) {
        listFactory.removeList(list);
    };
    this.getCards = function(list) {
        return cardFactory.getCards(list);
    };
    this.createCard = function(list) {
        cardFactory.createCard(list, this.cardDescription);
        this.cardDescription = '';
    };
};
