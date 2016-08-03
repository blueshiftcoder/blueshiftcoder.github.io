$(function() {
  var elem = document.body;
  var params = {fullscreen: true, autostart: true};
  var two = new Two(params).appendTo(elem);

  var w = two.width;
  var h = two.height;

  var space, spaceship;
  var enemies, lasers;

  init();

  function init() {
    space = two.makeRectangle(w/2,h/2, w, h)
    space.fill = 'rgb(0,0,1)'
    spaceship = two.makeRectangle(w/2, h - 50, 40,50)
    spaceship.fill = 'rgb(1,1,11)'
    enemies = []
    lasers =[]
    $(document).on('mousemove', track)
    $(document).on('mousedown', shoot)

    spawnEnemies();
    two.bind('update', update);
  }

  function spawnEnemies() {
    setInterval(newEnemy, 1000);
  }
  
  function newEnemy() {

  }
  
  function track(e) {
    spaceship.translation.set(e.pageX - 25, h - 50)
  }
  
  function shoot(e) {
    var laser = two.makeRectangle(e.pageX - 25, h -75, 8, 8)
    laser.x = e.pageX - 25
    laser.y = h - 75
    laser.fill = 'rgb(10,10,10)'
    laser.noStroke()
    lasers.push(laser)
  } 

  function randomPosX() {
    return Math.floor((Math.random()*w)+1);
  }

  function update(){
    for(var i in enemies){

    }

    for(var j in lasers){
      var l = lasers[j]
      l.y -=8
      l.translation.set(l.x, l.y)
      if(l.y < 0){
        lasers.splice(j,1)
        two.remove
      }
    }

    for(var i in enemies){
      for(var j in lasers){

        if( (l.x+5>e.x-20) && (l.x-5<e.x+20) && (l.y-5<e.y+20) ){
          
        }
      }
    }
  }

});