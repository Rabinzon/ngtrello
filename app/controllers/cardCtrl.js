angular.module('App').controller('cardCtrl', cardCtrl);

function cardCtrl(cardFactory) {
    this.isCardEdit = false;
    this.editingCard = null;
    this.removeCard = function(card) {
        cardFactory.removeCard(card);
    };
    this.editCard = function(card) {
        this.isCardEdit = true;
        this.editingCard = angular.copy(card);
    };
    this.updateCard = function() {
        cardFactory.updateCard(this.editingCard);
        this.editingCard = null;
        this.isCardEdit = false;
    };
};
