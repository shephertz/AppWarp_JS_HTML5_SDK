var AppWarp;
(function (AppWarp) {
    var AllRoomsEvent = (function () {
        function AllRoomsEvent(result, payload) {
            this.json = JSON.parse(payload);
            this.res = result;
        }
        AllRoomsEvent.prototype.getResult = function () {
            return this.res;
        };

        AllRoomsEvent.prototype.getRoomIds = function () {
            var roomIds = this.json.ids;
            var roomIdsArray = roomIds.split(";");
            if (roomIdsArray.length > 0) {
                roomIdsArray.pop();
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
            this.json = JSON.parse(payload);
            this.res = result;
        }
        AllUsersEvent.prototype.getResult = function () {
            return this.res;
        };

        AllUsersEvent.prototype.getUsernames = function () {
            var usernames = this.json.names;
            var userNamesArray = usernames.split(";");
            if (userNamesArray.length > 0) {
                userNamesArray.pop();
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
        RequestType[RequestType["PrivateChat"] = 30] = "PrivateChat";
        RequestType[RequestType["Move"] = 31] = "Move";
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
        ResultCode[ResultCode["ApiNotFound"] = 8] = "ApiNotFound";
    })(AppWarp.ResultCode || (AppWarp.ResultCode = {}));
    var ResultCode = AppWarp.ResultCode;

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
    })(AppWarp.UpdateType || (AppWarp.UpdateType = {}));
    var UpdateType = AppWarp.UpdateType;

    (function (Constants) {
        Constants[Constants["MaxPropertySizeBytes"] = 2048] = "MaxPropertySizeBytes";
        Constants[Constants["AssocPort"] = 64] = "AssocPort";
    })(AppWarp.Constants || (AppWarp.Constants = {}));
    var Constants = AppWarp.Constants;
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

        Events[Events["onRoomCreated"] = 23] = "onRoomCreated";
        Events[Events["onRoomDestroyed"] = 24] = "onRoomDestroyed";
        Events[Events["onUserLeftRoom"] = 25] = "onUserLeftRoom";
        Events[Events["onUserJoinedRoom"] = 26] = "onUserJoinedRoom";
        Events[Events["onUserLeftLobby"] = 27] = "onUserLeftLobby";
        Events[Events["onUserJoinedLobby"] = 28] = "onUserJoinedLobby";
        Events[Events["onChatReceived"] = 29] = "onChatReceived";
        Events[Events["onUpdatePeersReceived"] = 30] = "onUpdatePeersReceived";
        Events[Events["onUserChangeRoomProperty"] = 31] = "onUserChangeRoomProperty";
        Events[Events["onPrivateChatReceived"] = 32] = "onPrivateChatReceived";
        Events[Events["onMoveCompleted"] = 33] = "onMoveCompleted";

        Events[Events["onSendChatDone"] = 34] = "onSendChatDone";
        Events[Events["onSendPrivateChatDone"] = 35] = "onSendPrivateChatDone";
        Events[Events["onSendUpdateDone"] = 36] = "onSendUpdateDone";

        Events[Events["onSendMoveDone"] = 37] = "onSendMoveDone";
    })(AppWarp.Events || (AppWarp.Events = {}));
    var Events = AppWarp.Events;
})(AppWarp || (AppWarp = {}));
var AppWarp;
(function (AppWarp) {
    var LiveRoom = (function () {
        function LiveRoom(result, payload) {
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
            var userNameArray = usernames.split(";");
            if (userNameArray.length > 0) {
                userNameArray.pop();
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
        return LiveUser;
    })();
    AppWarp.LiveUser = LiveUser;
})(AppWarp || (AppWarp = {}));
var AppWarp;
(function (AppWarp) {
    var Lobby = (function () {
        function Lobby(result, payload) {
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

            if (payload.length > 0 && requestType != AppWarp.RequestType.UpdatePeers) {
                bytearray[11] = AppWarp.PayloadType.Json;
            } else {
                bytearray[11] = AppWarp.PayloadType.Binary;
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

        RequestBuilder.buildAuthRequest = function (apiKey, secreteKey, user) {
            var timeStamp = AppWarp.Utility.getODataUTCDateFilter();
            var params = "";
            params += "apiKey" + apiKey;
            params += "timeStamp" + timeStamp;
            params += "user" + user;
            params += "version" + "JS_1.2";

            var hmac = AppWarp.CryptoJS.HmacSHA1(params, secreteKey).toString();
            var signature = encodeURIComponent(AppWarp.Utility.base64_encode(AppWarp.Utility.hex2bin(hmac)));

            var json = {};
            json.apiKey = apiKey;
            json.version = "JS_1.2";
            json.timeStamp = timeStamp;
            json.user = user;
            json.signature = signature;
            json.keepalive = 6;

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
            if (typeof removeArray === "undefined") { removeArray = null; }
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
            if (typeof properties === "undefined") { properties = null; }
            if (typeof turnTime === "undefined") { turnTime = -1; }
            var params = {};
            params.name = name;
            params.owner = owner;
            params.maxUsers = maxUsers;

            if (properties != null)
                params.addOrUpdate = properties;

            if (turnTime >= 0)
                params.turnTime = turnTime;

            return JSON.stringify(params);
        };

        RequestBuilder.buildSendMoveRequest = function (move) {
            var params = {};
            params.moveData = move;
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
            console.log("resultCode  : " + this.getResultCode());
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
            this.responseCallbacks = [];
            this.updateCallbacks = [];
            this.SessionID = 0;
            this.isConnected = false;
            this.timeout = 0;
            if (WarpClient.instance) {
                throw new Error("Error: Instantiation failed: Use WarpClient.getInstance() instead of new.");
            }
            WarpClient.instance = this;

            setInterval(function () {
                if (this.AppWarp.WarpClient.instance.isConnected == true) {
                    var time = (new Date()).getTime();
                    var diff = time - this.AppWarp.WarpClient.instance.timeout;

                    if (diff > 2000) {
                        var data = this.AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.KeepAlive, "", true);
                        this.AppWarp.WarpClient.instance.sendMessage(data.buffer);
                    }
                }
            }, 500);
        }
        WarpClient.initialize = function (API_KEY, Secret_KEY, server) {
            if (typeof server === "undefined") { server = ""; }
            WarpClient.apiKey = API_KEY;
            WarpClient.secretKey = Secret_KEY;
            WarpClient.serverAddress = server;
        };

        WarpClient.getInstance = function () {
            if (WarpClient.instance == null)
                WarpClient.instance = new WarpClient();

            return WarpClient.instance;
        };

        WarpClient.prototype.sendMessage = function (data) {
            this.socket.send(data);
            this.timeout = (new Date()).getTime();
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
            if (res.getRequestType() == AppWarp.RequestType.Auth) {
                if (res.getResultCode() == AppWarp.ResultCode.Success) {
                    var json = JSON.parse(res.getPayloadString());
                    this.SessionID = json.sessionid;

                    this.isConnected = true;
                } else {
                    this.isConnected = false;
                }

                if (this.responseCallbacks[AppWarp.Events.onConnectDone])
                    this.responseCallbacks[AppWarp.Events.onConnectDone](res.getResultCode());
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
            } else if (res.getRequestType() == AppWarp.RequestType.LeaveRoom) {
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
            } else if (res.getRequestType() == AppWarp.RequestType.SetCustomUserData) {
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
            } else if (res.getRequestType() == AppWarp.RequestType.GetRoomInRange || res.getRequestType() == AppWarp.RequestType.GetRoomWithProperties) {
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
            }

            return 9 + res.getPayloadSize();
        };

        WarpClient.prototype.handleNotify = function (res) {
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
            }

            return 8 + res.getPayloadSize();
        };

        WarpClient.prototype.joinZone = function (user) {
            var payload = AppWarp.RequestBuilder.buildAuthRequest(WarpClient.apiKey, WarpClient.secretKey, user);
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

        WarpClient.prototype.connect = function (user) {
            if (WarpClient.serverAddress == "") {
                var xmlHttp = new XMLHttpRequest();
                var that = this;
                xmlHttp.onreadystatechange = function () {
                    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                        var res = JSON.parse(xmlHttp.responseText);

                        if (res.address) {
                            that.socket = new WebSocket("ws://" + res.address + ":12346");
                            that.socket.binaryType = "arraybuffer";

                            that.socket.onopen = function () {
                                if (user) {
                                    that.joinZone(user);
                                } else {
                                    if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                                        that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.BadRequest);
                                }
                            };

                            that.socket.onclose = function () {
                                that.isConnected = false;
                                if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                                    that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.ConnectionError);
                            };

                            that.socket.onmessage = function (msg) {
                                that.onMessage(msg);
                            };
                        }
                    } else if (xmlHttp.readyState == 4 && xmlHttp.status == 404) {
                        if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                            that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.ApiNotFound);
                    }
                };
                xmlHttp.open("GET", "http://control.appwarp.shephertz.com/lookup?api=" + WarpClient.apiKey, true);
                xmlHttp.send();
            } else {
                this.socket = new WebSocket("ws://" + WarpClient.serverAddress + ":12346");
                this.socket.binaryType = "arraybuffer";
                var that = this;
                this.socket.onopen = function () {
                    if (user) {
                        that.joinZone(user);
                    } else {
                        if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                            that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.BadRequest);
                    }
                };

                this.socket.onclose = function () {
                    that.isConnected = false;
                    if (that.responseCallbacks[AppWarp.Events.onConnectDone])
                        that.responseCallbacks[AppWarp.Events.onConnectDone](AppWarp.ResultCode.ConnectionError);
                };

                this.socket.onmessage = function (msg) {
                    that.onMessage(msg);
                };
            }
        };

        WarpClient.prototype.disconnect = function () {
            this.isConnected = false;
            this.socket.onclose = function () {
            };
            this.socket.close();
            if (this.responseCallbacks[AppWarp.Events.onDisconnectDone])
                this.responseCallbacks[AppWarp.Events.onDisconnectDone](AppWarp.ResultCode.Success);
        };

        WarpClient.prototype.joinLobby = function () {
            var payload = AppWarp.RequestBuilder.buildLobbyRequest();
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.JoinLobby, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.subscribeLobby = function () {
            var payload = AppWarp.RequestBuilder.buildLobbyRequest();
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.SubscribeLobby, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.unsubscribeLobby = function () {
            var payload = AppWarp.RequestBuilder.buildLobbyRequest();
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.UnsubscribeLobby, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.leaveLobby = function () {
            var payload = AppWarp.RequestBuilder.buildLobbyRequest();
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.LeaveLobby, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.joinRoom = function (roomId) {
            var payload = AppWarp.RequestBuilder.buildRoomRequest(roomId);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.JoinRoom, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.joinRoomInRange = function (minUsers, maxUsers, maxPreferred) {
            var payload = AppWarp.RequestBuilder.buildRoomInRangeRequest(minUsers, maxUsers, maxPreferred);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.JoinRoomInRange, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.joinRoomWithProperties = function (properties) {
            var payload = AppWarp.RequestBuilder.buildRoomWithPropertiesRequest(properties);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.JoinRoomWithProperties, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.subscribeRoom = function (roomId) {
            var payload = AppWarp.RequestBuilder.buildRoomRequest(roomId);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.SubscribeRoom, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.unsubscribeRoom = function (roomId) {
            var payload = AppWarp.RequestBuilder.buildRoomRequest(roomId);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.UnsubscribeRoom, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.leaveRoom = function (roomId) {
            var payload = AppWarp.RequestBuilder.buildRoomRequest(roomId);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.LeaveRoom, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.createRoom = function (name, owner, max, properties) {
            if (typeof properties === "undefined") { properties = null; }
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
            var payload = AppWarp.RequestBuilder.buildRoomRequest(roomId);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.DeleteRoom, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.getLiveRoomInfo = function (roomId) {
            var payload = AppWarp.RequestBuilder.buildRoomRequest(roomId);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetRoomInfo, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.getLiveLobbyInfo = function () {
            var payload = AppWarp.RequestBuilder.buildLobbyRequest();
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetLobbyInfo, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.getLiveUserInfo = function (username) {
            var payload = AppWarp.RequestBuilder.buildUserRequest(username);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetUserInfo, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.setCustomUserData = function (user, customData) {
            var payload = AppWarp.RequestBuilder.buildSetCustomUserDataRequest(user, customData);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.SetCustomUserData, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.setCustomRoomData = function (room, customData) {
            var payload = AppWarp.RequestBuilder.buildSetCustomRoomDataRequest(room, customData);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.SetCustomRoomData, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.getOnlineUsers = function () {
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetUsers, "", true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.getAllRooms = function () {
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetRooms, "", true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.getRoomsInRange = function (minUsers, maxUsers) {
            var payload = AppWarp.RequestBuilder.buildRoomInRangeRequest(minUsers, maxUsers, true);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetRoomInRange, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.getRoomsWithProperties = function (properties) {
            var payload = AppWarp.RequestBuilder.buildRoomWithPropertiesRequest(properties);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.GetRoomWithProperties, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.sendChat = function (msg) {
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
            if (bytes.length >= 512) {
                if (this.responseCallbacks[AppWarp.Events.onSendUpdateDone])
                    this.responseCallbacks[AppWarp.Events.onSendUpdateDone](AppWarp.ResultCode.BadRequest);
            } else {
                var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.UpdatePeers, bytes, false);
                this.sendMessage(data.buffer);
            }
        };

        WarpClient.prototype.sendPrivateChat = function (user, msg) {
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
            if (typeof remove === "undefined") { remove = null; }
            var payload = AppWarp.RequestBuilder.buildUpdateRoomPropertiesRequest(roomId, properties, remove);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.UpdateRoomProperty, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.lockProperties = function (properties) {
            var payload = AppWarp.RequestBuilder.buildLockPropertiesRequest(properties);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.LockProperties, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.unlockProperties = function (properties) {
            var payload = AppWarp.RequestBuilder.buildUnlockPropertiesRequest(properties);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.UnlockProperties, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.createTurnRoom = function (name, owner, maxUsers, properties, turnTime) {
            var payload = AppWarp.RequestBuilder.buildCreateTurnRoomRequest(name, owner, maxUsers, properties, turnTime);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.CreateRoom, payload, true);
            this.sendMessage(data.buffer);
        };

        WarpClient.prototype.sendMove = function (moveData) {
            var payload = AppWarp.RequestBuilder.buildSendMoveRequest(moveData);
            var data = AppWarp.RequestBuilder.buildWarpRequest(this.SessionID, AppWarp.RequestType.Move, payload, true);
            this.sendMessage(data.buffer);
        };
        WarpClient.instance = null;
        return WarpClient;
    })();
    AppWarp.WarpClient = WarpClient;
})(AppWarp || (AppWarp = {}));
