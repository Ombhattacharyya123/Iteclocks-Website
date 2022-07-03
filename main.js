window.addEventListener("mousedown",my_mouseDown)
var mouseEvent = "empty"

function my_mousedown(e) {
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseUP", my_mouseup)

function my_mouseup(e) {
    mouseEvent = "mouseUP";
}

