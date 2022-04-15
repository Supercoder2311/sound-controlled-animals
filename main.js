//https://teachablemachine.withgoogle.com/models/xvlTmqnQO/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifer = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/EZVHEj4Dg/model.json", modelReady);
}
function modelReady(){
    classifer.classify(gotResults);
}

dog = 0
cat = 0
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r= Math.floor(Math.random() * 255)+ 1;
        random_number_g= Math.floor(Math.random() * 255)+ 1;
        random_number_b= Math.floor(Math.random() * 255)+ 1;

        document.getElementById("result_label").innerHTML= 'I can hear - '+ results[0].label;
        document.getElementById("result_accuracy").innerHTML= 'Accuracy - '+ (results[0].confidence * 100).toFixed(2)+' %';
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("result_accuracy").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
        img1=document.getElementById("a1");
        img2=document.getElementById("a2");

        if(results[0].label=="barking"){
            img1.src="dog.jpg";
        }
        else{
            img2.src="cat.jpg"
        }
    }