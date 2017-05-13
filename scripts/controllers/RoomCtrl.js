(function(){
	function RoomCtrl($scope, Room, Message){
		this.rooms = Room.all;
		
		$scope.activeRoom = function(roomValue, roomId){
			$scope.roomValue = roomValue;
			$scope.showMessages = Message.getByRoomId(roomId);
		};	
		
	}
	
	angular
		.module('blocChat')
		.controller('RoomCtrl', ['$scope', 'Room', 'Message', RoomCtrl]);
})();