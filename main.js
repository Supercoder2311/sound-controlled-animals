function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifer = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/EZVHEj4Dg/model.json", modelReady);
}
function modelReady(){
    classifer.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}