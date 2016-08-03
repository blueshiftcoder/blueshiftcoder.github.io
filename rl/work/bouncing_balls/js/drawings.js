$(function() {

	var elem = document.body;
	var params = {fullscreen: true, autostart: true};
	var two = new Two(params).appendTo(elem);

	var mouse = new Two.Vector(0,0)

	var w = two.width;
	var h = two.height;

	var balls = [];
	var ballCount = 200;

	var background = two.makeRectangle(w/2, h/2, w, h);
	background.noStroke();
	background.fill = 'rgb(40 , 350, 250)';
    


	setup();

	function setup(){;

		var i = ballCount	    
		while(i--) {
	    var x = Math.random() * w
	    var y = Math.random() * h
	    var r = Math.random() * 40
	    var b = two.makeCircle (x,y,r)
        b.fill = randomColor()
        b.noStroke();
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
		    b.x += b.vx
		    b.y += b.vy

		    var d = dist(b.x, b.y, mouse.x, mouse.y)
		    b.r = range(d, 0, w, 0, 50)
            b.scale = b.r / 10

		    // Bounce off edges.
		    if(b.x + b.r > w) {
		      b.vx *= -1
		      b.x = w - b.r

		    }
		    if(b.x - b.r < 0) {
		    	b.vx *= -1
		      b.x = b.r
		      
		    }
		    if(b.y + b.r > h) {
		    	b.vy *= -1
		      b.y = h - b.r

		      
		    }
		    if(b.y - b.r < 0) {
		    	b.vy *= -1
		      b.y = b.r
		      
		    }
	    	b.translation.set(b.x, b.y);
	    }
  	}


    $(elem).on('mousemove' , animationscale)

    function animationscale(event) {
      mouse.x = event.pageX
      mouse.y = event.pageY

    }

	two.bind('update', function(){
    move()
	});
});