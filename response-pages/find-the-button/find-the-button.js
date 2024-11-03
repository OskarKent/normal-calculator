const button = document.getElementById('button');
const music = document.getElementById('music');
music.play()

const move = () => {
	button.style.top = Math.floor(Math.random() * 100) + "%"
	button.style.bottom = Math.floor(Math.random() * 100) + "%"
	button.style.left = Math.floor(Math.random() * 100) + "%"
	button.style.right = Math.floor(Math.random() * 100) + "%"
};

move()