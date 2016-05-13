var AppWarp;
(function (AppWarp) {
    var AllRoomsEvent = (function () {
        function AllRoomsEvent(result, payload) {
            if (typeof payload === "undefined") {
                payload = "";
            }
            this.json = {};
            if (payload != "")
                this.json = JSON.parse(payload);
            this.res = result;
        }
        AllRoomsEvent.prototype.getResult = function () {
            return this.res;
        };

        AllRoomsEvent.prototype.getRoomIds = function () {
            var roomIds = this.json.ids;
            var roomIdsArray = [];

            if (roomIds) {
                roomIdsArray = roomIds.split(";");
                if (roomIdsArray.length > 0) {
                    roomIdsArray.pop();
                }
            }

            return roomIdsArray;
        };
        return AllRoomsEvent;
    })();
    AppWarp.AllRoomsEvent = AllRoomsEvent;
})(AppWarp || (AppWarp = {}));
var AppWarp;
(function (AppWarp) {
    var AllUsersEvent = (function () {
        function AllUsersEvent(result, payload) {
            if (typeof payload === "undefined") {
                payload = "";
            }
            this.json = {};
            if (payload != "")
                this.json = JSON.parse(payload);
            this.res = result;
        }
        AllUsersEvent.prototype.getResult = function () {
            return this.res;
        };

        AllUsersEvent.prototype.getUsernames = function () {
            var usernames = this.json.names;
            var userNamesArray = [];

            if (usernames) {
                userNamesArray = usernames.split(";");
                if (userNamesArray.length > 0) {
                    userNamesArray.pop();
                }
            }

            return userNamesArray;
        };
        return AllUsersEvent;
    })();
    AppWarp.AllUsersEvent = AllUsersEvent;
})(AppWarp || (AppWarp = {}));
var AppWarp;
(function (AppWarp) {
    var Chat = (function () {
        function Chat(payload) {
            if (typeof payload === "undefined") {
                payload = "";
            }
            this.json = {};
            if (payload != "")
                this.json = JSON.parse(payload);
        }
        Chat.prototype.getChat = function () {
            return this.json.chat;
        };

        Chat.prototype.getSender = function () {
            return this.json.sender;
        };

        Chat.prototype.getLocId = function () {
            return this.json.id;
        };

        Chat.prototype.getIsLocationLobby = function () {
            if (this.json.isLobby) {
                return true;
            } else {
                return false;
            }
        };
        return Chat;
    })();
    AppWarp.Chat = Chat;
})(AppWarp || (AppWarp = {}));
var AppWarp;
(function (AppWarp) {
    (function (RequestType) {
        RequestType[RequestType["Auth"] = 1] = "Auth";
        RequestType[RequestType["JoinLobby"] = 2] = "JoinLobby";
        RequestType[RequestType["SubscribeLobby"] = 3] = "SubscribeLobby";
        RequestType[RequestType["UnsubscribeLobby"] = 4] = "UnsubscribeLobby";
        RequestType[RequestType["LeaveLobby"] = 5] = "LeaveLobby";
        RequestType[RequestType["CreateRoom"] = 6] = "CreateRoom";
        RequestType[RequestType["JoinRoom"] = 7] = "JoinRoom";
        RequestType[RequestType["SubscribeRoom"] = 8] = "SubscribeRoom";
        RequestType[RequestType["UnsubscribeRoom"] = 9] = "UnsubscribeRoom";
        RequestType[RequestType["LeaveRoom"] = 10] = "LeaveRoom";
        RequestType[RequestType["DeleteRoom"] = 11] = "DeleteRoom";
        RequestType[RequestType["Chat"] = 12] = "Chat";
        RequestType[RequestType["UpdatePeers"] = 13] = "UpdatePeers";
        RequestType[RequestType["Signout"] = 14] = "Signout";
        RequestType[RequestType["CreateZone"] = 15] = "CreateZone";
        RequestType[RequestType["DeleteZone"] = 16] = "DeleteZone";
        RequestType[RequestType["GetRooms"] = 17] = "GetRooms";
        RequestType[RequestType["GetUsers"] = 18] = "GetUsers";
        RequestType[RequestType["GetUserInfo"] = 19] = "GetUserInfo";
        RequestType[RequestType["GetRoomInfo"] = 20] = "GetRoomInfo";
        RequestType[RequestType["SetCustomRoomData"] = 21] = "SetCustomRoomData";
        RequestType[RequestType["SetCustomUserData"] = 22] = "SetCustomUserData";
        RequestType[RequestType["GetLobbyInfo"] = 23] = "GetLobbyInfo";

        RequestType[RequestType["JoinRoomWithNUser"] = 24] = "JoinRoomWithNUser";
        RequestType[RequestType["UpdateRoomProperty"] = 25] = "UpdateRoomProperty";
        RequestType[RequestType["JoinRoomWithProperties"] = 27] = "JoinRoomWithProperties";
        RequestType[RequestType["GetRoomWithNUser"] = 28] = "GetRoomWithNUser";
        RequestType[RequestType["GetRoomWithProperties"] = 29] = "GetRoomWithProperties";
        RequestType[RequestType["JoinRoomInRange"] = 37] = "JoinRoomInRange";
        RequestType[RequestType["GetRoomInRange"] = 38] = "GetRoomInRange";

        RequestType[RequestType["LockProperties"] = 35] = "LockProperties";
        RequestType[RequestType["UnlockProperties"] = 36] = "UnlockProperties";

        RequestType[RequestType["KeepAlive"] = 63] = "KeepAlive";
        RequestType[RequestType["AssocPort"] = 64] = "AssocPort";
        RequestType[RequestType["AssocPortAck"] = 65] = "AssocPortAck";
        RequestType[RequestType["PrivateChat"] = 30] = "PrivateChat";
        RequestType[RequestType["Move"] = 31] = "Move";
        RequestType[RequestType["PrivateUpdate"] = 32] = "PrivateUpdate";
        RequestType[RequestType["StartGame"] = 66] = "StartGame";
        RequestType[RequestType["StopGame"] = 67] = "StopGame";
        RequestType[RequestType["GetMoveHistory"] = 68] = "GetMoveHistory";
        RequestType[RequestType["SetNextTurn"] = 69] = "SetNextTurn";
        RequestType[RequestType["GetAllRoomsCount"] = 70] = "GetAllRoomsCount";
        RequestType[RequestType["GetOnlineUsersCount"] = 71] = "GetOnlineUsersCount";
        RequestType[RequestType["BroadcastChat"] = 72] = "BroadcastChat";
        RequestType[RequestType["GetRoomInRangeWithProp"] = 73] = "GetRoomInRangeWithProp";
        RequestType[RequestType["GetUserStatus"] = 74] = "GetUserStatus";
        RequestType[RequestType["JoinAndSubscribeRoom"] = 75] = "JoinAndSubscribeRoom";
        RequestType[RequestType["LeaveAndUnsubscribeRoom"] = 76] = "LeaveAndUnsubscribeRoom";
    })(AppWarp.RequestType || (AppWarp.RequestType = {}));
    var RequestType = AppWarp.RequestType;

    (function (App42RequestType) {
        App42RequestType[App42RequestType["ChatHistory"] = 1] = "ChatHistory";
    })(AppWarp.App42RequestType || (AppWarp.App42RequestType = {}));
    var App42RequestType = AppWarp.App42RequestType;


    (function (PayloadType) {
        PayloadType[PayloadType["FlatString"] = 0] = "FlatString";
        PayloadType[PayloadType["Binary"] = 1] = "Binary";
        PayloadType[PayloadType["Json"] = 2] = "Json";
    })(AppWarp.PayloadType || (AppWarp.PayloadType = {}));
    var PayloadType = AppWarp.PayloadType;

    (function (MessageType) {
        MessageType[MessageType["Request"] = 0] = "Request";
        MessageType[MessageType["Response"] = 1] = "Response";
        MessageType[MessageType["Update"] = 2] = "Update";
    })(AppWarp.MessageType || (AppWarp.MessageType = {}));
    var MessageType = AppWarp.MessageType;

    (function (ResultCode) {
        ResultCode[ResultCode["Success"] = 0] = "Success";
        ResultCode[ResultCode["AuthError"] = 1] = "AuthError";
        ResultCode[ResultCode["ResourceNotFound"] = 2] = "ResourceNotFound";
        ResultCode[ResultCode["ResourceMoved"] = 3] = "ResourceMoved";
        ResultCode[ResultCode["BadRequest"] = 4] = "BadRequest";
        ResultCode[ResultCode["ConnectionError"] = 5] = "ConnectionError";
        ResultCode[ResultCode["UnknownError"] = 6] = "UnknownError";
        ResultCode[ResultCode["ResultSizeError"] = 7] = "ResultSizeError";
        ResultCode[ResultCode["SuccessRecovered"] = 8] = "SuccessRecovered";
        ResultCode[ResultCode["ConnectionErrorRecoverable"] = 9] = "ConnectionErrorRecoverable";
        ResultCode[ResultCode["UserPausedError"] = 10] = "UserPausedError";
        ResultCode[ResultCode["AutoRecovering"] = 11] = "AutoRecovering";
    })(AppWarp.ResultCode || (AppWarp.ResultCode = {}));
    var ResultCode = AppWarp.ResultCode;

    (function (ReasonCode) {
        ReasonCode[ReasonCode["WaitingForPausedUser"] = 21] = "WaitingForPausedUser";
        ReasonCode[ReasonCode["InvalidAPIKey"] = 22] = "InvalidAPIKey";
    })(AppWarp.ReasonCode || (AppWarp.ReasonCode = {}));
    var ReasonCode = AppWarp.ReasonCode;

    (function (UpdateType) {
        UpdateType[UpdateType["RoomCreated"] = 1] = "RoomCreated";
        UpdateType[UpdateType["RoomDeleted"] = 2] = "RoomDeleted";
        UpdateType[UpdateType["UserJoinedLobby"] = 3] = "UserJoinedLobby";
        UpdateType[UpdateType["UserLeftLobby"] = 4] = "UserLeftLobby";
        UpdateType[UpdateType["UserJoinedRoom"] = 5] = "UserJoinedRoom";
        UpdateType[UpdateType["UserLeftRoom"] = 6] = "UserLeftRoom";
        UpdateType[UpdateType["UserOnline"] = 7] = "UserOnline";
        UpdateType[UpdateType["UserOffline"] = 8] = "UserOffline";
        UpdateType[UpdateType["Chat"] = 9] = "Chat";
        UpdateType[UpdateType["UpdatePeers"] = 10] = "UpdatePeers";
        UpdateType[UpdateType["RoomPropertyChange"] = 11] = "RoomPropertyChange";
        UpdateType[UpdateType["PrivateChat"] = 12] = "PrivateChat";
        UpdateType[UpdateType["MoveCompleted"] = 13] = "MoveCompleted";
        UpdateType[UpdateType["UserPaused"] = 14] = "UserPaused";
        UpdateType[UpdateType["UserResumed"] = 15] = "UserResumed";
        UpdateType[UpdateType["GameStarted"] = 16] = "GameStarted";
        UpdateType[UpdateType["GameStopped"] = 17] = "GameStopped";
        UpdateType[UpdateType["PrivateUpdate"] = 18] = "PrivateUpdate";
        UpdateType[UpdateType["NextTurnRequested"] = 19] = "NextTurnRequested";
    })(AppWarp.UpdateType || (AppWarp.UpdateType = {}));
    var UpdateType = AppWarp.UpdateType;

    (function (Constants) {
        Constants[Constants["MaxPropertySizeBytes"] = 2048] = "MaxPropertySizeBytes";
    })(AppWarp.Constants || (AppWarp.Constants = {}));
    var Constants = AppWarp.Constants;

    (function (ConnectionState) {
        ConnectionState[ConnectionState["Connected"] = 0] = "Connected";
        ConnectionState[ConnectionState["Connecting"] = 1] = "Connecting";
        ConnectionState[ConnectionState["Disconnected"] = 2] = "Disconnected";
        ConnectionState[ConnectionState["Disconnecting"] = 3] = "Disconnecting";
        ConnectionState[ConnectionState["Recovering"] = 4] = "Recovering";
    })(AppWarp.ConnectionState || (AppWarp.ConnectionState = {}));
    var ConnectionState = AppWarp.ConnectionState;
})(AppWarp || (AppWarp = {}));
var AppWarp;
(function (AppWarp) {
    (function (Events) {
        Events[Events["onConnectDone"] = 0] = "onConnectDone";
        Events[Events["onDisconnectDone"] = 1] = "onDisconnectDone";

        Events[Events["onJoinLobbyDone"] = 2] = "onJoinLobbyDone";
        Events[Events["onLeaveLobbyDone"] = 3] = "onLeaveLobbyDone";
        Events[Events["onSubscribeLobbyDone"] = 4] = "onSubscribeLobbyDone";
        Events[Events["onUnsubscribeLobbyDone"] = 5] = "onUnsubscribeLobbyDone";
        Events[Events["onGetLiveLobbyInfoDone"] = 6] = "onGetLiveLobbyInfoDone";

        Events[Events["onSubscribeRoomDone"] = 7] = "onSubscribeRoomDone";
        Events[Events["onUnsubscribeRoomDone"] = 8] = "onUnsubscribeRoomDone";
        Events[Events["onJoinRoomDone"] = 9] = "onJoinRoomDone";
        Events[Events["onLeaveRoomDone"] = 10] = "onLeaveRoomDone";
        Events[Events["onGetLiveRoomInfoDone"] = 11] = "onGetLiveRoomInfoDone";
        Events[Events["onSetCustomRoomDataDone"] = 12] = "onSetCustomRoomDataDone";
        Events[Events["onUpdatePropertyDone"] = 13] = "onUpdatePropertyDone";
        Events[Events["onLockPropertiesDone"] = 14] = "onLockPropertiesDone";
        Events[Events["onUnlockPropertiesDone"] = 15] = "onUnlockPropertiesDone";

        Events[Events["onCreateRoomDone"] = 16] = "onCreateRoomDone";
        Events[Events["onDeleteRoomDone"] = 17] = "onDeleteRoomDone";
        Events[Events["onGetAllRoomsDone"] = 18] = "onGetAllRoomsDone";
        Events[Events["onGetOnlineUsersDone"] = 19] = "onGetOnlineUsersDone";
        Events[Events["onGetLiveUserInfoDone"] = 20] = "onGetLiveUserInfoDone";
        Events[Events["onSetCustomUserDataDone"] = 21] = "onSetCustomUserDataDone";
        Events[Events["onGetMatchedRoomsDone"] = 22] = "onGetMatchedRoomsDone";
        Events[Events["onGetAllRoomsCountDone"] = 23] = "onGetAllRoomsCountDone";
        Events[Events["onGetOnlineUsersCountDone"] = 24] = "onGetOnlineUsersCountDone";

        Events[Events["onRoomCreated"] = 25] = "onRoomCreated";
        Events[Events["onRoomDestroyed"] = 26] = "onRoomDestroyed";
        Events[Events["onUserLeftRoom"] = 27] = "onUserLeftRoom";
        Events[Events["onUserJoinedRoom"] = 28] = "onUserJoinedRoom";
        Events[Events["onUserLeftLobby"] = 29] = "onUserLeftLobby";
        Events[Events["onUserJoinedLobby"] = 30] = "onUserJoinedLobby";
        Events[Events["onChatReceived"] = 31] = "onChatReceived";
        Events[Events["onUpdatePeersReceived"] = 32] = "onUpdatePeersReceived";
        Events[Events["onUserChangeRoomProperty"] = 33] = "onUserChangeRoomProperty";
        Events[Events["onPrivateChatReceived"] = 34] = "onPrivateChatReceived";
        Events[Events["onPrivateUpdateReceived"] = 35] = "onPrivateUpdateReceived";
        Events[Events["onMoveCompleted"] = 36] = "onMoveCompleted";
        Events[Events["onGameStarted"] = 37] = "onGameStarted";
        Events[Events["onGameStopped"] = 38] = "onGameStopped";
        Events[Events["onUserPaused"] = 39] = "onUserPaused";
        Events[Events["onUserResumed"] = 40] = "onUserResumed";

        Events[Events["onSendChatDone"] = 41] = "onSendChatDone";
        Events[Events["onSendPrivateChatDone"] = 42] = "onSendPrivateChatDone";
        Events[Events["onSendUpdateDone"] = 43] = "onSendUpdateDone";
        Events[Events["onSendPrivateUpdateDone"] = 44] = "onSendPrivateUpdateDone";

        Events[Events["onSendMoveDone"] = 45] = "onSendMoveDone";
        Events[Events["onStartGameDone"] = 46] = "onStartGameDone";
        Events[Events["onStopGameDone"] = 47] = "onStopGameDone";
        Events[Events["onGetMoveHistoryDone"] = 48] = "onGetMoveHistoryDone";
        Events[Events["onSetNextTurnDone"] = 49] = "onSetNextTurnDone";
        Events[Events["onNextTurnRequested"] = 50] = "onNextTurnRequested";
        Events[Events["onUserStatusDone"] = 51] = "onUserStatusDone";
        Events[Events["onJoinAndSubscribeRoomDone"] = 52] = "onJoinAndSubscribeRoomDone";
        Events[Events["onLeaveAndUnsubscribeRoomDone"] = 53] = "onLeaveAndUnsubscribeRoomDone";
        Events[Events["onGetChatHistoryDone"] = 1001] = "onGetChatHistoryDone";
    })(AppWarp.Events || (AppWarp.Events = {}));
    var Events = AppWarp.Events;
})(AppWarp || (AppWarp = {}));


var AppWarp;
(function (AppWarp) {
    var LiveRoom = (function () {
        function LiveRoom(result, payload) {
            if (typeof payload === "undefined") {
                payload = "";
            }
            this.json = {};
            if (payload != "")
                this.json = JSON.parse(payload);
            this.res = result;
        }
        LiveRoom.prototype.getResult = function () {
            return this.res;
        };

        LiveRoom.prototype.getRoom = function () {
            return new AppWarp.Room(this.res, JSON.stringify(this.json));
        };

        LiveRoom.prototype.getCustomData = function () {
            return this.json.data;
        };

        LiveRoom.prototype.getProperties = function () {
            return this.json.properties;
        };

        LiveRoom.prototype.getUsers = function () {
            var usernames = this.json.usernames;
            var userNameArray = [];

            if (usernames) {
                userNameArray = usernames.split(";");
                if (userNameArray.length > 0) {
                    userNameArray.pop();
                }
            }
            return userNameArray;
        };
        return LiveRoom;
    })();
    AppWarp.LiveRoom = LiveRoom;
})(AppWarp || (AppWarp = {}));
var AppWarp;
(function (AppWarp) {
    var LiveUser = (function () {
        function LiveUser(result, payload) {
            if (typeof payload === "undefined") {
                payload = "";
            }
            this.json = {};
            if (payload != "")
                this.json = JSON.parse(payload);
            this.res = result;
        }
        LiveUser.prototype.getResult = function () {
            return this.res;
        };

        LiveUser.prototype.getName = function () {
            return this.json.name;
        };

        LiveUser.prototype.getLocationId = function () {
            return this.json.locationId;
        };

        LiveUser.prototype.getCustomData = function () {
            return this.json.custom;
        };

        LiveUser.prototype.isLobby = function () {
            if (this.json.isLobby) {
                return this.json.isLobby;
            } else {
                return false;
            }
        };

        LiveUser.prototype.isPaused = function () {
            if (this.json.isPaused) {
                return this.json.isPaused;
            } else {
                return false;
            }
        };
        return LiveUser;
    })();
    AppWarp.LiveUser = LiveUser;
})(AppWarp || (AppWarp = {}));
var AppWarp;
(function (AppWarp) {
    var Lobby = (function () {
        function Lobby(result, payload) {
            if (typeof payload === "undefined") {
                payload = "";
            }
            this.json = {};
            if (payload != "")
                this.json = JSON.parse(payload);
            this.res = result;
        }
        Lobby.prototype.getResult = function () {
            return this.res;
        };

        Lobby.prototype.getLobbyId = function () {
            return this.json.id;
        };

        Lobby.prototype.getOwner = function () {
            return this.json.owner;
        };

        Lobby.prototype.getName = function () {
            return this.json.name;
        };

        Lobby.prototype.getIsPrimary = function () {
            return this.json.isPrimary;
        };

        Lobby.prototype.getMaxUsers = function () {
            return this.json.maxUsers;
        };
        return Lobby;
    })();
    AppWarp.Lobby = Lobby;
})(AppWarp || (AppWarp = {}));
var AppWarp;
(function (AppWarp) {
    var MatchedRoomEvent = (function () {
        function MatchedRoomEvent(result, payload) {
            if (typeof payload === "undefined") {
                payload = "";
            }
            this.json = {};
            if (payload != "")
                this.json = JSON.parse(payload);
            this.res = result;
        }
        MatchedRoomEvent.prototype.getResult = function () {
            return this.res;
        };

        MatchedRoomEvent.prototype.getRooms = function () {
            var roomData = [];
            var i = 0;
            for (var key in this.json) {
                var room = {};
                room.id = key;
                room.name = this.json[key].name;
                room.owner = this.json[key].owner;
                room.maxUsers = this.json[key].maxUsers;
                room.isAdmin = this.json[key].isAdmin;
                roomData[i] = room;
                i++;
            }

            return roomData;
        };
        return MatchedRoomEvent;
    })();
    AppWarp.MatchedRoomEvent = MatchedRoomEvent;
})(AppWarp || (AppWarp = {}));
var AppWarp;
(function (AppWarp) {
    var Move = (function () {
        function Move(payload) {
            this.json = {};
            if (payload != "")
                this.json = JSON.parse(payload);
        }
        Move.prototype.getSender = function () {
            return this.json.sender;
        };

        Move.prototype.getNextTurn = function () {
            return this.json.nextTurn;
        };

        Move.prototype.getMoveData = function () {
            return this.json.moveData;
        };

        Move.prototype.getRoomId = function () {
            this.json.roomId;
        };
        return Move;
    })();
    AppWarp.Move = Move;
})(AppWarp || (AppWarp = {}));
var AppWarp;
(function (AppWarp) {
    var Notify = (function () {
        function Notify(responseBytes, startIndex) {
            this.messageType = responseBytes[startIndex + 0];
            this.updateType = responseBytes[startIndex + 1];
            this.reserved = responseBytes[startIndex + 2];
            this.payLoadType = responseBytes[startIndex + 3];
            this.payLoadSize = AppWarp.Utility.bytesToIntger(responseBytes, startIndex + 4);
            this.payLoad = new Uint8Array(this.payLoadSize);
            for (var i = 0; i < this.payLoadSize; i++) {
                this.payLoad[i] = responseBytes[8 + startIndex + i];
            }
        }
        Notify.prototype.getMessageType = function () {
            return this.messageType;
        };

        Notify.prototype.getUpdateType = function () {
            return this.updateType;
        };

        Notify.prototype.getPayloadType = function () {
            return this.payLoadType;
        };

        Notify.prototype.getPayloadSize = function () {
            return this.payLoadSize;
        };

        Notify.prototype.getPayload = function () {
            return this.payLoad;
        };

        Notify.prototype.getPayloadString = function () {
            return AppWarp.Utility.bin2String(this.payLoad);
        };

        Notify.prototype.debug = function () {
            console.log("=========Notify=========");
            console.log("messageType : " + AppWarp.MessageType[this.getMessageType()]);
            console.log("updateType  : " + AppWarp.UpdateType[this.getUpdateType()]);
            console.log("payLoadType : " + AppWarp.PayloadType[this.getPayloadType()]);
            console.log("payLoadSize : " + this.getPayloadSize());
            console.log("payLoad     : " + this.getPayloadString());
        };
        return Notify;
    })();
    AppWarp.Notify = Notify;
})(AppWarp || (AppWarp = {}));
var AppWarp;
(function (AppWarp) {
    var RequestBuilder = (function () {
        function RequestBuilder() {
        }
        RequestBuilder.buildWarpRequest = function (AppWarpSessionId, requestType, payload, isText) {
            var bytearray = new Uint8Array(16 + payload.length);
            bytearray[0] = AppWarp.MessageType.Request;
            bytearray[1] = requestType;

            bytearray[2] = AppWarpSessionId >>> 24;
            bytearray[3] = AppWarpSessionId >>> 16;
            bytearray[4] = AppWarpSessionId >>> 8;
            bytearray[5] = AppWarpSessionId;

            for (var i = 6; i <= 9; i++) {
                bytearray[i] = 0;
            }

            bytearray[10] = 0;

            bytearray[11] = AppWarp.PayloadType.Binary;
            if (payload.length > 0) {
                if (requestType != AppWarp.RequestType.UpdatePeers && requestType != AppWarp.RequestType.PrivateUpdate)
                    bytearray[11] = AppWarp.PayloadType.Json;
            }

            var payloadSize = payload.length;
            bytearray[12] = payloadSize >>> 24;
            bytearray[13] = payloadSize >>> 16;
            bytearray[14] = payloadSize >>> 8;
            bytearray[15] = payloadSize;

            if (isText == false) {
                for (var i = 0; i < payloadSize; ++i) {
                    bytearray[16 + i] = payload[i];
                }
            }
            else {
                for (var i = 0; i < payloadSize; ++i) {
                    bytearray[16 + i] = payload.charCodeAt(i);
                }
            }
            return bytearray;
        };

        RequestBuilder.buildAuthRequest = function (recovery, apiKey, secreteKey, user) {
            var timeStamp = AppWarp.Utility.getODataUTCDateFilter();
            var params = "";
            params += "apiKey" + apiKey;
            params += "timeStamp" + timeStamp;
            params += "user" + user;
            params += "version" + "JS_2.1";

            var hmac = AppWarp.CryptoJS.HmacSHA1(params, secreteKey).toString();
            var signature = encodeURIComponent(AppWarp.Utility.base64_encode(AppWarp.Utility.hex2bin(hmac)));

            var json = {};
            json.apiKey = apiKey;
            json.version = "JS_2.1";
            json.timeStamp = timeStamp;
            json.user = user;
            json.signature = signature;
            json.keepalive = 6;
            json.recoverytime = recovery;
            json.dbName =  AppWarp.WarpClient.dbName

            return JSON.stringify(json);
        };

        RequestBuilder.buildLobbyRequest = function () {
            var params = {};
            params.isPrimary = true;
            return JSON.stringify(params);
        };

        RequestBuilder.buildChatRequest = function (msg) {
            if (msg.length >= 512) {
                return "";
            } else {
                var params = {};
                params.chat = msg;
                return JSON.stringify(params);
            }
        };

        RequestBuilder.buildChatHistoryRequest = function (msg,sender,RoomId) {
            if (msg.length >= 512) {
                return "";
            } else {
                var params = {};
                params.chat = msg;
                params.sender = sender
                params.chatTime = (new Date()).getTime()
                params.roomId = RoomId
                return JSON.stringify(params);
            }
            
            
        };
        
        RequestBuilder.buildPrivateChatRequest = function (user, msg) {
            if (msg.length >= 512) {
                return "";
            } else {
                var params = {};
                params.to = user;
                params.chat = msg;
                return JSON.stringify(params);
            }
        };

        RequestBuilder.buildPrivateUpdateRequest = function (user, msg) {
            var data = new Uint8Array(user.length + msg.length + 1);
            var userNameLen = user.length;
            data[0] = userNameLen;
            for (var i = 0; i < userNameLen; ++i)
                data[1 + i] = user.charCodeAt(i);
            for (var j = 0; j < msg.length; ++j)
                data[1 + userNameLen + j] = msg[j];

            return data;
        };

        RequestBuilder.buildRoomRequest = function (roomId) {
            var params = {};
            params.id = roomId;
            return JSON.stringify(params);
        };

        RequestBuilder.buildUserRequest = function (username) {
            var params = {};
            params.name = username;
            return JSON.stringify(params);
        };
        RequestBuilder.buildRoomInRangeRequest = function (minUsers, maxUsers, maxPreferred) {
            var params = {};
            params.minUsers = minUsers;
            params.maxUsers = maxUsers;
            params.maxPreferred = maxPreferred;
            return JSON.stringify(params);
        };

        RequestBuilder.buildRoomWithPropertiesRequest = function (properties) {
            var params = {};
            params.properties = properties;
            return JSON.stringify(params);
        };
        
        RequestBuilder.buildRoomInRangeWithPropRequest = function (minUsers, maxUsers,maxPreferred,properties) {
            var params = {};
            params.minUsers = minUsers;
            params.maxUsers = maxUsers;
            params.maxPreferred = maxPreferred;
            params.properties = properties;
            return JSON.stringify(params);
        };
        
        RequestBuilder.buildSetCustomRoomDataRequest = function (room, customData) {
            var params = {};
            params.id = room;
            params.data = customData;
            return JSON.stringify(params);
        };

        RequestBuilder.buildSetCustomUserDataRequest = function (user, customData) {
            var params = {};
            params.name = user;
            params.data = customData;
            return JSON.stringify(params);
        };

        RequestBuilder.buildUpdateRoomPropertiesRequest = function (roomId, properties, removeArray) {
            if (typeof removeArray === "undefined") {
                removeArray = null;
            }
            var removeProperties = "";
            if (removeArray != null) {
                if (removeArray.length > 0) {
                    for (var i = 0; i < removeArray.length; ++i) {
                        if (i < removeArray.length - 1)
                            removeProperties += removeArray[i] + ";";
                        else
                            removeProperties += removeArray[i];
                    }
                }
            }

            var params = {};
            params.id = roomId;
            params.addOrUpdate = properties;
            params.remove = removeProperties;
            return JSON.stringify(params);
        };

        RequestBuilder.buildLockPropertiesRequest = function (properties) {
            var params = {};
            params.lockProperties = properties;
            return JSON.stringify(params);
        };

        RequestBuilder.buildUnlockPropertiesRequest = function (properties) {
            var UnLockProperties = "";
            if (properties) {
                if (properties.length > 0) {
                    for (var i = 0; i < properties.length; ++i) {
                        if (i < properties.length - 1)
                            UnLockProperties += properties[i] + ";";
                        else
                            UnLockProperties += properties[i];
                    }
                }
            }

            var params = {};
            params.unlockProperties = UnLockProperties;
            return JSON.stringify(params);
        };

        RequestBuilder.buildCreateTurnRoomRequest = function (name, owner, maxUsers, properties, turnTime) {
            if (typeof properties === "undefined") {
                properties = null;
            }
            if (typeof turnTime === "undefined") {
                turnTime = -1;
            }
            var params = {};
            params.name = name;
            params.owner = owner;
            params.maxUsers = maxUsers;
            params.chatHistory = WarpClient.isChatHistory;

            if (properties != null)
                params.properties = properties;

            if (turnTime >= 0) {
                params.turnTime = turnTime;
                params.inox = true;
            }

            return JSON.stringify(params);
        };

        RequestBuilder.buildStartGameRequest = function (isDefaultLogic, turnUser) {
            var params = {};
            params.isDefaultLogic = isDefaultLogic;
            params.nextTurn = turnUser;
            return JSON.stringify(params);
        };

        RequestBuilder.buildSetNextTurnRequest = function (nextTurn) {
            var params = {};
            params.nextTurn = nextTurn;
            return JSON.stringify(params);
        };

        RequestBuilder.buildSendMoveRequest = function (move, nextTurn) {
            var params = {};
            params.moveData = move;
            params.nextTurn = nextTurn;
            return JSON.stringify(params);
        };

        RequestBuilder.buildGetMoveHistoryRequest = function () {
            var params = {};
            params.count = 5;
            return JSON.stringify(params);
        };

        RequestBuilder.buildBroadcastChatRequest = function (roomId, chat) {
            var params = {};
            params.id = roomId;
            params.chat = chat;
            return JSON.stringify(params);
        };
        return RequestBuilder;
    })();
    AppWarp.RequestBuilder = RequestBuilder;
})(AppWarp || (AppWarp = {}));
var AppWarp;
(function (AppWarp) {
    var Response = (function () {
        function Response(responseBytes, startIndex) {
            this.messageType = responseBytes[startIndex + 0];
            this.requestType = responseBytes[startIndex + 1];
            this.resultCode = responseBytes[startIndex + 2];
            this.reserved = responseBytes[startIndex + 3];
            this.payLoadType = responseBytes[startIndex + 4];
            this.payLoadSize = AppWarp.Utility.bytesToIntger(responseBytes, startIndex + 5);
            this.payLoad = new Uint8Array(this.payLoadSize);
            for (var i = 0; i < this.payLoadSize; i++) {
                this.payLoad[i] = responseBytes[9 + startIndex + i];
            }
        }
        Response.prototype.getMessageType = function () {
            return this.messageType;
        };

        Response.prototype.getRequestType = function () {
            return this.requestType;
        };

        Response.prototype.getResultCode = function () {
            return this.resultCode;
        };

        Response.prototype.getPayloadType = function () {
            return this.payLoadType;
        };

        Response.prototype.getPayloadSize = function () {
            return this.payLoadSize;
        };

        Response.prototype.getPayload = function () {
            return this.payLoad;
        };

        Response.prototype.getPayloadString = function () {
            return AppWarp.Utility.bin2String(this.payLoad);
        };

        Response.prototype.debug = function () {
            console.log("========Response========");
            console.log("messageType : " + AppWarp.MessageType[this.getMessageType()]);
            console.log("requestType : " + AppWarp.RequestType[this.getRequestType()]);
            console.log("resultCode  : " + AppWarp.ResultCode[this.getResultCode()]);
            console.log("payLoadType : " + AppWarp.PayloadType[this.getPayloadType()]);
            console.log("payLoadSize : " + this.getPayloadSize());
            console.log("payLoad     : " + this.getPayloadString());
        };
        return Response;
    })();
    AppWarp.Response = Response;
})(AppWarp || (AppWarp = {}));
var AppWarp;
(function (AppWarp) {
    var Room = (function () {
        function Room(result, payload) {
            if (typeof payload === "undefined") {
                payload = "";
            }
            this.json = {};
            if (payload != "")
                this.json = JSON.parse(payload);
            this.res = result;
        }
        Room.prototype.getResult = function () {
            return this.res;
        };

        Room.prototype.getRoomId = function () {
            return this.json.id;
        };

        Room.prototype.getOwner = function () {
            return this.json.owner;
        };

        Room.prototype.getName = function () {
            return this.json.name;
        };

        Room.prototype.getMaxUsers = function () {
            return this.json.maxUsers;
        };
        return Room;
    })();
    AppWarp.Room = Room;
})(AppWarp || (AppWarp = {}));
var AppWarp;
(function (AppWarp) {
    var Utility = (function () {
        function Utility() {
        }
        Utility.getODataUTCDateFilter = function () {
            var date = new Date();
            var monthString;
            var rawMonth = (date.getUTCMonth() + 1).toString();
            if (rawMonth.length == 1) {
                monthString = "0" + rawMonth;
            } else {
                monthString = rawMonth;
            }

            var dateString;
            var rawDate = date.getUTCDate().toString();
            if (rawDate.length == 1) {
                dateString = "0" + rawDate;
            } else {
                dateString = rawDate;
            }

            var DateFilter = "";
            DateFilter += date.getUTCFullYear() + "-";
            DateFilter += monthString + "-";
            DateFilter += dateString;
            DateFilter += "T" + date.getUTCHours() + ":";
            DateFilter += date.getUTCMinutes() + ":";
            DateFilter += date.getUTCSeconds() + ".";
            DateFilter += date.getUTCMilliseconds();
            DateFilter += "Z";
            return DateFilter;
        };

        Utility.hex2bin = function (hex) {
            var bytes = [], str;

            for (var i = 0; i < hex.length - 1; i += 2)
                bytes.push(parseInt(hex.substr(i, 2), 16));

            return String.fromCharCode.apply(String, bytes);
        };

        Utility.base64_encode = function (data) {
            var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, enc = "", tmp_arr = [];

            if (!data) {
                return data;
            }

            do {
                o1 = data.charCodeAt(i++);
                o2 = data.charCodeAt(i++);
                o3 = data.charCodeAt(i++);

                bits = o1 << 16 | o2 << 8 | o3;

                h1 = bits >> 18 & 0x3f;
                h2 = bits >> 12 & 0x3f;
                h3 = bits >> 6 & 0x3f;
                h4 = bits & 0x3f;

                tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
            } while(i < data.length);

            enc = tmp_arr.join('');

            var r = data.length % 3;

            return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
        };

        Utility.bin2String = function (array) {
            var str = "";
            for (var i = 0; i < array.length; i++) {
                var char = array[i];
                str += String.fromCharCode(char);
            }
            return str;
        };

        Utility.bytesToIntger = function (bytes, offset) {
            var value = 0;
            for (var i = 0; i < 4; i++) {
                value = (value << 8) + (bytes[offset + i] & 0xff);
            }

            return value;
        };
        return Utility;
    })();
    AppWarp.Utility = Utility;
})(AppWarp || (AppWarp = {}));
var AppWarp;
(function (AppWarp) {
    var WarpClient = (function () {
        function WarpClient() {
            this.LOOKUP_ADDRESS = "control.appwarp.shephertz.com/lookup";
            this.LOOKUP_ADDRESS_DNS = "control.appwarp.shephertz.com/lookup_dns";
            this.responseCallbacks = [];
            this.updateCallbacks = [];
            this.SessionID = 0;
            this.lastSendTime = 0;
            this.userName = "";
            this.keepAliveInterval = 2000;
            this.pendingKeepAliveIntervalsLimit = 3;
            this.countPendingKeepAlives = 0;
            this.connectionState = AppWarp.ConnectionState.Disconnected;
            this.enableLogs = false;
            this.useSSL = false;
            this.autoRecover = false;
            this.dbName = "";
            this.isChatHistory = false;
            this.storageService = null;
            if (WarpClient.instance) {
                throw new Error("Error: Instantiation failed: Use WarpClient.getInstance() instead of new.");
            }
            WarpClient.instance = this;

            setInterval(function () {
                if (this.AppWarp.WarpClient.instance.connectionState == AppWarp.ConnectionState.Connected) {
                    var time = (new Date()).getTime();
                    var diff = time - this.AppWarp.WarpClient.instance.lastSendTime;

                    if (diff > this.AppWarp.WarpClient.instance.keepAliveInterval) {
                        if (this.AppWarp.WarpClient.instance.countPendingKeepAlives >= this.AppWarp.WarpClient.instance.pendingKeepAliveIntervalsLimit) {
                            this.AppWarp.WarpClient.instance.connectionState = AppWarp.ConnectionState.Disconnected;
                            if (this.AppWarp.WarpClient.recoveryAllowance > 0 && this.AppWarp.WarpClient.instance.SessionID != 0) {
                                if (this.AppWarp.WarpClient.instance.autoRecover == true) {
                                    if (this.AppWarp.WarpClient.instance.responseCallbacks[this.AppWarp.Events.onConnectDone])
                                        this.AppWarp.WarpClient.instance.responseCallbacks[this.AppWarp.Events.onConnectDone](this.AppWarp.ResultCode.AutoRecovering, 0);
                                    this.AppWarp.WarpClient.instance.recoverConnection();
                                } else {
                                    if (this.AppWarp.WarpClient.instance.responseCallbacks[this.AppWarp.Events.onConnectDone])
                                        this.AppWarp.WarpClient.instance.responseCallbacks[this.AppWarp.Events.onConnectDone](this.AppWarp.ResultCode.ConnectionErrorRecoverable, 0);
                                }
                            } else {
                                this.AppWarp.WarpClient.instance.SessionID = 0;
                                if (this.AppWarp.WarpClient.instance.responseCallbacks[this.AppWarp.Events.onConnectDone])
                                    this.AppWarp.WarpClient.instance.responseCallbacks[this.AppWarp.Events.onConnectDone](this.AppWarp.ResultCode.ConnectionError, 0);
                            }
                            this.AppWarp.WarpClient.instance.socket.onopen = function () {
                            };
                            this.AppWarp.WarpClient.instance.socket.onclose = function () {
                            };
                            this.AppWarp.WarpClient.instance.socket.onmessage = function () {
                            };
                            delete this.AppWarp.WarpClient.instance.socket;
                        } else {
                            var data = this.AppWarp.RequestBuilder.buildWarpRequest(this.AppWarp.WarpClient.instance.SessionID, AppWarp.RequestType.KeepAlive, "", true);
                            this.AppWarp.WarpClient.instance.sendMessage(data.buffer);
                            this.AppWarp.WarpClient.instance.countPendingKeepAlives++;
                        }
                    }
                }
            }, 500);
        }
        WarpClient.initialize = function (API_KEY, Secret_KEY, server) {
            if (typeof server === "undefined") {
                server = "";
            }
            WarpClient.apiKey = API_KEY;
            WarpClient.secretKey = Secret_KEY;
            WarpClient.serverAddress = server;
        };

        WarpClient.terminate = function () {
            if (WarpClient.instance != null) {
                if (WarpClient.instance.getConnectionState() != AppWarp.ConnectionState.Disconnected)
                    WarpClient.instance.disconnect();
                delete WarpClient.instance;
            }
        };

        WarpClient.getInstance = function () {
            if (WarpClient.instance == null)
                WarpClient.instance = new WarpClient();

            return WarpClient.instance;
        };

        WarpClient.prototype.sendMessage = function (data) {
            this.socket.send(data);
            this.lastSendTime = (new Date()).getTime();
        };

        WarpClient.prototype.onMessage = function (msg) {
            var bytearray = new Uint8Array(msg.data);
            var numRead = bytearray.length;
            var numDecoded = 0;

            while (numDecoded < numRead) {
                if (bytearray[numDecoded] == AppWarp.MessageType.Response) {
                    var res = new AppWarp.Response(bytearray, numDecoded);
                    numDecoded += this.handleResponse(res);
                } else if (bytearray[numDecoded] == AppWarp.MessageType.Update) {
                    var notify = new AppWarp.Notify(bytearray, numDecoded);
                    numDecoded += this.handleNotify(notify);
                }
            }
        };
        

        WarpClient.prototype.handleResponse = function (res) {
            if (this.enableLogs == true && res.getRequestType() != AppWarp.RequestType.KeepAlive)
                res.debug();

            if (res.getRequestType() == AppWarp.RequestType.Auth) {
                var result = res.getResultCode();
                var reasonCode = 0;
                if (res.getResultCode() == AppWarp.ResultCode.Success) {
                    var json = JSON.parse(res.getPayloadString());
                    this.SessionID = json.sessionid;
                    if (json.hasOwnProperty("autoRecover"))
                        this.autoRecover = json.autoRecover;
                    if (json.hasOwnProperty("recoveryTime"))
                        WarpClient.recoveryAllowance = json.recoveryTime;

                    if (this.connectionState == AppWarp.ConnectionState.Recovering) {
                        result = AppWarp.ResultCode.SuccessRecovered;
                    }
                    this.connectionState = AppWarp.ConnectionState.Connected;
                } else {
                    if (res.getPayloadType() == AppWarp.PayloadType.Json) {
                        var json = JSON.parse(res.getPayloadString());
                        reasonCode = json.reasonCode;
                    }

                    this.SessionID = 0;
                    this.socket.onclose = function () {
                    };
                    this.socket.close();
                    this.connectionState = AppWarp.ConnectionState.Disconnected;
                }

                if (this.responseCallbacks[AppWarp.Events.onConnectDone])
                    this.responseCallbacks[AppWarp.Events.onConnectDone](result, reasonCode);
            } else if (res.getRequestType() == AppWarp.RequestType.JoinLobby) {
                var _lobby = new AppWarp.Lobby(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onJoinLobbyDone])
                    this.responseCallbacks[AppWarp.Events.onJoinLobbyDone](_lobby);
            } else if (res.getRequestType() == AppWarp.RequestType.SubscribeLobby) {
                var _lobby = new AppWarp.Lobby(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onSubscribeLobbyDone])
                    this.responseCallbacks[AppWarp.Events.onSubscribeLobbyDone](_lobby);
            } else if (res.getRequestType() == AppWarp.RequestType.UnsubscribeLobby) {
                var _lobby = new AppWarp.Lobby(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onUnsubscribeLobbyDone])
                    this.responseCallbacks[AppWarp.Events.onUnsubscribeLobbyDone](_lobby);
            } else if (res.getRequestType() == AppWarp.RequestType.LeaveLobby) {
                var _lobby = new AppWarp.Lobby(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onLeaveLobbyDone])
                    this.responseCallbacks[AppWarp.Events.onLeaveLobbyDone](_lobby);
            } else if (res.getRequestType() == AppWarp.RequestType.Chat) {
                if (this.responseCallbacks[AppWarp.Events.onSendChatDone])
                    this.responseCallbacks[AppWarp.Events.onSendChatDone](res.getResultCode());
            } else if (res.getRequestType() == AppWarp.RequestType.JoinRoom || res.getRequestType() == AppWarp.RequestType.JoinRoomInRange || res.getRequestType() == AppWarp.RequestType.JoinRoomWithProperties) {
                var _room = new AppWarp.Room(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onJoinRoomDone])
                    this.responseCallbacks[AppWarp.Events.onJoinRoomDone](_room);
            } else if (res.getRequestType() == AppWarp.RequestType.SubscribeRoom) {
                var _room = new AppWarp.Room(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onSubscribeRoomDone])
                    this.responseCallbacks[AppWarp.Events.onSubscribeRoomDone](_room);
            } else if (res.getRequestType() == AppWarp.RequestType.UnsubscribeRoom) {
                var _room = new AppWarp.Room(res.getResultCode(), res.getPayloadString());
                if (this.responseCallbacks[AppWarp.Events.onUnsubscribeRoomDone])
                    this.responseCallbacks[AppWarp.Events.onUnsubscribeRoomDone](_room);
            }
            else if (res.getRequestType() == AppWarp.RequestType.JoinAndSubscribeRoom) {
                var _room = new AppWarp.Room(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onJoinAndSubscribeRoomDone])
                    this.responseCallbacks[AppWarp.Events.onJoinAndSubscribeRoomDone](_room);
            } 
            else if (res.getRequestType() == AppWarp.RequestType.LeaveAndUnsubscribeRoom) {
                var _room = new AppWarp.Room(res.getResultCode(), res.getPayloadString());
                if (this.responseCallbacks[AppWarp.Events.onLeaveAndUnsubscribeRoomDone])
                    this.responseCallbacks[AppWarp.Events.onLeaveAndUnsubscribeRoomDone](_room);
            } 
            else if (res.getRequestType() == AppWarp.RequestType.LeaveRoom) {
                var _room = new AppWarp.Room(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onLeaveRoomDone])
                    this.responseCallbacks[AppWarp.Events.onLeaveRoomDone](_room);
            } else if (res.getRequestType() == AppWarp.RequestType.CreateRoom) {
                var _room = new AppWarp.Room(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onCreateRoomDone])
                    this.responseCallbacks[AppWarp.Events.onCreateRoomDone](_room);
            } else if (res.getRequestType() == AppWarp.RequestType.DeleteRoom) {
                var _room = new AppWarp.Room(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onDeleteRoomDone])
                    this.responseCallbacks[AppWarp.Events.onDeleteRoomDone](_room);
            } else if (res.getRequestType() == AppWarp.RequestType.GetRoomInfo) {
                var _liveRoom = new AppWarp.LiveRoom(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onGetLiveRoomInfoDone])
                    this.responseCallbacks[AppWarp.Events.onGetLiveRoomInfoDone](_liveRoom);
            } else if (res.getRequestType() == AppWarp.RequestType.GetLobbyInfo) {
                var _liveRoom = new AppWarp.LiveRoom(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onGetLiveLobbyInfoDone])
                    this.responseCallbacks[AppWarp.Events.onGetLiveLobbyInfoDone](_liveRoom);
            } else if (res.getRequestType() == AppWarp.RequestType.GetUserInfo) {
                var _user = new AppWarp.LiveUser(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onGetLiveUserInfoDone])
                    this.responseCallbacks[AppWarp.Events.onGetLiveUserInfoDone](_user);
            }
            else if (res.getRequestType() == AppWarp.RequestType.GetUserStatus) {
                var _user = new AppWarp.LiveUser(res.getResultCode(), res.getPayloadString());
                if (this.responseCallbacks[AppWarp.Events.onUserStatusDone])
                    this.responseCallbacks[AppWarp.Events.onUserStatusDone](_user);
            } 
            else if (res.getRequestType() == AppWarp.RequestType.SetCustomUserData) {
                var _user = new AppWarp.LiveUser(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onSetCustomUserDataDone])
                    this.responseCallbacks[AppWarp.Events.onSetCustomUserDataDone](_user);
            } else if (res.getRequestType() == AppWarp.RequestType.SetCustomRoomData) {
                var _liveRoom = new AppWarp.LiveRoom(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onSetCustomRoomDataDone])
                    this.responseCallbacks[AppWarp.Events.onSetCustomRoomDataDone](_liveRoom);
            } else if (res.getRequestType() == AppWarp.RequestType.GetUsers) {
                var _users = new AppWarp.AllUsersEvent(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onGetOnlineUsersDone])
                    this.responseCallbacks[AppWarp.Events.onGetOnlineUsersDone](_users);
            } else if (res.getRequestType() == AppWarp.RequestType.GetRooms) {
                var _rooms = new AppWarp.AllRoomsEvent(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onGetAllRoomsDone])
                    this.responseCallbacks[AppWarp.Events.onGetAllRoomsDone](_rooms);
            } else if (res.getRequestType() == AppWarp.RequestType.GetRoomInRange || res.getRequestType() == AppWarp.RequestType.GetRoomWithProperties || res.getRequestType() == AppWarp.RequestType.GetRoomInRangeWithProp) {
                var _matchedrooms = new AppWarp.MatchedRoomEvent(res.getResultCode(), res.getPayloadString());
                if (this.responseCallbacks[AppWarp.Events.onGetMatchedRoomsDone])
                    this.responseCallbacks[AppWarp.Events.onGetMatchedRoomsDone](_matchedrooms);
            } else if (res.getRequestType() == AppWarp.RequestType.UpdatePeers) {
                if (this.responseCallbacks[AppWarp.Events.onSendUpdateDone])
                    this.responseCallbacks[AppWarp.Events.onSendUpdateDone](res.getResultCode());
            } else if (res.getRequestType() == AppWarp.RequestType.PrivateChat) {
                if (this.responseCallbacks[AppWarp.Events.onSendPrivateChatDone])
                    this.responseCallbacks[AppWarp.Events.onSendPrivateChatDone](res.getResultCode());
            } else if (res.getRequestType() == AppWarp.RequestType.UpdateRoomProperty) {
                var _liveRoom = new AppWarp.LiveRoom(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onUpdatePropertyDone])
                    this.responseCallbacks[AppWarp.Events.onUpdatePropertyDone](_liveRoom);
            } else if (res.getRequestType() == AppWarp.RequestType.LockProperties) {
                if (this.responseCallbacks[AppWarp.Events.onLockPropertiesDone])
                    this.responseCallbacks[AppWarp.Events.onLockPropertiesDone](res.getResultCode());
            } else if (res.getRequestType() == AppWarp.RequestType.UnlockProperties) {
                if (this.responseCallbacks[AppWarp.Events.onUnlockPropertiesDone])
                    this.responseCallbacks[AppWarp.Events.onUnlockPropertiesDone](res.getResultCode());
            } else if (res.getRequestType() == AppWarp.RequestType.Move) {
                if (this.responseCallbacks[AppWarp.Events.onSendMoveDone])
                    this.responseCallbacks[AppWarp.Events.onSendMoveDone](res.getResultCode());
            } else if (res.getRequestType() == AppWarp.RequestType.StartGame) {
                if (this.responseCallbacks[AppWarp.Events.onStartGameDone])
                    this.responseCallbacks[AppWarp.Events.onStartGameDone](res.getResultCode());
            } else if (res.getRequestType() == AppWarp.RequestType.StopGame) {
                if (this.responseCallbacks[AppWarp.Events.onStopGameDone])
                    this.responseCallbacks[AppWarp.Events.onStopGameDone](res.getResultCode());
            } else if (res.getRequestType() == AppWarp.RequestType.GetMoveHistory) {
                if (this.responseCallbacks[AppWarp.Events.onGetMoveHistoryDone]) {
                    var movesJSON = JSON.parse(res.getPayloadString());
                    var moves = [];
                    for (var i = 0; i < movesJSON.history.length; ++i) {
                        moves[i] = new AppWarp.Move(JSON.stringify(movesJSON.history[i]));
                    }
                    this.responseCallbacks[AppWarp.Events.onGetMoveHistoryDone](res.getResultCode(), moves);
                }
            } else if (res.getRequestType() == AppWarp.RequestType.SetNextTurn) {
                if (this.responseCallbacks[AppWarp.Events.onSetNextTurnDone])
                    this.responseCallbacks[AppWarp.Events.onSetNextTurnDone](res.getResultCode());
            } else if (res.getRequestType() == AppWarp.RequestType.PrivateUpdate) {
                if (this.responseCallbacks[AppWarp.Events.onSendPrivateUpdateDone])
                    this.responseCallbacks[AppWarp.Events.onSendPrivateUpdateDone](res.getResultCode());
            } else if (res.getRequestType() == AppWarp.RequestType.KeepAlive) {
                this.countPendingKeepAlives = 0;
            } else if (res.getRequestType() == AppWarp.RequestType.GetAllRoomsCount) {
                if (this.responseCallbacks[AppWarp.Events.onGetAllRoomsCountDone]) {
                    var json = JSON.parse(res.getPayloadString());
                    this.responseCallbacks[AppWarp.Events.onGetAllRoomsCountDone](res.getResultCode(), json.count);
                }
            } else if (res.getRequestType() == AppWarp.RequestType.GetOnlineUsersCount) {
                if (this.responseCallbacks[AppWarp.Events.onGetOnlineUsersCountDone]) {
                    var json = JSON.parse(res.getPayloadString());
                    this.responseCallbacks[AppWarp.Events.onGetOnlineUsersCountDone](res.getResultCode(), json.count);
                }
            } else if (res.getRequestType() == AppWarp.RequestType.BroadcastChat) {
                if (this.responseCallbacks[AppWarp.Events.onSendChatDone])
                    this.responseCallbacks[AppWarp.Events.onSendChatDone](res.getResultCode());
            }

            return 9 + res.getPayloadSize();
        };

        WarpClient.prototype.handleApp42Response = function (app42RequestCode,result) {
            if (app42RequestCode == AppWarp.App42RequestType.ChatHistory) {
                if(WarpClient.instance.responseCallbacks[AppWarp.Events.onGetChatHistoryDone]) {
                     var response = JSON.parse(result);
                     var result = response.app42.response.storage.jsonDoc
                     var chat = [];
                     for (var i = 0; i < result.length; ++i) {
                        chat[i] = result[i];
                     }
                    WarpClient.instance.responseCallbacks[AppWarp.Events.onGetChatHistoryDone](AppWarp.ResultCode.Success, chat);
                }
            } 
        };
        
        
        WarpClient.prototype.handleNotify = function (res) {
            if (this.enableLogs == true)
                res.debug();

            if (res.getUpdateType() == AppWarp.UpdateType.Chat) {
                var _chat = new AppWarp.Chat(res.getPayloadString());
                if (this.updateCallbacks[AppWarp.Events.onChatReceived])
                    this.updateCallbacks[AppWarp.Events.onChatReceived](_chat);
            } else if (res.getUpdateType() == AppWarp.UpdateType.RoomCreated) {
                var _room = new AppWarp.Room(0, res.getPayloadString());
                if (this.updateCallbacks[AppWarp.Events.onRoomCreated])
                    this.updateCallbacks[AppWarp.Events.onRoomCreated](_room);
            } else if (res.getUpdateType() == AppWarp.UpdateType.RoomDeleted) {
                var _room = new AppWarp.Room(0, res.getPayloadString());
                if (this.updateCallbacks[AppWarp.Events.onRoomDestroyed])
                    this.updateCallbacks[AppWarp.Events.onRoomDestroyed](_room);
            } else if (res.getUpdateType() == AppWarp.UpdateType.UpdatePeers) {
                if (this.updateCallbacks[AppWarp.Events.onUpdatePeersReceived])
                    this.updateCallbacks[AppWarp.Events.onUpdatePeersReceived](res.getPayload());
            } else if (res.getUpdateType() == AppWarp.UpdateType.UserJoinedLobby) {
                var _lobby = new AppWarp.Lobby(0, res.getPayloadString());
                var user = (JSON.parse(res.getPayloadString())).user;
                if (this.updateCallbacks[AppWarp.Events.onUserJoinedLobby])
                    this.updateCallbacks[AppWarp.Events.onUserJoinedLobby](_lobby, user);
            } else if (res.getUpdateType() == AppWarp.UpdateType.UserLeftLobby) {
                var _lobby = new AppWarp.Lobby(0, res.getPayloadString());
                var user = (JSON.parse(res.getPayloadString())).user;
                if (this.updateCallbacks[AppWarp.Events.onUserLeftLobby])
                    this.updateCallbacks[AppWarp.Events.onUserLeftLobby](_lobby, user);
            } else if (res.getUpdateType() == AppWarp.UpdateType.UserJoinedRoom) {
                var _room = new AppWarp.Room(0, res.getPayloadString());
                var user = (JSON.parse(res.getPayloadString())).user;
                if (this.updateCallbacks[AppWarp.Events.onUserJoinedRoom])
                    this.updateCallbacks[AppWarp.Events.onUserJoinedRoom](_room, user);
            } else if (res.getUpdateType() == AppWarp.UpdateType.UserLeftRoom) {
                var _room = new AppWarp.Room(0, res.getPayloadString());
                var user = (JSON.parse(res.getPayloadString())).user;
                if (this.updateCallbacks[AppWarp.Events.onUserLeftRoom])
                    this.updateCallbacks[AppWarp.Events.onUserLeftRoom](_room, user);
            } else if (res.getUpdateType() == AppWarp.UpdateType.PrivateChat) {
                var json = JSON.parse(res.getPayloadString());
                if (this.updateCallbacks[AppWarp.Events.onPrivateChatReceived])
                    this.updateCallbacks[AppWarp.Events.onPrivateChatReceived](json.sender, json.chat);
            } else if (res.getUpdateType() == AppWarp.UpdateType.RoomPropertyChange) {
                var json = JSON.parse(res.getPayloadString());
                if (this.updateCallbacks[AppWarp.Events.onUserChangeRoomProperty])
                    this.updateCallbacks[AppWarp.Events.onUserChangeRoomProperty](json.sender, json.properties, json.lockProperties);
            } else if (res.getUpdateType() == AppWarp.UpdateType.MoveCompleted) {
                var _move = new AppWarp.Move(res.getPayloadString());
                if (this.updateCallbacks[AppWarp.Events.onMoveCompleted])
                    this.updateCallbacks[AppWarp.Events.onMoveCompleted](_move);
            } else if (res.getUpdateType() == AppWarp.UpdateType.GameStarted) {
                if (this.updateCallbacks[AppWarp.Events.onGameStarted]) {
                    var json = JSON.parse(res.getPayloadString());
                    this.updateCallbacks[AppWarp.Events.onGameStarted](json.sender, json.id, json.nextTurn);
                }
            } else if (res.getUpdateType() == AppWarp.UpdateType.GameStopped) {
                if (this.updateCallbacks[AppWarp.Events.onGameStopped]) {
                    var json = JSON.parse(res.getPayloadString());
                    this.updateCallbacks[AppWarp.Events.onGameStopped](json.sender, json.id);
                }
            } else if (res.getUpdateType() == AppWarp.UpdateType.UserResumed) {
                if (this.updateCallbacks[AppWarp.Events.onUserResumed]) {
                    var json = JSON.parse(res.getPayloadString());
                    this.updateCallbacks[AppWarp.Events.onUserResumed](json.id, json.isLobby, json.user);
                }
            } else if (res.getUpdateType() == AppWarp.UpdateType.UserPaused) {
                if (this.updateCallbacks[AppWarp.Events.onUserPaused]) {
                    var json = JSON.parse(res.getPayloadString());
                    this.updateCallbacks[AppWarp.Events.onUserPaused](json.id, json.isLobby, json.user);
                }
            } else if (res.getUpdateType() == AppWarp.UpdateType.NextTurnRequested) {
                if (this.updateCallbacks[AppWarp.Events.onNextTurnRequested]) {
                    var json = JSON.parse(res.getPayloadString());
                    this.updateCallbacks[AppWarp.Events.onNextTurnRequested](json.lastTurn);
                }
            } else if (res.getUpdateType() == AppWarp.UpdateType.PrivateUpdate) {
                if (this.updateCallbacks[AppWarp.Events.onPrivateUpdateReceived]) {
                    var dataLen = res.getPayloadSize();
                    var data = res.getPayload();

                    var userNameLen = data[0];
                    var userName = new Uint8Array(userNameLen);

                    var msgLen = dataLen - userNameLen - 1;
                    var msg = new Uint8Array(msgLen);

                    for (var i = 0; i < userNameLen; ++i)
                        userName[i] = data[1 + i];
                    for (var j = 0; j < msgLen; ++j)
                        msg[j] = data[1 + userNameLen + j];

                    this.updateCallbacks[AppWarp.Events.onPrivateUpdateReceived](AppWarp.Utility.bin2String(userName), msg);
                }
            }

            return 8 + res.getPayloadSize();
        };

        WarpClient.prototype.joinZone = function (user) {
            var payload = AppWarp.RequestBuilder.buildAuthRequest(WarpClient.recoveryAllowance, WarpClient.apiKey, WarpClient.secretKey, user);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.Auth, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.setResponseListener = function (evnt, callback) {
            this.responseCallbacks[evnt] = callback;
        };
        
        
        WarpClient.prototype.setApp42ResponseListener = function (evnt, callback) {
            this.responseCallbacks[evnt] = callback;
        };
        
        WarpClient.prototype.resetApp42ResponseListener = function (evnt, callback) {
            this.responseCallbacks[evnt] = callback;
        };

        WarpClient.prototype.resetResponseListener = function (evnt) {
            if (this.responseCallbacks[evnt])
                delete this.responseCallbacks[evnt];
        };

        WarpClient.prototype.setNotifyListener = function (evnt, callback) {
            this.updateCallbacks[evnt] = callback;
        };

        WarpClient.prototype.resetNotifyListener = function (evnt) {
            if (this.updateCallbacks[evnt])
                delete this.updateCallbacks[evnt];
        };

        WarpClient.prototype._connect = function (user) {
            this.countPendingKeepAlives = 0;
            if (this.useSSL == true)
                this.socket = new WebSocket("wss://" + WarpClient.serverAddress + ":12347");
            else
                this.socket = new WebSocket("ws://" + WarpClient.serverAddress + ":12346");
            this.socket.binaryType = "arraybuffer";
            var that = this;
            this.socket.onopen = function () {
                if (user) {
                    that.joinZone(user);
                } else {
                    this.connectionState = AppWarp.ConnectionState.Disconnected;
                    if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                        that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.BadRequest, 0);
                }
            };

            this.socket.onclose = function () {
                if (that.connectionState == AppWarp.ConnectionState.Connected) {
                    that.connectionState = AppWarp.ConnectionState.Disconnected;
                    if (WarpClient.recoveryAllowance > 0 && that.SessionID != 0) {
                        if (that.autoRecover == true) {
                            if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                                that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.AutoRecovering, 0);
                            that.recoverConnection();
                        } else {
                            if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                                that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.ConnectionErrorRecoverable, 0);
                        }
                    } else {
                        that.SessionID = 0;
                        if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                            that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.ConnectionError, 0);
                    }
                } else if (that.connectionState == AppWarp.ConnectionState.Recovering) {
                    if (that.autoRecover == true) {
                        that.connectionState = AppWarp.ConnectionState.Disconnected;
                        if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                            that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.AutoRecovering, 0);
                        that.recoverConnection();
                    } else {
                        if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                            that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.ConnectionErrorRecoverable, 0);
                    }
                } else if (that.connectionState == AppWarp.ConnectionState.Connecting) {
                    that.connectionState = AppWarp.ConnectionState.Disconnected;
                    if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                        that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.ConnectionError, 0);
                }
            };

            this.socket.onmessage = function (msg) {
                that.onMessage(msg);
            };
        };

        WarpClient.prototype.setGeoLocation = function (location) {
            WarpClient.geoLocation = location;
            WarpClient.serverAddress = "";
        };

        WarpClient.prototype.connect = function (user) {
            if (this.connectionState != AppWarp.ConnectionState.Disconnected) {
                if (this.responseCallbacks[AppWarp.Events.onConnectDone])
                    this.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.BadRequest, 0);
            } else {
                this.userName = user;
                this.connectionState = AppWarp.ConnectionState.Connecting;
                if (WarpClient.serverAddress == "") {
                    var xmlHttp = new XMLHttpRequest();
                    var that = this;
                    xmlHttp.onreadystatechange = function () {
                        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                            var res = JSON.parse(xmlHttp.responseText);

                            if (res.address) {
                                WarpClient.serverAddress = res.address;
                                that._connect(user);
                            } else {
                                this.connectionState = AppWarp.ConnectionState.Disconnected;
                                if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                                    that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.AuthError, AppWarp.ReasonCode.InvalidAPIKey);
                            }
                        } else if (xmlHttp.readyState == 4 && xmlHttp.status == 404) {
                            this.connectionState = AppWarp.ConnectionState.Disconnected;
                            if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                                that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.AuthError, AppWarp.ReasonCode.InvalidAPIKey);
                        } else if (xmlHttp.readyState == 4 && xmlHttp.status == 0) {
                            this.connectionState = AppWarp.ConnectionState.Disconnected;
                            if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                                that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.ConnectionError, 0);
                        }
                    };

                    if (WarpClient.geoLocation != "")
                        xmlHttp.open("GET", this.getControlLookup() + "?api=" + WarpClient.apiKey + "&geo=" + WarpClient.geoLocation, true);
                    else
                        xmlHttp.open("GET", this.getControlLookup() + "?api=" + WarpClient.apiKey, true);

                    xmlHttp.send();
                } else {
                    this._connect(user);
                }
            }
        };

        WarpClient.prototype.disconnect = function () {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                if (this.responseCallbacks[AppWarp.Events.onDisconnectDone])
                    this.responseCallbacks[AppWarp.Events.onDisconnectDone](AppWarp.ResultCode.BadRequest);

                return;
            }

            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.Signout, "", true);
            this.sendMessage(data.buffer);

            this.SessionID = 0;
            this.connectionState = AppWarp.ConnectionState.Disconnecting;
            var that = this;
            this.socket.onclose = function () {
                that.connectionState = AppWarp.ConnectionState.Disconnected;
                if (that.responseCallbacks[AppWarp.Events.onDisconnectDone])
                    that.responseCallbacks[AppWarp.Events.onDisconnectDone](AppWarp.ResultCode.Success);
            };
            this.socket.close();
        };

        WarpClient.prototype.joinLobby = function () {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _lobby = new AppWarp.Lobby(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onJoinLobbyDone])
                    this.responseCallbacks[AppWarp.Events.onJoinLobbyDone](_lobby);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildLobbyRequest();
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.JoinLobby, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.subscribeLobby = function () {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _lobby = new AppWarp.Lobby(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onSubscribeLobbyDone])
                    this.responseCallbacks[AppWarp.Events.onSubscribeLobbyDone](_lobby);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildLobbyRequest();
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.SubscribeLobby, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.unsubscribeLobby = function () {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _lobby = new AppWarp.Lobby(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onUnsubscribeLobbyDone])
                    this.responseCallbacks[AppWarp.Events.onUnsubscribeLobbyDone](_lobby);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildLobbyRequest();
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.UnsubscribeLobby, payload, true);
            this.sendMessage(data.buffer);
        };
        WarpClient.prototype.joinAndSubscribeRoom = function (roomId) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _room = new AppWarp.Room(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onJoinAndSubscribeRoomDone])
                    this.responseCallbacks[AppWarp.Events.onJoinAndSubscribeRoomDone](_room);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildRoomRequest(roomId);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.JoinAndSubscribeRoom, payload, true);
            this.sendMessage(data.buffer);
        };
		
        WarpClient.prototype.leaveAndUnsubscribeRoom = function (roomId) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _room = new AppWarp.Room(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onLeaveAndUnsubscribeRoomDone])
                    this.responseCallbacks[AppWarp.Events.onLeaveAndUnsubscribeRoomDone](_room);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildRoomRequest(roomId);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.LeaveAndUnsubscribeRoom, payload, true);
            this.sendMessage(data.buffer);
        };
        WarpClient.prototype.leaveLobby = function () {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _lobby = new AppWarp.Lobby(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onLeaveLobbyDone])
                    this.responseCallbacks[AppWarp.Events.onLeaveLobbyDone](_lobby);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildLobbyRequest();
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.LeaveLobby, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.joinRoom = function (roomId) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _room = new AppWarp.Room(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onJoinRoomDone])
                    this.responseCallbacks[AppWarp.Events.onJoinRoomDone](_room);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildRoomRequest(roomId);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.JoinRoom, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.joinRoomInRange = function (minUsers, maxUsers, maxPreferred) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _room = new AppWarp.Room(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onJoinRoomDone])
                    this.responseCallbacks[AppWarp.Events.onJoinRoomDone](_room);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildRoomInRangeRequest(minUsers, maxUsers, maxPreferred);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.JoinRoomInRange, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.joinRoomWithProperties = function (properties) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _room = new AppWarp.Room(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onJoinRoomDone])
                    this.responseCallbacks[AppWarp.Events.onJoinRoomDone](_room);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildRoomWithPropertiesRequest(properties);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.JoinRoomWithProperties, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.subscribeRoom = function (roomId) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _room = new AppWarp.Room(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onSubscribeRoomDone])
                    this.responseCallbacks[AppWarp.Events.onSubscribeRoomDone](_room);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildRoomRequest(roomId);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.SubscribeRoom, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.unsubscribeRoom = function (roomId) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _room = new AppWarp.Room(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onUnsubscribeRoomDone])
                    this.responseCallbacks[AppWarp.Events.onUnsubscribeRoomDone](_room);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildRoomRequest(roomId);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.UnsubscribeRoom, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.leaveRoom = function (roomId) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _room = new AppWarp.Room(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onLeaveRoomDone])
                    this.responseCallbacks[AppWarp.Events.onLeaveRoomDone](_room);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildRoomRequest(roomId);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.LeaveRoom, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.createRoom = function (name, owner, max, properties) {
            if (typeof properties === "undefined") {
                properties = null;
            }
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _room = new AppWarp.Room(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onCreateRoomDone])
                    this.responseCallbacks[AppWarp.Events.onCreateRoomDone](_room);

                return;
            }

            var json = {};
            json.name = name;
            json.owner = owner;
            json.maxUsers = max;

            if (properties != null) {
                if ((JSON.stringify(properties)).length > AppWarp.Constants.MaxPropertySizeBytes) {
                    if (this.responseCallbacks[AppWarp.Events.onCreateRoomDone]) {
                        var _room = new AppWarp.Room(AppWarp.ResultCode.ResultSizeError, "");
                        this.responseCallbacks[AppWarp.Events.onCreateRoomDone](_room);
                    }
                    return;
                }
                json.properties = properties;
            }
            json.chatHistory = WarpClient.isChatHistory 
            
            var payload = JSON.stringify(json);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.CreateRoom, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.deleteRoom = function (roomId) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _room = new AppWarp.Room(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onDeleteRoomDone])
                    this.responseCallbacks[AppWarp.Events.onDeleteRoomDone](_room);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildRoomRequest(roomId);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.DeleteRoom, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.getLiveRoomInfo = function (roomId) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _liveRoom = new AppWarp.LiveRoom(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onGetLiveRoomInfoDone])
                    this.responseCallbacks[AppWarp.Events.onGetLiveRoomInfoDone](_liveRoom);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildRoomRequest(roomId);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetRoomInfo, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.getLiveLobbyInfo = function () {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _liveRoom = new AppWarp.LiveRoom(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onGetLiveLobbyInfoDone])
                    this.responseCallbacks[AppWarp.Events.onGetLiveLobbyInfoDone](_liveRoom);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildLobbyRequest();
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetLobbyInfo, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.getLiveUserInfo = function (username) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _liveUser = new AppWarp.LiveUser(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onGetLiveUserInfoDone])
                    this.responseCallbacks[AppWarp.Events.onGetLiveUserInfoDone](_liveUser);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildUserRequest(username);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetUserInfo, payload, true);
            this.sendMessage(data.buffer);
        };
        
        WarpClient.prototype.getUserStatus = function (username) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _liveUser = new AppWarp.LiveUser(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onUserStatusDone])
                    this.responseCallbacks[AppWarp.Events.onUserStatusDone](_liveUser);

                return;
            }
			
            var payload = AppWarp.RequestBuilder.buildUserRequest(username);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetUserStatus, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.setCustomUserData = function (user, customData) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _liveUser = new AppWarp.LiveUser(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onSetCustomUserDataDone])
                    this.responseCallbacks[AppWarp.Events.onSetCustomUserDataDone](_liveUser);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildSetCustomUserDataRequest(user, customData);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.SetCustomUserData, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.setCustomRoomData = function (room, customData) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _liveRoom = new AppWarp.LiveRoom(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onSetCustomRoomDataDone])
                    this.responseCallbacks[AppWarp.Events.onSetCustomRoomDataDone](_liveRoom);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildSetCustomRoomDataRequest(room, customData);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.SetCustomRoomData, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.getOnlineUsers = function () {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _event = new AppWarp.AllUsersEvent(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onGetOnlineUsersDone])
                    this.responseCallbacks[AppWarp.Events.onGetOnlineUsersDone](_event);

                return;
            }

            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetUsers, "", true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.getAllRooms = function () {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _event = new AppWarp.AllRoomsEvent(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onGetAllRoomsDone])
                    this.responseCallbacks[AppWarp.Events.onGetAllRoomsDone](_event);

                return;
            }

            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetRooms, "", true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.getRoomsInRange = function (minUsers, maxUsers) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _event = new AppWarp.MatchedRoomEvent(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onGetMatchedRoomsDone])
                    this.responseCallbacks[AppWarp.Events.onGetMatchedRoomsDone](_event);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildRoomInRangeRequest(minUsers, maxUsers, true);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetRoomInRange, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.getRoomsWithProperties = function (properties) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _event = new AppWarp.MatchedRoomEvent(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onGetMatchedRoomsDone])
                    this.responseCallbacks[AppWarp.Events.onGetMatchedRoomsDone](_event);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildRoomWithPropertiesRequest(properties);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetRoomWithProperties, payload, true);
            this.sendMessage(data.buffer);
        };


        WarpClient.prototype.getRoomInRangeWithProp = function (minUsers,maxUsers,properties) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _event = new AppWarp.MatchedRoomEvent(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onGetMatchedRoomsDone])
                    this.responseCallbacks[AppWarp.Events.onGetMatchedRoomsDone](_event);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildRoomInRangeWithPropRequest(minUsers,maxUsers,true,properties);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetRoomInRangeWithProp, payload, true);
            this.sendMessage(data.buffer);
        };
        
        
        WarpClient.prototype.sendChat = function (msg) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                if (this.responseCallbacks[AppWarp.Events.onSendChatDone])
                    this.responseCallbacks[AppWarp.Events.onSendChatDone](AppWarp.ResultCode.BadRequest);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildChatRequest(msg);
            if (payload == "") {
                if (this.responseCallbacks[AppWarp.Events.onSendChatDone])
                    this.responseCallbacks[AppWarp.Events.onSendChatDone](AppWarp.ResultCode.BadRequest);
            } else {
                var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.Chat, payload, true);
                this.sendMessage(data.buffer);
            }
        };

        WarpClient.prototype.sendUpdatePeers = function (bytes) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                if (this.responseCallbacks[AppWarp.Events.onSendUpdateDone])
                    this.responseCallbacks[AppWarp.Events.onSendUpdateDone](AppWarp.ResultCode.BadRequest);

                return;
            }

            if (bytes.length >= 512) {
                if (this.responseCallbacks[AppWarp.Events.onSendUpdateDone])
                    this.responseCallbacks[AppWarp.Events.onSendUpdateDone](AppWarp.ResultCode.BadRequest);
            } else {
                var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.UpdatePeers, bytes, false);
                this.sendMessage(data.buffer);
            }
        };

        WarpClient.prototype.sendPrivateUpdatePeers = function (to, bytes) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                if (this.responseCallbacks[AppWarp.Events.onSendPrivateUpdateDone])
                    this.responseCallbacks[AppWarp.Events.onSendPrivateUpdateDone](AppWarp.ResultCode.BadRequest);

                return;
            }

            if (bytes.length >= 512) {
                if (this.responseCallbacks[AppWarp.Events.onSendPrivateUpdateDone])
                    this.responseCallbacks[AppWarp.Events.onSendPrivateUpdateDone](AppWarp.ResultCode.BadRequest);
            } else {
                var payload = AppWarp.RequestBuilder.buildPrivateUpdateRequest(to, bytes);
                var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.PrivateUpdate, payload, false);
                this.sendMessage(data.buffer);
            }
        };

        WarpClient.prototype.sendPrivateChat = function (user, msg) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                if (this.responseCallbacks[AppWarp.Events.onSendPrivateChatDone])
                    this.responseCallbacks[AppWarp.Events.onSendPrivateChatDone](AppWarp.ResultCode.BadRequest);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildPrivateChatRequest(user, msg);
            if (payload == "") {
                if (this.responseCallbacks[AppWarp.Events.onSendPrivateChatDone])
                    this.responseCallbacks[AppWarp.Events.onSendPrivateChatDone](AppWarp.ResultCode.BadRequest);
            } else {
                var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.PrivateChat, payload, true);
                this.sendMessage(data.buffer);
            }
        };

        WarpClient.prototype.updateRoomProperties = function (roomId, properties, remove) {
            if (typeof remove === "undefined") {
                remove = null;
            }
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _liveRoom = new AppWarp.LiveRoom(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onUpdatePropertyDone])
                    this.responseCallbacks[AppWarp.Events.onUpdatePropertyDone](_liveRoom);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildUpdateRoomPropertiesRequest(roomId, properties, remove);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.UpdateRoomProperty, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.lockProperties = function (properties) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                if (this.responseCallbacks[AppWarp.Events.onLockPropertiesDone])
                    this.responseCallbacks[AppWarp.Events.onLockPropertiesDone](AppWarp.ResultCode.BadRequest);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildLockPropertiesRequest(properties);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.LockProperties, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.unlockProperties = function (properties) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                if (this.responseCallbacks[AppWarp.Events.onUnlockPropertiesDone])
                    this.responseCallbacks[AppWarp.Events.onUnlockPropertiesDone](AppWarp.ResultCode.BadRequest);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildUnlockPropertiesRequest(properties);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.UnlockProperties, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.createTurnRoom = function (name, owner, maxUsers, properties, turnTime) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _room = new AppWarp.Room(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onCreateRoomDone])
                    this.responseCallbacks[AppWarp.Events.onCreateRoomDone](_room);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildCreateTurnRoomRequest(name, owner, maxUsers, properties, turnTime);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.CreateRoom, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.sendMove = function (moveData, nextTurn) {
            if (typeof nextTurn === "undefined") {
                nextTurn = "";
            }
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                if (this.responseCallbacks[AppWarp.Events.onSendMoveDone])
                    this.responseCallbacks[AppWarp.Events.onSendMoveDone](AppWarp.ResultCode.BadRequest);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildSendMoveRequest(moveData, nextTurn);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.Move, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.startGame = function (isDefaultLogic, turnUser) {
            if (typeof isDefaultLogic === "undefined") {
                isDefaultLogic = true;
            }
            if (typeof turnUser === "undefined") {
                turnUser = "";
            }
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                if (this.responseCallbacks[AppWarp.Events.onStartGameDone])
                    this.responseCallbacks[AppWarp.Events.onStartGameDone](AppWarp.ResultCode.BadRequest);

                return;
            }
            var payload = AppWarp.RequestBuilder.buildStartGameRequest(isDefaultLogic, turnUser);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.StartGame, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.stopGame = function () {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                if (this.responseCallbacks[AppWarp.Events.onStopGameDone])
                    this.responseCallbacks[AppWarp.Events.onStopGameDone](AppWarp.ResultCode.BadRequest);

                return;
            }

            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.StopGame, "", true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.getMoveHistory = function () {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                if (this.responseCallbacks[AppWarp.Events.onGetMoveHistoryDone])
                    this.responseCallbacks[AppWarp.Events.onGetMoveHistoryDone](AppWarp.ResultCode.BadRequest, []);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildGetMoveHistoryRequest();
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetMoveHistory, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.setNextTurn = function (nextTurn) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                if (this.responseCallbacks[AppWarp.Events.onSetNextTurnDone])
                    this.responseCallbacks[AppWarp.Events.onSetNextTurnDone](AppWarp.ResultCode.BadRequest);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildSetNextTurnRequest(nextTurn);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.SetNextTurn, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.setRecoveryAllowance = function (time) {
            WarpClient.recoveryAllowance = time;
        };

        WarpClient.prototype.recoverConnection = function () {
            if (this.SessionID == 0 || this.connectionState != AppWarp.ConnectionState.Disconnected) {
                if (this.responseCallbacks[AppWarp.Events.onConnectDone])
                    this.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.BadRequest, 0);
            } else {
                this.connectionState = AppWarp.ConnectionState.Recovering;
                if (WarpClient.serverAddress == "") {
                    var xmlHttp = new XMLHttpRequest();
                    var that = this;
                    xmlHttp.onreadystatechange = function () {
                        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                            var res = JSON.parse(xmlHttp.responseText);

                            if (res.address) {
                                WarpClient.serverAddress = res.address;
                                that._connect(that.userName);
                            } else {
                                this.connectionState = AppWarp.ConnectionState.Disconnected;
                                if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                                    that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.AuthError, AppWarp.ReasonCode.InvalidAPIKey);
                            }
                        } else if (xmlHttp.readyState == 4 && xmlHttp.status == 404) {
                            this.connectionState = AppWarp.ConnectionState.Disconnected;
                            if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                                that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.AuthError, AppWarp.ReasonCode.InvalidAPIKey);
                        } else if (xmlHttp.readyState == 4 && xmlHttp.status == 0) {
                            this.connectionState = AppWarp.ConnectionState.Disconnected;
                            if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                                that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.ConnectionError, 0);
                        }
                    };

                    if (WarpClient.geoLocation != "")
                        xmlHttp.open("GET", this.getControlLookup() + "?api=" + WarpClient.apiKey + "&geo=" + WarpClient.geoLocation, true);
                    else
                        xmlHttp.open("GET", this.getControlLookup() + "?api=" + WarpClient.apiKey, true);

                    xmlHttp.send();
                } else {
                    this._connect(this.userName);
                }
            }
        };

        WarpClient.prototype.getSessionID = function () {
            return this.SessionID;
        };

        WarpClient.prototype.recoverConnectionWithSessionID = function (sessionID, userName) {
            this.SessionID = sessionID;
            this.userName = userName;

            this.recoverConnection();
        };

        WarpClient.prototype.enableTrace = function (enable) {
            this.enableLogs = enable;
        };

        WarpClient.prototype.getConnectionState = function () {
            return this.connectionState;
        };

        WarpClient.prototype.enableSSL = function (enable) {
            this.useSSL = enable;
        };

        WarpClient.prototype.getControlLookup = function () {
            if (this.useSSL == true)
                return "https://" + this.LOOKUP_ADDRESS_DNS;
            else
                return "http://" + this.LOOKUP_ADDRESS;
        };

        WarpClient.prototype.getOnlineUsersCount = function () {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                if (this.responseCallbacks[AppWarp.Events.onGetOnlineUsersCountDone])
                    this.responseCallbacks[AppWarp.Events.onGetOnlineUsersCountDone](AppWarp.ResultCode.BadRequest);

                return;
            }

            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetOnlineUsersCount, "", true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.getAllRoomsCount = function () {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                if (this.responseCallbacks[AppWarp.Events.onGetAllRoomsCountDone])
                    this.responseCallbacks[AppWarp.Events.onGetAllRoomsCountDone](AppWarp.ResultCode.BadRequest);

                return;
            }

            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetAllRoomsCount, "", true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.broadcastChat = function (roomId, chat) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                if (this.responseCallbacks[AppWarp.Events.onSendChatDone])
                    this.responseCallbacks[AppWarp.Events.onSendChatDone](AppWarp.ResultCode.BadRequest);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildBroadcastChatRequest(roomId, chat);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.BroadcastChat, payload, true);
            this.sendMessage(data.buffer);
        };
        
        	
        WarpClient.prototype.setDbName = function (dbName) {
            WarpClient.dbName  = dbName ;
        };
		
        WarpClient.prototype.enableChatHistory = function (status) {
            WarpClient.isChatHistory = status;
            if (status)
            {
                App42.initialize(WarpClient.apiKey,WarpClient.secretKey);
                WarpClient.storageService = new App42Storage();		
            }
        };
		
        WarpClient.prototype.sendChat = function (msg,saveHistory,roomId) {
           
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                if (this.responseCallbacks[AppWarp.Events.onSendChatDone])
                    this.responseCallbacks[AppWarp.Events.onSendChatDone](AppWarp.ResultCode.BadRequest);
                return;
            }

            var payload = AppWarp.RequestBuilder.buildChatHistoryRequest(msg,this.userName,roomId);
            if (payload == "") {
                if (this.responseCallbacks[AppWarp.Events.onSendChatDone])
                    this.responseCallbacks[AppWarp.Events.onSendChatDone](AppWarp.ResultCode.BadRequest);
            } else {
                var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.Chat, payload, true);
                this.sendMessage(data.buffer);
              
                if(saveHistory &&  WarpClient.storageService != null && WarpClient.dbName!=null && WarpClient.dbName!="")
                {
                    
                    WarpClient.storageService.insertJSONDocument(WarpClient.dbName, "ChatHistory", payload,{
                        success: function(object) {
                            
                        },
                        error: function(error) {
                          console.log(error)
                        }
                    }); 
                }
            }
        };
        
        	
        WarpClient.prototype.getChatHistory = function (roomId,max,offset) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                if (this.responseCallbacks[AppWarp.Events.onGetChatHistoryDone])
                    this.responseCallbacks[AppWarp.Events.onGetChatHistoryDone](AppWarp.ResultCode.BadRequest);
                return;
            }

            if (WarpClient.storageService == null || roomId ==  null || roomId == "") {
                if (this.responseCallbacks[AppWarp.Events.onGetChatHistoryDone])
                    this.responseCallbacks[AppWarp.Events.onGetChatHistoryDone](AppWarp.ResultCode.BadRequest);
                return;
            }
            var queryBuilder = new QueryBuilder();
            var build = queryBuilder.build("roomId", roomId,Operator.EQUALS);
            WarpClient.storageService.findDocumentsByQueryWithPaging(WarpClient.dbName,"ChatHistory", build, max, offset,{
                success: function(payload) {
                    
                    if(payload!=undefined){
                        WarpClient.prototype.handleApp42Response(AppWarp.App42RequestType.ChatHistory,payload)
                    }
                    else
                    {
                        if (WarpClient.instance.responseCallbacks[AppWarp.Events.onGetChatHistoryDone])
                            WarpClient.instance.responseCallbacks[AppWarp.Events.onGetChatHistoryDone](AppWarp.ResultCode.ResourceNotFound);
                        return;
                    }
                },
                error: function(error) {
                    if (WarpClient.instance.responseCallbacks[AppWarp.Events.onGetChatHistoryDone])
                        WarpClient.instance.responseCallbacks[AppWarp.Events.onGetChatHistoryDone](AppWarp.ResultCode.ResourceNotFound);
                    return;
                }
            }); 
        };
        WarpClient.instance = null;
        WarpClient.apiKey = "";
        WarpClient.secretKey = "";
        WarpClient.serverAddress = "";
        WarpClient.recoveryAllowance = 0;
        WarpClient.geoLocation = "";
        return WarpClient;
    })();
    AppWarp.WarpClient = WarpClient;
})(AppWarp || (AppWarp = {}));




var Permission = {
    READ :"R",
    WRITE : "W"
};
function checkPermissionType(permission_type){
    if(Permission.READ == permission_type){
        return "R"
    }else if(Permission.WRITE == permission_type){
        return "W"
    }
    else{
        return null ;
    }
}
var App42Connection = {}
var App42Fault = {}
var App42 = {};
var apiKey;
var secretKey;
var customeCodeURL = "https://customcode.shephertz.com/"
var uri = "https://api.shephertz.com/cloud/1.0/"; 
var eventUri = "https://analytics.shephertz.com/cloud/1.0/";
var name;
var geoTag;
var sessionRequest = false;
var unlockEventService = false;
var sessionInvalidate = false;
var loggedInUser = null;
var dbName = null;
var addAtatchmentJSONParams = null;
(function() {
    this.initialize = function(_api, _secret) {
        apiKey = _api
        secretKey = _secret
        if(localStorage.getItem("_App42_DeviceId") == undefined){
            localStorage.setItem("_App42_DeviceId", guid())
        }
        loggedInUser = localStorage.getItem("_App42_LoggedInUser");
        if (this.getLoggedInUser() == null) {
            this.setLoggedInUser(localStorage.getItem("_App42_DeviceId"));
        }
        __Installation._fireInstallEvent(_api, _secret);
    };

    this.enableAppStateEventTracking = function (enable)
    {
        if (enable) {
            unlockEventService = true;
            App42EventTracker._trackBrowserSession();
        }
    }

    this.enableEventService = function (enable) {
        if (enable) {
            unlockEventService = true;
        }
    }
	
	this.setDbName = function(db_Name) {
       dbName = db_Name;
    };
	
	this.getDbName = function() {
        return dbName;
    };
	
	this.setLoggedInUser = function(logged_In_User) {
	    loggedInUser = logged_In_User;
	    localStorage.setItem("_App42_LoggedInUser", logged_In_User)
	    if (unlockEventService) {
	        __Installation._getCurrentLoggedInUserProperties(apiKey, secretKey);
	    }
    };
	
    this.getLoggedInUser = function() {
        return loggedInUser;
    };
	
    this.setBaseUrl = function(u) {
        uri = u;
    };

    this.setEventBaseUrl = function (u) {
        eventUri = u;
    };
    this.setCustomeCodeURL = function(u) {
        customeCodeURL = u;
    };
    this.URL = function(serviceUrl) {
        var baseUrl =uri;
        var url = baseUrl + serviceUrl;
        return url;
    };

    this.EventURL = function (serviceUrl) {
        var baseUrl = eventUri;
        var url = baseUrl + serviceUrl;
        return url;
    };

    this.CustomCodeURL = function(serviceUrl) {
        var baseUrl =customeCodeURL;
        var url = baseUrl + serviceUrl;
        return url;
    };
    if (!String.prototype.trim) {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g,'');
        }
    }
}).apply(App42)

function App42Exception(obj,type) {
    this.name = "App42Exception";
    var message
    if(obj == ""){
        message = type + " parameter can not be blank";
    }else if (obj == null){
        message = type + " parameter can not be null";
    }else if (obj == "PaymentStatus"){
        message = "Invalid Status ("+type+"). Could be either AUTHORIZED or UNAUTHORIZED or DECLINED";
    
    }else if (obj == "DeviceType"){
        message = "Invalid device ("+type+"). Could be either ANDROID or WP7 or iOS or NokiaX";
    }else if (obj == "FileType"){
        message = "Invalid fileType (" + type + ").Could be either AUDIO or VIDEO or IMAGE or BINARY or TXT or XML or CSV or JSON or OTHER";
    } else if (obj == "ActivityName") {
        message = "Activity with the name [ " + type + " ] Is Already Ended";
    }else if (obj != type){
        message = type + " address is not valid";
    }
    
    message = message;
    this.message = (message || "");
}
App42Exception.prototype = Error.prototype;

(function(){
    this.throwExceptionIfNullOrBlank= function(obj, name){
        if(obj == "" || obj == null){
            var e = new App42Exception( obj, name);
            throw e;
        }
    }
    this.appError= function(){
        var e = new AppError();
        throw e;
    }
    function AppError() {
        this.name = "App42Exception";
        var message = "Set your apiKey and secretKey correctly in App42.initialize( )";
        this.message = (message || "");
    }
    AppError.prototype = Error.prototype;
}).apply(App42Fault)

//var now = new Date();
var version = "1.0"
//var timeStamp = getODataUTCDateFilter(now)

function getODataUTCDateFilter(date) {
    var monthString;
    var rawMonth = (date.getUTCMonth()+1).toString();
    if (rawMonth.length == 1) {
        monthString = "0" + rawMonth;
    }
    else
    {
        monthString = rawMonth;
    }
    var dateString;
    var rawDate = date.getUTCDate().toString();
    if (rawDate.length == 1) {
        dateString = "0" + rawDate;
    }
    else
    {
        dateString = rawDate;
    }
    var DateFilter = "";
    DateFilter += date.getUTCFullYear() + "-";
    DateFilter += monthString + "-";
    DateFilter += dateString;
    DateFilter += "T" + date.getUTCHours() + ":";
    DateFilter += date.getUTCMinutes() + ":";
    DateFilter += date.getUTCSeconds() + ".";
    DateFilter += date.getUTCMilliseconds();
    DateFilter += "Z";
    return DateFilter;
}


function sortAssoc(arrayVal)
{
    var aTemp = [];
    for (var sKey in arrayVal)
        aTemp.push([sKey, arrayVal[sKey]]);

    aTemp.sort(function(a,b)
    {
        return ((a[0] > b[0]) ? -1 : ((a[0] < b[0]) ? 1 : 0));
    });
    var aOutPutString = "";
    var aOutput = [];
    for (var nIndex = aTemp.length-1; nIndex >=0; nIndex--){
        aOutput[aTemp[nIndex][0]] = aTemp[nIndex][1];
        aOutPutString+= aTemp[nIndex][0]+aTemp[nIndex][1];
    }
    return aOutPutString;
}



function createCORSRequest(method, url, time, sign, apiKey, body, request, sessionId, adminKey, fbAccessToken, geoTag, headerParams){
    var xhr = createXMLHTTPObject();
    var _asyncType = true;
    if (request._asyncType != undefined && request._asyncType == false) {
        _asyncType = false;
    }
    xhr.open(method, url, _asyncType);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("signature", sign);
    if(method == "POST" || method == "PUT"){
        xhr.setRequestHeader("Content-Type", "application/json");
    }
	 for(var key in headerParams) {
	     var value = headerParams[key];
	  xhr.setRequestHeader(key.toString(), value);
	 }
	 //xhr.send(body);
	 //console.log(xhr.responseText);
	 //request.error(xhr.responseText);
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4)
        {
            if(xhr.status==200){
                if(sessionRequest == true){
                    sessionRequest = false;
                    var userObj = JSON.parse(xhr.responseText);
                    if(userObj.app42.response.users != undefined){
                        var userSession = userObj.app42.response.users.user.sessionId;
                        if(localStorage != undefined){
                            localStorage.setItem("_App42_SessionId",userSession);
                        }
                    }
                }

                if(sessionInvalidate == true){
                    sessionInvalidate = false;
                    var sessionObj = JSON.parse(xhr.responseText);
                    var isInvalid = sessionObj.app42.response.success;
                    if(isInvalid){
                        localStorage.removeItem("_App42_SessionId")
                    }
                }
                request.success(xhr.responseText);
            }else if(xhr.status!=200){
                request.error(xhr.responseText)
            }
        }
    }
    xhr.send(body);
}

function multipartCORSRequest(method, url, time, sign, apiKey, queryParams, file, request, sessionId, adminKey, fbAccessToken, geoTag, headerParams){
    var fd = new FormData();// Appending parameter named file with properties of file_field to form_data
    if(queryParams.userName != null){
        fd.append("userName", queryParams.userName)
    }
	if(queryParams.docId != null) {
        fd.append("attachment", file)   
        fd.append("name", queryParams.name) 
        fd.append("type", queryParams.type) 
        fd.append("docId", queryParams.docId)     
    }
	else if (queryParams.json != null) {
        fd.append("attachment", file)   
        fd.append("name", queryParams.name) 
        fd.append("type", queryParams.type) 
        fd.append("jsonDoc", queryParams.json) 
	}
    if(queryParams.type != null){              
        fd.append("uploadFile", file)   
        fd.append("name", queryParams.name)                
        fd.append("type", queryParams.type)                
        fd.append("description", queryParams.description)
    }
    else if(queryParams.itemId != null) {
        fd.append("imageFile", file)   
        fd.append("name", queryParams.name) 
        fd.append("itemId", queryParams.itemId) 
        fd.append("description", queryParams.description)                 
        fd.append("price", queryParams.price)
    }
    else if(queryParams.avatarName != null) {
        fd.append("createAvatar", file)   
        fd.append("avatarName", queryParams.avatarName) 
        fd.append("userName", queryParams.userName) 
        fd.append("description", queryParams.description)                 
    }
	else if(queryParams.displayName != null) {
        fd.append("uploadFile", file)   
        fd.append("name", queryParams.name) 
        fd.append("displayName", queryParams.displayName) 
        fd.append("description", queryParams.description)   
		fd.append("tag", queryParams.tag)
    }
	else if(queryParams.accessToken != null) {
		if(queryParams.userId != null){
        fd.append("uploadFile", file)   
        fd.append("name", queryParams.name) 
        fd.append("accessToken", queryParams.accessToken) 
		fd.append("userId", queryParams.userId) 
        fd.append("message", queryParams.message)
		}
		else {
		fd.append("uploadFile", file)   
        fd.append("name", queryParams.name) 
        fd.append("accessToken", queryParams.accessToken) 
        fd.append("message", queryParams.message)
		}
    }
	
    else  {      
        fd.append("imageFile", file)   
        fd.append("name", queryParams.name) 
        fd.append("height", queryParams.height)                 
        fd.append("width", queryParams.width)
        fd.append("x", queryParams.x)
        fd.append("y", queryParams.y)
        fd.append("percentage", queryParams.percentage)
        fd.append("formatToConvert", queryParams.formatToConvert) 
    }
    __createMultipartCORSRequest(method, url, sign, fd, request,headerParams);
}

function multipartCORSRequestForPhoto(method, url, time, sign, apiKey, queryParams, file, request, sessionId, adminKey, fbAccessToken, geoTag, headerParams){
    var fd = new FormData();                  // Creating object of FormData class
    fd.append("imageFile", file)              // Appending parameter named file with properties of file_field to form_data
    fd.append("userName", queryParams.userName)
    fd.append("albumName", queryParams.albumName)                 // Adding extra parameters to form_data
    fd.append("name", queryParams.name)  
    fd.append("description", queryParams.description)
	
    __createMultipartCORSRequest(method, url,sign, fd, request,headerParams);
}

function __createMultipartCORSRequest(method, url, sign, fd, request,headerParams){
    var xhr = createXMLHTTPObject();
    xhr.open(method, url,true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("signature", sign);
    for(var key in headerParams) {
        var value = headerParams[key];
        xhr.setRequestHeader(key.toString(), value);
    }
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4)
        {
            if(xhr.status==200){
                request.success(xhr.responseText);
            }else if(xhr.status!=200){
                request.error(xhr.responseText)
            }
        }
    }
    xhr.send(fd);
}

var XMLHttpFactories = [
function () {
    return new XMLHttpRequest()
},
function () {
    return new ActiveXObject("Msxml2.XMLHTTP")
},
function () {
    return new ActiveXObject("Msxml3.XMLHTTP")
},
function () {
    return new ActiveXObject("Microsoft.XMLHTTP")
}
];

function createXMLHTTPObject() {
    var xmlhttp = false;
    for (var i=0;i<XMLHttpFactories.length;i++) {
        try {
            xmlhttp = XMLHttpFactories[i]();
        }
        catch (e) {
            continue;
        }
        break;
    }
    return xmlhttp;
}

(function() {
    this.get = function(url, queryParams, request, extraParams, headerParams) {
        if(queryParams.apiKey == null || secretKey == null || secretKey =="" ||queryParams.apiKey == ""){
            App42Fault.appError();
            return ;
        }
        var shaObj = new jsSHA(sortAssoc(queryParams), "ASCII");
       var hmac = shaObj.getHMAC(secretKey, "ASCII","SHA-1","HEX");
        var encodedString = Convert(hmac);
        queryParams.signature = encodedString;
        var string = "";
        if(queryParams.userList){
            string = "&userList="+queryParams.userList;
        }
        else if(queryParams.userName){
            string = "&userName="+queryParams.userName+"&";
        }else if(queryParams.channelName){
            string = "&channelName="+queryParams.channelName+"&";
        }else if(queryParams.jsonQuery){
            //   string = "&jsonQuery="+queryParams.jsonQuery;
            headerParams.jsonQuery = queryParams.jsonQuery;
        }else{
            string = "";
        }
        var nextString = "";
        var nextString1 ="";
        
        if(extraParams!=null){
            if(extraParams.orderByKey){
                nextString = "&orderByKey="+extraParams.orderByKey
            }else{
                nextString = "";
            }
            if(extraParams.orderByType){
                nextString1 = "&orderByType="+extraParams.orderByType
            }else{
                nextString1 ="";
            }
        }
        createCORSRequest("GET", url+"?version="+queryParams.version +string+nextString+nextString1, queryParams.timeStamp, encodedString, queryParams.apiKey, null, request, queryParams.sessionId, queryParams.adminKey, queryParams.fbAccessToken, geoTag, headerParams );
    };

    this.post = function(url, queryParams, body, request, headerParams) {
        if(queryParams.apiKey == null || secretKey == null || secretKey =="" ||queryParams.apiKey == ""){
            App42Fault.appError();
            return ;
        }
		var string = "";
		if(queryParams.jsonQuery){
            string = "&jsonQuery="+queryParams.jsonQuery;
        }
        var shaObj = new jsSHA(sortAssoc(queryParams), "ASCII");
        var hmac = shaObj.getHMAC(secretKey, "ASCII","SHA-1","HEX");
        var encodedString = Convert(hmac);
        queryParams.signature = encodedString;
        createCORSRequest("POST", url+"?version="+queryParams.version + string, queryParams.timeStamp, encodedString, queryParams.apiKey, body, request, queryParams.sessionId, queryParams.adminKey, queryParams.fbAccessToken, geoTag, headerParams);

    };
    this.put = function(url, queryParams, body, request, headerParams) {
        if(queryParams.apiKey == null || secretKey == null || secretKey =="" ||queryParams.apiKey == ""){
            App42Fault.appError();
            return ;
        }
        var shaObj = new jsSHA(sortAssoc(queryParams), "ASCII");
       var hmac = shaObj.getHMAC(secretKey, "ASCII","SHA-1","HEX");
        var encodedString = Convert(hmac);
        queryParams.signature = encodedString;
        createCORSRequest("PUT", url+"?version="+queryParams.version ,queryParams.timeStamp, encodedString, queryParams.apiKey, body, request, queryParams.sessionId, queryParams.adminKey, queryParams.fbAccessToken, geoTag, headerParams);
    };
    this.del = function(url, queryParams, request, headerParams) {
        if(queryParams.apiKey == null || secretKey == null || secretKey =="" ||queryParams.apiKey == ""){
            App42Fault.appError();
            return ;
        }
		var avatarNameInQuery = null
		if(queryParams.avatarName){
			avatarNameInQuery = queryParams.avatarName
			delete queryParams.avatarName
		}
        var shaObj = new jsSHA(sortAssoc(queryParams), "ASCII");
        var hmac = shaObj.getHMAC(secretKey, "ASCII","SHA-1","HEX");
        var encodedString = Convert(hmac);
        queryParams.signature = encodedString;
        if(queryParams.geoPoints){
            var stringObj = "&geoPoints="+queryParams.geoPoints;
			url = url+"?version="+queryParams.version+stringObj;
        }
		else if (queryParams.deviceToken){
			stringObj = "?deviceToken="+queryParams.deviceToken+ "&userName="+queryParams.userName+"&";
			url = url+stringObj+"?version="+queryParams.version;
		}
		
		else if (queryParams.value){
			stringObj = "&value="+queryParams.value+ "&timeStamp="+headerParams.timeStamp+"&"+ "&apiKey="+headerParams.apiKey+"&";
			url = url + "?version="+queryParams.version+stringObj;
		}
		
		else if (queryParams.channelName){
			stringObj = "?channelName="+queryParams.channelName;
			url = url+stringObj;
		}
		
		else if (avatarNameInQuery){
			stringObj = "?avatarName="+avatarNameInQuery + "&";
			url = url+stringObj;
		}
		
		
		else if (queryParams.messageIds ){
			stringObj = "&messageIds="+queryParams.messageIds;
			var urlString = ""
			url = url+"?version="+queryParams.version+"&timeStamp=" + queryParams.timeStamp+ stringObj + "&apiKey="+queryParams.apiKey+"&";
		}
		
		else if (queryParams.groupName && queryParams.tagName){
			url = url + "?";
		}
		
		else if (queryParams.groupName && queryParams.userName){
			url = url + "?";
		}
		
		else if (queryParams.role && queryParams.userName){
			url = url + "?";
		}
		
		
		else if (queryParams.userName){
			stringObj = "?userName="+queryParams.userName;
			url = url+stringObj;
		}
		
			
		else{
				stringObj = "";
    			url = url+"?version="+queryParams.version+stringObj
        }
		
        createCORSRequest("DELETE", url ,queryParams.timeStamp,encodedString,queryParams.apiKey ,null,request,queryParams.sessionId,queryParams.adminKey,queryParams.fbAccessToken, geoTag, headerParams);
    };
	
	
	// This method is written to add params in multipart method for attach file in json doc
    this.addAttachmentParams  = function(file){
	var jsonParams = {}
	if(file.docId != null || file.json != null ){
		if (file.type == undefined){
			jsonParams.type = "OTHER";
		}
		else{
			jsonParams.type = file.type;
		}
		
		if (file.name == undefined){
			jsonParams.name = "Default";
		}
		else{
			 jsonParams.name = file.name;
		}
		
		if (file.docId != null){
		jsonParams.docId = file.docId;
		}
		else {
		jsonParams.json = file.json;
		}
        
		addAtatchmentJSONParams = jsonParams;
		}
		else{
			addAtatchmentJSONParams = jsonParams;
		}
	}
	
    this.multipart = function(url, queryParams, file, request, headerParams) {
		if(queryParams.apiKey == null || secretKey == null || secretKey =="" ||queryParams.apiKey == ""){
            App42Fault.appError();
            return ;
        }
			var shaObj = new jsSHA(sortAssoc(queryParams), "ASCII");
			var hmac = shaObj.getHMAC(secretKey, "ASCII","SHA-1","HEX");
			var encodedString = Convert(hmac);
			queryParams.signature = encodedString;
			queryParams = __merge(queryParams,addAtatchmentJSONParams);
			if(queryParams.albumName){
				multipartCORSRequestForPhoto("POST", url+"?version="+queryParams.version ,queryParams.timeStamp,encodedString,queryParams.apiKey,queryParams,file,request,queryParams.sessionId,queryParams.adminKey,queryParams.fbAccessToken,geoTag, headerParams );
		 
			}else{
				multipartCORSRequest("POST", url+"?version="+queryParams.version ,queryParams.timeStamp,encodedString,queryParams.apiKey,queryParams,file,request,queryParams.sessionId,queryParams.adminKey,queryParams.fbAccessToken,geoTag, headerParams );
			}
    };

	this.executeCustomCode = function(url, queryParams, body, request, headerParams) {
        if(headerParams.apiKey == null || secretKey == null || secretKey =="" ||headerParams.apiKey == ""){
            App42Fault.appError();
            return ;
        }
        var shaObj = new jsSHA(sortAssoc(queryParams), "ASCII");
        var hmac = shaObj.getHMAC(secretKey, "ASCII","SHA-1","HEX");
        var encodedString = Convert(hmac);
        //headerParams.signature = encodedString;
        createCORSRequest("POST", url+"?", queryParams.timeStamp, encodedString, queryParams.apiKey, body, request, queryParams.sessionId, queryParams.adminKey, queryParams.fbAccessToken, geoTag, headerParams);
    };
	
}).apply(App42Connection);

function pair() {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function guid() {
    return pair() + pair() + '-' + pair() + '-' + pair() + '-' +
    pair() + '-' + pair() + pair() + pair();
}



function App42Event() {
    App42Service.call(this);
    var __event = this;
    var errorMessage = "ERROR IN ACCESSING EVENT SERVICE CLASS :: Set App42.enableEventService True To Access EventService Members.";

    var _client_Response_ = '{"app42":{"response":{"success":true}}}';

    this.trackEvent = function (eventName, properties, request) {
        if (unlockEventService == false) {
            console.warn(errorMessage);
            return;
        }
        if (eventName == "" || eventName == null || eventName == undefined) {
            App42Fault.throwExceptionIfNullOrBlank(eventName, "Event Name")
            return;
        }
        var _request = request;
        eventName = eventName.toUpperCase();
        this.trackEventInternal(eventName, properties, {
            success: function (object) {
            //    console.log("Success message" + object);
                var lastCommAtObj = JSON.parse(object);
                var lastCommAt = lastCommAtObj.app42.response.event.lastCommunicatedAt,
                eventNameObj = lastCommAtObj.app42.response.event.name;
                eventTypeObj = lastCommAtObj.app42.response.event.type;
                __Local._saveKey(_Keys._app42_lastCommAt_ + eventNameObj, lastCommAt);
                __Local._saveKey(_Keys._app42_lastCommAt_super, lastCommAt);
                _request.success(_client_Response_);
                if (App42InAppMessaging.isInAppEnable) {
                    App42InAppCommunicator.sendEvent(eventTypeObj, eventNameObj);
                }
            },
            error: function (error) {
            //    console.log("Error message" + error);
                _request.error(error);
            }
        });
    };

    this.trackEventInternal = function (eventName, properties, request) {
        var URL = App42.EventURL("event");
        var params = __event.populateSignParams(),
        metaHeader = __event.populateMetaHeaderParams(),
        headerParams = __merge(params, metaHeader);

        var bodyObj = {};
        bodyObj["eventName"] = eventName;
        bodyObj["app42_lastCommunicatedAt"] = __Local._checkKey(_Keys._app42_lastCommAt_ + eventName);
        if (__Local._checkKey(_Keys._app42_lastUserUpdatedOn_ + App42.getLoggedInUser()) != "") {
            bodyObj["app42_userUpdatedOn"] = __Local._checkKey(_Keys._app42_lastUserUpdatedOn_ + App42.getLoggedInUser());
        }
        bodyObj["superProperties"] = App42EventHandler.getDefaultDeviceProps();
        if (App42EventHandler.getOldInstallProperties() != "") {
            bodyObj["installProperties"] = App42EventHandler.getOldInstallProperties();
        }
        bodyObj["userProperties"] = properties;
        var body = '{"app42":{"event":' + JSON.stringify(bodyObj) + '}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, headerParams);
    };

    this.startActivity = function (activityName, properties, request) {
        if (unlockEventService == false) {
            console.warn(errorMessage);
            return;
        }
        if (activityName == "" || activityName == null) {
            App42Fault.throwExceptionIfNullOrBlank(activityName, "Activity Name")
            return;
        }
        var _request = request;
        activityName = activityName.toUpperCase();
        startActivityInternal(activityName, properties, {
            success: function (object) {
           //     console.log("Success message" + object);
                var lastCommAtObj = JSON.parse(object);
                var lastCommAt = lastCommAtObj.app42.response.event.lastCommunicatedAt,
                eventNameObj = lastCommAtObj.app42.response.event.name;
                __Local._saveKey(_Keys._app42_lastCommAt_start_ + eventNameObj, lastCommAt);
                __Local._saveKey(_Keys._app42_lastCommAt_super, lastCommAt);
                _request.success(_client_Response_);
            },
            error: function (error) {
            //    console.log("Error message" + error);
                _request.error(error);
            }
        });
    };

    startActivityInternal = function (activityName, properties, request) {
        var URL = App42.EventURL("event/session");
        var params = __event.populateSignParams(),
        metaHeader = __event.populateMetaHeaderParams(),
        headerParams = __merge(params, metaHeader);
        var bodyObj = {};
        bodyObj["eventName"] = activityName;
        bodyObj["action"] = "START";
        bodyObj["app42_lastCommunicatedAt"] = __Local._checkLastCommAt(_Keys._app42_lastCommAt_end_ + activityName, _Keys._app42_lastCommAt_start_ + activityName);
        if (__Local._checkKey(_Keys._app42_lastUserUpdatedOn_ + App42.getLoggedInUser()) != "") {
            bodyObj["app42_userUpdatedOn"] = __Local._checkKey(_Keys._app42_lastUserUpdatedOn_ + App42.getLoggedInUser());
        }
        bodyObj["superProperties"] = App42EventHandler.getDefaultDeviceProps();
        if (App42EventHandler.getOldInstallProperties() != "") {
            bodyObj["installProperties"] = App42EventHandler.getOldInstallProperties();
        }
        bodyObj["userProperties"] = properties;
        var body = '{"app42":{"event":' + JSON.stringify(bodyObj) + '}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, headerParams);
    };

    this.endActivity = function (activityName, properties, request) {
        if (unlockEventService == false) {
            console.warn(errorMessage);
            return;
        }
        if (activityName == "" || activityName == null) {
            App42Fault.throwExceptionIfNullOrBlank(activityName, "Activity Name")
            return;
        }
        activityName = activityName.toUpperCase();
        if (__Local._checkKey(_Keys._app42_lastCommAt_start_ + activityName) == "") {
            var i = incrementCounter();
            request.error(new App42Exception("ActivityName", activityName));
            return;
        }
        var _request = request;
        endActivityInternal(activityName, properties, {
            success: function (object) {
          //      console.log("Success message" + object);
                var lastCommAtObj = JSON.parse(object);
                var lastCommAt = lastCommAtObj.app42.response.event.lastCommunicatedAt,
                eventNameObj = lastCommAtObj.app42.response.event.name;
                __Local._saveKey(_Keys._app42_lastCommAt_end_ + eventNameObj, lastCommAt);
                __Local._removeKey(_Keys._app42_lastCommAt_start_ + eventNameObj);
                __Local._saveKey(_Keys._app42_lastCommAt_super, lastCommAt);
                _request.success(_client_Response_);
            },
            error: function (error) {
          //      console.log("Error message" + error);
                _request.error(error);
            }
        });
    };

    endActivityInternal = function (activityName, properties, request) {
        var URL = App42.EventURL("event/session");
        var params = __event.populateSignParams(),
        metaHeader = __event.populateMetaHeaderParams(),
        headerParams = __merge(params, metaHeader);
        request._asyncType = false;
        var bodyObj = {};
        bodyObj["eventName"] = activityName;
        bodyObj["action"] = "END";
        bodyObj["app42_lastCommunicatedAt"] = __Local._checkKey(_Keys._app42_lastCommAt_start_ + activityName);
        if (__Local._checkKey(_Keys._app42_lastUserUpdatedOn_ + App42.getLoggedInUser()) != "") {
            bodyObj["app42_userUpdatedOn"] = __Local._checkKey(_Keys._app42_lastUserUpdatedOn_ + App42.getLoggedInUser());
        }
        bodyObj["superProperties"] = App42EventHandler.getDefaultDeviceProps();
        if (App42EventHandler.getOldInstallProperties() != "") {
            bodyObj["installProperties"] = App42EventHandler.getOldInstallProperties();
        }
        bodyObj["userProperties"] = properties;
        var body = '{"app42":{"event":' + JSON.stringify(bodyObj) + '}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, headerParams);
    };

    this.setLoggedInUserProperties = function (properties, request) {
        if (unlockEventService == false) {
            console.warn(errorMessage);
            return;
        }
        var _request = request;
        setLoggedInUserPropertiesInternal(properties, {
            success: function (object) {
                console.log("Success message : " + object);
                var userPropsObj = JSON.parse(object);
                
                var userUpdatedOn = userPropsObj.app42.response.user.app42_userUpdatedOn,
                hasProps = userPropsObj.app42.response.user.hasProperties,
                installProps = userPropsObj.app42.response.user.installProperties;
                if (hasProps == "true") {
                    __Local._saveKey(_Keys._app42_oldUserProps_ + App42.getLoggedInUser(), JSON.stringify(installProps));
                } else {
                    __Local._saveKey(_Keys._app42_oldUserProps_ + App42.getLoggedInUser(), JSON.stringify(properties));
                }
                if (userUpdatedOn != null) {
                    __Local._saveKey(_Keys._app42_lastUserUpdatedOn_ + App42.getLoggedInUser(), userUpdatedOn);
                }
                _request.success(_client_Response_);
            },
            error: function (error) {
           //     console.log("Error message" + error);
                _request.error(error);
            }
        });
    };

    setLoggedInUserPropertiesInternal = function (properties, request) {
        var URL = App42.EventURL("event/userproperties");
        var params = __event.populateSignParams(),
        metaHeader = __event.populateMetaHeaderParams(),
        headerParams = __merge(params, metaHeader);
        var bodyObj = {};
        bodyObj["app42_installAt"] = __Local._checkKey(_Keys._app42_isAppInstalled);
        bodyObj["installProperties"] = properties;
        var body = '{"app42":{"event":' + JSON.stringify(bodyObj) + '}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, headerParams);
    };

    this.updateLoggedInUserProperties = function (properties, request) {
        if (unlockEventService == false) {
            console.warn(errorMessage);
            return;
        }
        var _request = request;
        updateLoggedInUserPropertiesInternal(properties, {
            success: function (object) {
          //      console.log("Success message" + object);
                var userPropsObj = JSON.parse(object);
                var userUpdatedOn = userPropsObj.app42.response.user.app42_userUpdatedOn,
                hasProps = userPropsObj.app42.response.user.hasProperties,
                installProps = userPropsObj.app42.response.user.installProperties;
                if (hasProps == "true") {
                    __Local._saveKey(_Keys._app42_oldUserProps_ + App42.getLoggedInUser(), JSON.stringify(installProps));
                }
                if (userUpdatedOn != null) {
                    __Local._saveKey(_Keys._app42_lastUserUpdatedOn_ + App42.getLoggedInUser(), userUpdatedOn);
                }
                _request.success(_client_Response_);
            },
            error: function (error) {
          //      console.log("Error message" + error);
                _request.error(error);
            }
        });
    };

    updateLoggedInUserPropertiesInternal = function (properties, request) {
        var URL = App42.EventURL("event/updateuserproperties");
        var params = __event.populateSignParams(),
        metaHeader = __event.populateMetaHeaderParams(),
        headerParams = __merge(params, metaHeader);
        var bodyObj = {};
        bodyObj["app42_installAt"] = __Local._checkKey(_Keys._app42_isAppInstalled);
		bodyObj["app42_lastCommunicatedAt"] = __Local._checkKey(_Keys._app42_lastCommAt_super);
        bodyObj["installProperties"] = properties;
        bodyObj["app42_userUpdatedOn"] = __Local._checkKey(_Keys._app42_lastUserUpdatedOn_ + App42.getLoggedInUser());
        bodyObj["oldProperties"] = App42EventHandler.getOldInstallProperties();
        var body = '{"app42":{"event":' + JSON.stringify(bodyObj) + '}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, headerParams);
    };

    this.getLoggedInUserProperties = function (request) {
        var URL = App42.EventURL("event/userproperties");
        var params = __event.populateSignParams(),
        metaHeader = __event.populateMetaHeaderParams(),
        headerParams = __merge(params, metaHeader);
        var bodyObj = {};
        var properties = {};
        bodyObj["app42_installAt"] = __Local._checkKey(_Keys._app42_isAppInstalled);
        bodyObj["installProperties"] = properties;
        var body = '{"app42":{"event":' + JSON.stringify(bodyObj) + '}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, headerParams);
    };

           
    this.getConfig = function (request){
        var URL = App42.EventURL("event");
        var params = __event.populateSignParams(),
        metaHeader = __event.populateMetaHeaderParams(),
        headerParams = __merge(params, metaHeader);
        App42Connection.get(URL, params, request, null, headerParams);
        }
		
       
    this.isAvailable = function (campaignList, request){
        var URL = App42.EventURL("event/isAvailable");
        var params = __event.populateSignParams(),
        metaHeader = __event.populateMetaHeaderParams(),
        headerParams = __merge(params, metaHeader);
        var bodyObj = {};
        var campaignObj = {};
        campaignObj.campaign = campaignList;
        bodyObj.campaigns = campaignObj;
        var body = '{"app42":' + JSON.stringify(bodyObj) + '}';
        params.body = body;
        App42Connection.post(URL, params, body, request, headerParams);
        }
    
}





var App42EventHandler = {};


var _Keys = {
    "_app42_lastUserUpdatedOn_" : "_app42_lastUserUpdatedOn_",
    "_app42_defaultDeviceInfo": "_app42_defaultDeviceInfo",
    "_app42_oldUserProps_": "_app42_oldUserProps_",
    "_app42_isAppInstalled": "_app42_isAppInstalled",
    "_app42_lastCommAt_": "_app42_lastCommAt_",
    "_app42_lastCommAt_super": "_app42_lastCommAt_super",
    "_app42_lastCommAt_start_": "_app42_lastCommAt_start_",
    "_app42_lastCommAt_end_": "_app42_lastCommAt_end_"
};


var counter = 0;

function incrementCounter() {
    return counter+1;
}

function decrementCounter() {
    return counter-1;
}


(function () {
    // Generating default device properties.
        this.generateSuperProperties = function () {
            var superParams = {};

            var unknown = '-';
            // screen
            var screenSize = '';
            if (screen.width) {
                width = (screen.width) ? screen.width : '';
                height = (screen.height) ? screen.height : '';
                screenSize += '' + width + " x " + height;
            }
            //browser
            var nVer = navigator.appVersion;
            var nAgt = navigator.userAgent;
            var browser = navigator.appName;
            var version = '' + parseFloat(navigator.appVersion);
            var majorVersion = parseInt(navigator.appVersion, 10);
            var nameOffset, verOffset, ix;

            // Opera
            if ((verOffset = nAgt.indexOf('Opera')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 6);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
                // MSIE
            else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(verOffset + 5);
            }
                // Chrome
            else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
                browser = 'Chrome';
                version = nAgt.substring(verOffset + 7);
            }
                // Safari
            else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                browser = 'Safari';
                version = nAgt.substring(verOffset + 7);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
                // Firefox
            else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                browser = 'Firefox';
                version = nAgt.substring(verOffset + 8);
            }
                // MSIE 11+
            else if (nAgt.indexOf('Trident/') != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(nAgt.indexOf('rv:') + 3);
            }
                // Other browsers
            else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                browser = nAgt.substring(nameOffset, verOffset);
                version = nAgt.substring(verOffset + 1);
                if (browser.toLowerCase() == browser.toUpperCase()) {
                    browser = navigator.appName;
                }
            }
            // trim the version string
            if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

            majorVersion = parseInt('' + version, 10);
            if (isNaN(majorVersion)) {
                version = '' + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10);
            }

            // mobile version
            var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

            // cookie
            var cookieEnabled = (navigator.cookieEnabled) ? true : false;

            if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
                document.cookie = 'testcookie';
                cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
            }

            // system
            var os = unknown;
            var clientStrings = [
                { s: 'Windows 3.11', r: /Win16/ },
                { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
                { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
                { s: 'Windows 98', r: /(Windows 98|Win98)/ },
                { s: 'Windows CE', r: /Windows CE/ },
                { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
                { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
                { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
                { s: 'Windows Vista', r: /Windows NT 6.0/ },
                { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
                { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
                { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
                { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
                { s: 'Windows ME', r: /Windows ME/ },
                { s: 'Android', r: /Android/ },
                { s: 'Open BSD', r: /OpenBSD/ },
                { s: 'Sun OS', r: /SunOS/ },
                { s: 'Linux', r: /(Linux|X11)/ },
                { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
                { s: 'Mac OS X', r: /Mac OS X/ },
                { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
                { s: 'QNX', r: /QNX/ },
                { s: 'UNIX', r: /UNIX/ },
                { s: 'BeOS', r: /BeOS/ },
                { s: 'OS/2', r: /OS\/2/ },
                { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
            ];
            for (var id in clientStrings) {
                var cs = clientStrings[id];
                if (cs.r.test(nAgt)) {
                    os = cs.s;
                    break;
                }
            }

            var osVersion = unknown;

            if (/Windows/.test(os)) {
                osVersion = /Windows (.*)/.exec(os)[1];
                os = 'Windows';
            }

            switch (os) {
                case 'Mac OS X':
                    osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                    break;

                case 'Android':
                    osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                    break;

                case 'iOS':
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                    osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    break;
            }

            // flash (you'll need to include swfobject)
            /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
            var flashVersion = 'no check';
            if (typeof swfobject != 'undefined') {
                var fv = swfobject.getFlashPlayerVersion();
                if (fv.major > 0) {
                    flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
                }
                else {
                    flashVersion = unknown;
                }
            }

            var referrer = document.referrer;
            var referrerDomain = document.referrer.split('/')[2];
            if (referrer == "") {
                referrer = "Self";
                referrerDomain = "Self";
            }
            superParams["app42_browser_version"] = version;
            superParams["app42_browser"] = browser;
            superParams["app42_brand"] = browser;
            superParams["app42_screen_width"] = screen.width;
            superParams["app42_screen_height"] = screen.height;
            superParams["app42_screen_dpi"] = 96; //remove method getPPI();
            superParams["app42_screen_colourDepth"] = screen.colorDepth;
            superParams["app42_screen_pixelDepth"] = screen.pixelDepth;
            superParams["app42_css_pixel"] = window.devicePixelRatio;
            superParams["app42_os"] = os;
            superParams["app42_os_version"] = osVersion;
            superParams["app42_cookieEnabled"] = cookieEnabled;
            superParams["app42_flashVersion"] = flashVersion;
            superParams["app42_referrer"] = referrer;         
            superParams["app42_referring_domain"] = referrerDomain;         
            superParams["app42_mobile"] = mobile;         
            superParams["app42_lastCommunicatedAt"] = "";
            superParams["app42_counter"] = 1;
            return superParams;
        };

        this.getDefaultDeviceProps = function () {
            var deviceProps = {};
            if (__Local._checkKey(_Keys._app42_defaultDeviceInfo) != "") {
                var updateCounter = {};
                updateCounter["app42_counter"] = incrementCounter();
                updateCounter["app42_lastCommunicatedAt"] = __Local._checkKey(_Keys._app42_lastCommAt_super);
                this.updateDeviceStatus(updateCounter);
                deviceProps = JSON.parse(__Local._fetchKey(_Keys._app42_defaultDeviceInfo));
            } else {
                deviceProps = this.generateSuperProperties();
                __Local._saveKey(_Keys._app42_defaultDeviceInfo, JSON.stringify(deviceProps));
            }
            return deviceProps;
        }

        this.updateDeviceStatus = function (newProps) {
            var obj1 = {};
            var obj2 = {};
            obj2 = JSON.parse(__Local._fetchKey(_Keys._app42_defaultDeviceInfo));
            for (var attrname in obj2) {
                obj1[attrname] = obj2[attrname];
            }
            for (var attrname in newProps) {
                obj1[attrname] = newProps[attrname];
            }
            __Local._saveKey(_Keys._app42_defaultDeviceInfo, JSON.stringify(obj1));
        }
        

        this.getOldInstallProperties = function () {
            var deviceProps = __Local._fetchKey(_Keys._app42_oldUserProps_ + App42.getLoggedInUser());
            if (deviceProps == null || deviceProps == "" || deviceProps == undefined) {
                deviceProps = '""';
            } 
            return JSON.parse(deviceProps);
        }


}).apply(App42EventHandler)

//function getPPI() {
//    // create an empty element
//    var div = document.createElement("div");
//    // give it an absolute size of one inch
//    div.style.width = "1in";
//    // append it to the body
//    var body = document.getElementsByTagName("body")[0];
//    body.appendChild(div);
//    // read the computed width
//    var ppi = document.defaultView.getComputedStyle(div, null).getPropertyValue('width');
//    // remove it again
//    body.removeChild(div);
//    // and return the value
//    return parseFloat(ppi);
//}


var __Local = {
    "_checkKey": function (keyToCheck) {
        var val = "";
        if (this._fetchKey(keyToCheck) == null || this._fetchKey(keyToCheck) == "" || this._fetchKey(keyToCheck) == undefined) {
            val = "";
        } else {
            val = this._fetchKey(keyToCheck);
        }
        return val;
    },
    "_checkLastCommAt": function (key1,key2) {
        var val = "";
        if (this._fetchKey(key1) == null || this._fetchKey(key1) == "" || this._fetchKey(key1) == undefined)
        {
            val = "";
        }else{
            val = this._fetchKey(key1);
            return val;
        }
        if (this._fetchKey(key2) == null || this._fetchKey(key2) == "" || this._fetchKey(key2) == undefined)
        {
            val = "";
        } else{
            val = this._fetchKey(key2);
        }
        return val;
    },
    "_saveKey": function (keyToSave, valueToSave) {
        localStorage.setItem(keyToSave, valueToSave);
    },
    "_fetchKey": function (keyTofetch) {
        return localStorage.getItem(keyTofetch);
    },
    "_removeKey": function (keyToRemove) {
        localStorage.removeItem(keyToRemove);
    }
};

var __Installation = {
    "_fireInstallEvent": function (apiKey, secretKey) {
        var installStatus = __Local._checkKey(_Keys._app42_isAppInstalled);
        if (installStatus == null || installStatus == "" || installStatus == undefined) {
            _fireApp42AppInstallEvent(apiKey, secretKey);
        } 
    },

    "_getCurrentLoggedInUserProperties": function (apiKey, secretKey) {
        var event = new App42Event();      // Initialize "event" As New App42Event.
        event.getLoggedInUserProperties({
            success: function (object) {
                var userPropsObj = JSON.parse(object);
                var userUpdatedOn = userPropsObj.app42.response.user.app42_userUpdatedOn,
                hasProps = userPropsObj.app42.response.user.hasProperties,
                installProps = userPropsObj.app42.response.user.installProperties;
                if (hasProps == "true") {
                    __Local._saveKey(_Keys._app42_oldUserProps_ + App42.getLoggedInUser(), JSON.stringify(installProps));
                }
                if (userUpdatedOn != null) {
                    __Local._saveKey(_Keys._app42_lastUserUpdatedOn_ + App42.getLoggedInUser(), userUpdatedOn);
                }
            },
            error: function (error) {
         //       console.log("Error :: " + error);
            }
        });
}
};

function _fireApp42AppInstallEvent(apiKey, secretKey) {
    var event = new App42Event();      // Initialize "event" As New App42Event.
    var eventName = "Install";
    var properties = {};
    event.trackEventInternal(eventName, properties, {
        success: function (object) {
            var installObj = JSON.parse(object)
            var installtime = installObj.app42.response.event.lastCommunicatedAt;
            __Local._saveKey(_Keys._app42_isAppInstalled, installtime);
			__Local._saveKey(_Keys._app42_lastCommAt_super, installtime);
            var installedAtObj = {
                "app42_installAt": installtime,
                "app42_lastCommunicatedAt" : installtime
            };
            App42EventHandler.updateDeviceStatus(installedAtObj);
        },
        error: function (error) {
      //      console.log("Install Errorsr Obj :: " + error);
        }
    });
}


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
    function clean_hex(input, remove_0x) {
        input = input.toUpperCase();

        if (remove_0x) {
          input = input.replace(/0x/gi, "");
        }

        var orig_input = input;
        input = input.replace(/[^A-Fa-f0-9]/g, "");
        if (orig_input != input)
            alert ("Warning! Non-hex characters in input string ignored.");
        return input;
    }

    var base64_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    function binary_to_base64(input) {
      var ret = new Array();
      var i = 0;
      var j = 0;
      var char_array_3 = new Array(3);
      var char_array_4 = new Array(4);
      var in_len = input.length;
      var pos = 0;

      while (in_len--)
      {
          char_array_3[i++] = input[pos++];
          if (i == 3)
          {
              char_array_4[0] = (char_array_3[0] & 0xfc) >> 2;
              char_array_4[1] = ((char_array_3[0] & 0x03) << 4) + ((char_array_3[1] & 0xf0) >> 4);
              char_array_4[2] = ((char_array_3[1] & 0x0f) << 2) + ((char_array_3[2] & 0xc0) >> 6);
              char_array_4[3] = char_array_3[2] & 0x3f;

              for (i = 0; (i <4) ; i++)
                  ret += base64_chars.charAt(char_array_4[i]);
              i = 0;
          }
      }

      if (i)
      {
          for (j = i; j < 3; j++)
              char_array_3[j] = 0;

          char_array_4[0] = (char_array_3[0] & 0xfc) >> 2;
          char_array_4[1] = ((char_array_3[0] & 0x03) << 4) + ((char_array_3[1] & 0xf0) >> 4);
          char_array_4[2] = ((char_array_3[1] & 0x0f) << 2) + ((char_array_3[2] & 0xc0) >> 6);
          char_array_4[3] = char_array_3[2] & 0x3f;

          for (j = 0; (j < i + 1); j++)
              ret += base64_chars.charAt(char_array_4[j]);

          while ((i++ < 3))
              ret += '=';

      }

      return ret;
    }

    function Convert(hexString) {
      var cleaned_hex = clean_hex(hexString, false);
      if (cleaned_hex.length % 2) {
        alert ("Error: cleaned hex string length is odd.");
        document.frmConvert.base64.value = "";
        return false;
      }
      var binary = new Array();
      for (var i=0; i<cleaned_hex.length/2; i++) {
        var h = cleaned_hex.substr(i*2, 2);
        binary[i] = parseInt(h,16);
      }
      return binary_to_base64(binary);
      //document.frmConvert.base64.value = binary_to_base64(binary);
    }


function App42Service() {
    // Initializing Variables.
    var sessionId=null,adminKey=null,fbAccessToken=null,dbName,collectionName,query,jsonObject,
    geoTag=null,aclList=null,selectKeys=[],pageOffset=-1,pageMaxRecords=-1,otherMetaHeaders={},event=null;
    
    this.setPageOffset = function(page_offset) {
        pageOffset = page_offset;
    };
    
    this.getPageOffset = function() {
        return pageOffset;
    };
    
    this.setPageMaxRecords = function(page_maxRecords) {
        pageMaxRecords = page_maxRecords;
    };
    
    this.getPageMaxRecords = function() {
        return pageMaxRecords;
    };
    
    this.setOtherMetaHeaders = function(other_metaHeaders) {
        otherMetaHeaders = other_metaHeaders;
    };
    
    this.getOtherMetaHeaders = function() {
        return otherMetaHeaders;
    };
    
    this.setSessionId = function(session_Id) {
        sessionId = session_Id;
    };
    this.getSessionId = function() {
        return sessionId;
    };
    this.getDbName = function() {
        return dbName;
    };
    this.setDbName = function(db_Name) {
        dbName = db_Name;
    };
    this.getCollectionName = function() {
        return collectionName;
    };
    this.setCollectionName = function(collection_Name) {
        collectionName = collection_Name;
    };
    this.setQuery = function(collection_Name,metaInfoQuery) {
        dbName = App42.getDbName();
		collectionName = collection_Name;
		if(metaInfoQuery){
		query = getStr(metaInfoQuery);
		}else{
		query = null}
    };
	
	this.addJSONObject = function(collection_Name,json_Object) {
        dbName = App42.getDbName();
		collectionName = collection_Name;
		jsonObject = JSON.stringify(json_Object);
    };
	
    
	this.setModuleEvent = function(event) {
        event = event;
    };
    
    this.getEvent = function() {
        return event;
    };
	
    this.setAdminKey = function(admin_key) {
        adminKey = admin_key ;
    };
    
    this.getAdminKey = function() {
        return adminKey;
    };
	
    this.setFbAccessToken = function(fbAccess_Token) {
        fbAccessToken = fbAccess_Token;
    };
    
    this.getFbAccessToken = function() {
        return fbAccessToken;
    };
    
    this.setGeoTag = function(geo_Tag) {
        if(geo_Tag instanceof GeoTag){
            var __geo = {};
            if(geo_Tag.getLat() !=null && geo_Tag.getLng()!=null){
                __geo.lat = geo_Tag.getLat();
                __geo.lng = geo_Tag.getLng();
                geoTag = __geo;
            }
        }
    };
    this.getGeoTag = function() {
        return geoTag;
    };
    
    this.setAclList = function(acl_List) {
        var __aclList = new Array();
        var createPer;
        if(acl_List instanceof Array){
            for (var i=0;  i<acl_List.length; i++){
                var userInArray = acl_List[i].user;
                var permissionInArray;
                createPer = {};
                permissionInArray = acl_List[i].permission;
                createPer[userInArray] = permissionInArray
                __aclList.push(createPer)
            }
        }else{
            createPer = {};
            var user = acl_List.user;
            var permission;
            permission = acl_List.permission;
            createPer[user] = permission
            __aclList.push(createPer)
	}
        aclList = __aclList;
    };
    this.getAclList = function() {
        return aclList;
    };
	
    this.setSelectKeys = function(select_keys) {
        selectKeys = select_keys;
    };
    this.getSelectKeys = function() {
        return selectKeys;
    };
    
    this.populateSignParams = function(){
        var params = {};
        params.apiKey = apiKey;
        params.version = version;
        var now = new Date();
        params.timeStamp = getODataUTCDateFilter(now);
        if(sessionId != null){
            params.sessionId = sessionId;
        }
        if(adminKey != null){
            params.adminKey = adminKey;
        }
        if(fbAccessToken != null){
            params.fbAccessToken = fbAccessToken;
        }
        if(localStorage != undefined){
            if(sessionId ==null && localStorage.getItem("_App42_SessionId") != undefined){
                var _sessionId = localStorage.getItem("_App42_SessionId");
                params.sessionId = _sessionId;
            }
        }
        if(localStorage != undefined){
            if(fbAccessToken ==null && localStorage.getItem("_App42_FbAccessToken") != undefined){
                var _fbAccessToken = localStorage.getItem("_App42_FbAccessToken");
                params.fbAccessToken = _fbAccessToken;
            }
        }
		 if(event != null && event != ""){
            params.event = event;
        }
		
        return params;
    }
    
    this.populateMetaHeaderParams = function(){
        var params = {};
        if(aclList !=null){
            var __acl = JSON.stringify(aclList)
            params.dataACL = __acl;
        }
        if(pageOffset != -1 && !isNaN(pageMaxRecords)){
            params.pageOffset = pageOffset;
        }
        if(pageMaxRecords != -1 && !isNaN(pageMaxRecords)){
            params.pageMaxRecords = pageMaxRecords;
        }
        
        if(geoTag != null && Object.prototype.toString.call(geoTag) == "[object Object]"){
            var geoString = JSON.stringify(geoTag)
            params.geoTag = geoString;
        }
        if(selectKeys.length > 0){
            var selectJSONKeys = {}
            for (var i=0; i<selectKeys.length;i++) {
                selectJSONKeys[selectKeys[i]] = "1";
            }
            var selectKeysString = JSON.stringify(selectJSONKeys)
            params.selectKeys = selectKeysString 
            
        }
        if(Object.keys(otherMetaHeaders).length > 0){
           for (var key in otherMetaHeaders) {
                var value = otherMetaHeaders[key];
                if (key != null && key !="" && value != null
                    && value != "") {
                    params[key] = value;
					
                }
            }
        }
        if(localStorage != undefined){
            if(localStorage.getItem("_App42_DeviceId") != undefined){
                var uuid = localStorage.getItem("_App42_DeviceId");
                params.deviceId = uuid
            }
        }
        if (App42.getLoggedInUser() != null && App42.getLoggedInUser() != "") {
			params.loggedInUser = App42.getLoggedInUser();
		}
		
		if (query != null && query !=""){
			params.metaQuery = query;
		}
		
		if (jsonObject != null && jsonObject !=""){
			params.jsonObject = jsonObject;
		}
		
		if(dbName!=null && dbName != "" && collectionName!=null && collectionName != "") {
			var jsonObject1 = new Object();
			jsonObject1.dbName = dbName;
			jsonObject1.collectionName = collectionName;
			params.dbCredentials = JSON.stringify(jsonObject1);
			
		}
		params.SDKName = "javascript";
        return params;
    }
}


function GeoTag() {
    var lat=null,lng=null;
    this.setLat = function(latitude) {
        lat = latitude;
    };
    
    this.getLat = function() {
        return lat;
    };
	
    this.setLng = function(longtitude) {
        lng = longtitude;
    };
    
    this.getLng = function() {
        return lng;
    };
    
   
}

function ItemData() {
    var item=null,name=null,description=null,image=null, price =null, imageName =null;

    this.getItemId = function() {
        return item;
    };
	
	this.setItemId = function(itemId) {
        item = itemId;
    };
    
    this.getName = function() {
        return name;
    };
    
    this.setName = function(itemName) {
        name = itemName;
    };
    
    this.getDescription = function() {
        return description;
    };
	
	this.setDescription = function(descrip) {
        description = descrip;
    };
    
    this.getImage = function() {
        return image;
    };
    
    this.setImage = function(itemImage) {
        image = itemImage;
    };
   
    this.getPrice = function() {
        return price;
    };
    
    this.setPrice = function(itemPrice) {
        price = itemPrice;
    };
   
    this.getImageName = function() {
        return imageName;
    };
    
    this.setImageName = function(itemImageName) {
        imageName = itemImageName;
    };
   
}
function __merge(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) {
        obj3[attrname] = obj1[attrname];
    }
    for (var attrname in obj2) {
        obj3[attrname] = obj2[attrname];
    }
    return obj3;
}


var OrderByType = {
    ASCENDING :"ASCENDING",
    DESCENDING : "DESCENDING"
};
function checkOrderByType(orderType){
    if(OrderByType.ASCENDING == orderType){
        return "ASCENDING"
    }else if(OrderByType.DESCENDING == orderType){
        return "DESCENDING"
    }
    else{
        return App42Exception;
    }
}


function App42Storage() {
    App42Service.call(this);
    var __storage=this;
    
    /**
     * This function allows you to save a JSON document in given database and collection .
     *
     * @param dbName - Unique handler for storage name.
     * @param collectionName - Name of collection in which JSON document is to be saved.
     * @param json - Target JSON document to be saved.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.insertJSONDocument = function(dbName, collectionName, json,request) {
        var URL = App42.URL("storage/insert/dbName/"+dbName+"/"+"collectionName"+"/"+collectionName);
        if(dbName != null && collectionName != null && json != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
        }
        if(dbName == "" || collectionName == "" || json == "" || dbName == null|| collectionName == null|| json == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(json, "json")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
		if(json instanceof Object){
			json = JSON.stringify(json)
		}
        var body = '{"app42":{"storage":{"jsonDoc":'+ json +'}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
        
    };
    /**
     * This function finds all documents stored in given database and collection
     * starting from a specific index location till the maximum number of records
     *
     * @param dbName - Unique handler for storage name.
     * @param collectionName  - Name of collection in which JSON doc is to be searched.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.findAllDocuments = function(dbName, collectionName, request) {
        if(dbName != null && collectionName != null ){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            
        }
        if(dbName == "" || collectionName == "" || dbName == null|| collectionName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            return ;
        }
       
        var URL = App42.URL("storage/findAll/dbName/"+dbName+"/"+"collectionName"+"/"+collectionName);
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        App42Connection.get(URL, params, request, null, headerParams);
    };
    /**
     * Find all collections stored in given database.
     * 
     * @param dbName
     *            - Unique handler for storage name
     * 
     * @return Storage object
     * 
     * @throws App42Exception
     * 
     */
    this.findAllCollections = function(dbName,request) {
        var URL = App42.URL("storage/findCollections/dbName/"+dbName);
        if(dbName != null){
            dbName = dbName.trim(); 
        }
        if(dbName == "" || dbName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.findAllDocumentsCount = function(dbName,collectionName,request) {
        var URL = App42.URL("storage"+ "/findAll/count/dbName/" + dbName + "/collectionName/"+ collectionName);
        if(dbName != null && collectionName!= null ){
            dbName = dbName.trim();
            collectionName = collectionName.trim();			
        }
        if(dbName == "" || dbName == null || collectionName == "" || collectionName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        App42Connection.get(URL, params,request,null, headerParams);
		
    };
	
    this.findAllDocumentsByPaging = function(dbName, collectionName, max, offset,request) {
        if(dbName != null && collectionName != null && max != null && offset != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            
        }
        if(dbName == "" || collectionName == "" || dbName == null|| collectionName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            return ;
        }
        var URL_r = App42.URL("storage/findAll/dbName"+"/"+dbName+"/"+"collectionName"+"/"+collectionName+"/"+max+"/"+offset);
        var params_r =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params_r, metaHeader);
        params_r.dbName = dbName;
        params_r.collectionName = collectionName;
        params_r.max = max;
        params_r.offset = offset;
        App42Connection.get(URL_r, params_r, request, null, headerParams);
    };
       
 
    /**
     * This function returns the desired document for a given unique object id.
     *
     * @param dbName - Unique handler for storage name.
     * @param collectionName  - Name of collection in which JSON doc is to be searched.
     * @param docId - Unique Object Id handler.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.findDocumentById = function(dbName, collectionName, docId,request) {
        var URL = App42.URL("storage/findDocById/dbName"+"/"+dbName+"/collectionName/"+collectionName+"/docId/"+docId);
        if(dbName != null && collectionName != null && docId != null ){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            docId = docId.trim();
        }
        if(dbName == "" || collectionName == "" || docId == ""  || dbName == null|| collectionName == null|| docId == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(docId, "docId")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.docId = docId;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	

	
    /**
	 * Find target document using Custom Query.
	 * @param dbName - Unique handler for storage name
	 * @param collectionName - Name of collection under which JSON doc needs to be searched
	 * @param query - Query Object containing custom query for searching docs
         * @param request - An object with success and error callbacks.
	 * @throws App42Exception
	 */
    this.findDocumentsByQuery = function(dbName, collectionName, query, request) {
        var URL = App42.URL("storage/findDocsByQuery/dbName/"+dbName+"/collectionName/"+collectionName);
        if(dbName != null && collectionName != null && query != null){
            collectionName = collectionName.trim();
        }
        if(dbName == "" || collectionName == "" || query == "" || dbName == null|| collectionName == null|| query == null ){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(query, "query")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.jsonQuery = getStr(query);
        params.dbName = dbName;
        params.collectionName = collectionName;
	    App42Connection.get(URL, params,request, null, headerParams);
    };
    /**
     * Find target document using Custom Query with paging.
     * @param dbName - Unique handler for storage name
     * @param collectionName - Name of collection under which JSON doc needs to be searched
     * @param query - Query Object containing custom query for searching docs
     * @param max - max result parameter
     * @param offset - offset result parameter
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     */
    this.findDocumentsByQueryWithPaging = function(dbName, collectionName, query, max, offset, request) {
        var URL = App42.URL("storage/findDocsByQuery/dbName/"+dbName+"/collectionName/"+collectionName+ "/" + max + "/" + offset);
        if(dbName != null && collectionName != null && query != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
        }
        if(dbName == "" || collectionName == "" || query == "" || dbName == null|| collectionName == null|| query == null ){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(query, "query")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.jsonQuery = getStr(query);
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.max = max;
        params.offset = offset;
        App42Connection.get(URL, params, request, null, headerParams);
    };
    /**
     * Find target document using Custom Query with paging and orderby.
     * @param dbName - Unique handler for storage name
     * @param collectionName - Name of collection under which JSON doc needs to be searched
     * @param query - Query Object containing custom query for searching docs
     * @param max - max result parameter
     * @param offset - offset result parameter
     * @param orderByKey  - Name of Key on which order by has to be applied
     * @param type - ASCENDING/DESCENDING mode
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     */
    this.findDocsWithQueryPagingOrderBy = function(dbName, collectionName, query, max, offset, orderByKey, type, request) {
        var URL = App42.URL("storage/findDocsByQuery/dbName/"+dbName+"/collectionName/"+collectionName+ "/" + max + "/" + offset);
        if(dbName != null && collectionName != null && query != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
        }
        if(dbName == "" || collectionName == "" || query == "" || dbName == null|| collectionName == null|| query == null ){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(query, "query")
            return ;
        }
        var queryParams = {};
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.jsonQuery = getStr(query);
        if (orderByKey != null){
            queryParams.orderByKey= orderByKey;
        }
        if (type != null){
            queryParams.orderByType= type;
        }
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.max = max;
        params.offset = offset;
        
        App42Connection.get(URL, params,request,queryParams, headerParams);
    };
    /**
     * This function locates the desired document using given key value as search parameter. This key value pair will be searched in the
     * JSON doc stored on the cloud and the respective doc will be returned as a result of this function.
     *
     * @param dbName - Unique handler for storage name.
     * @param collectionName  - Name of collection in which JSON doc is to be searched.
     * @param key - Key to be searched in a JSON doc
     * @param value - Value to be searched
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.findDocumentByKeyValue = function(dbName, collectionName, key, value, request) {
        var URL = App42.URL("storage/findDocByKV/dbName/"+dbName+"/collectionName/"+collectionName+"/"+key+"/"+value);
        if(dbName != null && collectionName != null && key != null && value != null ){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            key = key.trim();
            value = value.trim();
        }
        if(dbName == "" || collectionName == "" || key == ""  || value == ""  || dbName == null|| collectionName == null|| key == null || value == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(key, "key")
            App42Fault.throwExceptionIfNullOrBlank(value, "value")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.key = key;
        params.value = value;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    /**
     * This function updates a JSON document using key value as search parameter. This key value pair will be
     * searched in the JSON doc stored in the cloud and matching doc will be updated with new specified value.
     *
     * @param dbName - Unique handler for storage name.
     * @param collectionName  - Name of collection in which JSON doc is to be searched.
     * @param key - Key to be searched in the JSON doc.
     * @param value - Value to be searched in the JSON doc.
     * @param newJsonDoc - New JSON document to be added.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.updateDocumentByKeyValue = function(dbName, collectionName, key, value, newJsonDoc, request) {
        var URL = App42.URL("storage/update/dbName/"+dbName+"/collectionName/"+collectionName+"/"+key+"/"+value);
        if(dbName != null && collectionName != null && key != null && value != null && newJsonDoc != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            key = key.trim();
            value = value.trim();
        }
        if(dbName == "" || collectionName == "" || key == ""  || value == "" || newJsonDoc == ""  || dbName == null|| collectionName == null|| key == null || value == null || newJsonDoc == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(key, "key")
            App42Fault.throwExceptionIfNullOrBlank(value, "value")
            App42Fault.throwExceptionIfNullOrBlank(newJsonDoc, "newJsonDoc")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.key = key;
        params.value = value
		if(newJsonDoc instanceof Object){
			newJsonDoc = JSON.stringify(newJsonDoc)
		}
        var body = '{"app42":{"storage":{"jsonDoc":' + newJsonDoc + '}}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
    };
    /**
     * This function allows updating a JSON document with specified document id.
     *
     * @param dbName - Unique handler for storage name.
     * @param collectionName  - Name of collection in which JSON doc is to be searched.
     * @param docId - Id of the document to be updated.
     * @param newJsonDoc - New JSON document to be added.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.updateDocumentByDocId = function(dbName, collectionName, docId, newJsonDoc,request) {
        var URL = App42.URL("storage/updateByDocId/dbName/"+dbName+"/collectionName/"+collectionName+"/docId/"+docId);
        if(dbName != null && collectionName != null && docId != null && newJsonDoc != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            docId = docId.trim();
        }
        if(dbName == "" || collectionName == "" || docId == "" || newJsonDoc == ""  || dbName == null|| collectionName == null|| docId == null || newJsonDoc == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(docId, "docId")
            App42Fault.throwExceptionIfNullOrBlank(newJsonDoc, "newJsonDoc")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.docId = docId;
		if(newJsonDoc instanceof Object){
			newJsonDoc = JSON.stringify(newJsonDoc)
		}
        var body = '{"app42":{"storage":{"jsonDoc":' + newJsonDoc + '}}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
        
    };
    /**
     * This function deletes a JSON document with specified Object Id in a given database and collection.
     * The Object Id will be searched in the JSON doc stored on the cloud and the respective doc will be deleted.
     *
     * @param dbName - Unique handler for storage name.
     * @param collectionName  - Name of collection in which JSON doc is to be searched.
     * @param docId - Unique Object Id handler.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.deleteDocumentById = function(dbName, collectionName, docId, request) {
        var URL = App42.URL("storage/deleteDocById/dbName/"+dbName+"/collectionName/"+collectionName+"/docId/"+docId);
        if(dbName != null && collectionName != null && docId != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            docId = docId.trim();
        }
        if(dbName == "" || collectionName == "" || docId == null|| docId == "" || dbName == null || collectionName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(docId, "docId")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.docId = docId;
        App42Connection.del(URL, params,request, headerParams);
    };
	
    this.grantAccessOnDoc = function(dbName, collectionName, docId,aclList,request) {
        var URL = App42.URL("storage/grantAccessOnDoc/"+dbName+"/"+collectionName+"/"+docId);
        if(dbName != null && collectionName != null && docId != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            docId = docId.trim();
        }
        if(dbName == "" || collectionName == "" || docId == null|| docId == "" || dbName == null || collectionName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(docId, "docId")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.docId = docId;
        var storageAclList = new Array();
        if(aclList instanceof Array){
            for (var i=0;  i<aclList.length; i++){
                var userInArray = aclList[i].user;
                var permissionInArray;
                checkPermissionType(permissionInArray);
                permissionInArray = aclList[i].permission;
                var arrayInArray={
                    user:userInArray,
                    permission:permissionInArray
                };
                storageAclList.push(arrayInArray)
            }
        }else{
            var user = aclList.user;
            var permission ;
            checkPermissionType(permission);
            permission = aclList.permission;
            var array={
                user:user,
                permission:permission
            };
            storageAclList.push(array)
        }
        var encodeJSON = JSON.stringify(storageAclList);
        var signify = '{"acl":' + encodeJSON + '}'
        var stringfy = JSON.stringify(signify)
        var body = '{"app42":{"storage":{"acls":' + stringfy + '}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
    };
	
    this.revokeAccessOnDoc = function(dbName, collectionName, docId,aclList,request) {
        var URL = App42.URL("storage/revokeAccessOnDoc/"+dbName+"/"+collectionName+"/"+docId);
        if(dbName != null && collectionName != null && docId != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            docId = docId.trim();
        }
        if(dbName == "" || collectionName == "" || docId == null|| docId == "" || dbName == null || collectionName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(docId, "docId")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.docId = docId;
		
        var storageAclList = new Array();
        if(aclList instanceof Array){
            for (var i=0;  i<aclList.length; i++){
                var userInArray = aclList[i].user;
                var permissionInArray;
                checkPermissionType(permissionInArray);
                permissionInArray = aclList[i].permission;
                var arrayInArray={
                    user:userInArray,
                    permission:permissionInArray
                };
                storageAclList.push(arrayInArray)
            }
        }else{
            var user = aclList.user;
            var permission ;
            checkPermissionType(permission);
            permission = aclList.permission;
            var array={
                user:user,
                permission:permission
            };
            storageAclList.push(array)
        }
        var encodeJSON = JSON.stringify(storageAclList);
        var signify = '{"acl":' + encodeJSON + '}'
        var stringfy = JSON.stringify(signify)
        var body = '{"app42":{"storage":{"acls":' + stringfy + '}}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
    };
	
	
    this.deleteDocumentsByKeyValue = function(dbName, collectionName, key , value , request) {
        var URL = App42.URL("storage/deletebykey/dbName/"+dbName+"/collectionName/"+collectionName+"/" + key);
        var getKey = '{"key":"' + value + '"}'
        if(dbName != null && collectionName != null  && key != null && value != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            key = key.trim();
            value = value.trim();
        }
        if(dbName == "" || collectionName == ""  || dbName == null || collectionName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.value = getKey;
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.key = key;
        App42Connection.del(URL, params,request, headerParams);
    };
	
    this.deleteAllDocuments = function(dbName, collectionName , request) {
        var URL = App42.URL("storage/deleteAll/dbName/" + dbName + "/collectionName/"+ collectionName);
        if(dbName != null && collectionName != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
        }
        if(dbName == "" || collectionName == ""  || dbName == null || collectionName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
		params.dbName = dbName;
		params.collectionName = collectionName;
        App42Connection.del(URL, params,request, headerParams);
    };
	
    this.findDocumentsByLocation = function(dbName, collectionName, query, request) {
        var URL = App42.URL("storage/findDocsBylocation/dbName/" + dbName
					+ "/collectionName/" + collectionName);
        if(dbName != null && collectionName != null && query != null){
            collectionName = collectionName.trim();
        }
        if(dbName == "" || collectionName == "" || query == "" || dbName == null|| collectionName == null|| query == null ){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(query, "query")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.jsonQuery = getStr(query);
        params.dbName = dbName;
        params.collectionName = collectionName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
	
	
	this.saveOrUpdateDocumentByKeyValue = function(dbName, collectionName, key, value, newJsonDoc, request) {
        var URL = App42.URL("storage/saveorupdate/dbName/"+dbName+"/collectionName/"+collectionName+"/"+key+"/"+value);
        if(dbName != null && collectionName != null && key != null && value != null && newJsonDoc != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            key = key.trim();
            value = value.trim();
        }
        if(dbName == "" || collectionName == "" || key == ""  || value == "" || newJsonDoc == ""  || dbName == null|| collectionName == null|| key == null || value == null || newJsonDoc == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(key, "key")
            App42Fault.throwExceptionIfNullOrBlank(value, "value")
            App42Fault.throwExceptionIfNullOrBlank(newJsonDoc, "newJsonDoc")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.key = key;
        params.value = value
		if(newJsonDoc instanceof Object){
			newJsonDoc = JSON.stringify(newJsonDoc)
		}
        var body = '{"app42":{"storage":{"jsonDoc":' + newJsonDoc + '}}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
    };
	
	
	this.updateDocumentByQuery = function(dbName, collectionName, query, newJsonDoc, request) {
        var URL = App42.URL("storage" + "/updateDocsByQuery/dbName/" + dbName + "/collectionName/" + collectionName);
        if(dbName != null && collectionName != null && newJsonDoc != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
        }
        if(dbName == "" || collectionName == "" ||  newJsonDoc == ""  || dbName == null|| collectionName == null || newJsonDoc == null || query == null || query == ""){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
			App42Fault.throwExceptionIfNullOrBlank(query, "query")
            App42Fault.throwExceptionIfNullOrBlank(newJsonDoc, "newJsonDoc")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
		if(newJsonDoc instanceof Object){
			newJsonDoc = JSON.stringify(newJsonDoc)
		}
		var jsonObject = new Object();
		jsonObject.jsonQuery = query;
		jsonObject.jsonDoc = newJsonDoc;
		var JSONString = JSON.stringify(jsonObject);
        var body = '{"app42":{"storage":' + JSONString + '}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
    };
	
	
	
	this.addOrUpdateKeys = function(dbName, collectionName, docId, keys, request) {
        var URL = App42.URL("storage" + "/updateKeysByDocId/dbName/" + dbName + "/collectionName/" + collectionName + "/docId/" + docId);
        if(dbName != null && collectionName != null && keys != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
        }
        if(dbName == "" || collectionName == "" ||  keys == ""  || dbName == null|| collectionName == null || keys == null || docId == null || docId == ""){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
			App42Fault.throwExceptionIfNullOrBlank(docId, "docId")
            App42Fault.throwExceptionIfNullOrBlank(keys, "keys")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
		params.docId = docId;
        params.collectionName = collectionName;
		if(keys instanceof Object){
			keys = JSON.stringify(keys)
		}
		var jsonObject = new Object();
		jsonObject.jsonDoc = keys;
		var JSONString = JSON.stringify(jsonObject);
        var body = '{"app42":{"storage":' + JSONString + '}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
    };
	
	this.addAttachmentToDocs = function(dbName, collectionName, docId, file, request) {
        var URL = App42.URL("storage" + "/updatewithattachment/dbName/" + dbName + "/collectionName/" + collectionName);
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
		file.docId = docId
		App42Connection.addAttachmentParams(file)
        App42Connection.multipart(URL, params, file.filePath, request, headerParams);
    };
	this.insertJSONDocumentWithFile = function(dbName, collectionName, json, file, request) {
        var URL = App42.URL("storage" + "/insertwithattachment/dbName/" + dbName + "/collectionName/" + collectionName);
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
		file.json = json
		App42Connection.addAttachmentParams(file)
        App42Connection.multipart(URL, params, file.filePath, request, headerParams);
    };
}

// http://nerds-central.blogspot.com/2007/01/fast-scalable-javascript-and-vbscript.html
/** CopyRight: Dr Alexander J Turner - all rights reserved.
  * Please feel free to use this any way you want as long as you
  * mention I wrote it!
  */
var Base64 = (function() {
    var maxLineLength = 76;
    var base64chars =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

   var decode = function(encStr) {
        var base64charToInt = {};
        for (var i = 0; i < 64; i++) base64charToInt[base64chars.substr(i,1)] = i;
        encStr = encStr.replace(/\s+/g, "");
        var decStr = "";
        var decArray=new Array();
        var linelen = 0
        var el=encStr.length;
        var bits24;
        for (var i = 0; i < el; i += 4) {
            bits24  = ( base64charToInt[encStr.charAt(i)] & 0xFF  ) <<  18;
            bits24 |= ( base64charToInt[encStr.charAt(i+1)] & 0xFF  ) <<  12;
            bits24 |= ( base64charToInt[encStr.charAt(i+2)] & 0xFF  ) <<   6;
            bits24 |= ( base64charToInt[encStr.charAt(i+3)] & 0xFF  ) <<   0;
            decStr += String.fromCharCode((bits24 & 0xFF0000) >> 16);
            if (encStr.charAt(i + 2) != '=')  // check for padding character =
                decStr += String.fromCharCode((bits24 &   0xFF00) >>  8);
            if (encStr.charAt(i + 3) != '=')  // check for padding character =
                decStr += String.fromCharCode((bits24 &     0xFF) >>  0);
            if(decStr.length>1024)
            {
                decArray.push(decStr);
                decStr='';
            }
        }
        if(decStr.length>0)
        {
            decArray.push(decStr);
        }

        var ar2=new Array();
        for(;decArray.length>1;)
        {
            var l=decArray.length;
            for(var c=0;c<l;c+=2)
            {
                if(c+1==l)
                {
                    ar2.push(decArray[c]);
                }
                else
                {
                    ar2.push(''+decArray[c]+decArray[c+1]);
                }
            }
            decArray=ar2;
            ar2=new Array();
        }
        return decArray[0];
    };

    var encode = function(decStr)
    {
        var encArray=new Array();
        var bits, dual, i = 0, encOut = "";
        var linelen = 0;
        var encOut='';
        while(decStr.length >= i + 3){
            bits =    (decStr.charCodeAt(i++) & 0xff) <<16 |
                (decStr.charCodeAt(i++) & 0xff) <<8 |
                decStr.charCodeAt(i++) & 0xff;
            encOut +=
                base64chars.charAt((bits & 0x00fc0000) >>18) +
                base64chars.charAt((bits & 0x0003f000) >>12) +
                base64chars.charAt((bits & 0x00000fc0) >> 6) +
                base64chars.charAt((bits & 0x0000003f));
            linelen += 4;
            if (linelen>maxLineLength-3) {
                encOut += "\n";
                encArray.push(encOut);
                encOut='';
                linelen = 0;
            }
        }
        if(decStr.length -i > 0 && decStr.length -i < 3) {
            dual = Boolean(decStr.length -i -1);
            bits =
                ((decStr.charCodeAt(i++) & 0xff) <<16) |
                (dual ? (decStr.charCodeAt(i) & 0xff) <<8 : 0);
            encOut +=
                base64chars.charAt((bits & 0x00fc0000) >>18) +
                base64chars.charAt((bits & 0x0003f000) >>12) +
                      (dual ? base64chars.charAt((bits & 0x00000fc0) >>6) : '=') +
                      '=';
        }

        encArray.push(encOut);
        // this loop progressive concatonates the
        // array elements entil there is only one
        var ar2=new Array();
        for(;encArray.length>1;)
        {
            var l=encArray.length;
            for(var c=0;c<l;c+=2)
            {
                if(c+1==l)
                {
                    ar2.push(encArray[c]);
                }
                else
                {
                    ar2.push(''+encArray[c]+encArray[c+1]);
                }
            }
            encArray=ar2;
            ar2=new Array();
        }
        return encArray[0];
    };
    return {"encode": encode, "decode": decode};
})();


var Operator = {
    EQUALS :"$eq",
    NOT_EQUALS : "$ne",
    GREATER_THAN :"$gt",
    LESS_THAN :"$lt",
    GREATER_THAN_EQUALTO :   "$gte",
    LESS_THAN_EQUALTO :   "$lte",
    LIKE : "$lk",
    AND : "$and",
    OR :"$or",
	INLIST : "$in"
};
function checkOperatorType(operatorType){
    if(myObject.EQUALS == operatorType){
        return "$eq"
    }else if(myObject.NOT_EQUALS == operatorType){
        return "$ne"
    }else if(myObject.GREATER_THAN == operatorType){
        return "$gt"
    }else if(myObject.LESS_THAN == operatorType){
        return "$lt"
    }else if(myObject.GREATER_THAN_EQUALTO == operatorType){
        return "$gte"
    }else if(myObject.LESS_THAN_EQUALTO == operatorType){
        return "$lte"
    }else if(myObject.LIKE == operatorType){
        return "$lk"
    }else if(myObject.AND == operatorType){
        return "$and"
    }else if(myObject.OR == operatorType){
        return "$or"
    }
    else{
        return null;
    }
    
}
var GeoOperator = {
    NEAR :"$near",
    WITHIN : "$within"
};
function checkGeoOperatorType(operatorType){
    if(GeoOperator.NEAR == operatorType){
        return "$near"
    }else if(GeoOperator.WITHIN == operatorType){
        return "$within"
    }
    else{
        return null;
    }
}

function getStr(jsonArray){
    if(jsonArray instanceof Array){
		var getSting = JSON.stringify(jsonArray);
		return getSting ;
	}else{
		jsonArray = [jsonArray]
		var getSting = JSON.stringify(jsonArray);
		return getSting ;
	}
	
}
function QueryBuilder() {
    this.build = function(elementKey, elementValue, elementOperator) {
        if(elementKey != null && elementValue != null && elementValue != null){
            elementKey = elementKey.trim();
            elementOperator = elementOperator.trim();
        }
        if(elementKey == "" || elementOperator == "" || elementKey == null|| elementValue == null|| elementOperator == null){
            App42Fault.throwExceptionIfNullOrBlank(elementKey, "key")
            App42Fault.throwExceptionIfNullOrBlank(elementValue, "value")
            App42Fault.throwExceptionIfNullOrBlank(elementOperator, "operator")
            return ;
        }
		
		if(elementValue instanceof Array){
			elementValue = JSON.stringify(elementValue)
		}
		
		if(elementValue instanceof Date){
			var CDate = new Date(elementValue);
			elementValue = CDate
			console.log(elementValue)
		}
		
        var buildObj = [];
        var buildElement = {
            key: elementKey, 
            operator: elementOperator, 
            value:elementValue
        }
        buildObj.push(buildElement);
        return buildElement ;
    };
	
	this.setLoggedInUser = function(logged) {
        if(logged != null){
            logged = logged.trim();
            
        }
        if(logged == ""  || logged == null){
            App42Fault.throwExceptionIfNullOrBlank(logged, "logged")
            return ;
        }
        var buildObj = [];
        var buildElement = {
            key: "_$owner.owner", 
            operator: Operator.EQUALS, 
            value:logged
        }
        buildObj.push(buildElement);
        return buildObj ;
    };
	
	this.setCreatedOn = function(date,op) {
        var buildObj = [];
        var buildElement = {
            key: "_$createdAt", 
            operator: op, 
            value:date
        }
        buildObj.push(buildElement);
        return buildObj ;
    };
	
	this.setUpdatedOn = function(date,op) {
        var buildObj = [];
        var buildElement = {
            key: "_$updatedAt", 
            operator: op, 
            value:date
        }
        buildObj.push(buildElement);
        return buildObj ;
    };
	
	this.setDocumentId = function(docid) {
        var buildObj = [];
        var buildElement = {
            key: "_id", 
            operator: Operator.EQUALS, 
            value:docid
        }
        buildObj.push(buildElement);
        return buildObj ;
    };
	
	
    this.buildGeoQuery = function(geoTag, elementOperator,maxDistance) {
	checkGeoOperatorType(elementOperator)
        var buildObj = [];
        var buildElement = {
            lat: geoTag.getLat(), 
            lng: geoTag.getLng(), 
			operator: elementOperator, 
            maxDistance: maxDistance
        }
		
        buildObj.push(buildElement);
		
        return buildObj ;
    };
	
	
    this.compoundOperator = function(query1, operator, query2) {
         var compoundObj = []; 
        var compoundString = {
            compoundOpt: operator 
        }
		for(var i=0; i<query1.length;i++){
            //compoundObj.push(query1[i]) 
        }
		compoundObj.push(query1) 
        compoundObj.push(compoundString)
		compoundObj.push(query2)
        for(var j=0; j<query2.length;j++){
           // compoundObj.push(query2[j]) 
        }
		console.log(compoundObj)
        return compoundObj;
    };
	
}


/*
 A JavaScript implementation of the SHA family of hashes, as
 defined in FIPS PUB 180-2 as well as the corresponding HMAC implementation
 as defined in FIPS PUB 198a

 Copyright Brian Turek 2008-2013
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information

 Several functions taken from Paul Johnston
*/
'use strict';(function(A){function q(a,d,b){var f=0,e=[0],c="",g=null,c=b||"UTF8";if("UTF8"!==c&&"UTF16"!==c)throw"encoding must be UTF8 or UTF16";if("HEX"===d){if(0!==a.length%2)throw"srcString of HEX type must be in byte increments";g=t(a);f=g.binLen;e=g.value}else if("ASCII"===d||"TEXT"===d)g=v(a,c),f=g.binLen,e=g.value;else if("B64"===d)g=w(a),f=g.binLen,e=g.value;else throw"inputFormat must be HEX, TEXT, ASCII, or B64";this.getHash=function(a,b,c,d){var g=null,h=e.slice(),k=f,m;3===arguments.length?
"number"!==typeof c&&(d=c,c=1):2===arguments.length&&(c=1);if(c!==parseInt(c,10)||1>c)throw"numRounds must a integer >= 1";switch(b){case "HEX":g=x;break;case "B64":g=y;break;default:throw"format must be HEX or B64";}if("SHA-1"===a)for(m=0;m<c;m++)h=s(h,k),k=160;else throw"Chosen SHA variant is not supported";return g(h,z(d))};this.getHMAC=function(a,b,d,g,q){var h,k,m,l,r=[],u=[];h=null;switch(g){case "HEX":g=x;break;case "B64":g=y;break;default:throw"outputFormat must be HEX or B64";}if("SHA-1"===
d)k=64,l=160;else throw"Chosen SHA variant is not supported";if("HEX"===b)h=t(a),m=h.binLen,h=h.value;else if("ASCII"===b||"TEXT"===b)h=v(a,c),m=h.binLen,h=h.value;else if("B64"===b)h=w(a),m=h.binLen,h=h.value;else throw"inputFormat must be HEX, TEXT, ASCII, or B64";a=8*k;b=k/4-1;if(k<m/8){if("SHA-1"===d)h=s(h,m);else throw"Unexpected error in HMAC implementation";h[b]&=4294967040}else k>m/8&&(h[b]&=4294967040);for(k=0;k<=b;k+=1)r[k]=h[k]^909522486,u[k]=h[k]^1549556828;if("SHA-1"===d)d=s(u.concat(s(r.concat(e),
a+f)),a+l);else throw"Unexpected error in HMAC implementation";return g(d,z(q))}}function v(a,d){var b=[],f,e=[],c=0,g;if("UTF8"===d)for(g=0;g<a.length;g+=1)for(f=a.charCodeAt(g),e=[],2048<f?(e[0]=224|(f&61440)>>>12,e[1]=128|(f&4032)>>>6,e[2]=128|f&63):128<f?(e[0]=192|(f&1984)>>>6,e[1]=128|f&63):e[0]=f,f=0;f<e.length;f+=1)b[c>>>2]|=e[f]<<24-c%4*8,c+=1;else if("UTF16"===d)for(g=0;g<a.length;g+=1)b[c>>>2]|=a.charCodeAt(g)<<16-c%4*8,c+=2;return{value:b,binLen:8*c}}function t(a){var d=[],b=a.length,f,
e;if(0!==b%2)throw"String of HEX type must be in byte increments";for(f=0;f<b;f+=2){e=parseInt(a.substr(f,2),16);if(isNaN(e))throw"String of HEX type contains invalid characters";d[f>>>3]|=e<<24-f%8*4}return{value:d,binLen:4*b}}function w(a){var d=[],b=0,f,e,c,g,p;if(-1===a.search(/^[a-zA-Z0-9=+\/]+$/))throw"Invalid character in base-64 string";f=a.indexOf("=");a=a.replace(/\=/g,"");if(-1!==f&&f<a.length)throw"Invalid '=' found in base-64 string";for(e=0;e<a.length;e+=4){p=a.substr(e,4);for(c=g=0;c<
p.length;c+=1)f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(p[c]),g|=f<<18-6*c;for(c=0;c<p.length-1;c+=1)d[b>>2]|=(g>>>16-8*c&255)<<24-b%4*8,b+=1}return{value:d,binLen:8*b}}function x(a,d){var b="",f=4*a.length,e,c;for(e=0;e<f;e+=1)c=a[e>>>2]>>>8*(3-e%4),b+="0123456789abcdef".charAt(c>>>4&15)+"0123456789abcdef".charAt(c&15);return d.outputUpper?b.toUpperCase():b}function y(a,d){var b="",f=4*a.length,e,c,g;for(e=0;e<f;e+=3)for(g=(a[e>>>2]>>>8*(3-e%4)&255)<<16|(a[e+1>>>
2]>>>8*(3-(e+1)%4)&255)<<8|a[e+2>>>2]>>>8*(3-(e+2)%4)&255,c=0;4>c;c+=1)b=8*e+6*c<=32*a.length?b+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(g>>>6*(3-c)&63):b+d.b64Pad;return b}function z(a){var d={outputUpper:!1,b64Pad:"="};try{a.hasOwnProperty("outputUpper")&&(d.outputUpper=a.outputUpper),a.hasOwnProperty("b64Pad")&&(d.b64Pad=a.b64Pad)}catch(b){}if("boolean"!==typeof d.outputUpper)throw"Invalid outputUpper formatting option";if("string"!==typeof d.b64Pad)throw"Invalid b64Pad formatting option";
return d}function B(a,d){return a<<d|a>>>32-d}function C(a,d,b){return a^d^b}function D(a,d,b){return a&d^~a&b}function E(a,d,b){return a&d^a&b^d&b}function F(a,d){var b=(a&65535)+(d&65535);return((a>>>16)+(d>>>16)+(b>>>16)&65535)<<16|b&65535}function G(a,d,b,f,e){var c=(a&65535)+(d&65535)+(b&65535)+(f&65535)+(e&65535);return((a>>>16)+(d>>>16)+(b>>>16)+(f>>>16)+(e>>>16)+(c>>>16)&65535)<<16|c&65535}function s(a,d){var b=[],f,e,c,g,p,q,s=D,t=C,v=E,h=B,k=F,m,l,r=G,u,n=[1732584193,4023233417,2562383102,
271733878,3285377520];a[d>>>5]|=128<<24-d%32;a[(d+65>>>9<<4)+15]=d;u=a.length;for(m=0;m<u;m+=16){f=n[0];e=n[1];c=n[2];g=n[3];p=n[4];for(l=0;80>l;l+=1)b[l]=16>l?a[l+m]:h(b[l-3]^b[l-8]^b[l-14]^b[l-16],1),q=20>l?r(h(f,5),s(e,c,g),p,1518500249,b[l]):40>l?r(h(f,5),t(e,c,g),p,1859775393,b[l]):60>l?r(h(f,5),v(e,c,g),p,2400959708,b[l]):r(h(f,5),t(e,c,g),p,3395469782,b[l]),p=g,g=c,c=h(e,30),e=f,f=q;n[0]=k(f,n[0]);n[1]=k(e,n[1]);n[2]=k(c,n[2]);n[3]=k(g,n[3]);n[4]=k(p,n[4])}return n}"function"===typeof define&&
typeof define.amd?define(function(){return q}):"undefined"!==typeof exports?"undefined"!==typeof module&&module.exports?module.exports=exports=q:exports=q:A.jsSHA=q})(this);