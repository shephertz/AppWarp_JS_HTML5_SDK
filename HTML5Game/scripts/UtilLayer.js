
var role_police = 0;
var role_robber = 1;
var state_started = 0;
var state_waiting = 1;
var state_over = 2;
function prepareAppWarp() {
      WarpClient.initialize(api_key, secret_key);
	  WarpClient.addConnectionRequestListener(new MyConnectionRequestListener());
	  WarpClient.addLobbyRequestListener(new MyLobbyRequestListener());
	  WarpClient.addZoneRequestListener(new MyZoneRequestListener());
	  WarpClient.addRoomRequestListener(new MyRoomRequestListener());
	  WarpClient.addChatRequestListener(new MyChatRequestListener());
	  WarpClient.addUpdateRequestListener(new MyUpdateRequestListener());
	  WarpClient.addNotificationListener(new MyNotificationListener());
	  WarpClient.connect();
}

function collided() {
	var localPos = getLocalDiv();
	var remotePos = getRemoteDiv();
	
	var yLocal = parseInt(localPos.style.top);
	var xLocal = parseInt(localPos.style.left);

	var yRemote = parseInt(remotePos.style.top);
	var xRemote = parseInt(remotePos.style.left);	
	console.log('xLocal: '+xLocal+' xRemote:'+xRemote+'yLocal:'+yLocal+' yRemote:'+yRemote);
	if(((xLocal <= xRemote) && (xLocal >= xRemote-15)) || ((xLocal >= xRemote) && (xLocal <= xRemote+15))){
		if(((yLocal <= yRemote) && (yLocal >= yRemote-15)) || ((yLocal >= yRemote) && (yLocal <= yRemote+15))){
			return true;
		}
	}
	return false;
}

function getRemoteDiv() {
	if(current_role == role_robber)
	{
		if(current_loc_id == ocean_room_id)
		{
			return document.getElementById('police_ocean_pt');
		}
		else
		{
			return document.getElementById('police_jungle_pt');
		}
	}
	else
	{
		if(current_loc_id == ocean_room_id)
		{
			return document.getElementById('robber_ocean_pt');
		}
		else
		{
			return document.getElementById('robber_jungle_pt');
		}	
	}
}

function getLocalDiv() {
	if(current_role == role_robber)
	{
		if(current_loc_id == ocean_room_id)
		{
			return document.getElementById('robber_ocean_pt');
		}
		else
		{
			return document.getElementById('robber_jungle_pt');
		}
	}
	else
	{
		if(current_loc_id == ocean_room_id)
		{
			return document.getElementById('police_ocean_pt');
		}
		else
		{
			return document.getElementById('police_jungle_pt');
		}	
	}
}
