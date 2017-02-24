var materia = document.getElementById('btn');
var meteore = document.getElementById('Meteor');


materia.addEventListener("click",function(){
	meteore.style.animation = "apparait 5s linear";
	materia.style.display = "none";
	var audio = document.getElementById('audio');
	audio.play();
});

meteore.addEventListener("animationend", AnimationListener, false);

function AnimationListener(){
		meteore.style.opacity = 1;
}