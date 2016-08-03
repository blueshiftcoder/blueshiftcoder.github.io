var width = window.screen.width - 293;
var height = window.screen.height - 251;

var App = {

    move : function(){
      var self = this;
      // CALCULATE X & Y POSITION
      var x = self.random(0, width);
      var y = self.random(300, height);
      $("#mole").css({ "left": " " + x + "px", "top": " " + y + "px" });
    },

    connect : function(){
      var self = this;

      $("#mole").on('click',function() {
        // WHAT HAPPENS WHEN WE CLICK ON THE MOLE ?
        App.move();
      });


    },

    random: function(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}



