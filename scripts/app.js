(function(){
	function config($locationProvider, $stateProvider){
		$locationProvider
			.html5mode({
				enabled: true,
				requireBase: flase
		});
		
		$stateProvider
			.state('home', {
				url: '/',
				controller: 'HomeCtrl as home',
				templateUrl: '/templates/home.html'
		});
	}
	angular
		.module('blocChat', ['ui.router', 'firebase'])
		.config(config);
})();