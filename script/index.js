let canvas = document.getElementById('iammusic')
let ctx = canvas.getContext('2d');
let textBox = document.getElementById("text");



const generateText = () => {
    let val = textBox.value.toUpperCase()
    ctx.reset()
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // background
    ctx.fillStyle = "white"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // text #1
    ctx.font = "50px 'Times New Roman', Times, serif";
    ctx.setTransform(0.85, 0, 0, 2, 100, 80);
    ctx.fillStyle = "black"; 
    ctx.textAlign = "center"
    ctx.fillText(val, 50 / 0.85, 50);

    // text #2 
    ctx.font = "50px Impact, sans-serif";
    ctx.setTransform(1.09, 0, 0, 0.8, 88.5, 125);
    ctx.fillStyle = "black"; 
    ctx.textAlign = "center"
    ctx.fillText(val, 50 / 0.85, 50);
}

generateText()