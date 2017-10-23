
var canvas = document.getElementById('testCanvas');
var context = canvas.getContext('2d');
var clickX = new Array();
var clickY = new Array();
var clickArray = new Array();


$('#testCanvas').mousedown(function (e) {
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;

    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    redraw();
});

function addClick(x, y) {
    for (var i = 0; i < 50; i++) {
        if (i*10 < x && x < i*10 + 10) {
            x = 10 * (i + 1);
            break;
        }
    }
    for (var i = 0; i < 50; i++) {
        if (i * 10 < y && y < i * 10 + 10) {
            y = 10 * (i + 1);
            break;
        }
    }

    var clickPosition = { XPosition: x, YPosition: y };
    //var position = clickArray.filter(function (cp) {
    //    return ((cp.xPos == x) && (cp.yPos == y))
    //});

    //if (position != 0) {
    //    clickArray.splice(position, 1);
    //} else {
        clickArray.push(clickPosition);
    //}

    //var arrPosX = $.inArray(x, clickX);
    //var arrPosY = $.inArray(y, clickY);

    //if ((arrPosX != -1) && (arrPosY != -1) && (arrPosX == arrPosY)) {
    //    clickX.splice(arrPosX, 1); 
    //    clickY.splice(arrPosY, 1);
    //} else {
    //    clickX.push(x);
    //    clickY.push(y);
    //    clickArray.push(clickPosition);
    //}


}

function redraw() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 5;

    //for (var i = 0; i < clickX.length; i++) {
    for (var i = 0; i < clickArray.length; i++) {
        context.beginPath();
        //context.moveTo(clickX[i] - 1, clickY[i]);
        //context.lineTo(clickX[i], clickY[i]);
        context.moveTo(clickArray[i].XPosition - 1, clickArray[i].YPosition);
        context.lineTo(clickArray[i].XPosition, clickArray[i].YPosition);
        context.closePath();
        context.lineWidth = 10;
        context.stroke();
    }
}

$('#btnStart').click(function(){
    $.post({
        url: "/home/Start",
        data: {
            name: "TEST1",
            coordinates: clickArray
        },
        contentTyp: 'application/json',
        success: function () {
            $.redraw();

        }
    });
});

//function writeMessage(canvas, message) {
//    context.clearRect(0, 0, canvas.width, canvas.height);
//    context.font = '18pt Calibri';
//    context.fillStyle = 'black';
//    context.fillText(message, 10, 250);
//}
//function getMousePos(canvas, evt) {
//    var rect = canvas.getBoundingClientRect();
//    return {
//        x: evt.clientX - rect.left,
//        y: evt.clientY - rect.top
//    };
//}

//function getMousePositionClicked(canvas, evt) {
//    var rect = canvas.getBoundingClientRect();
//    return {
//        x: evt.pageX,
//        y: evt.pageY
//    };
//}

//canvas.addEventListener('mousedown', function (evt) {
//    var mousePos = getMousePositionClicked(canvas, evt);
//    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//    writeMessage(canvas, message);
//}, false);


//canvas.addEventListener('mousemove', function (evt) {
//    var mousePos = getMousePos(canvas, evt);
//    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//    //writeMessage(canvas, message);
//}, false);