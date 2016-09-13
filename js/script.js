$(function(){
  $('#container').mixItUp();
});

window.onload = function(){

var canvas = document.getElementById("the-canvas");
var context = canvas.getContext("2d");

var W = window.innerWidth;
var H = window.innerHeight;
canvas.width = W;
canvas.height = H;

var mp = 25 // max particles
var particles = [];
for(var i = 0;i < mp; i++){
	particles.push({
		x:Math.random()*W, //x-coordinate
		y:Math.random()*H, //y-coordinate
		r:Math.random()*4+1, //radius
		d:Math.random()*mp //density
	})
}

//Draws the snowflakes
function draw(){
	context.clearRect(0,0,W,H);
	context.fillStyle = 'rgba(255, 255, 255, 0.8)';
	context.beginPath();
	for(var i = 0; i < mp; i++){
		var p = particles[i];
		context.moveTo(p.x, p.y);
		context.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
	}
	context.fill();
	update();
	context.font = '64px Helvetica';
	context.fillStyle = '#eee';
	context.fillText("Hi I'm David", 540, 300);
	context.font = '40px Helvetica';
	context.fillText("I build things", 590, 500);
}

var angle = 0;
function update(){
	angle += 0.01;
	for(var j = 0; j < mp; j++){
		var p = particles[j];
		p.y += Math.cos(angle+p.d) + 1 + p.r/2;
		p.x += Math.sin(angle) * 2;
		if(p.x > W+5 || p.x < -5 || p.y > H){
			if(j%3 > 0){
				particles[j] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
			}else if(Math.sin(angle) > 0){
				particles[j] = {x: -5, i: Math.random()*H, r: p.r, d: p.d};
			}else{
				particles[j] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
			}
		}
	}
}
setInterval(draw, 33);
}