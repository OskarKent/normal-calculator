const enter = document.getElementById('enter');
const input = document.getElementById('input');

const responses = [
	() => {
		alert("rainbow party!")
		let body = document.querySelector("body");
		body.style.animation = "input-change 1s infinite"
		setTimeout(function() {
			body.style.animation = "none";
		}, 5000);
	},
	() => {
		let trainhorn = document.getElementById('train-horn');
		alert('train horn!')
		trainhorn.volume = 1
		trainhorn.play()
	},
	() => {
		alert("bananas!")
		let bananas = document.getElementById('bananas');
		bananas.style.display = "block"
		bananas.play()
		setTimeout(function() {
			bananas.style.display = "none"
		}, 30000);
	},
	() => {
		let pig = document.getElementById('pig');
		alert("pig sounds!")
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
		setTimeout(function() {
			elevatorimage.style.display = "none";
		}, 50000);
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
		setInterval(bounce, 20)
		setTimeout(function() {
			canvas.style.display = "none"
			ctx.clearRect(0,0,canvas.width,canvas.height)
		}, 30000);
	},
	() => {
		alert("frogs!")
		let body = document.querySelector('body');
		body.style.background = "none";
		body.style.backgroundImage = "url('response-resources/frog.jpg')"
		body.style.backgroundSize = "20%"
		setTimeout(function() {
			body.style.background = "linear-gradient(-45deg, red,orange,yellow,green,blue,indigo,violet)"
		}, 10000);
	},
	() => {
		alert("blurry!")
		let body = document.querySelector("body")
		body.style.filter = "blur(5px)"
		setTimeout(function() {
			body.style.filter = "blur(0px)"
		}, 5000);
	},
	() => {
		let currentURL = window.location.href;
		alert("minigame! You will need to find the invisible button and click on it before the tab auto-closes. You will have 20 seconds.")
		let newtab = window.open(`${currentURL}/response-pages/find-the-button/find-the-button.html` , `_blank`)
		setTimeout(function() {
			if (newtab && !newtab.closed && newtab.location.href === `${currentURL}/response-pages/find-the-button/find-the-button.html`) {				
			newtab.close()
			} else if (newtab && !newtab.closed && newtab.location.href === `${currentURL}/response-pages/find-the-button/found.html`) {
				alert("you found the button!")
				setTimeout(function() {
					newtab.close()
				}, 5000);
			} else {
				alert("There was an error with the minigame. Try checking your redirect and pop-up settings.")
			}
		}, 20000);
	},
	() => {
		alert("grow!")
		let h1 = document.querySelector("h1");
		let num = 100
		let maybe = false;
		setInterval(function() {
			if (parseInt(h1.style.fontSize) >=	700) {
				h1.style.fontSize = "250%"
				maybe = true;
			} else if (maybe !== true) {
				num+=1;
				h1.style.fontSize = `${num}` + "%"
			}
		}, 10);
	}
]

const answer = () => {
	if (input.value.length > 0) {
		let random = Math.floor(Math.random() * responses.length)
		responses[random]()
		input.value = "";
	} else {
		alert("Enter some text.")
	}
}

const answerClick = (event) => {
	if (event.code === "Enter" && input.value.length !== 0) {
		let random = Math.floor(Math.random() * responses.length)
		responses[random]()
		input.value = "";
	} else if (event.key === "Enter" && input.value.length === 0) {
		alert("Enter some text.")
	}
}

enter.addEventListener("click", answer)
input.addEventListener("keydown", answerClick)



