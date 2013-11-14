var gravity = 400;
var time = 0;
var height = $(window).height();
var ballHeight;

function moveBall() {
    var position = gravity * time * time / 2;
    
    if(position + ballHeight < height) {
        $("#ball").css("margin-top", position);
    }
}

function updateTime() {
    time = time + 0.01;
    moveBall();
}

$(function() {
    ballHeight = $("#ball").height();
    window.setInterval(updateTime, 10);
});