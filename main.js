Webcam.set({
    height: 300,
    width: 300,
    image_format:"png",
    png_quality:90
});

Webcam.attach("#camera");

function capture(){
    Webcam.snap(
        function (pic){
            document.getElementById("snapshot").innerHTML=`<img src=${pic} id="picture">`
        }
    )
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FyRbnI9-3/model.json",ModelLoaded)
function ModelLoaded(){
    console.log("Hi Ujjwal Model Has Been Loaded Successfully")
}
function identify(){
    img=document.getElementById("picture");
    classifier.classify(img,getresults)
}

function getresults(error,results){
    if (error) {
        console.log(error);
    }
    else{
        console.log(results)
        object_result=results[0].label;
        accuracy=results[0].confidence.toFixed(3);
        document.getElementById("object_result").innerHTML=object_result;
        document.getElementById("accuracy").innerHTML=accuracy;
    }
}