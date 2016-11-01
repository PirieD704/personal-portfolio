// allows the dec icons the swith up
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
	console.log(W);
	console.log(H);

	var mp = 3000 // max particles
	var particles = [];
	for(var i = 0;i < mp; i++){
		particles.push({
			x:Math.random()*W, //x-coordinate
			y:Math.random()*H, //y-coordinate
			r:Math.random()*2, //radius
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
		writeText();
	}

	function writeText(){

		var tx1 = canvas.width * .42;
		var th1 = canvas.height * .4;
		var tx2 = canvas.width * .45;
		var th2 = canvas.height * .5;
		// var tx1 = canvas.width * .1;
		// var th1 = canvas.height * .2;
		// var tx2 = canvas.width * .14;
		// var th2 = canvas.height * .25;
		// console.log(tx1)
		// console.log(th1)
		// console.log(tx2)
		// console.log(th2)
		if(W < 1500 && W > 1200){
			tx1 = tx1 * .92;
			tx2 = tx2 * .945;
		}else if( W < 900 && W > 600){
			tx1 = tx1 * .6;
			tx2 = tx2 * .68;
		}else if(W < 600){
			tx1 = tx1 * .4;
			tx2 = tx2 * .5;
		}

		context.font = '64px "Montserrat"';
		context.fillStyle = '#eee';
		// context.fillText("Hi I'm David", tx1, th1);
		context.font = '40px "Montserrat"';
		// context.fillText("I build things", tx2, th2);

	}

	var angle = 0;
	function update(){
		angle += 0.01;
		for(var j = 0; j < mp; j++){
			var p = particles[j];
			p.y += Math.cos(angle+p.d) + 1 + p.r/2;
			// this controls the lateral movement of the snow
			// p.x += Math.sin(angle) * 2;
			if(p.x > W+5 || p.x < -5 || p.y > H){
				if(j%6 > 0){
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

// Handles the portfolio section
$(document).ready(function() {
	
	var myNavBar = {

		flagAdd: true,

		elements: [],

		init: function (elements) {
			this.elements = elements;
		},

		add : function() {
			if(this.flagAdd) {
				for(var i=0; i < 2; i++) {
					$(this.elements[i]).addClass('fixed-theme')
					document.getElementById(this.elements[i]).className += " fixed-theme";
				}
				$('#navbar').removeClass('init-navbar')
				this.flagAdd = false;
			}
			// $('header').addClass('fixed-theme')
			// $('header-container').addClass('fixed-theme')
		},

		remove: function() {
			// for(var i=0; i < this.elements.length; i++) {
			// 	// document.getElementById(this.elements[i]).className =
			// 		$(this.elements[i]).removeClass('fixed-theme')
			// 			// document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/, '' );
			// }
			// this.flagAdd = true;
			$('#header').removeClass('fixed-theme')
			$('#header-container').removeClass('fixed-theme')
			$('#navbar').addClass('init-navbar')
			this.flagAdd = true;
		}

	};

	/**
	 * Init the object. Pass the object the array of elements
	 * that we want to change when the scroll goes down
	 */
	myNavBar.init(  [
		"header",
		"header-container",
		"brand"
	]);

	/**
	 * Function that manage the direction
	 * of the scroll
	 */
	function offSetManager(){

		var yOffset = 0;
		var currYOffSet = window.pageYOffset;

		if(yOffset < currYOffSet) {
			myNavBar.add();
		}
		else if(currYOffSet == yOffset){
			myNavBar.remove();
		}

	}

	/**
	 * bind to the document scroll detection
	 */
	window.onscroll = function(e) {
		offSetManager();
	}

	/**
	 * We have to do a first detectation of offset because the page
	 * could be load with scroll down set.
	 */
	offSetManager();

	$('.case').each(function(){
		$(this).height($('#projects').height() / 3);
		$(this).mouseover(function(event) {
			/* Act on the event */
			// Hide everything on the sibling files except the title and make it somewhat opaque
			$(this).siblings().find(".lang-logo, .proj-title, .proj-body").css('margin-top', '20px');
			$(this).siblings().find(".proj-title").css('opacity', '0.7');
			$(this).siblings().find(".case-img-cover, .lang-logo, .proj-body").css('opacity', '0');
			$('#bg-project-bp').css('opacity', '0');
			// Hide the title and desc of the current div while showing the project image
			$(this).find('.title-cover').css('background', 'rgba(0,0,0,0.15)');
			$(this).find(".case-img-cover").css('opacity', '1');
			// Add ken burns effect to the main cover image
			// $('.bg-project-img').addClass('kburns');
		});
		$(this).mouseleave(function(event) {
			/* Act on the event */
			// Return siblings title image and desc to full visibility
			$(this).siblings().find(".lang-logo, .proj-title, .proj-body").css('margin-top', '0px');
			$(this).siblings().find(".proj-title").css('opacity', '1');
			$(this).siblings().find(".proj-body").css('opacity', '1');
			$('#bg-project-bp').css('opacity', '1');
			// Return visibility to all the info the current div
			$(this).find('.title-cover').css('background', 'none');
			$(this).find(".case-img-cover").css('opacity', '0');
			// Remove ken burns class
			// $('.bg-project-img').removeClass('kburns');
			// $(this).siblings().find(".case-img-cover").css('opacity', '1');
		});
	});
	
	var $sepHt = 0
	$('.sep-hz').each(function(){
		$(this).css('top', $sepHt + 'px' );
		$sepHt += $('#projects').height() / 3;
	});
	$(window).resize(function() {
		var $sepHt = 0
		$('.sep-hz').each(function(){
			$(this).css('top', $sepHt + 'px' );
			$sepHt += $('#projects').height() / 3;
		});
		/* Act on the event */
		$('.case').each(function(){
			$(this).height($('#projects').height() / 3);
		});
	});
});