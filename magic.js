$('.menu').easyDrag({
  cursor: 'grab'
});
$('.projets').hover(function() {
  $("#holder").fadeOut(1000);
}, function() {
  $("#holder").fadeIn(600);
  });
//P5JS
var a =['▓','▒','░',' '];let t = 0;let c=40;let h=c*c;
function setup(){var cnv=createCanvas(window.innerWidth -10,window.innerHeight -20);cnv.parent("holder");frameRate(120);}
function draw(){background(0, 1, 10);for(i=0;i<c;i++){for(j=0;j<c;j++){
let nanana = int(sin(sqrt(t-i)*j+sin(i+sqrt(t-j)))*-4);let finale;fill(230, 230, 230);textSize(40);if(nanana<0){finale=-nanana;}else{finale=nanana;}if(finale>3){finale=3;}text(a[finale],i*c,j*c);}}t+=1;}
