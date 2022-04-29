function setup(){
    canvas=createCanvas(600,480);
    canvas.position(250,150);
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
objectDetector=ml5.objectDetector("CoCoSSD" , modelLoaded);
document.getElementById("status").innerHTML="status : detecting objects";
}