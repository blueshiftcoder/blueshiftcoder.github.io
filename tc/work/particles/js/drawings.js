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
  background.fill = 'rgb(255, 0, 0)';

  $( document ).on( "mousemove", particle);

  function particle(event) {
    var mouse = new Two.Vector(event.pageX, event.pageY)
    console.log(mouse.x, mouse.y)

    var p = two.makeCircle(mouse.x,mouse.y,10)
    p.noFill()
    p.stroke = 'rgb(0, 255, 0)'

    p.life = 0
    p.maxlife = 100

    particles.push(p)
  }

  two.bind('update', function(){
    for (var i = 0; i < particles.length; i++) {
    var p = particles[i]
    p.life++
    p.scale *= 1.05
    p.linewidth /= 1.05
    if(p.life > p.maxlife) two.remove(p)
    };
  });

});