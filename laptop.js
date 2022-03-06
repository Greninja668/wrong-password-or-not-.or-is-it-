img=""
status1=""
objects=[]
function preload(){
    img=loadImage("reaaaallly.jpeg")
}
function setup(){
    canvas=createCanvas(640,420)
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="status:detecting objects"
}
function modelLoaded(){
    console.log("modelLoaded")
    status1=true
    objectDetector.detect(img,gotResult)
}
function draw(){
    image(img,0,0,640,420)
    if (status1!="") {
     for (let index = 0; index < objects.length; index++) {
     document.getElementById("status").innerHTML="status: objects detected"
     fill("#FF0000")
     percent=floor(objects[index].confidence*100)
    text(objects[index].label+" "+percent+"%",objects[index].x+15,objects[index].y+15)
    noFill()
    stroke("#FF0000")
    rect(objects[index].x,objects[index].y,objects[index].width,objects[index].height)    
     }
    }
}
function gotResult(error,results){
if (error) {
  console.log(error)  
}
console.log(results)
objects=results
}
function back(){
    window.location="index.html"
}