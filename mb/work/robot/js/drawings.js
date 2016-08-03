$(function() {

	var elem = document.body;
	var params = {fullscreen: true, autostart: true};
	var two = new Two(params).appendTo(elem);

	var w = two.width;
	var h = two.height;

	var background = two.makeRectangle(w/2, h/2, w, h);
	background.noStroke();
	background.fill = 'rgb(0, 255, 230)';

	var face = two.makeRectangle(w/2, h/2, 200, 200);
	face.fill = 'rgb(200, 200, 200)';

	var lefteye = two.makeRoundedRectangle((w/2)-30,(h/2)-30, 30, 30);
	lefteye.fill = 'rgb(10, 200, 100)';

	var righteye = two.makeRoundedRectangle((w/2)+30,(h/2)-30, 30, 30);
	righteye.fill = 'rgb(49, 100, 100)';

	var antenna = two.makeRectangle(w/2, (h/2)-100-40, 10, 80);

	var bip = two.makeRectangle(w/2, (h/2)-100-85, 10, 10);
	bip.fill = 'rgb(255, 0, 0)';

	var triangle = two.makePolygon(w/2, (h/2)+100, 40, 3);
	triangle.fill = 'rgb(255, 0, 0)';
	triangle.rotation = Math.PI;

	var leftpupil = two.makeRoundedRectangle((w/2)-30,(h/2)-30, 10, 10);
	var rightpupil = two.makeRoundedRectangle((w/2)+30,(h/2)-30, 10, 10);

	var rightpupil0 = getPosition(rightpupil);
	var leftpupil0 = getPosition(leftpupil);

	function getPosition(shape){
		var s = shape.getBoundingClientRect();
		var p = new Two.Vector(s.left+s.width/2, s.top+s.height/2);
		return p;
	}

	$( document ).on( "mousemove", function( event ) {
		var mouse = new Two.Vector(event.pageX, event.pageY);

		var x1 = ((mouse.x * 20) / w) + rightpupil0.x - 10;
		var y1 = ((mouse.y * 20) / h) + rightpupil0.y - 10;
		rightpupil.translation.set(x1, y1);

		var x2 = ((mouse.x * 20) / w) + leftpupil0.x - 10;
		var y2 = ((mouse.y * 20) / h) + leftpupil0.y - 10;
		leftpupil.translation.set(x2, y2);
	});


	two.bind('update', function() {
   		bip.scale *= 1.05;
	  if(bip.scale >5) bip.scale = 1;
	})


});


































































































































































 