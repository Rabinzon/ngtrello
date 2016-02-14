angular.module('App').factory('cardFactory', function() {
    var service = {};
    var cards = [
        {
            id: 1,
            description: 'Fix bug',
            listId: 1
        },
        {
            id: 2,
            description: 'Fix bug',
            listId: 1
        },
        {
            id: 3,
            description: 'Fix bug',
            listId: 2
        }
    ];
    service.getCards = function(list) {
        return _.filter(cards, {listId: list.id});
    };
    service.createCard = function(list, cardDescription) {
        cards.push({
            id: _.uniqueId('card_'),
            description: cardDescription,
            listId: list.id
        });
    }
    service.removeCard = function(card) {
        return _.pull(cards, card);
    }
    service.updateCard = function(updatingCard) {
        var card = _.find(cards, {id: updatingCard.id});
        card.description = updatingCard.description;
        card.listId = updatingCard.listId;
    }
    return service;
});
