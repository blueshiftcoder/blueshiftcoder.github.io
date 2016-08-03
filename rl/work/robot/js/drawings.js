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
	background.fill = 'rgb(0,155,230)';
 
    var face = two.makeRectangle((w/2), (h/2), 200, 200);
    face.fill = 'rgb(200,3,0)';

    var dot2 = two.makeRectangle((w/2)-30,(h/3)-30, 30, 30);
    dot2.fill = 'rgb(0,52,45)';

    var triangle = two.makePolygon((w/2), (h/2)+98,50,3);
    triangle.fill = 'rgb(27,3,58)';

    var body = two.makePolygon((w/2), (h/2)+89,27,4);
    triangle.fill = 'rgb(200,476,234)';

	$( document ).on( "mousemove", function( event ) {
	});

	two.bind('update', function(){
		dot2.scale *=1.01;
		if(dot2.scale>2) dot2.scale = 1;
	});
});