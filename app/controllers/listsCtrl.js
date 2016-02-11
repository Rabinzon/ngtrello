angular.module('App').controller('listsCtrl', listsCtrl);

function listsCtrl(listFactory) {
    console.log('ok');
    this.lists = listFactory.getLists();
    this.addList = function() {
        console.log(this.listName);
        listFactory.addList(this.listName);
        this.listName = '';
    };
};
