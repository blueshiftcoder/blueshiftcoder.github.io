$(function() {

	var elem = document.body;
	var params = {fullscreen: true, autostart: true};
	var two = new Two(params).appendTo(elem);

	var w = two.width;
	var h = two.height;

	var mouseX;
	var mouseY;

	var background = two.makeRectangle(w/2, h/2, w, h);
	
	background.noStroke();
	background.fill = 'rgb(0, 255, 230)';
var face = two.makeRectangle(w/2, h/2, 200, 200);
face.fill = 'rgb(210, 210, 210)';
var eye  = two.makeRectangle(w/2, (h/2)-30, 40, 40);
var pupil = two.makeRectangle(w/2, (h/2)-30, 10, 10);
pupil.fill = 'rgb(0, 0, 0)';
eye.fill = 'rgb(255, 150, 0)';
var mouth =two.makeRectangle(w/2, (h/2)+70, 80, 30); 
var antenna = two.makeRectangle(w/2, (h/2)-100-40, 10, 80);
var dot =two.makeRectangle(w/2, (h/2)-100-85, 10,10);
dot.fill = 'rgb(255, 0, 0)';
	$( document ).on( "mousemove", function( event ) {
	});

	two.bind('update', function(){
	});
});