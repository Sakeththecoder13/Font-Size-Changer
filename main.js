leftWristx = 0
rightWristx = 0
difference = 0

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(500,500)
    canvas.position(530, 200)

     
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Model is loaded!');
}


function gotPoses(results){
    if(results.length > 0){
        
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);

        document.getElementById("span1").innerHTML = difference;
    }
}

function draw(){
    background('#AFE1AF');
    textSize(difference);
    text('Saketh', 50, 400);
    

}


    
