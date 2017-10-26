
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

    clickArray.push(clickPosition);
}


$('#btnStart').click(function () {
    $.ajax({
        type: "POST",
        url: "/home/Start",
        data: {
            name: "TEST1",
            coordinates: clickArray
        },
        contentTyp: 'application/json',
    }).always(function () {
        //redraw();
    })
});

function redraw() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 5;

    for (var i = 0; i < clickArray.length; i++) {
        context.beginPath();
        context.moveTo(clickArray[i].XPosition - 1, clickArray[i].YPosition);
        context.lineTo(clickArray[i].XPosition, clickArray[i].YPosition);
        context.closePath();
        context.lineWidth = 10;
        context.stroke();
    }
}
