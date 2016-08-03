$(function() {

	var elem = document.body;
	var params = {fullscreen: true, autostart: true};
	var two = new Two(params).appendTo(elem);

	var w = two.width;
	var h = two.height;

	var background = two.makeRectangle(w/2, h/2, w, h);
	background.noStroke();
	background.fill = 'rgb(0, 120, 80)';

	var circle = two.makeCircle(w/2, h/2,  100);
	circle.noStroke();
	circle.fill = 'rgb(255, 50, 0)';

var rect = two.makeRectangle(w/2, h/2, 100, 100);
rect.noStroke();
rect.fill= 'rgb(0, 120, 80)';

var strip1 = two.makeRectangle( (w/2)+400, -200, 20, 400);
strip1.noStroke();
strip1.fill = 'rgb(0, 0, 0) '

var strip2 = two.makeRectangle( (w/2)-400, h+200, 20, 400);
strip2.noStroke();
strip2.fill = 'rgb(0, 0, 0) '


	two.bind('update', function() {
		circle.scale  *= 1.1;
		if (circle.scale >= 2.5) {
			circle.scale=1;
		};
		rect.rotation += 0.1
		if(strip1.translation.y > h+200) {
			strip1.translation.y = -200
		}
		strip1.translation.y += 10;

		if (strip2.translation.y < -200) {
			strip2.translation.y = h+200
		};

		strip2.translation.y -= 10;
	});
});