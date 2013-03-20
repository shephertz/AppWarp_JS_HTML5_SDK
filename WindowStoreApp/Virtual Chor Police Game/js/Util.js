var opponent_username;
var current_loc_id;
var current_role;
var game_state;
var time_left;
var timer;

var role_police = 0;
var role_robber = 1;
var state_started = 0;
var state_waiting = 1;
var state_over = 2;

var local_username = "";
var opponent_username;
// Game room id used in this tutorial. 
// NOTE* replace with your room's id that you created from 
// App HQ dashboard (http://apphq.shephertz.com).
var jungle_room_id = "848534036";

var gameOverButtonClicked = false;


function prepareAppWarp() {
    WarpClient.initialize("Put your API Key here", "Put your Secret Key here");
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
    console.log('xLocal: ' + xLocal + ' xRemote:' + xRemote + 'yLocal:' + yLocal + ' yRemote:' + yRemote);
    if (((xLocal <= xRemote) && (xLocal >= xRemote - 15)) || ((xLocal >= xRemote) && (xLocal <= xRemote + 15))) {
        if (((yLocal <= yRemote) && (yLocal >= yRemote - 15)) || ((yLocal >= yRemote) && (yLocal <= yRemote + 15))) {
            return true;
        }
    }
    return false;
}

function getRemoteDiv() {
    if (current_role == role_robber) {
            return document.getElementById('police_jungle_pt');
    }
    else {
            return document.getElementById('robber_jungle_pt');
    }
}

function getLocalDiv() {
    if (current_role == role_robber) {
            return document.getElementById('robber_jungle_pt');
    }
    else {
            return document.getElementById('police_jungle_pt');
        }
}


function startgame(opponent) {
    time_left = 60;
    game_state = state_started;
    opponent_username = opponent;

    document.getElementById('robber_jungle_pt').style.top = "100pt";
    document.getElementById('robber_jungle_pt').style.left = "100pt";

    document.getElementById('police_jungle_pt').style.top = "0pt";
    document.getElementById('police_jungle_pt').style.left = "0pt";

    var stateElement = document.getElementById('game_state');
    stateElement.innerHTML = 'Game Started!!';
    time_left--;
    

    timer = setInterval(timerExpire, 1000);
}

function gameOver() {

    WarpClient.leaveRoom(current_loc_id);
    WarpClient.unSubscribeRoom(current_loc_id);
    document.getElementById("jungle_world").style.display = "none";

    document.getElementById("postJoin").style.display = "block";
    clearInterval(timer);
    var stateElement = document.getElementById("game_state");
    stateElement.innerHTML = "";

    game_state = state_over;
}

function timerExpire() {
    //if (game_state == state_over) {
    //    return;
    //}
    var stateElement = document.getElementById('game_state');
    if (current_role == role_robber) {
        stateElement.innerHTML = 'Policeman: ' + opponent_username + ' Robber: YOU ' + ' Time Remaining:' + time_left + ' seconds';
    }
    else {
        stateElement.innerHTML = 'Policeman: YOU Robber: ' + opponent_username + ' Time Remaining:' + time_left + ' seconds';
    }
    time_left--;
    if ((time_left < 0)) {
        clearInterval(timer);
        if (current_role == role_robber) {
            // i won
            var update = new Uint8Array(1);
            update[0] = 1;
            WarpClient.sendUpdate(update);
        }
    }
}

document.onkeyup = checkKey;
function checkKey(e) {
    if (game_state != state_started) {
        if ((e.keyCode == 13) && (e.currentTarget.activeElement.id == "username")) {
            startClicked();
        }
        return;
    }

    e = e || window.event;

    if (e.keyCode == 37) {
        leftClicked();
    }
    else if (e.keyCode == 38) {
        upClicked();
    }
    else if (e.keyCode == 39) {
        rightClicked();
    }
    else if (e.keyCode == 40) {
        downClicked();
    }
}

function leftClicked() {
    if (game_state != state_started) {
        return;
    }
    var you = getLocalDiv();
    var yPos = parseInt(you.style.top);
    var xPos = parseInt(you.style.left);
    if (xPos > 0) {
        moveLocal(xPos - 10, yPos);
    }
}

function upClicked() {
    if (game_state != state_started) {
        return;
    }
    var you = getLocalDiv();

    var yPos = parseInt(you.style.top);
    var xPos = parseInt(you.style.left);
    if (yPos < 255) {
        moveLocal(xPos, yPos - 10);
    }
}

function rightClicked() {
    if (game_state != state_started) {
        return;
    }
    var you = getLocalDiv();
    var yPos = parseInt(you.style.top);
    var xPos = parseInt(you.style.left);
    if (xPos < 255) {
        moveLocal(xPos + 10, yPos);
    }
}

function downClicked() {
    if (game_state != state_started) {
        return;
    }
    var you = getLocalDiv();

    var yPos = parseInt(you.style.top);
    var xPos = parseInt(you.style.left);
    if (yPos < 255) {
        moveLocal(xPos, yPos + 10);
    }
}


function moveLocal(x, y) {
    var you = getLocalDiv();
    console.log('moving local to ' + x + ' ' + y);
    you.style.left = x + "pt";
    you.style.top = y + "pt";

    // send update
    var size = 2 + local_username.length;
    var update = new Uint8Array(size);
    update[0] = x;
    update[1] = y;
    for (var i = 0; i < local_username.length; i++) {
        update[i + 2] = local_username.charCodeAt(i);
    }
    WarpClient.sendUpdate(update);
}

function moveRemote(x, y, name) {

    var remote = getRemoteDiv();
    remote.style.left = x + "pt";
    remote.style.top = y + "pt";
    console.log('moving remote to ' + x + ' ' + y);
    if ((current_role == role_robber) && collided()) {
        // i lost
        var update = new Uint8Array(1);
        update[0] = 0;
        WarpClient.sendUpdate(update);
    }
}

function waitForOverButtonToBeClicked(timeout) {
    var start = new Date().getTime();
    var cur = start
    while (cur - start < timeout && gameOverButtonClicked == false) {
        cur = new Date().getTime();
    }
}

function displayGameResultAndRestartButton(msg) {
    document.getElementById('jungleButtonId').style.display = "none";
    document.getElementById('gameOverButton').innerHTML = msg;
    document.getElementById('gameOverButton').style.display = "block";
    waitForOverButtonToBeClicked(20000);
}