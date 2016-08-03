$(function() {

	var elem = document.body;
	var params = {fullscreen: true, autostart: true};
	var two = new Two(params).appendTo(elem);

	var w = two.width;
	var h = two.height;

	var background = two.makeRectangle(w/2, h/2, w, h);
	background.noStroke();
	background.fill = 'rgb(120, 0, 40)';

	var circle = two.makeCircle(w/2, h/2, 100);
  circle.noStroke();
  circle.fill = 'rgb(110, 0, 60)';

  var rectangle = two.makeRectangle(w/2, h/2, 100, 100);
  rectangle.noStroke();
  rectangle.fill = 'rgb(100, 0, 60)';

  var line1 = two.makeRectangle((w/2)+400, -200, 20, 400)
  line1.noStroke();
  line1.fill = 'rgb(120, 0, 60)';

  var line2 = two.makeRectangle((w/2)-400, h+200, 20, 400);
  line2.noStroke();
  line2.fill = 'rgb(120, 0, 60)';

	two.bind('update', function() {
    circle.scale *= 1.03
    if(circle.scale >=2.5) {
      circle.scale = 1;
    }
    rectangle.rotation += 0.10;

    if(line1.translation.y > h+200) {
      line1.translation.y = -200;
    }

    line1.translation.y += 10;

    if(line2.translation.y < -200) {
      line2.translation.y = h+200;
    }

    line2.translation.y -= 10;
  });
});
