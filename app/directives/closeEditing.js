angular.module('App').directive('closeEditing',closeEditing);
var KEYS = {
    ESCAPE: 27
};
function closeEditing() {
    return {
        scope: {
            isEditing: '='
        },
        link: function(scope, element) {
            element.on('keyup', function(e) {
                if (_.isEqual(e.keyCode, KEYS.ESCAPE)) {
                    scope.isEditing = false;
                    scope.$apply();
                };
            });
        }
    };
};
