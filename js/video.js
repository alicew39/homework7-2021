var video = document.getElementById("player1");;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML= video.volume * 100 + "%"
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

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML= "Mute"
		console.log("Unmuted")
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML= "Unmute"
		console.log("Muted")
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value)
	var slider = this.value;
	video.volume = slider / 100;
	document.querySelector("#volume").innerHTML= video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Version");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Back to Original Version");
	video.classList.remove("oldSchool");
});