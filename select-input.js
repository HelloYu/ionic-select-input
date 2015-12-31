(function() {
	'use strict';
	angular
		.module('app.widgets')
		/**
		 * 
		 * @class app.widgets.selectInput
		 * 可输入选择框控件，封装ionic `$ionicPopup` 控件。  
		 * 
		 * 
		 */
		.directive('selectInput',selectInput);

	selectInput.$inject = ['$ionicPopup'];
	function selectInput($ionicPopup) {

		var directive = {
    restric: 'E',
    scope: {
      currentInput: '=ngModel',
      selectOptions: '='
    },
    require: '?^ngModel',
    template: '<input ng-model="currentInput" style="border:0;"><i class="icon ion-android-arrow-dropdown "  ng-click="showOptions()"></i>',
    link: link,
 		}
 		return directive;

 		function link(scope, element, attrs) {
      scope.options = {
        selected: ''
      }
      console.info(scope);
      console.info(element);
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
  };
})();
