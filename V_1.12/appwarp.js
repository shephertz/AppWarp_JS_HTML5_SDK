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
        RequestType[RequestType["JoinAndSubcribeRoom"] = 75] = "JoinAndSubcribeRoom";
        RequestType[RequestType["LeaveAndUnsucribeRoom"] = 76] = "LeaveAndUnsucribeRoom";
    })(AppWarp.RequestType || (AppWarp.RequestType = {}));
    var RequestType = AppWarp.RequestType;

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
            } else {
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
            params += "version" + "JS_1.12";

            var hmac = AppWarp.CryptoJS.HmacSHA1(params, secreteKey).toString();
            var signature = encodeURIComponent(AppWarp.Utility.base64_encode(AppWarp.Utility.hex2bin(hmac)));

            var json = {};
            json.apiKey = apiKey;
            json.version = "JS_1.12";
            json.timeStamp = timeStamp;
            json.user = user;
            json.signature = signature;
            json.keepalive = 6;
            json.recoverytime = recovery;

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
            else if (res.getRequestType() == AppWarp.RequestType.JoinAndSubcribeRoom) {
                var _room = new AppWarp.Room(res.getResultCode(), res.getPayloadString());

                if (this.responseCallbacks[AppWarp.Events.onJoinAndSubscribeRoomDone])
                    this.responseCallbacks[AppWarp.Events.onJoinAndSubscribeRoomDone](_room);
            } 
            else if (res.getRequestType() == AppWarp.RequestType.LeaveAndUnsucribeRoom) {
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
        WarpClient.prototype.joinAndSubcribeRoom = function (roomId) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _room = new AppWarp.Room(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onJoinAndSubscribeRoomDone])
                    this.responseCallbacks[AppWarp.Events.onJoinAndSubscribeRoomDone](_room);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildRoomRequest(roomId);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.JoinAndSubcribeRoom, payload, true);
            this.sendMessage(data.buffer);
        };
		
        WarpClient.prototype.leaveAndUnsucribeRoom = function (roomId) {
            if (this.connectionState != AppWarp.ConnectionState.Connected) {
                var _room = new AppWarp.Room(AppWarp.ResultCode.BadRequest);
                if (this.responseCallbacks[AppWarp.Events.onLeaveAndUnsubscribeRoomDone])
                    this.responseCallbacks[AppWarp.Events.onLeaveAndUnsubscribeRoomDone](_room);

                return;
            }

            var payload = AppWarp.RequestBuilder.buildRoomRequest(roomId);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.LeaveAndUnsucribeRoom, payload, true);
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