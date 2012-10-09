
function MyConnectionRequestListener() {
	this.onConnectDone = function(result){
		$('#chatLog').append('<p>' + 'connection result ' +result + '</p>');
	};
	
	this.onJoinZoneDone = function(result){
		$('#chatLog').append('<p>' + 'joinzone result ' +result + '</p>');	
	};
	
	this.onDisconnectDone = function(result){
		$('#chatLog').append('<p>' + 'disconnect result ' +result + '</p>');	
	};	
}

function MyLobbyRequestListener(){
	this.onJoinLobbyDone = function(event){
		$('#chatLog').append('<p>' + 'join lobby result ' +event.result + '</p>');
		//WarpClient.removeLobbyRequestListener(lobbyObserver);
	}
	this.onLeaveLobbyDone = function(event){					
		$('#chatLog').append('<p>' + 'leave lobby result ' +event.result + '</p>');
	};

	this.onSubscribeLobbyDone = function(event){
		$('#chatLog').append('<p>' + 'subscribe lobby result ' +event.result + '</p>');
	};
	this.onUnsubscribeLobbyDone = function(event){
		$('#chatLog').append('<p>' + 'unsubscribe lobby result ' +event.result + '</p>');
	};
	this.onGetLiveLobbyInfoDone = function(event){
		$('#chatLog').append('<p>' + 'live  lobby info result ' +event.result + '</p>');
	};
}

function MyZoneRequestListener() {
	this.onCreateRoomDone = function(event){
		$('#chatLog').append('<p>' + 'create room result ' +event.result + '</p>');
	};
	this.onDeleteRoomDone = function(event){
		$('#chatLog').append('<p>' + 'delete room result ' +event.result + '</p>');
	};
	this.onGetAllRoomsDone = function(event){
		$('#chatLog').append('<p>' + 'count of rooms ' +event.roomIdArray.length + '</p>');
		for(var i=0; i<event.roomIdArray.length; i++){
			WarpClient.getLiveRoomInfo(event.roomIdArray[i]);
		}
	};
	this.onGetOnlineUsersDone = function(event){
		$('#chatLog').append('<p>' + 'get online users result ' +event.result + '</p>');
	};
	this.onGetLiveUserInfoDone = function(event){
	
		$('#chatLog').append('<p>' + 'get live user info result ' +event.result + '</p>');
	};
	this.onSetCustomUserInfoDone = function(event){
		$('#chatLog').append('<p>' + 'Set Custom user Data result ' +event.result + '</p>');
	};
	
}

function MyRoomRequestListener() {
	this.onSubscribeRoomDone = function(event){
		$('#chatLog').append('<p>' + 'subscribe room result ' +event.result + '</p>');
	};
	this.onUnsubscribeRoomDone = function(event){
		$('#chatLog').append('<p>' + 'Unsubscribe room result ' +event.result + '</p>');
	};
	this.onJoinRoomDone = function(event){
		$('#chatLog').append('<p>' + 'Join room result ' +event.result + '</p>');
	};
	this.onLeaveRoomDone = function(event){
		$('#chatLog').append('<p>' + 'Leave room result ' +event.result + '</p>');
	};
	this.onGetLiveRoomInfoDone = function(event){
		if(event.result == resultcode_success){
			$('#chatLog').append('<p>' + 'Count of users in room ' +event.roomdata.id + ' is ' + event.userNameArray.length +'</p>');
		}		
	};
	this.onSetCustomRoomDataDone = function(event){
		$('#chatLog').append('<p>' + 'Set Custom room data result ' +event.result + '</p>');
	};
	
}

function MyChatRequestListener() {
	this.onSendChatDone = function(result){
		$('#chatLog').append('<p>' + 'Send Chat result ' +result + '</p>');
	};	
}

function MyUpdateRequestListener() {
	this.onSendUpdateDone = function(result){
		$('#chatLog').append('<p>' + 'Send Update result ' +result + '</p>');
	};
}

function MyNotificationListener() {
	this.onRoomCreated = function(roomdata){
		$('#chatLog').append('<p>' + 'subscribe room ' +roomdata.id + '</p>');
	};
	this.onRoomDestroyed = function(roomdata){
		$('#chatLog').append('<p>' + 'Unsubscribe room ' +roomdata.id + '</p>');
	};
	this.onUserLeftRoom = function(roomdata, user){
		$('#chatLog').append('<p>' + 'Left room ' +roomdata.id + '</p>');
	};
	this.onUserJoinedRoom = function(roomdata, user){
		$('#chatLog').append('<p>' + 'joined room ' +roomdata.id + '</p>');
	};
	this.onUserLeftLobby = function(lobbydata, user){
		$('#chatLog').append('<p>' + 'user left lobby ' +user + '</p>');
	};
	this.onUserJoinedLobby = function(lobbydata, user){
		$('#chatLog').append('<p>' + 'user joined lobby' +user + '</p>');
	};
	this.onChatReceived = function(chatevent){
		$('#chatLog').append('<p>' + chatevent.sender +' says ' +chatevent.chat + '</p>');
	};
	this.onUpdatePeersReceived = function(updateevent){
		$('#chatLog').append('<p>' + 'Got updatepeers with bytes ' +updateevent.update.length + '</p>');
	};	
}