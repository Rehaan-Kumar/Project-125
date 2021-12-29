noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
input = "";

function go() {
    input = document.getElementById("value").value;
    console.log(input)    
}

function setup() {
    canvas = createCanvas(600 , 450);
    canvas.position(900,180)
    Video = createCapture(VIDEO);
    Video.position(50,180)
    Video.size(600 , 450)

    posenet = ml5.poseNet(Video , modelLoaded)
    posenet.on('pose' , gotPoses)
}

function modelLoaded() {
    console.log("Posenet is Initiallized !!!!")
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log(noseX , noseY)
        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        difference = Math.floor(leftWristX - rightWristX)
        console.log(difference)
    }
}

function draw() {
    background("#B4B1B1")
    fill("red")
    text(input , noseX , noseY)
    textSize(difference)
}