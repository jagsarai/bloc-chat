(function(){
	function BlocChatCookies($cookies, $uibModal){
		var currentUser = $cookies.get('blocChatCurrentUser');
		if(!currentUser || currentUser === ''){
			$uibModal.open({
				animation: this.animationsEnabled,
				templateUrl: '/templates/cookieModal.html',
				controller: 'CookieModalInstanceCtrl',
				controllerAs: 'cookieModal',
				windowClass: 'app-modal-window'
			})
			.result.then(function(user){
				console.log(user);
			});
		}
	}
	
	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();