(function(){
	function CookieModalInstanceCtrl($uibModalInstance){
		//Submit the form data to modal.
		this.submit = function(){
			$uibModalInstance.close(this.currentUser);
		};
	}
	angular
		.module('blocChat')
		.controller('CookieModalInstanceCtrl', ['$uibModalInstance', CookieModalInstanceCtrl]);
})();