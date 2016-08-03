$(function() {

	var elem = document.body;
	var params = {fullscreen: true, autostart: true};
	var two = new Two(params).appendTo(elem);

	var w = two.width;
	var h = two.height;

	var balls = [];
	var ballCount = 200;

	var background = two.makeRectangle(w/2, h/2, w, h);
	background.noStroke();
	background.fill = 'rgb(0, 255, 230)';

	setup();

	function setup(){
		var i = ballCount;
	    while(i--) {
	       var x = Math.random() * w
	       var y = Math.random() * h
	       var r = Math.random() * 40
	       var b = two.makeCircle(x, y, r)
           b.fill = randomColor()
           b.noStroke()
           b.x = x
           b.y = y
           b.r = r
           b.vx = randomSpeed()
           b.vy = randomSpeed()
           balls.push(b)   
	    }
	}

	function move() {
	    var i = ballCount;
	    while(i--) { 
		    var b = balls[i];
		    
		    
		    // Bounce off edges.
		    if(b.x + b.radius > w) {
		      
		    }
		    if(b.x - b.radius < 0) {
		      
		    }
		    if(b.y + b.radius > h) {
		      
		    }
		    if(b.y - b.radius < 0) {
		      
		    }
	    	b.translation.set(b.x, b.y);
	    }
  	}

	two.bind('update', function(){
	  move() 	
	});
});