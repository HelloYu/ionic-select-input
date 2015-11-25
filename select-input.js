angular.module('ionic-addon', ['ionic']).directive('selectInput', ['$ionicPopup', function($ionicPopup) {
  return {
    restric: 'E',
    scope: {
      currentInput: '=ngModel',
      selectOptions: '='
    },
    require: '?^ngModel',
    template: '<div class="item-input item-icon-right"><input ng-model="currentInput"><i class="icon ion-android-arrow-dropdown "  ng-click="showOptions()"></i></div>',
    link: function(scope, element, attrs) {
      scope.options = {
        selected: ''
      }
      scope.showOptions = function() {
        $ionicPopup.show({
          template: '<ion-radio ng-repeat="item in selectOptions" ng-model="options.selected" ng-value="item">{{item}}</ion-radio>',
          title: '选择列表',
          scope: scope,
          buttons: [{
            text: '取消'
          }, {
            text: '<b>确定</b>',
            type: 'button-positive',
            onTap: function(e) {
              scope.currentInput = scope.options.selected;
            }
          }]
        });
      }
    }
  }
}])