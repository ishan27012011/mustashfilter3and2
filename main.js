mustash_x=0;
mustash_y=0;
function setup() {
canvas=createCanvas(300,300)
canvas.center();  
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video, modelLoaded);
posenet.on('pose',gotPose);
}
function preload()
{
imagemustash=loadImage("https://i.postimg.cc/LsQcYWH0/m.png");
}
function modelLoaded(){
console.log("Working")
}
function gotPose(results) {
if (results.length>0) {
console.log(results);
console.log("Mustash(Nose)-x= "+results[0].pose.nose.x);
console.log("Mustash(Nose)-y= "+results[0].pose.nose.y);
mustash_x=results[0].pose.nose.x-12;
mustash_y=results[0].pose.nose.y+7;
}
}
function take_snapshot(){
save('myfilterimage.jpg');
}
function draw() {
image(video,0,0,300,300);
image(imagemustash,mustash_x,mustash_y,30,30);
}

