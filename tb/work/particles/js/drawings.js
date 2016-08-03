$(function() {
  var elem = document.body;
  var params = {fullscreen: true, autostart: true};
  var two = new Two(params).appendTo(elem);

  var w = two.width;
  var h = two.height;
  var x1 = w / 2;
  var y1 = h / 2;

  var particles = [];

  var background = two.makeRectangle(x1, y1, w, h);
  background.fill = 'rgb(32, 15, 123)';

  $( document ).on( "mousemove", particle);

  function particle(event) {
    var mouse = new Two.Vector(event.pageX, event.pageY)
    console.log(mouse.x, mouse.y)

    var p = two.makeCircle(mouse.x, mouse.y, 10)
    p.noFill();
    p.stroke = 'rgb(224, 236, 89)'

    p.life = 0
    p.maxLife = 100

    particles.push(p)
  }

  two.bind('update', function(){
     for(var i = 0; i < particles.length; i++) {
     var p = particles[i]
     p.life++
     if(p.life > p.maxLife) two.remove(p)
    }
  });

});
