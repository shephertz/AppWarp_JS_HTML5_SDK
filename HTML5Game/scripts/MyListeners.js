
function MyConnectionRequestListener() {
	this.onConnectDone = function(result){
		if(result!=resultcode_success){
			alert('connection lost due to inactivity. Refresh page and try again');
		}
	};
	
	this.onJoinZoneDone = function(result){
		if(result == resultcode_success){
			WarpClient.joinLobby();
		}
	};
	
	this.onDisconnectDone = function(result){
		
	};	
}

function MyLobbyRequestListener(){
	this.onJoinLobbyDone = function(event){
		if(event.result == resultcode_success){
			var divToHide = document.getElementById("preJoin");
			var divToShow = document.getElementById("postJoin");
			divToHide.style.display = "none";
			divToShow.style.display = "block";			
		}
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
		if(event.result == resultcode_success){
			document.getElementById("postJoin").style.display = "none";
			if(event.roomdata.id == jungle_room_id){				
				// inside jungle
				current_loc_id = jungle_room_id;
				document.getElementById("jungle_world").style.display = "block";
				document.getElementById("ocean_world").style.display = "none";
			}
			else if (event.roomdata.id = ocean_room_id) {
				// inside ocean
				current_loc_id = ocean_room_id;
				document.getElementById("jungle_world").style.display = "none";
				document.getElementById("ocean_world").style.display = "block";				
			}		
			WarpClient.getLiveRoomInfo(current_loc_id);
		}
	};
	this.onUnsubscribeRoomDone = function(event){
		$('#chatLog').append('<p>' + 'Unsubscribe room result ' +event.result + '</p>');
	};
	this.onJoinRoomDone = function(event){
		if(event.result == resultcode_success){
			WarpClient.subscribeRoom(event.roomdata.id);
		}
		else{
			alert('There are already 2 people playing. Try again later');
		}		
	};
	this.onLeaveRoomDone = function(event){
		$('#chatLog').append('<p>' + 'Leave room result ' +event.result + '</p>');
	};
	this.onGetLiveRoomInfoDone = function(event){
		if(event.result == resultcode_success){
			if(event.userNameArray.length == 2){
				// I am robber
				current_role = role_robber;
				var p1 = event.userNameArray[0];
				var p2 = event.userNameArray[1];
				if(p1 == local_username){
					startgame(p2);
				} 
				else{
					startgame(p1);
				}
			}
			else{
				// I am police. wait for robber.
				current_role = role_police;
				document.getElementById('game_state').innerHTML = "You are the policeman. Waiting for robber to join.";
			}
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
		if(user != local_username){
			moveRemote(0,0,"");
		}
	};
	this.onUserJoinedRoom = function(roomdata, user){
		if(current_loc_id == roomdata.id){
			// the game can start now!
			startgame(user);
		}
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
		if(updateevent.update.length == 1){
			game_state = state_over;
			if(current_role == role_robber) {
				if(updateevent.update[0] == 0){
					//alert('you lost. you are a slow robber');
				}
				else{
					//alert('you won. you are a fast robber');
				}
			}
			else{
				if(updateevent.update[0] == 0){
					//alert('you won. you are a fast policeman');
				}
				else{
					//alert('you lost. you are a slow policeman');
				}			
			}
			gameOver();
			return;
		}
		var xPos = updateevent.update[0];
		var yPos = updateevent.update[1];
		var name = "";
		for(var i=2; i<updateevent.update.length; i++){
			name+=String.fromCharCode(updateevent.update[i]);
		}
		if(name!=local_username){
			moveRemote(xPos, yPos, name);
		}
	};	
}