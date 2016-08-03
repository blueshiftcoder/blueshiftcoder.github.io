$(function() {
	var elem = document.body;
	var params = {fullscreen: true, autostart: true};
	var two = new Two(params).appendTo(elem);

 	//day colors
 	var dayColors = [
        'rgb(255, 255, 255)',
        'rgb(255, 255, 255)'
    ];

    // day gradient
    var dayGradient = two.makeLinearGradient(
        two.width / 2, - two.height / 2,
        two.width / 2, two.height / 2,
        new Two.Stop(0, dayColors[0]),
        new Two.Stop(1, dayColors[1])
    );

    // day sky
    var day = two.makeRectangle(two.width / 2, two.height / 2, two.width, two.height);
    day.noStroke();
	day.fill = dayGradient;

    //night colors
    var nightColors = [
        'rgb(0, 0, 0)',
        'rgb(0, 0, 0)'
    ];

    // night gradient
    var nightGradient = two.makeLinearGradient(
        two.width / 2, - two.height / 2,
        two.width / 2, two.height / 2,
        new Two.Stop(0, nightColors[0]),
        new Two.Stop(1, nightColors[1])
    );

    // night sky
    var night = two.makeRectangle(two.width / 2, two.height / 2, two.width, two.height);
    night.noStroke();
	night.fill = nightGradient;

	//sun
	var rect = two.makeRectangle(0, two.height/2, 200, 200);
	var rect2 = two.makeRectangle(0, two.height/2, 200, 200);
	var circle = two.makeCircle(0, two.height/2, 100);
	rect2.rotation = Math.PI/4;

	rect.fill = 'rgb(255, 150, 0)';
	rect.opacity = 0.7;
	rect.noStroke();

	rect2.fill = 'rgb(255, 150, 0)';
	rect2.opacity = 0.7;
	rect2.noStroke();

	circle.fill = 'rgb(255, 180, 0)';
	circle.opacity = 1;
	circle.noStroke();

	circle.scale = rect.scale = rect2.scale *= 0.5;
	
	var theSun = two.makeGroup(rect, rect2, circle);
	theSun.translation.set(two.width/2, two.height);
	theSun.scale *= 1.5;

	// moon
	var circle = two.makeCircle(0, -two.height/2, 100);
	var circle2 = two.makeCircle(0, -two.height/2, 100);

	circle.fill = 'rgb(0, 8, 255)';
	circle.opacity = 1;
	circle.noStroke();

	circle2.fill = 'rgb(255, 255, 255)';
	circle2.opacity = 0.3;
	circle2.noStroke();

	circle.scale = circle2.scale *= 0.5;
	circle2.scale *= 1.2;

	var theMoon = two.makeGroup(circle, circle2);
	theMoon.translation.set(two.width/2, two.height);
	theMoon.scale *= 1.5;

	var hours = 12;

	two.bind('update', function(){
		//time is flowing, we increment the hours
		hours+= 0.01;
		hours = hours % 24

		//the position of the sun and the moon depend on the time
		var angle = hours*Math.PI/12;
		theSun.rotation = angle;
		theMoon.rotation = angle;
		
		//rect.rotation += 0.01;
		//rect2.rotation += 0.01;

		//the colors of the sky depends on the time
		var opacityNight;
		if(hours<=12) opacityNight = (12-hours)/12;
		else opacityNight = hours/24;
		night.opacity=opacityNight;

	});
});