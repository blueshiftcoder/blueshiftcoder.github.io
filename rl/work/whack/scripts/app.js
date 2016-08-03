var width = window.screen.width - 293;
var height = window.screen.height - 251;
var score = 0;

var App = {

    move : function(){
      var self = this;
      // CALCULATE X & Y POSITION

      var x = self.random(0,width)

      var y = self.random(503,height)
      $("#mole").css({ "left": " " + x + "px", "top": " " + y + "px" });
    },

    connect : function(){
      var self = this;

      $("#mole").on('click',function() {
      score = score + 10000000000000000000000000;  
      console.dir(score);
      self.move();
    });
    },

    random: function(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}



 
 