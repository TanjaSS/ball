var g = 400;
var t = 0;

function moveBall() {
    var s = g * t * t / 2;
    $("#ball").css("margin-top", s);
}

function updateTime() {
    t = t + 0.01;
    moveBall();
}

$(function() {
    window.setInterval(updateTime, 10);
});