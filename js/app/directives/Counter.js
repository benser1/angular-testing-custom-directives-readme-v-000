function Counter() {
	return {
		template: [
			'<div class="counter">',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div class="counter__count">Current count: {{ counter.count }}</div>',
			'</div>'
		].join(''),
		require: 'counter',
		controller: function () {
			this.count = 0;
		},
		controllerAs: 'counter',
		link: function(scope, element, attr, ctrl) {

			element.on('click', function(){
				ctrl.count++;
				scope.$apply();
			});

			scope.$on('$destroy', function(){
				element.off();
			});
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);