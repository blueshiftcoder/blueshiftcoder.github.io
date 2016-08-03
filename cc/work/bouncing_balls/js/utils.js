function randomColor(){
   var r = Math.floor(Math.random()*255);
   var g = Math.floor(Math.random()*255);
   var b = Math.floor(Math.random()*255);
   var a = Math.random();
   var c = 'rgba('+ r + ',' + g + ',' + b + ',' + a +')';
   return c;
}

function randomSpeed(){
   var max = 2;
   var min = -2;
   s = Math.random() * (max - min) + min;
   return s;
}

function dist(x1, y1, x2, y2){
  return Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) );
}

function range(x, a, b, min, max){
  return ( ( (max-min)*(x-a)/(b-a) ) + min);
}