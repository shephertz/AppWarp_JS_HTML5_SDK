// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());

            prepareAppWarp();
          
            $('#enterVirtualWorldButton').click(function () {
                var userName = $('#username').val();
                WarpClient.joinZone(userName);
                local_username = userName;
            });
            $('#jungleButtonId').click(function () {
                WarpClient.joinRoom(jungle_roomId);
            });

            document.getElementById("upClickedId").addEventListener("click", upButtonClickHandler, false);
            document.getElementById("downClickedId").addEventListener("click", downButtonClickHandler, false);
            document.getElementById("rightClickedId").addEventListener("click", rightButtonClickHandler, false);
            document.getElementById("leftClickedID").addEventListener("click", leftButtonClickHandler, false);

            document.getElementById("gameOverButton").addEventListener("click", gameOverButtonClickHandler, false);

        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };


    function upButtonClickHandler(eventInfo) {
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

    function downButtonClickHandler(eventInfo) {
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

    function rightButtonClickHandler(eventInfo) {
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

    function leftButtonClickHandler(eventInfo) {
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

    function gameOverButtonClickHandler(eventInfo) {
        gameOverButtonClicked = true;
        document.getElementById('gameOverButton').style.display = "none";
        document.getElementById('jungleButtonId').style.display = "block";
    }

    app.start();
})();
