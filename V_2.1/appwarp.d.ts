declare module AppWarp {
    class AllRoomsEvent {
        private json;
        private res;
        constructor(result: number, payload?: string);
        public getResult(): number;
        public getRoomIds(): any[];
    }
}
declare module AppWarp {
    class AllUsersEvent {
        private json;
        private res;
        constructor(result: number, payload?: string);
        public getResult(): number;
        public getUsernames(): any[];
    }
}
declare module AppWarp {
    class Chat {
        private json;
        private res;
        constructor(payload?: string);
        public getChat();
        public getSender();
        public getLocId();
        public getIsLocationLobby(): boolean;
    }
}
declare module AppWarp {
    enum RequestType {
        Auth = 1,
        JoinLobby = 2,
        SubscribeLobby = 3,
        UnsubscribeLobby = 4,
        LeaveLobby = 5,
        CreateRoom = 6,
        JoinRoom = 7,
        SubscribeRoom = 8,
        UnsubscribeRoom = 9,
        LeaveRoom = 10,
        DeleteRoom = 11,
        Chat = 12,
        UpdatePeers = 13,
        Signout = 14,
        CreateZone = 15,
        DeleteZone = 16,
        GetRooms = 17,
        GetUsers = 18,
        GetUserInfo = 19,
        GetRoomInfo = 20,
        SetCustomRoomData = 21,
        SetCustomUserData = 22,
        GetLobbyInfo = 23,
        JoinRoomWithNUser = 24,
        UpdateRoomProperty = 25,
        JoinRoomWithProperties = 27,
        GetRoomWithNUser = 28,
        GetRoomWithProperties = 29,
        JoinRoomInRange = 37,
        GetRoomInRange = 38,
        LockProperties = 35,
        UnlockProperties = 36,
        KeepAlive = 63,
        AssocPort = 64,
        AssocPortAck = 65,
        PrivateChat = 30,
        Move = 31,
        PrivateUpdate = 32,
        StartGame = 66,
        StopGame = 67,
        GetMoveHistory = 68,
        SetNextTurn = 69,
    }
    enum PayloadType {
        FlatString = 0,
        Binary = 1,
        Json = 2,
    }
    enum MessageType {
        Request = 0,
        Response = 1,
        Update = 2,
    }
    enum ResultCode {
        Success = 0,
        AuthError = 1,
        ResourceNotFound = 2,
        ResourceMoved = 3,
        BadRequest = 4,
        ConnectionError = 5,
        UnknownError = 6,
        ResultSizeError = 7,
        SuccessRecovered = 8,
        ConnectionErrorRecoverable = 9,
        UserPausedError = 10,
    }
    enum ReasonCode {
        WaitingForPausedUser = 21,
        InvalidAPIKey = 22,
    }
    enum UpdateType {
        RoomCreated = 1,
        RoomDeleted = 2,
        UserJoinedLobby = 3,
        UserLeftLobby = 4,
        UserJoinedRoom = 5,
        UserLeftRoom = 6,
        UserOnline = 7,
        UserOffline = 8,
        Chat = 9,
        UpdatePeers = 10,
        RoomPropertyChange = 11,
        PrivateChat = 12,
        MoveCompleted = 13,
        UserPaused = 14,
        UserResumed = 15,
        GameStarted = 16,
        GameStopped = 17,
        PrivateUpdate = 18,
        NextTurnRequested = 19,
    }
    enum Constants {
        MaxPropertySizeBytes = 2048,
    }
    enum ConnectionState {
        Connected = 0,
        Connecting = 1,
        Disconnected = 2,
        Disconnecting = 3,
        Recovering = 4,
    }
}
declare module AppWarp {
    enum Events {
        onConnectDone,
        onDisconnectDone,
        onJoinLobbyDone,
        onLeaveLobbyDone,
        onSubscribeLobbyDone,
        onUnsubscribeLobbyDone,
        onGetLiveLobbyInfoDone,
        onSubscribeRoomDone,
        onUnsubscribeRoomDone,
        onJoinRoomDone,
        onLeaveRoomDone,
        onGetLiveRoomInfoDone,
        onSetCustomRoomDataDone,
        onUpdatePropertyDone,
        onLockPropertiesDone,
        onUnlockPropertiesDone,
        onCreateRoomDone,
        onDeleteRoomDone,
        onGetAllRoomsDone,
        onGetOnlineUsersDone,
        onGetLiveUserInfoDone,
        onSetCustomUserDataDone,
        onGetMatchedRoomsDone,
        onRoomCreated,
        onRoomDestroyed,
        onUserLeftRoom,
        onUserJoinedRoom,
        onUserLeftLobby,
        onUserJoinedLobby,
        onChatReceived,
        onUpdatePeersReceived,
        onUserChangeRoomProperty,
        onPrivateChatReceived,
        onPrivateUpdateReceived,
        onMoveCompleted,
        onGameStarted,
        onGameStopped,
        onUserPaused,
        onUserResumed,
        onSendChatDone,
        onSendPrivateChatDone,
        onSendUpdateDone,
        onSendPrivateUpdateDone,
        onSendMoveDone,
        onStartGameDone,
        onStopGameDone,
        onGetMoveHistoryDone,
        onSetNextTurnDone,
        onNextTurnRequested,
    }
}
declare module AppWarp {
    class LiveRoom {
        private json;
        private res;
        constructor(result: number, payload?: string);
        public getResult(): number;
        public getRoom(): AppWarp.Room;
        public getCustomData();
        public getProperties();
        public getUsers(): any[];
    }
}
declare module AppWarp {
    class LiveUser {
        private json;
        private res;
        constructor(result: number, payload?: string);
        public getResult(): number;
        public getName();
        public getLocationId();
        public getCustomData();
        public isLobby();
        public isPaused();
    }
}
declare module AppWarp {
    class Lobby {
        private json;
        private res;
        constructor(result: number, payload?: string);
        public getResult(): number;
        public getLobbyId();
        public getOwner();
        public getName();
        public getIsPrimary();
        public getMaxUsers();
    }
}
declare module AppWarp {
    class MatchedRoomEvent {
        private json;
        private res;
        constructor(result: number, payload?: string);
        public getResult(): number;
        public getRooms(): any[];
    }
}
declare module AppWarp {
    class Move {
        private json;
        constructor(payload: string);
        public getSender();
        public getNextTurn();
        public getMoveData();
        public getRoomId(): void;
    }
}
declare module AppWarp {
    class Notify {
        private messageType;
        private updateType;
        private reserved;
        private payLoadType;
        private payLoadSize;
        private payLoad;
        constructor(responseBytes: Uint8Array, startIndex: number);
        public getMessageType(): number;
        public getUpdateType(): number;
        public getPayloadType(): number;
        public getPayloadSize(): number;
        public getPayload(): Uint8Array;
        public getPayloadString(): string;
        public debug(): void;
    }
}
declare module AppWarp {
    class RequestBuilder {
        static buildWarpRequest(AppWarpSessionId: number, requestType: number, payload: any, isText: boolean): Uint8Array;
        static buildAuthRequest(recovery: number, apiKey: string, secreteKey: string, user: string): string;
        static buildLobbyRequest(): string;
        static buildChatRequest(msg: string): string;
        static buildPrivateChatRequest(user: string, msg: string): string;
        static buildPrivateUpdateRequest(user: string, msg: Uint8Array): Uint8Array;
        static buildRoomRequest(roomId: string): string;
        static buildUserRequest(username: string): string;
        static buildRoomInRangeRequest(minUsers: number, maxUsers: number, maxPreferred: boolean): string;
        static buildRoomWithPropertiesRequest(properties: any): string;
        static buildSetCustomRoomDataRequest(room: string, customData: string): string;
        static buildSetCustomUserDataRequest(user: string, customData: string): string;
        static buildUpdateRoomPropertiesRequest(roomId: string, properties: any, removeArray?: string[]): string;
        static buildLockPropertiesRequest(properties: any): string;
        static buildUnlockPropertiesRequest(properties: string[]): string;
        static buildCreateTurnRoomRequest(name: string, owner: string, maxUsers: number, properties?: any, turnTime?: number): string;
        static buildStartGameRequest(isDefaultLogic: boolean, turnUser: string): string;
        static buildSetNextTurnRequest(nextTurn: string): string;
        static buildSendMoveRequest(move: string, nextTurn: string): string;
        static buildGetMoveHistoryRequest(): string;
    }
}
declare module AppWarp {
    class Response {
        private messageType;
        private requestType;
        private resultCode;
        private reserved;
        private payLoadType;
        private payLoadSize;
        private payLoad;
        constructor(responseBytes: Uint8Array, startIndex: number);
        public getMessageType(): number;
        public getRequestType(): number;
        public getResultCode(): number;
        public getPayloadType(): number;
        public getPayloadSize(): number;
        public getPayload(): Uint8Array;
        public getPayloadString(): string;
        public debug(): void;
    }
}
declare module AppWarp {
    class Room {
        private json;
        private res;
        constructor(result: number, payload?: string);
        public getResult(): number;
        public getRoomId();
        public getOwner();
        public getName();
        public getMaxUsers();
    }
}
declare module AppWarp {
    class Utility {
        static getODataUTCDateFilter(): string;
        static hex2bin(hex);
        static base64_encode(data);
        static bin2String(array: Uint8Array): string;
        static bytesToIntger(bytes, offset): number;
    }
}
declare module AppWarp {
    class WarpClient {
        private LOOKUP_ADDRESS;
        private LOOKUP_ADDRESS_DNS;
        private static instance;
        private static apiKey;
        private static secretKey;
        private static serverAddress;
        private static recoveryAllowance;
        private static geoLocation;
        private responseCallbacks;
        private updateCallbacks;
        private socket;
        private SessionID;
        private lastSendTime;
        private userName;
        private keepAliveInterval;
        private pendingKeepAliveIntervalsLimit;
        private countPendingKeepAlives;
        private connectionState;
        private enableLogs;
        private useSSL;
        constructor();
        static initialize(API_KEY: string, Secret_KEY: string, server?: string): void;
        static terminate(): void;
        static getInstance(): WarpClient;
        private sendMessage(data);
        private onMessage(msg);
        private handleResponse(res);
        private handleNotify(res);
        private joinZone(user);
        public setResponseListener(evnt: number, callback: Function): void;
        public resetResponseListener(evnt: number): void;
        public setNotifyListener(evnt: number, callback: Function): void;
        public resetNotifyListener(evnt: number): void;
        private _connect(user);
        public setGeoLocation(location: string): void;
        public connect(user: string): void;
        public disconnect(): void;
        public joinLobby(): void;
        public subscribeLobby(): void;
        public unsubscribeLobby(): void;
        public leaveLobby(): void;
        public joinRoom(roomId: string): void;
        public joinRoomInRange(minUsers: number, maxUsers: number, maxPreferred: boolean): void;
        public joinRoomWithProperties(properties: any): void;
        public subscribeRoom(roomId: string): void;
        public unsubscribeRoom(roomId: string): void;
        public leaveRoom(roomId: string): void;
        public createRoom(name: string, owner: string, max: number, properties?: any): void;
        public deleteRoom(roomId: string): void;
        public getLiveRoomInfo(roomId: string): void;
        public getLiveLobbyInfo(): void;
        public getLiveUserInfo(username: string): void;
        public setCustomUserData(user: string, customData: string): void;
        public setCustomRoomData(room: string, customData: string): void;
        public getOnlineUsers(): void;
        public getAllRooms(): void;
        public getRoomsInRange(minUsers: number, maxUsers: number): void;
        public getRoomsWithProperties(properties: any): void;
        public sendChat(msg: string): void;
        public sendUpdatePeers(bytes: Uint8Array): void;
        public sendPrivateUpdatePeers(to: string, bytes: Uint8Array): void;
        public sendPrivateChat(user: string, msg: string): void;
        public updateRoomProperties(roomId: string, properties: any, remove?: string[]): void;
        public lockProperties(properties: any): void;
        public unlockProperties(properties: string[]): void;
        public createTurnRoom(name: string, owner: string, maxUsers: number, properties: any, turnTime: number): void;
        public sendMove(moveData: string, nextTurn?: string): void;
        public startGame(isDefaultLogic?: boolean, turnUser?: string): void;
        public stopGame(): void;
        public getMoveHistory(): void;
        public setNextTurn(nextTurn: string): void;
        public setRecoveryAllowance(time: number): void;
        public recoverConnection(): void;
        public getSessionID(): number;
        public recoverConnectionWithSessionID(sessionID: number, userName: string): void;
        public enableTrace(enable: boolean): void;
        public getConnectionState(): number;
        public enableSSL(enable: boolean): void;
        private getControlLookup();
    }
}
