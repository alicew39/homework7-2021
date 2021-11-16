var video = document.getElementById("player1");;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML= video.volume*100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.05;
	console.log(video.playbackRate)
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate /= 1.05;
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original timestamp " + video.currentTime)
	video.currentTime += 15;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
		console.log("Updated timestamp " + video.currentTime)
	}
	console.log("Updated timestamp " + video.currentTime)
});