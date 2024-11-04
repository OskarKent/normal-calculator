const enter = document.getElementById('enter');
const input = document.getElementById('input');

const responses = [
	() => {
		alert("rainbow party for 15 seconds!")
		input.style.animation = "input-change 1s infinite"
		let body = document.querySelector("body");
		body.style.animation = "input-change 1s infinite"
		setTimeout(function() {
			body.style.animation = "none";
			input.style.animation = "none";
		}, 15000);
	},
	() => {
		let trainhorn = document.getElementById('train-horn');
		alert('train horn!')
		trainhorn.volume = 1
		trainhorn.play()
	},
	() => {
		alert("20 seconds of bananas!")
		let bananas = document.getElementById('bananas');
		bananas.style.display = "block"
	},
	() => {
		let pig = document.getElementById('pig');
		alert("40 seconds of pig sounds!")
		pig.volume = 1
		pig.play()
	},
	() => {
		alert("elevator music and crazy elevator!")
		let elevatorimage = document.getElementById("elevator-image");
		let elevatormusic = document.getElementById("elevator-music");
		elevatorimage.style.display = "flex";
		elevatorimage.style.position = "absolute";
		elevatormusic.play()
		let randomMove = () => {	
			elevatorimage.style.top = Math.floor(Math.random() * 100)+"%";
			elevatorimage.style.right = Math.floor(Math.random() * 100)+"%";
			elevatorimage.style.bottom = Math.floor(Math.random() * 100)+"%";
			elevatorimage.style.left = Math.floor(Math.random() * 100)+"%";
		}
		setInterval(randomMove, 500);
	},
	() => {
		alert("bouncy ball!")
		let canvas = document.getElementById("canvas");
		let ctx = canvas.getContext('2d');
		canvas.style.display = "block"
		canvas.style.border = "5px double aqua"
		ctx.fillStyle = "aqua"
		let x = 40;
		let y = 40;
		let speedy = 4;
		let speedx = 2;
		let bounce = () => {
			ctx.clearRect(0,0,canvas.width,canvas.height)
			let ranx = Math.floor(Math.random() * 20)
			let rany = Math.floor(Math.random() * 20)
			x+=speedx;
			y+=speedy;
			ctx.fillRect(x, y, 10, 10)
			if (x>=340) {
				speedx=-ranx;
			} else if (y>=340) {
				speedy=-rany;
			} else if (y<=10) {
				speedy=rany;
			} else if (x<= 10) {
				speedx=ranx;
			}
		}
		setInterval(bounce, 50)
	},
	() => {
		alert("frogs!")
		let body = document.querySelector('body');
		body.style.backgroundImage = "url('response-resources/frog.jpg')"
		body.style.backgroundSize = "20%"
		body.style.color = "aqua"
	},
	() => {
		alert("blurry!")
		let body = document.querySelector("body")
		body.style.filter = "blur(5px)"
	},
	() => {
		let currentURL = window.location.href;
		alert("minigame!")
		let newtab = window.open(`${currentURL}/response-pages/find-the-button/find-the-button.html` , `_blank`)
		setTimeout(function() {
			if (newtab && !newtab.closed && newtab.location.href === `${currentURL}/response-pages/find-the-button/find-the-button.html`) {				
			newtab.close()
			} else if (newtab && !newtab.closed && newtab.location.href === `${currentURL}/response-pages/find-the-button/found.html`) {
				alert("you found the button!")
				setTimeout(function() {
					newtab.close()
				}, 10000);
			} else {
				alert("There was an error with the minigame.")
			}
		}, 20000);
	}
]

const answer = () => {
	if (input.value !== "") {
		let random = Math.floor(Math.random() * responses.length)
		responses[random]()
		input.value = "";
	} else {
		alert("enter a real math question")
	}
}

enter.addEventListener("click", answer)